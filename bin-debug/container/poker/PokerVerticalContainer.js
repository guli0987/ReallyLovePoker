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
 * 显示其他玩家的明牌
 */
var PokerVerticalContainer = (function (_super) {
    __extends(PokerVerticalContainer, _super);
    /**
     * 竖着排列的牌，用于显示对手的明牌
     * arrays 扑克id的数组
     * x 扑克的x坐标
     */
    function PokerVerticalContainer(arrays, isWho) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").pokerVerticalContainer;
        if (isWho === 1) {
        }
        else if (isWho === 2) {
            _this.x = pc.rightX;
            _this.y = pc.rightY;
            _this.width = pc.width;
            _this.height = pc.height;
        }
        else if (isWho === 3) {
            _this.x = pc.topX;
            _this.y = pc.topY;
            _this.width = pc.topW;
            _this.height = pc.topH;
        }
        else if (isWho === 4) {
            _this.x = pc.leftX;
            _this.y = pc.leftY;
            _this.width = pc.width;
            _this.height = pc.height;
        }
        //添加bg是为了在开发时观察Container的范围
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x112299);
        // bg.graphics.drawRect( 0, 0, this.width, this.height ); 
        // bg.graphics.endFill();
        // bg.alpha = 0.5;
        // this.addChild(bg);
        if (isWho === 2 || isWho === 4) {
            _this.show(arrays);
        }
        else if (isWho === 3) {
            _this.showTop(arrays);
        }
        return _this;
    }
    /**
     * 横着排列
     */
    PokerVerticalContainer.prototype.show = function (arrays) {
        var p = RES.getRes("layout_json").poker;
        var x = 0;
        var y = 0;
        for (var i = 0; i < arrays.length; i++) {
            if (i >= 14) {
                y = 40;
            }
            if (x >= 14) {
                x = x - 14;
            }
            var poker = new PokerMod(arrays[i], x * p.pokerSmallSpace, y, p.pokerSmallWidth, p.pokerSmallHeight);
            x++;
            this.addChild(poker);
        }
    };
    PokerVerticalContainer.prototype.showTop = function (arrays) {
        var p = RES.getRes("layout_json").poker;
        var x = 0;
        for (var i = 0; i < arrays.length; i++) {
            var poker = new PokerMod(arrays[i], x + i * p.pokerSmallSpace, 0, p.pokerSmallWidth, p.pokerSmallHeight);
            this.addChild(poker);
        }
    };
    /**
     * 竖着排列
     */
    PokerVerticalContainer.prototype.show1 = function (arrays) {
        var p = RES.getRes("layout_json").poker;
        var x = 0;
        var y = 0;
        for (var i = 0; i < arrays.length; i++) {
            if (i >= 10) {
                x = p.pokerSmallHeight * 0.3;
            }
            if (y >= 10) {
                y = y - 10;
            }
            var poker = new PokerMod(arrays[i], x, y * p.pokerSmallSpace, p.pokerSmallWidth, p.pokerSmallHeight);
            y++;
            this.addChild(poker);
        }
    };
    return PokerVerticalContainer;
}(egret.DisplayObjectContainer));
__reflect(PokerVerticalContainer.prototype, "PokerVerticalContainer");
