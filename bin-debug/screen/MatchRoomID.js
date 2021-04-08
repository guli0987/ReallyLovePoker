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
var MatchRoomID = (function (_super) {
    __extends(MatchRoomID, _super);
    function MatchRoomID() {
        var _this = _super.call(this) || this;
        _this.skinName = "MatchRoomIDSkin";
        return _this;
    }
    MatchRoomID.prototype.getChild = function (partName, instance) {
        var _this = this;
        if ("lab_userID" == partName) {
            this.lab_userID = instance;
            this.lab_userID.text = "用户：" + GameData.gameUser.id + "\n" + GameData.gameUser.name;
        }
        else if ("img_header" == partName) {
            this.img_header = instance;
            this.img_header.source = GameData.gameUser.avatar;
        }
        else if ("lab_note" == partName) {
            this.lab_note = instance;
            this.lab_note.visible = false;
        }
        else if ("btn_return" == partName) {
            this.btn_return = instance;
            this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonExitRoom, this);
        }
        else if ("btn_start" == partName) {
            this.btn_start = instance;
            this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonEnterRoom, this);
        }
        else if ("rect_roomID" == partName) {
            this.rect_roomID = instance;
        }
        else if ("edt_roomID" == partName) {
            this.edt_roomID = instance;
            this.edt_roomID.addEventListener(eui.UIEvent.CHANGE, function (e) {
                _this.roomIDIsOK();
            }, this);
        }
    };
    MatchRoomID.prototype.roomIDIsOK = function () {
        var str = this.edt_roomID.text;
        if (str == "") {
            this.showNote("", false);
            return;
        }
        if (!/^[0-9]+$/.test(str)) {
            this.showNote("请求输入有效的房间号", true);
        }
        else {
            this.showNote("", false);
        }
    };
    MatchRoomID.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        this.getChild(partName, instance);
    };
    MatchRoomID.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    MatchRoomID.prototype.showNote = function (cont, flag) {
        this.lab_note.visible = flag;
        this.lab_note.text = cont;
        if (flag) {
            this.rect_roomID.strokeWeight = 2;
            this.rect_roomID.strokeColor = 0xF85858;
            this.rect_roomID.fillColor = 0xFFE5E5;
        }
        else {
            this.rect_roomID.strokeWeight = 0;
            this.rect_roomID.strokeColor = 0xFFFFFF;
            this.rect_roomID.fillColor = 0xFFFFFF;
        }
    };
    MatchRoomID.prototype.mbuttonExitRoom = function (event) {
        //退出房间成功进入游戏大厅
        GameSceneView._gameScene.lobby();
    };
    MatchRoomID.prototype.mbuttonEnterRoom = function (event) {
        var str = this.edt_roomID.text;
        if (!/^[0-9]+$/.test(str) || str == "") {
            this.showNote("无效的房间号", true);
            return;
        }
        var info = { name: GameData.gameUser.name, avatar: GameData.gameUser.avatar };
        var infostr = JSON.stringify(info);
        /*let getRoomListFlter = new MsRoomFilter(GameData.maxPlayerNum,0,0,"");
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_RSP,this.getRoomListResponse,this);
        mvs.MsEngine.getInstance.getRoomList(getRoomListFlter);*/
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, this.getRoomListExResponse, this);
        mvs.MsEngine.getInstance.getRoomListEx(GameData.thefilter);
    };
    /**
     * 获取房间列表 扩展版接口
     */
    MatchRoomID.prototype.getRoomListExResponse = function (ev) {
        var status = ev.data.status;
        var roomAttrs = ev.data.roomAttrs;
        var total = ev.data.total; //所有数量
        if (status != 200) {
            this.showNote("房间查询错误" + status, true);
            return;
        }
        var str = this.edt_roomID.text;
        var ex = false;
        for (var i = 0; i < roomAttrs.length; i++) {
            if (roomAttrs[i].roomID == str.trim()) {
                ex = true;
            }
        }
        if (ex == false) {
            this.showNote("没有查找到此房间，请重新输入", true);
            return;
        }
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, this.getRoomListExResponse, this);
        GameSceneView._gameScene.match(MatchUI.JOINFLAG.WITHROOMID, str.trim());
    };
    return MatchRoomID;
}(eui.Component));
__reflect(MatchRoomID.prototype, "MatchRoomID", ["eui.UIComponent", "egret.DisplayObject"]);
