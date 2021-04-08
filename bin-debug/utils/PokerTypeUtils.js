var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 牌型工具类
 * 该类负责定义牌型及判断牌型
 */
var PokerTypeUtils = (function () {
    function PokerTypeUtils() {
    }
    /**
     * 获取一手牌的类型,固定数目的
     * pokers 一手牌
     */
    PokerTypeUtils.getType = function (pokers) {
        //先将牌从大到小排序，非常有必要，这样牌就从大到小排序
        pokers = PokerUtils.sortDescPokers(pokers);
        var orderValue = -1;
        if ((orderValue = this.isBoom(pokers)) != -1)
            return new PokerType(this.typeBoom, orderValue);
        if ((orderValue = this.isKingBoom(pokers)) != -1)
            return new PokerType(this.typeKingBoom, orderValue);
        if ((orderValue = this.isSingle(pokers)) != -1)
            return new PokerType(this.typeSingle, orderValue);
        if ((orderValue = this.isPair(pokers)) != -1)
            return new PokerType(this.typePair, orderValue);
        if ((orderValue = this.isThree(pokers)) != -1)
            return new PokerType(this.typeThree, orderValue);
        if ((orderValue = this.isThreePairsOn(pokers)) != -1)
            return new PokerType(this.typeThreePairOn, orderValue);
        if ((orderValue = this.isThreePairsUnder(pokers)) != -1)
            return new PokerType(this.typeThreePairUnder, orderValue);
        if ((orderValue = this.isStraightPairs(pokers)) != -1)
            return new PokerType(this.typeStraightPairs, orderValue);
        if ((orderValue = this.isPlane(pokers)) != -1)
            return new PokerType(this.typePlane, orderValue);
        if ((orderValue = this.isPlaneNpairsConnection2233(pokers)) != -1)
            return new PokerType(this.typePlaneNPairsConnection2233, orderValue);
        if ((orderValue = this.isPlaneNpairsConnection3322(pokers)) != -1)
            return new PokerType(this.typePlaneNPairsConnection3322, orderValue);
        if ((orderValue = this.isPlaneNpairsConnection2332(pokers)) != -1)
            return new PokerType(this.typePlaneNPairsConnection2332, orderValue);
        return null;
    };
    PokerTypeUtils.getSpecialType = function (pokers) {
        //先将牌从大到小排序
        pokers = PokerUtils.sortDescPokers(pokers);
        //三带一对乱靠
        var ThreePairsValue = new Array();
        if ((ThreePairsValue = this.isThreePairs(pokers)) != null)
            return new PokerTypeThreePair(this.typeThreePair, ThreePairsValue);
        if ((ThreePairsValue = this.isPlaneNpairs(pokers)) != null)
            return new PokerTypeThreePair(this.typePlaneNPairs, ThreePairsValue);
        if ((ThreePairsValue = this.isPlaneNpairsConnection(pokers)) != null)
            return new PokerTypeThreePair(this.typePlaneNPairsConnection, ThreePairsValue);
        return null;
    };
    /**
     * 		if((ThreePairsValue = this.isThreePairs(pokers)) != null)//三带一对，乱、上、下靠
            return new PokerTypeThreePair(this.typeThreePair, ThreePairsValue);
     */
    /**
     * 判断一手牌是否是炸弹（不含王炸）
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isBoom = function (array) {
        //console.log("是炸弹");
        if (array.length >= 4 && array.length <= 8) {
            var ifBoom = true;
            //如果存在不等的情况则为false
            for (var i = 0; i < array.length - 1; i++) {
                if (array[i].getOrderValue() != array[i + 1].getOrderValue()) {
                    ifBoom = false;
                    break;
                }
            }
            if (ifBoom) {
                console.log("是炸弹,值为:" + array[0].getOrderValue());
                return array[0].getOrderValue();
            }
            return -1;
        }
        else {
            return -1;
        }
    };
    /**
     * 判断一手牌是否是四王通天炸
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isKingBoom = function (array) {
        //console.log("是四王轰天炸");
        if (array.length == 4
            && array[0].getOrderValue() === PokerUtils.BigKingValue
            && array[1].getOrderValue() === PokerUtils.BigKingValue
            && array[2].getOrderValue() === PokerUtils.SmallKingValue
            && array[3].getOrderValue() === PokerUtils.SmallKingValue) {
            return 0;
        }
        else {
            return -1;
        }
    };
    /**
     * 判断一手牌是否是单张
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isSingle = function (array) {
        //console.log("是单张");
        if (array.length == 1)
            return array[0].getOrderValue();
        return -1;
    };
    /**
     * 判断一手牌是否是对子
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isPair = function (array) {
        //console.log("是对子");
        if (array.length == 2 && array[0].getOrderValue() == array[1].getOrderValue())
            return array[0].getOrderValue();
        return -1;
    };
    /**
     * 判断一手牌是否是三张
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isThree = function (array) {
        //console.log("是三张");
        if (array.length != 3)
            return -1; //不是三张
        if (array[1].getOrderValue() == array[0].getOrderValue()
            && array[2].getOrderValue() == array[0].getOrderValue())
            return array[0].getOrderValue(); //三张一样的牌
        return -1;
    };
    /**
     * 判断一手牌是否是三带二，乱靠
     * 如果不是，返回null; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isThreePairs = function (array) {
        //console.log("是三带二");
        var ThreePairsValue = new Array();
        if (array.length != 5)
            return null; //不是三张也不是四张，不是三带
        if (array[1].getOrderValue() === array[0].getOrderValue()
            && array[2].getOrderValue() === array[0].getOrderValue()
            && array[3].getOrderValue() != array[0].getOrderValue()
            && array[3].getOrderValue() === array[4].getOrderValue()
            && Math.abs(array[0].getOrderValue() - array[3].getOrderValue()) != 1) {
            var threePairs = new ThreePair(array[0].getOrderValue(), array[3].getOrderValue());
            ThreePairsValue.push(threePairs);
            return ThreePairsValue; //前三张一样后一张不一样   //前三张一样，后两张一样
        }
        if (array[0].getOrderValue() === array[1].getOrderValue()
            && array[2].getOrderValue() === array[3].getOrderValue()
            && array[3].getOrderValue() === array[4].getOrderValue()
            && array[0].getOrderValue() != array[2].getOrderValue()
            && Math.abs(array[0].getOrderValue() - array[2].getOrderValue()) != 1) {
            var threePairs = new ThreePair(array[2].getOrderValue(), array[0].getOrderValue());
            ThreePairsValue.push(threePairs);
            return ThreePairsValue; //前三张一样后一张不一样   //前三张一样，后两张一样
        }
        return null;
    };
    /**
     * 判断一手牌是否是三带二,上靠
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isThreePairsOn = function (array) {
        //console.log("是上靠");
        if (array.length != 5)
            return -1; //不是三张也不是四张，不是三带
        if (array[1].getOrderValue() === array[0].getOrderValue()
            && array[2].getOrderValue() === array[0].getOrderValue()
            && array[3].getOrderValue() != array[0].getOrderValue()
            && array[3].getOrderValue() === array[4].getOrderValue()
            && array[0].getOrderValue() - array[3].getOrderValue() === -1)
            return array[0].getOrderValue(); //前三张一样后一张不一样   //前三张一样，后两张一样
        if (array[0].getOrderValue() === array[1].getOrderValue()
            && array[2].getOrderValue() === array[3].getOrderValue()
            && array[3].getOrderValue() === array[4].getOrderValue()
            && array[0].getOrderValue() != array[2].getOrderValue()
            && array[2].getOrderValue() - array[0].getOrderValue() === -1)
            return array[2].getOrderValue(); //前两张一样，后三张一样
        return -1;
    };
    /**
     * 判断一手牌是否是三带二,下靠
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isThreePairsUnder = function (array) {
        //console.log("是下靠");
        if (array.length != 5)
            return -1; //不是三张也不是四张，不是三带
        if (array[1].getOrderValue() === array[0].getOrderValue()
            && array[2].getOrderValue() === array[0].getOrderValue()
            && array[3].getOrderValue() != array[0].getOrderValue()
            && array[3].getOrderValue() === array[4].getOrderValue()
            && array[0].getOrderValue() - array[3].getOrderValue() === 1)
            return array[0].getOrderValue(); //前三张一样后一张不一样   //前三张一样，后两张一样
        if (array[0].getOrderValue() === array[1].getOrderValue()
            && array[2].getOrderValue() === array[3].getOrderValue()
            && array[3].getOrderValue() === array[4].getOrderValue()
            && array[0].getOrderValue() != array[2].getOrderValue()
            && array[2].getOrderValue() - array[0].getOrderValue() === 1)
            return array[2].getOrderValue(); //前两张一样，后三张一样
        return -1;
    };
    /**
     * 判断一手牌是否是连对
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isStraightPairs = function (array) {
        //console.log("是连对");
        if (array.length < 6 || array.length > 24 || array.length % 2 != 0)
            return -1;
        if (array[0].getOrderValue() < 3)
            return -1; //如果最大的牌大于A，牌形不正确
        for (var i = 0; i < array.length - 1; i += 2) {
            if (array[i].getOrderValue() != array[i + 1].getOrderValue())
                return -1;
        }
        for (var i = 0; i < array.length - 2; i += 2) {
            if (i != array.length - 2 && array[i].getOrderValue() != array[i + 2].getOrderValue() + 1)
                return -1;
        }
        return array[0].getOrderValue();
    };
    /**
     * 判断一手牌是否是飞机不带翅膀
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isPlane = function (array) {
        //console.log("是飞机");
        if (array.length < 9 && array.length > 27)
            return -1;
        if (array.length % 3 != 0)
            return -1;
        if (array[0].getOrderValue() < 3)
            return -1; //如果最大的牌大于A，牌形不正确(不能三个2 三个A)
        for (var i = 0; i < array.length; i += 3) {
            if (i != array.length - 3 && array[i].getOrderValue() === array[i + 1].getOrderValue() && array[i].getOrderValue() === array[i + 2].getOrderValue()
                && array[i].getOrderValue() === array[i + 3].getOrderValue() + 1)
                return array[0].getOrderValue();
        }
        return -1;
    };
    /**
     * 判断一手牌是否是飞机带N对,不是连对
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isPlaneNpairs = function (array) {
        //console.log("是飞机带N对");
        if (array.length < 10 || array.length > 25)
            return null;
        var three = [];
        var two = [];
        /*for(let a =0 ;a < array.length;a++){
            console.log("当前--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
        }*/
        for (var i = 0; i < array.length - 2; i++) {
            if (array[i].getOrderValue() == array[i + 1].getOrderValue()
                && array[i].getOrderValue() == array[i + 2].getOrderValue()) {
                three.push(array[i]); //把三位分开储存
                console.log("i为" + i + "时，符合要求的three值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        var fh = false;
        for (var i = 0; i < three.length - 1; i++) {
            //console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
            if (three[i].getOrderValue() - three[i + 1].getOrderValue() === 1) {
                fh = true;
            }
            else {
                fh = false;
            }
        }
        console.log("符合要求吗？  " + fh);
        if (!fh)
            return null;
        var threeDelete = [];
        for (var i = 0; i < three.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array[j].getOrderValue() === three[i].getOrderValue()) {
                    //console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
                    //array = PokerUtils.removePokers(array,[array[j]]);
                    threeDelete.push(array[j]);
                    console.log("要删除的：id" + array[j].getId() + ",value:" + array[j].getOrderValue());
                }
            }
        }
        array = PokerUtils.removePokers(array, threeDelete);
        //if(1) return -1;
        for (var a = 0; a < array.length; a++) {
            console.log("剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        console.log("取对子");
        //取对子
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].getOrderValue() === array[i + 1].getOrderValue()) {
                two.push(array[i]);
                console.log("i为" + i + "时，符合要求的two值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        //如果三张长度不等于对子长度，返回false
        if (three.length != two.length)
            return null;
        //如果去掉对子连续三张还有牌，则return -1
        var twoDelete = [];
        for (var i = 0; i < two.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (two[i].getOrderValue() === array[j].getOrderValue()) {
                    twoDelete.push(array[j]);
                }
            }
        }
        array = PokerUtils.removePokers(array, twoDelete);
        for (var a = 0; a < array.length; a++) {
            console.log("two剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        if (array.length > 0)
            return null;
        console.log("看对子是否连续");
        //看对子是否连续
        var tw = false;
        for (var i = 0; i < two.length - 1; i++) {
            if (two[i].getOrderValue() - two[i + 1].getOrderValue() === 1) {
                tw = true;
            }
            else {
                tw = false;
            }
        }
        console.log("tw:" + tw);
        //不连续符合
        var reArray = new Array();
        if (!tw) {
            console.log("符合要求");
            for (var i = 0; i < two.length; i++) {
                var threePairs = new ThreePair(three[i].getOrderValue(), two[i].getOrderValue());
                reArray.push(threePairs);
            }
            return reArray;
        }
        else {
            console.log("不符合要求");
            return null;
        }
    };
    /**
     * 判断一手牌是否是飞机带N对,是连对但对子和三张不连续
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isPlaneNpairsConnection = function (array) {
        //console.log("是飞机带N对");
        if (array.length < 10 || array.length > 25)
            return null;
        var three = [];
        var two = [];
        /*for(let a =0 ;a < array.length;a++){
            console.log("当前--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
        }*/
        for (var i = 0; i < array.length - 2; i++) {
            if (array[i].getOrderValue() == array[i + 1].getOrderValue()
                && array[i].getOrderValue() == array[i + 2].getOrderValue()) {
                three.push(array[i]); //把三位分开储存
                console.log("i为" + i + "时，符合要求的three值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        var fh = false;
        for (var i = 0; i < three.length - 1; i++) {
            //console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
            if (three[i].getOrderValue() - three[i + 1].getOrderValue() === 1) {
                fh = true;
            }
            else {
                fh = false;
            }
        }
        console.log("符合要求吗？  " + fh);
        if (!fh)
            return null;
        var threeDelete = [];
        for (var i = 0; i < three.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array[j].getOrderValue() === three[i].getOrderValue()) {
                    //console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
                    //array = PokerUtils.removePokers(array,[array[j]]);
                    threeDelete.push(array[j]);
                    console.log("要删除的：id" + array[j].getId() + ",value:" + array[j].getOrderValue());
                }
            }
        }
        array = PokerUtils.removePokers(array, threeDelete);
        //if(1) return -1;
        for (var a = 0; a < array.length; a++) {
            console.log("剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        console.log("取对子");
        //取对子
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].getOrderValue() === array[i + 1].getOrderValue()) {
                two.push(array[i]);
                console.log("i为" + i + "时，符合要求的two值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        //如果三张长度不等于对子长度，返回false
        if (three.length != two.length)
            return null;
        //如果去掉对子连续三张还有牌，则return -1
        var twoDelete = [];
        for (var i = 0; i < two.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (two[i].getOrderValue() === array[j].getOrderValue()) {
                    twoDelete.push(array[j]);
                }
            }
        }
        array = PokerUtils.removePokers(array, twoDelete);
        for (var a = 0; a < array.length; a++) {
            console.log("two剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        if (array.length > 0)
            return null;
        console.log("看对子是否连续");
        //看对子是否连续
        var tw = false;
        for (var i = 0; i < two.length - 1; i++) {
            if (two[i].getOrderValue() - two[i + 1].getOrderValue() === 1) {
                tw = true;
            }
            else {
                tw = false;
            }
        }
        console.log("tw:" + tw);
        //不连续符合
        var reArray = new Array();
        if (!tw) {
            console.log("不符合要求");
            return null;
        }
        else {
            console.log("符合要求");
            for (var i = 0; i < two.length; i++) {
                var threePairs = new ThreePair(three[i].getOrderValue(), two[i].getOrderValue());
                reArray.push(threePairs);
            }
            return reArray;
        }
    };
    /**
     * 判断一手牌是否是飞机带N对,是连对
     * 3334445566	3344555666	3344455566
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isPlaneNpairsConnection2233 = function (array) {
        //console.log("是飞机带N对Connection2233");
        if (array.length < 10 || array.length > 25)
            return -1;
        var three = [];
        var two = [];
        for (var a = 0; a < array.length; a++) {
            console.log("当前--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        for (var i = 0; i < array.length - 2; i++) {
            if (array[i].getOrderValue() == array[i + 1].getOrderValue()
                && array[i].getOrderValue() == array[i + 2].getOrderValue()) {
                three.push(array[i]); //把三位分开储存
                console.log("i为" + i + "时，符合要求的three值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        var fh = false;
        for (var i = 0; i < three.length - 1; i++) {
            //console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
            if (three[i].getOrderValue() - three[i + 1].getOrderValue() === 1) {
                fh = true;
            }
            else {
                fh = false;
            }
        }
        console.log("符合要求吗？  " + fh);
        if (!fh)
            return -1;
        var threeDelete = [];
        for (var i = 0; i < three.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array[j].getOrderValue() === three[i].getOrderValue()) {
                    //console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
                    //array = PokerUtils.removePokers(array,[array[j]]);
                    threeDelete.push(array[j]);
                    console.log("要删除的：id" + array[j].getId() + ",value:" + array[j].getOrderValue());
                }
            }
        }
        array = PokerUtils.removePokers(array, threeDelete);
        //if(1) return -1;
        for (var a = 0; a < array.length; a++) {
            console.log("剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        console.log("取对子");
        //取对子
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].getOrderValue() === array[i + 1].getOrderValue()) {
                two.push(array[i]);
                console.log("i为" + i + "时，符合要求的two值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        //如果三张长度不等于对子长度，返回false
        if (three.length != two.length)
            return -1;
        //如果去掉对子连续三张还有牌，则return -1
        var twoDelete = [];
        for (var i = 0; i < two.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (two[i].getOrderValue() === array[j].getOrderValue()) {
                    twoDelete.push(array[j]);
                }
            }
        }
        array = PokerUtils.removePokers(array, twoDelete);
        for (var a = 0; a < array.length; a++) {
            console.log("two剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        if (array.length > 0)
            return null;
        console.log("看对子是否连续");
        //看对子是否连续2233
        var tw = false;
        for (var i = 0; i < two.length - 1; i++) {
            if (two[i].getOrderValue() - two[i + 1].getOrderValue() === 1) {
                tw = true;
            }
            else {
                tw = false;
            }
        }
        console.log("tw:" + tw);
        //连续符合
        var reArray = new Array();
        if (tw) {
            //如果连续判断对子跟三张是否连续
            if (two[0].getOrderValue() - three[three.length - 1].getOrderValue() === -1) {
                return two[two.length - 1].getOrderValue();
            }
        }
        else {
            console.log("不符合要求");
            return -1;
        }
        return -1;
    };
    /**
     * 判断一手牌是否是飞机带N对,是连对
     * 3334445566	3344555666	3344455566
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isPlaneNpairsConnection3322 = function (array) {
        //console.log("是飞机带N对Connection3322");
        if (array.length < 10 || array.length > 25)
            return -1;
        var three = [];
        var two = [];
        for (var a = 0; a < array.length; a++) {
            console.log("当前--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        for (var i = 0; i < array.length - 2; i++) {
            if (array[i].getOrderValue() == array[i + 1].getOrderValue()
                && array[i].getOrderValue() == array[i + 2].getOrderValue()) {
                three.push(array[i]); //把三位分开储存
                console.log("i为" + i + "时，符合要求的three值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        var fh = false;
        for (var i = 0; i < three.length - 1; i++) {
            //console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
            if (three[i].getOrderValue() - three[i + 1].getOrderValue() === 1) {
                fh = true;
            }
            else {
                fh = false;
            }
        }
        console.log("符合要求吗？  " + fh);
        if (!fh)
            return -1;
        var threeDelete = [];
        for (var i = 0; i < three.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array[j].getOrderValue() === three[i].getOrderValue()) {
                    //console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
                    //array = PokerUtils.removePokers(array,[array[j]]);
                    threeDelete.push(array[j]);
                    console.log("要删除的：id" + array[j].getId() + ",value:" + array[j].getOrderValue());
                }
            }
        }
        array = PokerUtils.removePokers(array, threeDelete);
        //if(1) return -1;
        for (var a = 0; a < array.length; a++) {
            console.log("剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        console.log("取对子");
        //取对子
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].getOrderValue() === array[i + 1].getOrderValue()) {
                two.push(array[i]);
                console.log("i为" + i + "时，符合要求的two值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        //如果三张长度不等于对子长度，返回false
        if (three.length != two.length)
            return -1;
        //如果去掉对子连续三张还有牌，则return -1
        var twoDelete = [];
        for (var i = 0; i < two.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (two[i].getOrderValue() === array[j].getOrderValue()) {
                    twoDelete.push(array[j]);
                }
            }
        }
        array = PokerUtils.removePokers(array, twoDelete);
        for (var a = 0; a < array.length; a++) {
            console.log("two剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        if (array.length > 0)
            return null;
        console.log("看对子是否连续");
        //看对子是否连续2233
        var tw = false;
        for (var i = 0; i < two.length - 1; i++) {
            if (two[i].getOrderValue() - two[i + 1].getOrderValue() === 1) {
                tw = true;
            }
            else {
                tw = false;
            }
        }
        console.log("tw:" + tw);
        //连续符合
        var reArray = new Array();
        if (tw) {
            //如果连续判断对子跟三张是否连续
            if (two[two.length - 1].getOrderValue() - three[0].getOrderValue() === 1) {
                return three[three.length - 1].getOrderValue();
            }
        }
        else {
            console.log("不符合要求");
            return -1;
        }
        return -1;
    };
    /**
     * 判断一手牌是否是飞机带N对【未判断】是连对
     * 3334445566	3344555666	3344455566
     * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
     */
    PokerTypeUtils.isPlaneNpairsConnection2332 = function (array) {
        //console.log("是飞机带N对Connection2332");
        if (array.length < 10 || array.length > 25)
            return -1;
        var three = [];
        var two = [];
        for (var a = 0; a < array.length; a++) {
            console.log("当前--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        for (var i = 0; i < array.length - 2; i++) {
            if (array[i].getOrderValue() == array[i + 1].getOrderValue()
                && array[i].getOrderValue() == array[i + 2].getOrderValue()) {
                three.push(array[i]); //把三位分开储存
                console.log("i为" + i + "时，符合要求的three值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        var fh = false;
        for (var i = 0; i < three.length - 1; i++) {
            //console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
            if (three[i].getOrderValue() - three[i + 1].getOrderValue() === 1) {
                fh = true;
            }
            else {
                fh = false;
            }
        }
        console.log("符合要求吗？  " + fh);
        if (!fh)
            return -1;
        var threeDelete = [];
        for (var i = 0; i < three.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array[j].getOrderValue() === three[i].getOrderValue()) {
                    //console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
                    //array = PokerUtils.removePokers(array,[array[j]]);
                    threeDelete.push(array[j]);
                    console.log("要删除的：id" + array[j].getId() + ",value:" + array[j].getOrderValue());
                }
            }
        }
        array = PokerUtils.removePokers(array, threeDelete);
        //if(1) return -1;
        for (var a = 0; a < array.length; a++) {
            console.log("剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        console.log("取对子");
        //取对子
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].getOrderValue() === array[i + 1].getOrderValue()) {
                two.push(array[i]);
                console.log("i为" + i + "时，符合要求的two值为" + array[i].getOrderValue() + ",id为" + array[i].getId());
            }
        }
        //如果三张长度不等于对子长度，返回false
        if (three.length != two.length)
            return -1;
        //如果去掉对子连续三张还有牌，则return -1
        var twoDelete = [];
        for (var i = 0; i < two.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (two[i].getOrderValue() === array[j].getOrderValue()) {
                    twoDelete.push(array[j]);
                }
            }
        }
        array = PokerUtils.removePokers(array, twoDelete);
        for (var a = 0; a < array.length; a++) {
            console.log("two剩下--id:" + array[a].getId() + ",value:" + array[a].getOrderValue());
        }
        if (array.length > 0)
            return null;
        console.log("看对子是否连续");
        //看对子是否连续2233
        var tw = false;
        for (var i = 0; i < two.length - 1; i++) {
            if (two[i].getOrderValue() - two[i + 1].getOrderValue() === 1) {
                tw = true;
            }
            else {
                tw = false;
            }
        }
        var intArray = [];
        if (!tw) {
            for (var i = 0; i < three.length; i++) {
                intArray.push(three[i].getOrderValue());
            }
            for (var i = 0; i < two.length; i++) {
                intArray.push(two[i].getOrderValue());
            }
            intArray = intArray.sort();
        }
        var pdd = false;
        for (var i = 0; i < intArray.length - 1; i++) {
            if (intArray[i] === intArray[i + 1] - 1) {
                pdd = true;
            }
            else {
                pdd = false;
            }
        }
        if (pdd) {
            return two[0].getOrderValue();
        }
        return -1;
    };
    /**
     * 炸弹
     */
    PokerTypeUtils.typeBoom = "typeBoom";
    /**
     * 四王通天炸
     */
    PokerTypeUtils.typeKingBoom = "typeKingBoom";
    /**
     * 单张
     */
    PokerTypeUtils.typeSingle = "typeSingle";
    /**
     * 对子
     */
    PokerTypeUtils.typePair = "typePair";
    /**
     * 连对
     */
    PokerTypeUtils.typeStraightPairs = "typeStraightPairs";
    /**
     * 三张
     */
    PokerTypeUtils.typeThree = "typeThree";
    /**
     * 三带一对,分乱靠，上下靠，此为乱靠
     */
    PokerTypeUtils.typeThreePair = "typeThreePair";
    /**
     * 三带一对,上靠
     */
    PokerTypeUtils.typeThreePairOn = "typeThreePairOn";
    /**
     * 三带一对,下靠
     */
    PokerTypeUtils.typeThreePairUnder = "typeThreePairUnder";
    /**
     * 飞机
     */
    PokerTypeUtils.typePlane = "typePlane";
    /**
     * 飞机(N)带N对
     */
    PokerTypeUtils.typePlaneNPairs = "typePlaneNPairs";
    /**
     * 飞机(N)带N对，对子连续
     */
    PokerTypeUtils.typePlaneNPairsConnection = "typePlaneNPairsConnection";
    /**
     * 飞机(N)带N对，连对,3334445566
     */
    PokerTypeUtils.typePlaneNPairsConnection3322 = "typePlaneNPairsConnection3322";
    /**
     * 飞机(N)带N对，连对,3344555666
     */
    PokerTypeUtils.typePlaneNPairsConnection2233 = "typePlaneNPairsConnection2233";
    /**
     * 飞机(N)带N对，连对,3344455566
     */
    PokerTypeUtils.typePlaneNPairsConnection2332 = "typePlaneNPairsConnection2332";
    return PokerTypeUtils;
}());
__reflect(PokerTypeUtils.prototype, "PokerTypeUtils");
