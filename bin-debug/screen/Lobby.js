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
var Lobby = (function (_super) {
    __extends(Lobby, _super);
    function Lobby() {
        var _this = _super.call(this) || this;
        _this.skinName = "LobbySkin";
        GameData.syncFrame = false;
        return _this;
    }
    Lobby.prototype.partAdded = function (partName, instance) {
        this.getChilds(partName, instance);
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Lobby.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Lobby.prototype.moveToChange = function (item) {
        item.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            console.log("上来");
            item.scaleX = 0.8;
            item.scaleY = 0.8;
        }, this);
        item.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (e) {
            console.log("离开");
            item.scaleX = 1;
            item.scaleY = 1;
        }, this);
    };
    Lobby.prototype.getChilds = function (partName, instance) {
        switch (partName) {
            case "lab_joinRandRoom":
                this.moveToChange(instance);
                this.lab_joinRandRoom = instance;
                this.lab_joinRandRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickRandomMatch, this);
                break;
            case "lab_createRoom":
                this.moveToChange(instance);
                this.lab_joinRandRoom = instance;
                this.lab_joinRandRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickCreateRoom, this);
                break;
            case "lab_joinWithPro":
                this.moveToChange(instance);
                this.lab_joinRandRoom = instance;
                this.lab_joinRandRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickJoinWithProperty, this);
                break;
            case "lab_roomList":
                this.moveToChange(instance);
                this.lab_joinRandRoom = instance;
                this.lab_joinRandRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickJoinRoomList, this);
                break;
            case "lab_frameSync":
                this.moveToChange(instance);
                this.lab_joinRandRoom = instance;
                this.lab_joinRandRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickFrameSync, this);
                break;
            case "lab_joinRoom":
                this.moveToChange(instance);
                this.lab_joinRandRoom = instance;
                this.lab_joinRandRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickJoinRoomSpecial, this);
                break;
            case "btn_return":
                this.moveToChange(instance);
                this.btn_return = instance;
                this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClicklogOutGame, this);
                break;
            case "img_header":
                this.img_header = instance;
                this.img_header.source = GameData.gameUser.avatar;
                break;
            case "lab_userID":
                this.lab_userID = instance;
                this.lab_userID.text = "用户：" + GameData.gameUser.id + "\n" + GameData.gameUser.name;
                break;
            default:
                break;
        }
    };
    /**
     * 随机加入房间按钮回调
     */
    Lobby.prototype.onButtonClickRandomMatch = function (e) {
        GameData.matchType = GameData.randomMatch;
        GameData.syncFrame = false;
        GameSceneView._gameScene.match(MatchUI.JOINFLAG.RANDROOM);
    };
    /**
     * 获取房间列表
     */
    Lobby.prototype.onButtonClickJoinRoomList = function (e) {
        GameData.matchType = GameData.specialMatch;
        GameData.syncFrame = false;
        GameSceneView._gameScene.showRoomList();
    };
    /**
     * 自定义属性匹配
     */
    Lobby.prototype.onButtonClickJoinWithProperty = function (e) {
        GameSceneView._gameScene.tagsMatchView();
    };
    /**
     * 创建房间
     */
    Lobby.prototype.onButtonClickCreateRoom = function (e) {
        GameSceneView._gameScene.createRoom();
    };
    /**
     * 输入房间号加入房间
     */
    Lobby.prototype.onButtonClickJoinRoomSpecial = function (e) {
        GameSceneView._gameScene.joinRoomSpecial();
    };
    /**
     * 帧同步
     */
    Lobby.prototype.onButtonClickFrameSync = function (e) {
        console.log("onButtonClickFrameSync");
        GameData.matchType = GameData.randomMatch;
        GameData.syncFrame = true;
        GameSceneView._gameScene.match(MatchUI.JOINFLAG.WITHPROPERTY);
    };
    Lobby.prototype.onButtonClicklogOutGame = function (e) {
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LOGOUT_RSP, this.logoutResponse, this);
        mvs.MsEngine.getInstance.logOut();
    };
    //登出账号回调
    Lobby.prototype.logoutResponse = function (ev) {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LOGOUT_RSP, this.logoutResponse, this);
        var status = ev.data.status;
        if (status !== 200) {
            console.log("退出登录失败!");
            return;
        }
        GameSceneView._gameScene.login();
    };
    return Lobby;
}(eui.Component));
__reflect(Lobby.prototype, "Lobby", ["eui.UIComponent", "egret.DisplayObject"]);
