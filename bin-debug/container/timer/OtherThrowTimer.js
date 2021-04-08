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
var OtherThrowTimer = (function (_super) {
    __extends(OtherThrowTimer, _super);
    /**
     * 其他玩家不出牌时的文字提示
     */
    function OtherThrowTimer(text, isWho) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").otherPlayingTimer;
        if (isWho === 1) {
            _this.x = pc.playerX;
            _this.y = pc.playerY;
        }
        else if (isWho === 2) {
            _this.x = pc.rightX;
            _this.y = pc.rightY;
        }
        else if (isWho === 3) {
            _this.x = pc.topX;
            _this.y = pc.topY;
        }
        else if (isWho === 4) {
            _this.x = pc.leftX;
            _this.y = pc.leftY;
        }
        _this.width = pc.width;
        _this.height = pc.height;
        _this.show(text, isWho);
        return _this;
    }
    OtherThrowTimer.prototype.show = function (text, isWho) {
        var tip = new TextTip(text, 0, 0, 48);
        this.addChild(tip);
    };
    return OtherThrowTimer;
}(egret.DisplayObjectContainer));
__reflect(OtherThrowTimer.prototype, "OtherThrowTimer");
