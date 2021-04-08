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
var Layout = (function (_super) {
    __extends(Layout, _super);
    /**
     * 背景布局
     * width 背景的宽
     * height 背景的高
     *
     */
    function Layout(width, height) {
        var _this = _super.call(this, RES.getRes("gameBgImg_png")) || this;
        _this.width = width;
        _this.height = height;
        return _this;
        // this.alpha = 0.3;
    }
    return Layout;
}(egret.Bitmap));
__reflect(Layout.prototype, "Layout");
