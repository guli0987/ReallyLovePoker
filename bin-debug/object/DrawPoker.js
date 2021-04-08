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
var DrawPoker = (function (_super) {
    __extends(DrawPoker, _super);
    /**
     * 创建一个标准的扑克牌对象
     * index 扑克index
     * x 扑克的x坐标
     * y 扑克的y坐标
     * w 扑克的宽
     * h 扑克的高
     */
    function DrawPoker(poker, x, y, w, h, isShow) {
        var _this = this;
        var pokerName = poker.getId() + "_png";
        if (isShow) {
            _this = _super.call(this, RES.getRes(pokerName)) || this;
        }
        else {
            _this = _super.call(this, RES.getRes("drawpoker_png")) || this;
        }
        _this.x = x;
        _this.y = y;
        _this.width = w;
        _this.height = h;
        _this.name = poker.getId() + "," + poker.getOrderValue();
        return _this;
    }
    return DrawPoker;
}(egret.Bitmap));
__reflect(DrawPoker.prototype, "DrawPoker");
