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
var PokerContainer = (function (_super) {
    __extends(PokerContainer, _super);
    /**
     * 标准扑克容器，控制自己的牌
     * 这个容器支持点击选牌操作，可以用来做斗地主、跑得快等
     * player 场景，当场景加载该容器时，传入该场景，该场景必须实现pokerClick（evt:egret.TouchEvent）方法，用来处理点击扑克后执行的处理流程
     * arrays 扑克id的数组
     * x 扑克的x坐标
     */
    function PokerContainer(player, arrays, isLeftHand) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").pokerContainer;
        _this.x = pc.x;
        _this.y = pc.y;
        _this.width = pc.width;
        _this.height = pc.height;
        if (isLeftHand) {
            arrays = PokerUtils.sortDescPokers(arrays); //9988755，0123456
        }
        else {
            arrays = PokerUtils.sortAscPokers(arrays); //5578899，0123456
        }
        _this.show(player, arrays);
        return _this;
    }
    PokerContainer.prototype.show = function (player, arrays) {
        var p = RES.getRes("layout_json").poker;
        var x = (26 - arrays.length) * 0.5 * p.pokerMiddleSpace; //居中排列
        for (var i = 0; i < arrays.length; i++) {
            var poker = new PokerMod(arrays[i], x + i * p.pokerMiddleSpace, p.pokerUpMove, p.pokerWidth, p.pokerHeight); //x,y,w,h
            //poker.name = "pokerIs"+arrays[i].getId();
            poker.touchEnabled = true;
            poker.addEventListener(egret.TouchEvent.TOUCH_TAP, player.pokerClick, player);
            this.addChild(poker);
        }
    };
    PokerContainer.prototype.removePokerByNames = function (name) {
        for (var i = 0; i < name.length; i++) {
            if (this.getChildByName(name[i] + "") != null) {
                this.removeChild(this.getChildByName(name[i] + ""));
            }
        }
    };
    return PokerContainer;
}(egret.DisplayObjectContainer));
__reflect(PokerContainer.prototype, "PokerContainer");
