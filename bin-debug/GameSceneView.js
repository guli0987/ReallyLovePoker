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
var GameSceneView = (function (_super) {
    __extends(GameSceneView, _super);
    function GameSceneView() {
        var _this = _super.call(this) || this;
        GameSceneView._gameScene = _this;
        _this.initView();
        return _this;
    }
    GameSceneView.prototype.initView = function () {
        console.log("initView");
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.errorResponse, this);
        this.thisContainer = new egret.Sprite();
        this.addChild(this.thisContainer);
        this.login(); //微信授权取消,直接登录
    };
    GameSceneView.prototype.errorResponse = function (event) {
        //mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.errorResponse, this);
        var errcode = event.data.errCode;
        var errmsg = event.data.errMsg;
        if (errcode == 1001) {
            if (errmsg != "" && errmsg.indexOf("hotel") >= 0) {
                GameSceneView._gameScene.errorView(1, "错误回调：errCode=" + errcode + " errMsg=" + errmsg);
            }
            else {
                GameSceneView._gameScene.errorView(0, "错误回调：errCode=" + errcode + " errMsg=" + errmsg);
            }
        }
    };
    //登录
    GameSceneView.prototype.login = function () {
        this.removeAll();
        var loginview = new Login();
        this.thisContainer.addChild(loginview);
    };
    //在线大厅
    GameSceneView.prototype.lobby = function () {
        this.removeAll();
        var lobbyView = new Lobby();
        this.thisContainer.addChild(lobbyView);
    };
    //匹配
    GameSceneView.prototype.match = function (tags, info) {
        this.removeAll();
        var match = new MatchUI();
        match.setJoinParame(tags, info);
        this.thisContainer.addChild(match);
    };
    //开玩
    GameSceneView.prototype.play = function () {
        this.removeAll();
        var gamePlay = new MultiplayerOnline();
        this.cuntPage = gamePlay;
        this.thisContainer.addChild(gamePlay);
    };
    //游戏结束，返回结果
    GameSceneView.prototype.showResult = function (users, roomID) {
        /*this.removeAll();
        let resultView:GameResult = new GameResult();
        resultView.setResult(users, roomID);
        this.thisContainer.addChild(resultView);*/
    };
    //显示房间列表
    GameSceneView.prototype.showRoomList = function () {
        this.removeAll();
        var roomlist = new RoomListUI();
        this.thisContainer.addChild(roomlist);
    };
    //属性匹配
    GameSceneView.prototype.tagsMatchView = function () {
        this.removeAll();
        var tagsmatchvs = new MatchProperty();
        this.thisContainer.addChild(tagsmatchvs);
    };
    /**
     * 创建房间
     */
    GameSceneView.prototype.createRoom = function (roomID, userPropery) {
        this.removeAll();
        var containt = new MatchUI();
        containt.setJoinParame(MatchUI.JOINFLAG.CREATEROOM);
        this.thisContainer.addChild(containt);
    };
    /**
     * 通过房间号加入指定房间
     */
    GameSceneView.prototype.joinRoomSpecial = function () {
        this.removeAll();
        var joinroom = new MatchRoomID();
        this.thisContainer.addChild(joinroom);
    };
    //重连接
    GameSceneView.prototype.reconnectView = function () {
        this.removeAll();
        var reconnect = new ReconnectUI();
        this.thisContainer.addChild(reconnect);
    };
    //显示错误
    GameSceneView.prototype.errorView = function (pageNo, msg) {
        this.removeAll();
        GameData.init();
        var errorView = new ErrorNote();
        errorView.SetErrorMsg(msg);
        this.thisContainer.addChild(errorView);
    };
    //移除子布局
    GameSceneView.prototype.removeAll = function () {
        if (this.cuntPage && this.cuntPage.release) {
            console.log("释放");
            this.cuntPage.release();
            this.cuntPage = null;
        }
        this.thisContainer.removeChildren();
    };
    return GameSceneView;
}(egret.Sprite));
__reflect(GameSceneView.prototype, "GameSceneView");
