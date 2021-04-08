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
var HallMenus = (function (_super) {
    __extends(HallMenus, _super);
    function HallMenus(name, x, y, w, h) {
        var _this = _super.call(this, RES.getRes(name)) || this;
        _this.x = x;
        _this.y = y;
        _this.width = w;
        _this.height = h;
        _this.name = name + x + "_" + y;
        return _this;
    }
    return HallMenus;
}(egret.Bitmap));
__reflect(HallMenus.prototype, "HallMenus");
