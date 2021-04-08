var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 牌型大小比较工具类
 */
var PokerCompareUtils = (function () {
    function PokerCompareUtils() {
    }
    /**
     * 比较两手牌的大小
     * a b ,当a大于b时返回true
     * 王炸通吃
     * 炸弹仅次于王炸
     * 其他牌必须牌型相等才能比较，也不尽然，上下靠可以打乱靠才对
     */
    PokerCompareUtils.comparePokers = function (a, b) {
        var aSort = PokerUtils.sortDescPokers(a); //自己的，自己大返回true
        var bSort = PokerUtils.sortDescPokers(b);
        //if(aSort.length < 1 || bSort.length < 1) return false;//空，没牌了，感觉有问题
        if (bSort.length < 1)
            return true;
        if (PokerTypeUtils.isKingBoom(bSort) != -1)
            return false; //b是王炸
        if (PokerTypeUtils.isKingBoom(aSort) != -1)
            return true; //a是王炸
        if (PokerTypeUtils.isBoom(bSort) != -1) {
            if (PokerTypeUtils.isBoom(aSort) != -1)
                return this.compareOneLenghtBoom(aSort, bSort); //a 也是炸弹
            return false; //a 不是炸弹
        }
        if (PokerTypeUtils.isBoom(aSort) != -1)
            return true; //a 是炸弹,b不是
        //if是连对，飞机，飞机带对子
        if (a.length != b.length)
            return false; //已经排除了炸弹的可能，长度不相等,不能比较
        var aType = PokerTypeUtils.getType(aSort);
        var bType = PokerTypeUtils.getType(bSort);
        var aSpecialType = PokerTypeUtils.getSpecialType(aSort);
        var bSpecialType = PokerTypeUtils.getSpecialType(bSort);
        if (aType != null && aSpecialType == null) {
            //if(aType.getType() != bType.getType()) return false;//【上下靠打乱靠问题】
            if (bType == null && bSpecialType != null) {
                if (bSpecialType.getType() === "typeThreePair" && aType.getType() === "typeThreePairOn") {
                    //如果自己是上下靠，对方是乱靠，进行比较
                    if (aType.getSort() > bSpecialType.getSort()[0].getThreeValue() && aType.getSort() > bSpecialType.getSort()[0].getTwoValue() - 1) {
                        return true;
                    }
                    return false;
                }
                if (bSpecialType.getType() === "typeThreePair" && aType.getType() === "typeThreePairUnder") {
                    //如果自己是上下靠，对方是乱靠，进行比较
                    if (aType.getSort() > bSpecialType.getSort()[0].getThreeValue() && aType.getSort() > bSpecialType.getSort()[0].getTwoValue() + 1) {
                        return true;
                    }
                    return false;
                }
            }
            //if(bType == null) return false;
            //可能有的类型还要比长度，连对，飞机，飞机带对子
            if (bType != null && bSpecialType == null) {
                if (bType.getType() === "typeStraightPairs"
                    || bType.getType() === "typePlane"
                    || bType.getType() === "typePlaneNPairsConnection3322"
                    || bType.getType() === "typePlaneNPairsConnection2233"
                    || bType.getType() === "typePlaneNPairsConnection2332") {
                    return this.compareOneLenght(aSort, bSort);
                }
                else {
                    return aType.getSort() > bType.getSort();
                }
            }
        }
        else if (aType == null && aSpecialType != null) {
            if (aSpecialType.getType() != bSpecialType.getType())
                return false;
            if (bSpecialType == null) {
                return false;
            }
            else {
                var pd = false;
                for (var i = 0; i < aSpecialType.getSort().length; i++) {
                    if (aSpecialType.getSort()[i].getThreeValue() > bSpecialType.getSort()[i].getThreeValue()
                        && aSpecialType.getSort()[i].getTwoValue() > bSpecialType.getSort()[i].getTwoValue()) {
                        pd = true;
                    }
                    else {
                        pd = false;
                    }
                }
                if (pd) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return false;
        }
    };
    /**
     * 比较单牌的大小，牌型固定长度
     */
    PokerCompareUtils.compareOne = function (a, b) {
        if (a.getOrderValue() > b.getOrderValue()) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 比较单牌的大小,涉及长度
     */
    PokerCompareUtils.compareOneLenght = function (aSort, bSort) {
        if (aSort.length > bSort.length)
            return false;
        if (aSort.length < bSort.length)
            return false;
        if (aSort.length === bSort.length) {
            if (aSort[0].getOrderValue() > bSort[0].getOrderValue()) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    /**
     * 比较单牌的大小,Boom
     */
    PokerCompareUtils.compareOneLenghtBoom = function (aSort, bSort) {
        if (aSort.length > bSort.length)
            return true;
        if (aSort.length < bSort.length)
            return false;
        if (aSort.length === bSort.length) {
            if (aSort[0].getOrderValue() > bSort[0].getOrderValue()) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    return PokerCompareUtils;
}());
__reflect(PokerCompareUtils.prototype, "PokerCompareUtils");
