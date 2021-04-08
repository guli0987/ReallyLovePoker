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
var ErrorNote = (function (_super) {
    __extends(ErrorNote, _super);
    function ErrorNote() {
        var _this = _super.call(this) || this;
        _this.skinName = "ErrorNoteSkin";
        return _this;
    }
    ErrorNote.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if ("btn_return" == partName) {
            this.btn_return = instance;
            this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonExitRoom, this);
        }
        else if ("lab_content" == partName) {
            this.lab_content = instance;
        }
        else if ("btn_reconnect" == partName) {
            this.btn_reconnect = instance;
            // this.btn_reconnect.visible = false;
            this.btn_reconnect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonReconnRoom, this);
        }
    };
    ErrorNote.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lab_userID.text = "用户ID：" + GameData.gameUser.id;
        //清理定时器
        while (GameData.intervalList.length > 0) {
            clearTimeout(GameData.intervalList.pop());
        }
        this.lab_content.text = this.errMsg;
    };
    //设置错误信息
    ErrorNote.prototype.SetErrorMsg = function (msg) {
        this.errMsg = msg;
    };
    ErrorNote.prototype.mbuttonReconnRoom = function (event) {
        //重连界面
        GameSceneView._gameScene.reconnectView();
    };
    ErrorNote.prototype.mbuttonExitRoom = function (event) {
        GameSceneView._gameScene.login();
    };
    return ErrorNote;
}(eui.Component));
__reflect(ErrorNote.prototype, "ErrorNote", ["eui.UIComponent", "egret.DisplayObject"]);
