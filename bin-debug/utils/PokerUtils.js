var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PokerUtils = (function () {
    function PokerUtils() {
    }
    /**
     * 从gameserver中获取扑克牌
     */
    PokerUtils.getGameServerPokers = function (jsonData) {
        var json_data = JSON.parse(JSON.stringify(jsonData.data));
        var pokers = new Array();
        for (var i = 0; i < this.pokerIds.length; i++) {
            var poker = new Poker(this.pokerIds[json_data.Pokers[i] - 1], this.pokerSortValues[json_data.Pokers[i] - 1]);
            pokers.push(poker);
        }
        console.log("getGameServerPokers:已随机生成一副牌", pokers.toString());
        return pokers;
    };
    /**
     * 从gameserver中获取玩家所出的扑克牌
     */
    PokerUtils.getGameServerOutPokers = function (jsonData) {
        var json_data = JSON.parse(JSON.stringify(jsonData.data));
        var pokers = new Array();
        for (var i = 0; i < json_data.PokersID.length; i++) {
            var poker = new Poker(this.pokerIds[json_data.PokersID[i] - 1], this.pokerSortValues[json_data.PokersID[i] - 1]);
            pokers.push(poker);
        }
        console.log("getGameServerOutPokers:玩家所出牌", pokers.toString());
        return pokers;
    };
    /**
     * 随机生成一副牌
     */
    PokerUtils.getRandomPokers = function () {
        //定义Poker数组，这是最终要生成的一副扑克牌
        var pokers = new Array();
        //选中的牌的下标
        var index;
        //将pokerIds重新复制一份作为选牌期间要处理的数组
        var newArray = this.pokerIds.slice();
        //选中的牌的id
        var pokerIndex;
        //选中的牌的id组成的数组
        var array = [];
        //遍历扑克牌Id数组
        for (var i = 0; i < this.pokerIds.length; i++) {
            //随机生成一个小于要处理的数组长度的整数，作为选中的牌的下标
            //Math.random()范围为[0,1),newArray.length为108,[0,108)
            index = Math.floor(Math.random() * newArray.length);
            //取数选中的id
            pokerIndex = newArray[index];
            //将选中的id放入数组
            array.push(pokerIndex);
            //将选剩下的牌重新组成一个数组
            newArray = ArrayUtils.slice(newArray, 0, index).concat(ArrayUtils.slice(newArray, index + 1, newArray.length));
        }
        //遍历选中的扑克id
        for (var j = 0; j < array.length; j++) {
            //从pokerIds和pokerSortValues中取出对应的属性值组成一幅扑克牌
            var poker = new Poker(this.pokerIds[array[j] - 1], this.pokerSortValues[array[j] - 1]);
            pokers.push(poker);
        }
        console.log("已随机生成一副牌", pokers.toString());
        return pokers;
    };
    PokerUtils.sortDescPokers = function (pokers) {
        return pokers.sort(this.sortDesc);
    };
    /**
     * 正序排列
     */
    PokerUtils.sortAscPokers = function (pokers) {
        return pokers.sort(this.sortAsc);
    };
    /**
     * 从一个数组中移除一些元素
     * 使用 ArrayUtils.removeElements时发现，其对对象数组无效，自己写了一个
     */
    PokerUtils.removePokers = function (array, elements) {
        var result = new Array();
        for (var i = 0; i < array.length; i++) {
            var falg = false;
            for (var j = 0; j < elements.length; j++) {
                if (array[i].getId() == elements[j].getId()) {
                    falg = true;
                }
            }
            if (!falg) {
                result.push(array[i]);
            }
        }
        return result;
    };
    /**
     * 在原有扑克的基础上添加扑克
     * 用于交换牌(单张)
     */
    PokerUtils.addExchangePoker = function (array, elements) {
        //let result:Array<Poker> = new Array<Poker>();
        for (var i = 0; i < elements.length; i++) {
            array.push(elements[i]);
        }
        return this.sortDescPokers(array);
    };
    /**
     * 倒序排列的排序条件
     */
    PokerUtils.sortDesc = function (a, b) {
        if (a.getOrderValue() < b.getOrderValue())
            return 1;
        else if (a.getOrderValue() > b.getOrderValue())
            return -1;
        else
            return 0;
    };
    /**
     * 正序排列的排序条件
     */
    PokerUtils.sortAsc = function (a, b) {
        if (a.getOrderValue() > b.getOrderValue())
            return 1;
        else if (a.getOrderValue() < b.getOrderValue())
            return -1;
        else
            return 0;
    };
    PokerUtils.getRandomUser = function () {
        var user = this.randomUsers[Math.floor(Math.random() * this.randomUsers.length)];
        return new User(user.name, user.sex);
    };
    PokerUtils.getRandomTextTip = function () {
        return this.textTip[Math.floor(Math.random() * this.textTip.length)];
    };
    /**
     * TODO 去掉pokerIds，而将该数组的下标作为牌的id
     * 牌大小
     */
    PokerUtils.pokerSortValues = [
        12, 12, 12, 12, 12, 12, 12, 12,
        13, 13, 13, 13, 13, 13, 13, 13,
        1, 1, 1, 1, 1, 1, 1, 1,
        2, 2, 2, 2, 2, 2, 2, 2,
        3, 3, 3, 3, 3, 3, 3, 3,
        4, 4, 4, 4, 4, 4, 4, 4,
        5, 5, 5, 5, 5, 5, 5, 5,
        6, 6, 6, 6, 6, 6, 6, 6,
        7, 7, 7, 7, 7, 7, 7, 7,
        8, 8, 8, 8, 8, 8, 8, 8,
        9, 9, 9, 9, 9, 9, 9, 9,
        10, 10, 10, 10, 10, 10, 10, 10,
        11, 11, 11, 11, 11, 11, 11, 11,
        14, 14, 15, 15 //King
    ];
    /**
     * A的大小值
     */
    PokerUtils.AValue = 12;
    PokerUtils.BigKingValue = 15;
    PokerUtils.SmallKingValue = 14;
    /**
    * 牌面的id，可以和图片绑定
    */
    PokerUtils.pokerIds = [
        1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32,
        33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48,
        49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64,
        65, 66, 67, 68, 69, 70, 71, 72,
        73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88,
        89, 90, 91, 92, 93, 94, 95, 96,
        97, 98, 99, 100, 101, 102, 103, 104,
        105, 106, 107, 108
    ]; //King
    PokerUtils.randomUsers = [
        { uid: "1001", name: "大可", sex: "man" },
        { uid: "1002", name: "Tiger", sex: "lady" },
        { uid: "1003", name: "翔", sex: "man" },
        { uid: "1004", name: "傻源源", sex: "man" },
        { uid: "1005", name: "傻乐乐", sex: "man" },
        { uid: "1006", name: "小巴西", sex: "lady" },
        { uid: "1007", name: "油烟机", sex: "man" },
        { uid: "1008", name: "可乐鸡翅", sex: "lady" },
        { uid: "1009", name: "酸辣土豆丝", sex: "lady" },
        { uid: "1010", name: "糖拌西红柿", sex: "man" },
        { uid: "1011", name: "拍黄瓜", sex: "man" },
        { uid: "1012", name: "空调没有遥控器", sex: "man" },
        { uid: "1013", name: "这么晚了还不回家", sex: "lady" },
        { uid: "1014", name: "程咬金", sex: "man" },
        { uid: "1015", name: "猫砂不会盖", sex: "man" },
        { uid: "1016", name: "风扇不摇头", sex: "man" },
        { uid: "1017", name: "油炸花生米", sex: "man" },
        { uid: "1018", name: "电视不能看", sex: "man" },
        { uid: "1019", name: "绿萝", sex: "lady" },
        { uid: "1020", name: "薄荷糖不麻", sex: "lady" },
        { uid: "1021", name: "翔的小姐姐", sex: "lady" },
        { uid: "1022", name: "孤单想吃西瓜", sex: "man" },
        { uid: "1023", name: "一个人看烟花", sex: "lady" },
        { uid: "1024", name: "大海啊你全是水", sex: "man" },
        { uid: "1025", name: "骏马啊你四条腿", sex: "man" }
    ];
    PokerUtils.textTip = [
        "不要", "没你的大", "要不起", "你厉害", "我认怂", "你牛", "过", "GO", "PASS", "0.0"
    ];
    return PokerUtils;
}());
__reflect(PokerUtils.prototype, "PokerUtils");
