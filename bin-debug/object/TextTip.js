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
var TextTip = (function (_super) {
    __extends(TextTip, _super);
    /**
     * 文字提示
     */
    function TextTip(text, x, y, size) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        //颜色
        _this.textColor = 0x778899;
        //大小
        _this.size = size;
        //字体
        _this.fontFamily = "KaiTi";
        //布局
        _this.textAlign = egret.HorizontalAlign.CENTER;
        _this.text = text;
        return _this;
    }
    return TextTip;
}(egret.TextField));
__reflect(TextTip.prototype, "TextTip");
