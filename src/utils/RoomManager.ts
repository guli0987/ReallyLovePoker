class RoomManager {
	public constructor() {
	}

    /**
     * Client请求进入房间
     */
    public static  Request_onRoom = 1001;
    /**
     * Client准备就绪
     */
    public static  Request_BeReady = 1002;
    /**
     * Client叫/抢地主
     */
    public static  Request_CallTheLandlord = 1003;
    /**
     * Client出牌
     */
    public static  Request_Discard = 1004;

    /**
     * Server返回Socket连接成功建立
     */
    public static Response_InitUserOK = 2000;

    /**
     * Server返回房间和房间里的其他玩家信息
     */
    public static  Response_RoomInfo = 2001;
    /**
     * Server通知有新玩家加入
     */
    public static  Response_NewPlayerJoin = 20011;
    /**
     * Server通知客户端准备
     */
    public static  Response_Reday = 2002;
    /**
     * Server发牌
     */
    public static  Response_DealPoker = 2003;
    /**
     * Server通知玩家丢牌----------新加
     */
    public static  Response_ToThrowAPoker = 20050;
    /**
     * Server通知玩家叫/抢地主
     */
    public static  Response_ToCallTheLandlord = 2005;
    /**
     * Server通知玩家地主归属和底牌
     */
    public static  Response_LandlordAndLastCard = 2006;
    /**
     * Server通知玩家出牌
     */
    public static  Response_Discard = 2007;

    /**
     * Server通知玩家游戏结束
     */
    public static  Response_GameOver = 2008;

    public static  Victory_Landlord = "Landlord";

    public static  Victory_Farmer = "Farmer";
    /**
     * 接替出牌按钮组
     */
    public static ButtonsTakeOverOutPokers = 8;
    /**
     * 工具栏
     */
    public static ButtonsTools= 7;
    /**
     * 工具栏弹出提示
     */
    public static ButtonsExpand= 6;
    /**
     * 切牌按钮组类型
     */
    public static ButtonsGameTest= 6;
    /**
     * 切牌按钮组类型
     */
    public static ButtonsToSwitchAPoker= 5;
    /**
     * 抽牌按钮组类型
     */
    public static ButtonsToDrawAPoker= 4;
    /**
     * 丢牌按钮组类型
     */
    public static ButtonsToThrowAPoker= 3;
    /**
     * 出牌按钮组
     */
    public static ButtonsDiscard = 2;
    /**
     * 游戏结束按钮组
     */
    public static ButtonsGameOver = 1;

}