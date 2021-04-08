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
var PokerPlayerContainer = (function (_super) {
    __extends(PokerPlayerContainer, _super);
    /**
     * 标准扑克容器，控制自己的牌
     * 这个容器支持点击选牌操作，可以用来做斗地主、跑得快等
     * arrays 扑克id的数组
     * x 扑克的x坐标
     */
    function PokerPlayerContainer(arrays) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").pokerPlayerContainer;
        _this.x = pc.x;
        _this.y = pc.y;
        _this.width = pc.width;
        _this.height = pc.height;
        //添加bg是为了在开发时观察Container的范围
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x113355);
        // bg.graphics.drawRect( 0, 0, this.width, this.height ); 
        // bg.graphics.endFill();
        // bg.alpha = 0.3;
        // this.addChild(bg);
        _this.show(arrays);
        return _this;
    }
    PokerPlayerContainer.prototype.show = function (arrays) {
        var p = RES.getRes("layout_json").poker;
        var x = (20 - arrays.length) * 0.5 * p.pokerPlaySpace; //居中排列
        for (var i = 0; i < arrays.length; i++) {
            var poker = new PokerMod(arrays[i], x + i * p.pokerPlaySpace, 0, p.pokerTestWidth, p.pokerTestHeight);
            this.addChild(poker);
        }
    };
    return PokerPlayerContainer;
}(egret.DisplayObjectContainer));
__reflect(PokerPlayerContainer.prototype, "PokerPlayerContainer");
