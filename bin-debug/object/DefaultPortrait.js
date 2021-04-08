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
var DefaultPortrait = (function (_super) {
    __extends(DefaultPortrait, _super);
    /**
     * 创建一个默认的头像
     * index 头像index
     * x 头像的x坐标
     * y 头像的y坐标
     * w 头像的宽
     * h 头像的高
     */
    function DefaultPortrait(sex, index, x, y, w, h) {
        var _this = this;
        if (sex !== "man") {
            sex = "lady";
        }
        var portraitName = sex + "_" + index + "_png";
        _this = _super.call(this, RES.getRes(portraitName)) || this;
        //设置九宫格
        // var rect:egret.Rectangle = new egret.Rectangle(30,30,40,40);
        // this.scale9Grid =rect;
        _this.x = x;
        _this.y = y;
        _this.width = w;
        _this.height = h;
        _this.name = index + "";
        return _this;
    }
    return DefaultPortrait;
}(egret.Bitmap));
__reflect(DefaultPortrait.prototype, "DefaultPortrait");
