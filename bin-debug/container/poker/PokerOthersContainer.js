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
/**
 * 标准扑克容器，显示其他玩家出的牌
 */
var PokerOthersContainer = (function (_super) {
    __extends(PokerOthersContainer, _super);
    /**
     * 标准扑克容器，显示其他玩家出的牌
     * 这个容器只能显示牌，不能对牌进行操作
     * arrays 扑克id的数组
     * x 扑克的x坐标
     */
    function PokerOthersContainer(arrays, isWho) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").pokerOthersContainer;
        if (isWho === 2) {
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
        //添加bg是为了在开发时观察Container的范围
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x112233);
        // bg.graphics.drawRect( 0, 0, this.width, this.height ); 
        // bg.graphics.endFill();
        // bg.alpha = 0.5;
        // this.addChild(bg);
        _this.show(arrays, isWho);
        return _this;
    }
    /**
     * 左边玩家出的牌靠左排列，右边玩家出的牌靠右排列
     */
    PokerOthersContainer.prototype.show = function (arrays, isWho) {
        var p = RES.getRes("layout_json").poker;
        var x = 0; //默认靠左排列
        if (isWho === 3) {
            x = (20 - arrays.length) * p.pokerSmallSpace; //靠右排列
        }
        for (var i = 0; i < arrays.length; i++) {
            var poker = new PokerMod(arrays[i], x + i * p.pokerSmallSpace, 0, p.pokerSmallWidth, p.pokerSmallHeight);
            this.addChild(poker);
        }
    };
    return PokerOthersContainer;
}(egret.DisplayObjectContainer));
__reflect(PokerOthersContainer.prototype, "PokerOthersContainer");
