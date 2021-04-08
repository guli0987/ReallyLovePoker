var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ReconnectUI = (function (_super) {
    __extends(ReconnectUI, _super);
    function ReconnectUI() {
        var _this = _super.call(this) || this;
        _this._reconnctTimes = 1;
        _this._totalTimes = 5;
        _this.skinName = "ReconnectUISkin";
        _this.addMsResponseListen();
        return _this;
    }
    ReconnectUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if ("btn_return" == partName) {
            this.btn_return = instance;
            this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonExitRoom, this);
        }
    };
    ReconnectUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lab_note.text = "重连中..." + this._reconnctTimes + "/" + this._totalTimes + "(尝试执行重连[测试])";
        this._timer = new egret.Timer(1000, 5);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this._timer.start();
    };
    ReconnectUI.prototype.mbuttonExitRoom = function (event) {
        GameSceneView._gameScene.login();
    };
    /**
     * 注册 matchvs 组件监听事件
     */
    ReconnectUI.prototype.addMsResponseListen = function () {
        //重新连接
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_RECONNECT_RSP, this.reconnectResponse, this);
        //连接出错
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.errorResponse, this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        //获取房间详情
        // mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, this.getRoomDetailResponse,this);
        //发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_RSP, this.sendEventResponse, this);
    };
    ReconnectUI.prototype.release = function () {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.errorResponse, this);
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        //发送消息
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_RSP, this.sendEventResponse, this);
        //获取房间详情
        // mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, this.getRoomDetailResponse,this);
        //重新连接
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_RECONNECT_RSP, this.reconnectResponse, this);
    };
    ReconnectUI.prototype.timerFunc = function (event) {
        this.lab_note.text = "重连中..." + this._reconnctTimes + "/" + this._totalTimes;
        console.log(this.lab_note.text);
        var res = mvs.MsEngine.getInstance.reconnect();
        this._reconnctTimes++;
        if (this._reconnctTimes > this._totalTimes) {
            this._timer.stop();
            if (res === 0) {
                mvs.MsEngine.getInstance.leaveRoom("");
                GameSceneView._gameScene.lobby();
            }
            else {
                mvs.MsEngine.getInstance.leaveRoom("");
                GameSceneView._gameScene.login();
            }
            this.release();
        }
    };
    ReconnectUI.prototype.reconnectResponse = function (event) {
        console.log("重新连接回调成功");
        var data = event.data;
        var roomUserInfoList = data.roomUserInfoList;
        var roomInfo = data.roomInfo;
        this._timer.stop();
        if (!data.status || data.status !== 200) {
            console.log("重连失败" + this._reconnctTimes);
            this.lab_note.text = "重连失败......" + this._reconnctTimes + "/" + this._totalTimes;
            //mvs.MsEngine.getInstance.leaveRoom("");
            this.release();
            GameSceneView._gameScene.lobby();
        }
        else {
            console.log("重连成功status:" + data.status + " 重连次数：" + this._reconnctTimes);
            //房主判断
            GameData.playerUserIds = [];
            GameData.playerUserIds.push(GameData.gameUser);
            roomUserInfoList.forEach(function (value) {
                console.log("用户ID：" + value.userID);
                if (GameData.gameUser.id !== value.userID) {
                    //先默认为空的
                    var userPro = { name: "", avatar: "" };
                    if (value.userProfile !== "") {
                        userPro = JSON.parse(value.userProfile);
                    }
                    var gUser = new GameUser;
                    gUser.avatar = userPro.avatar;
                    gUser.name = userPro.name;
                    gUser.id = value.userID;
                    gUser.isOwner = value.userID == roomInfo.ownerId;
                    GameData.playerUserIds.push(gUser);
                }
            });
            GameData.roomPropertyValue = roomInfo.roomProperty;
            GameData.roomID = roomInfo.roomID;
            GameData.isRoomOwner = false;
            if (GameData.playerUserIds.length === GameData.maxPlayerNum && roomInfo.state === 2) {
                this.sendReadyEvent();
            }
            else {
                //还没有开始游戏
                console.log("还没有开始游戏或者游戏结束, 退出到大厅");
                mvs.MsEngine.getInstance.leaveRoom("leaveRoom");
                this.release();
                GameSceneView._gameScene.lobby();
            }
        }
    };
    ReconnectUI.prototype.sendEventResponse = function (ev) {
        var rsp = ev.data;
        if (rsp.status === 200) {
            var event = GameData.events[rsp.sequence];
            if (event && event.action === GameData.reconnectReadyEvent) {
                delete GameData.events[rsp.sequence];
                this.release();
                GameSceneView._gameScene.play();
            }
        }
        else {
            this.release();
            mvs.MsEngine.getInstance.leaveRoom("leaveRoom");
            GameSceneView._gameScene.lobby();
        }
    };
    ReconnectUI.prototype.errorResponse = function (event) {
        this.lab_note.text = "重连失败！";
        this._timer.stop();
    };
    ReconnectUI.prototype.mbuttonCancleBtn = function (event) {
        this._timer.stop();
        this.release();
        mvs.MsEngine.getInstance.leaveRoom("");
    };
    ReconnectUI.prototype.leaveRoomResponse = function (rsp) {
        console.log("取消重新连接，离开房间:" + rsp.status);
        // this.release();
        // GameSceneView._gameScene.lobby();
    };
    ReconnectUI.prototype.sendReadyEvent = function () {
        var eventTemp = {
            action: GameData.reconnectReadyEvent,
            userID: GameData.gameUser.id
        };
        var result = mvs.MsEngine.getInstance.sendEvent(JSON.stringify(eventTemp));
        if (!result || result.result !== 0) {
            console.log('重连发送信息失败');
            mvs.MsEngine.getInstance.leaveRoom("leaveRoom");
            GameSceneView._gameScene.lobby();
            this.release();
            return;
        }
        GameData.events[result.sequence] = eventTemp;
        console.log('重连发送信息成功');
    };
    return ReconnectUI;
}(eui.Component));
__reflect(ReconnectUI.prototype, "ReconnectUI", ["eui.UIComponent", "egret.DisplayObject"]);
