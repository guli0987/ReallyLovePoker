class GameSceneView extends egret.Sprite
{
    public static _gameScene:GameSceneView;
    private thisContainer:egret.Sprite;
    private cuntPage:any;
    constructor()
    {
        super();
        GameSceneView._gameScene = this;
        this.initView();
    }

    private initView():void
    {
        console.log("initView");
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.errorResponse, this);
        this.thisContainer = new egret.Sprite();
        this.addChild(this.thisContainer);
        this.login();//微信授权取消,直接登录
    }

    private errorResponse(event:egret.Event){
        //mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.errorResponse, this);
        let errcode:number = event.data.errCode;
        let errmsg:string = event.data.errMsg;
        if(errcode == 1001){//网络断线
            if(errmsg != "" && errmsg.indexOf("hotel") >= 0){
                GameSceneView._gameScene.errorView(1,"错误回调：errCode=" + errcode + " errMsg="+errmsg);
            }else{
                 GameSceneView._gameScene.errorView(0,"错误回调：errCode=" + errcode + " errMsg="+errmsg);
            }
        }
    }

    //登录
    public login():void
    {
        this.removeAll();
        var loginview:Login = new Login();
        this.thisContainer.addChild(loginview);
    }

    //在线大厅
    public lobby():void
    {
        this.removeAll();
        var lobbyView:Lobby = new Lobby();
        this.thisContainer.addChild(lobbyView);
    }

    //匹配
    public match(tags:number, info?:any):void{
        this.removeAll();
        let match:MatchUI = new MatchUI();
        match.setJoinParame(tags, info);
        this.thisContainer.addChild(match);
    }


    //开玩
	public play():void{
		this.removeAll();
        let gamePlay:MultiplayerOnline = new MultiplayerOnline();
        this.cuntPage = gamePlay;
        this.thisContainer.addChild(gamePlay);
	}

    //游戏结束，返回结果
	public showResult(users:Array<GameUser>, roomID:string):void{
		/*this.removeAll();
        let resultView:GameResult = new GameResult();
        resultView.setResult(users, roomID);
        this.thisContainer.addChild(resultView);*/
	}    

    //显示房间列表
    public showRoomList(){
        this.removeAll();
        let roomlist:RoomListUI = new RoomListUI();
        this.thisContainer.addChild(roomlist);
        
    }

    //属性匹配
    public tagsMatchView(){
        this.removeAll();
        let tagsmatchvs = new MatchProperty();
        this.thisContainer.addChild(tagsmatchvs);
        
    }

    /**
     * 创建房间
     */
    public createRoom(roomID ? :string, userPropery ?:string){
        this.removeAll();
        let containt:MatchUI = new MatchUI();
        containt.setJoinParame(MatchUI.JOINFLAG.CREATEROOM);
        this.thisContainer.addChild(containt);
    }

    /**
     * 通过房间号加入指定房间
     */
    public joinRoomSpecial(){
        this.removeAll();
        let joinroom = new MatchRoomID();
        this.thisContainer.addChild(joinroom);
    }

    //重连接
    public reconnectView(){
        this.removeAll();
        let reconnect = new ReconnectUI();
        this.thisContainer.addChild(reconnect);
    }


    //显示错误
    public errorView(pageNo:number,msg:string):void{
        this.removeAll();
        GameData.init();
        let errorView = new ErrorNote();
        errorView.SetErrorMsg(msg);  
        this.thisContainer.addChild(errorView);
    }


    //移除子布局
    private removeAll():void
    {
        if(this.cuntPage && this.cuntPage.release){
            console.log("释放");
            this.cuntPage.release();
            this.cuntPage = null;
        }
        this.thisContainer.removeChildren();
    }

    
}