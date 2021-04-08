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
var TakeOverFriend = (function (_super) {
    __extends(TakeOverFriend, _super);
    function TakeOverFriend(theThis) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_customize/TakeOverFriend.exml";
        _this.name = "takeoverPannel";
        _this.btnControl(theThis);
        return _this;
    }
    TakeOverFriend.prototype.btnControl = function (theThis) {
        //返回
        this.takeover_return.addEventListener(egret.TouchEvent.TOUCH_TAP, theThis.takeoverReturn, theThis);
        //确认
        this.takeover_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, theThis.takeoverConfirm, theThis);
    };
    /*public takeoverReturn():void{
        if(this.parent.getChildByName("takeoverPannel") != null){
            this.parent.removeChild(this.parent.getChildByName("takeoverPannel"));
        }
    }*/
    TakeOverFriend.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TakeOverFriend.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return TakeOverFriend;
}(eui.Component));
__reflect(TakeOverFriend.prototype, "TakeOverFriend", ["eui.UIComponent", "egret.DisplayObject"]);
