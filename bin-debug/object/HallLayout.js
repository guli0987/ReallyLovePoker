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
var HallLayout = (function (_super) {
    __extends(HallLayout, _super);
    /**
     * 背景布局
     * width 背景的宽
     * height 背景的高
     *
     */
    function HallLayout(width, height) {
        var _this = _super.call(this, RES.getRes("gameHall_jpg")) || this;
        _this.width = width;
        _this.height = height;
        return _this;
        //this.alpha = 0.7;
    }
    return HallLayout;
}(egret.Bitmap));
__reflect(HallLayout.prototype, "HallLayout");
