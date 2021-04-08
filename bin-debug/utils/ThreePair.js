var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ThreePair = (function () {
    function ThreePair(threeValue, twoValue) {
        this.threeValue = threeValue;
        this.twoValue = twoValue;
    }
    ThreePair.prototype.getThreeValue = function () {
        return this.threeValue;
    };
    ThreePair.prototype.getTwoValue = function () {
        return this.twoValue;
    };
    ThreePair.prototype.toString = function () {
        return "[" + this.threeValue + "," + this.twoValue + "]";
    };
    return ThreePair;
}());
__reflect(ThreePair.prototype, "ThreePair");
