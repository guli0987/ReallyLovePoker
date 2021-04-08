class GameData {
    public static CHANNEL = "MatchVS";
    public static DEFAULT_ENV = "alpha";
    public static RELEASE_TEST = "release";
    public static ENVIRONMENT = { "dev": "alpha", "pro": "release" }
    public static gameID: number = 217926;
    public static appkey: string = "3eeaf009789a4201a0a725e63372c3f2#E";
    public static secretKey: string = "daa105d7eea34f1cabdf610c29691265";

    public static gameUser: GameUser = new GameUser();
    public static playerUserIds: Array<GameUser> = [];

    public static matchType: number = 0; //匹配类型
    public static randomMatch: number = 1;//随机匹配
    public static specialMatch: number = 2;//指定房间号匹配
    public static tagsMatch: number = 3; //指定属性匹配
    public static maxPlayerNum: number = 4;
    public static isRoomOwner: boolean = false;
    
    public static gameStartEvent: string = "gameStart";
    public static playerPositionEvent: string = "playerPosition";
    public static reconnectStartEvent: string = "gameReconnectStart";
    public static newStarEvent: string = "newStar";
    public static changeStarEvent: string = "changeStar";
    public static gameReadyEvent: string = "gameReady";
    public static reconnectReadyEvent: string = "gameReconnectReady";

    public static events = {};
    public static syncFrame: boolean = false;
    public static isGameOver: boolean = false;
    public static starPositionX: number = 0;
    public static starPositionY: number = 0;
    public static frameRate: number = 5;
    public static defaultHeight: number = 400;
    public static roomID: string = "";
    public static intervalList: Array<number> = []; //定时器列表
    public static number1: string = "";
    public static number2: string = "";
    public static number3: string = "";
    public static number4: string = "";
    public static width: number;
    public static height: number;
    public static playerTime: number = 60;
    public static roomPropertyType = { "mapA": "mapA", "mapB": "mapB" };
    public static roomPropertyValue = "mapA";
    public static createRoomInfo = new MsCreateRoomInfo("MatchvsRoom", 4, 0, 0, 1, "mapA");//房间名，最大玩家数，模式，是否可以观战，是否默认可见，房间属性
    public static thefilter = new MsRoomFilterEx(GameData.createRoomInfo.maxPlayer,GameData.createRoomInfo.mode,GameData.createRoomInfo.canWatch,GameData.createRoomInfo.roomProperty, 0, 1, 0, 0, 0, 10);
    /**房间最大人数 (0-全部),模式（0-全部）*创建房间时，mode最好不要填0,是否可以观战（0-全部 1-可以 2-不可以）,房间属性,0-全部 1-满 2-未满,0-全部 1-开放 2-关闭,0-不排序 1-创建时间排序 2-玩家数量排序 3-状态排序,0-ASC 1-DESC,页码，0为第一页,每一页的数量应该大于 0,是否获取系统创建的房间,0玩家创建,1系统创建,2玩家+系统创建 */

    public static init(){
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
    }
}