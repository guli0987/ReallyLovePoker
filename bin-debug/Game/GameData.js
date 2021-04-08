var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    /**房间最大人数 (0-全部),模式（0-全部）*创建房间时，mode最好不要填0,是否可以观战（0-全部 1-可以 2-不可以）,房间属性,0-全部 1-满 2-未满,0-全部 1-开放 2-关闭,0-不排序 1-创建时间排序 2-玩家数量排序 3-状态排序,0-ASC 1-DESC,页码，0为第一页,每一页的数量应该大于 0,是否获取系统创建的房间,0玩家创建,1系统创建,2玩家+系统创建 */
    GameData.init = function () {
        this.isGameOver = true;
        this.isRoomOwner = false;
        this.syncFrame = false;
        this.number1 = "";
        this.number2 = "";
        this.number3 = "";
        this.number4 = "";
        this.roomID = "";
        this.intervalList = [];
        this.playerUserIds = [];
        this.roomPropertyValue = this.roomPropertyType.mapA;
    };
    GameData.CHANNEL = "MatchVS";
    GameData.DEFAULT_ENV = "alpha";
    GameData.RELEASE_TEST = "release";
    GameData.ENVIRONMENT = { "dev": "alpha", "pro": "release" };
    GameData.gameID = 217926;
    GameData.appkey = "3eeaf009789a4201a0a725e63372c3f2#E";
    GameData.secretKey = "daa105d7eea34f1cabdf610c29691265";
    GameData.gameUser = new GameUser();
    GameData.playerUserIds = [];
    GameData.matchType = 0; //匹配类型
    GameData.randomMatch = 1; //随机匹配
    GameData.specialMatch = 2; //指定房间号匹配
    GameData.tagsMatch = 3; //指定属性匹配
    GameData.maxPlayerNum = 4;
    GameData.isRoomOwner = false;
    GameData.gameStartEvent = "gameStart";
    GameData.playerPositionEvent = "playerPosition";
    GameData.reconnectStartEvent = "gameReconnectStart";
    GameData.newStarEvent = "newStar";
    GameData.changeStarEvent = "changeStar";
    GameData.gameReadyEvent = "gameReady";
    GameData.reconnectReadyEvent = "gameReconnectReady";
    GameData.events = {};
    GameData.syncFrame = false;
    GameData.isGameOver = false;
    GameData.starPositionX = 0;
    GameData.starPositionY = 0;
    GameData.frameRate = 5;
    GameData.defaultHeight = 400;
    GameData.roomID = "";
    GameData.intervalList = []; //定时器列表
    GameData.number1 = "";
    GameData.number2 = "";
    GameData.number3 = "";
    GameData.number4 = "";
    GameData.playerTime = 60;
    GameData.roomPropertyType = { "mapA": "mapA", "mapB": "mapB" };
    GameData.roomPropertyValue = "mapA";
    GameData.createRoomInfo = new MsCreateRoomInfo("MatchvsRoom", 4, 0, 0, 1, "mapA"); //房间名，最大玩家数，模式，是否可以观战，是否默认可见，房间属性
    GameData.thefilter = new MsRoomFilterEx(GameData.createRoomInfo.maxPlayer, GameData.createRoomInfo.mode, GameData.createRoomInfo.canWatch, GameData.createRoomInfo.roomProperty, 0, 1, 0, 0, 0, 10);
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
