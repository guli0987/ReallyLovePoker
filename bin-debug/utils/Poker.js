var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Poker = (function () {
    function Poker(id, orderValue) {
        this.id = id;
        this.orderValue = orderValue;
    }
    /**
     * 获取牌面ID
     * 用于在界面展示该牌
     */
    Poker.prototype.getId = function () {
        return this.id;
    };
    /**
     *
     * 获取该牌的大小值
     */
    Poker.prototype.getOrderValue = function () {
        return this.orderValue;
    };
    Poker.prototype.toString = function () {
        return "[" + this.id + "," + this.orderValue + "]";
    };
    return Poker;
}());
__reflect(Poker.prototype, "Poker");
