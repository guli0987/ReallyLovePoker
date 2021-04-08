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
var PokerDrawContainer = (function (_super) {
    __extends(PokerDrawContainer, _super);
    /**
     * 标准扑克容器，控制自己的牌
     * 这个容器支持点击选牌操作，可以用来做斗地主、跑得快等
     * player 场景，当场景加载该容器时，传入该场景，该场景必须实现pokerClick（evt:egret.TouchEvent）方法，用来处理点击扑克后执行的处理流程
     * arrays 扑克id的数组
     * x 扑克的x坐标
     */
    function PokerDrawContainer(player, arrays, isShow, showOnePoker) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").pokerDrawContainer;
        _this.x = pc.x;
        _this.y = pc.y;
        _this.width = pc.width;
        _this.height = pc.height;
        _this.show(player, arrays, isShow, showOnePoker);
        return _this;
    }
    PokerDrawContainer.prototype.show = function (player, arrays, isShow, showOnePoker) {
        var p = RES.getRes("layout_json").poker;
        var x = 0;
        var addy = 0;
        var addx = 0;
        for (var i = 0; i < arrays.length; i++) {
            if (i > 53) {
                addy = p.pokerDrawAddy;
                addx = p.pokerDrawAddx * p.pokerDrawSpace;
            }
            else {
                addy = 0;
                addx = 0;
            }
            var pdShow = false;
            if (i != showOnePoker) {
                pdShow = isShow;
            }
            else {
                pdShow = true;
            }
            var poker = new DrawPoker(arrays[i], x + i * p.pokerDrawSpace - addx, p.pokerDrawUpMove + addy, p.pokerDrawWidth, p.pokerDrawHeight, pdShow); //x,y,w,h,是否显示正面
            poker.touchEnabled = true;
            if (i > 53) {
                poker.addEventListener(egret.TouchEvent.TOUCH_TAP, player.drawPokerClickDown, player);
            }
            else {
                poker.addEventListener(egret.TouchEvent.TOUCH_TAP, player.drawPokerClickUp, player);
            }
            this.addChild(poker);
        }
    };
    PokerDrawContainer.prototype.removePokerByNames = function (name) {
        for (var i = 0; i < name.length; i++) {
            if (this.getChildByName(name[i] + "") != null) {
                this.removeChild(this.getChildByName(name[i] + ""));
            }
        }
    };
    return PokerDrawContainer;
}(egret.DisplayObjectContainer));
__reflect(PokerDrawContainer.prototype, "PokerDrawContainer");
