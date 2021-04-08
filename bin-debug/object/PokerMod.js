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
var PokerMod = (function (_super) {
    __extends(PokerMod, _super);
    /**
     * 创建一个标准的扑克牌对象
     * index 扑克index
     * x 扑克的x坐标
     * y 扑克的y坐标
     * w 扑克的宽
     * h 扑克的高
     */
    function PokerMod(poker, x, y, w, h) {
        var _this = this;
        var pokerName = poker.getId() + "_png";
        _this = _super.call(this, RES.getRes(pokerName)) || this;
        _this.x = x;
        _this.y = y;
        _this.width = w;
        _this.height = h;
        _this.name = poker.getId() + "," + poker.getOrderValue();
        return _this;
    }
    return PokerMod;
}(egret.Bitmap));
__reflect(PokerMod.prototype, "PokerMod");
