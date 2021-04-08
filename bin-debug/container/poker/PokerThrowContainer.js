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
 * 标准扑克容器，显示所有玩家丢出的牌
 */
var PokerThrowContainer = (function (_super) {
    __extends(PokerThrowContainer, _super);
    function PokerThrowContainer(isWho, arrays, isShow) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").pokerThrowContainer;
        if (isWho === 1) {
            _this.x = pc.playerX;
            _this.y = pc.playerY;
        }
        else if (isWho === 2) {
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
        _this.show(arrays, isShow);
        return _this;
    }
    PokerThrowContainer.prototype.show = function (arrays, isShow) {
        var p = RES.getRes("layout_json").poker;
        var x = 0;
        for (var i = 0; i < arrays.length; i++) {
            var poker = new DrawPoker(arrays[i], x + i * p.pokerSmallSpace, 0, p.pokerSmallWidth, p.pokerSmallHeight, isShow);
            this.addChild(poker);
        }
    };
    return PokerThrowContainer;
}(egret.DisplayObjectContainer));
__reflect(PokerThrowContainer.prototype, "PokerThrowContainer");
