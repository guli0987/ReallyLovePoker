var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RoomManager = (function () {
    function RoomManager() {
    }
    /**
     * Client请求进入房间
     */
    RoomManager.Request_onRoom = 1001;
    /**
     * Client准备就绪
     */
    RoomManager.Request_BeReady = 1002;
    /**
     * Client叫/抢地主
     */
    RoomManager.Request_CallTheLandlord = 1003;
    /**
     * Client出牌
     */
    RoomManager.Request_Discard = 1004;
    /**
     * Server返回Socket连接成功建立
     */
    RoomManager.Response_InitUserOK = 2000;
    /**
     * Server返回房间和房间里的其他玩家信息
     */
    RoomManager.Response_RoomInfo = 2001;
    /**
     * Server通知有新玩家加入
     */
    RoomManager.Response_NewPlayerJoin = 20011;
    /**
     * Server通知客户端准备
     */
    RoomManager.Response_Reday = 2002;
    /**
     * Server发牌
     */
    RoomManager.Response_DealPoker = 2003;
    /**
     * Server通知玩家丢牌----------新加
     */
    RoomManager.Response_ToThrowAPoker = 20050;
    /**
     * Server通知玩家叫/抢地主
     */
    RoomManager.Response_ToCallTheLandlord = 2005;
    /**
     * Server通知玩家地主归属和底牌
     */
    RoomManager.Response_LandlordAndLastCard = 2006;
    /**
     * Server通知玩家出牌
     */
    RoomManager.Response_Discard = 2007;
    /**
     * Server通知玩家游戏结束
     */
    RoomManager.Response_GameOver = 2008;
    RoomManager.Victory_Landlord = "Landlord";
    RoomManager.Victory_Farmer = "Farmer";
    /**
     * 接替出牌按钮组
     */
    RoomManager.ButtonsTakeOverOutPokers = 8;
    /**
     * 工具栏
     */
    RoomManager.ButtonsTools = 7;
    /**
     * 工具栏弹出提示
     */
    RoomManager.ButtonsExpand = 6;
    /**
     * 切牌按钮组类型
     */
    RoomManager.ButtonsGameTest = 6;
    /**
     * 切牌按钮组类型
     */
    RoomManager.ButtonsToSwitchAPoker = 5;
    /**
     * 抽牌按钮组类型
     */
    RoomManager.ButtonsToDrawAPoker = 4;
    /**
     * 丢牌按钮组类型
     */
    RoomManager.ButtonsToThrowAPoker = 3;
    /**
     * 出牌按钮组
     */
    RoomManager.ButtonsDiscard = 2;
    /**
     * 游戏结束按钮组
     */
    RoomManager.ButtonsGameOver = 1;
    return RoomManager;
}());
__reflect(RoomManager.prototype, "RoomManager");
