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
var PokerPrompt = (function (_super) {
    __extends(PokerPrompt, _super);
    /**
     * 创建一个标准的扑克牌对象
     * index 扑克index
     * x 扑克的x坐标
     * y 扑克的y坐标
     * w 扑克的宽
     * h 扑克的高
     */
    function PokerPrompt(poker, isClick) {
        var _this = this;
        var p = RES.getRes("layout_json").poker;
        var y = p.pokerUpMove;
        var pokerName = poker.getId() + "_png";
        _this = _super.call(this, RES.getRes(pokerName)) || this;
        if (isClick) {
            _this.y = 0;
        }
        else {
            _this.y = y;
        }
        console.log("name" + _this.name);
        return _this;
    }
    return PokerPrompt;
}(egret.Bitmap));
__reflect(PokerPrompt.prototype, "PokerPrompt");
