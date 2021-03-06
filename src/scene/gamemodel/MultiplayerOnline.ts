class MultiplayerOnline extends egret.DisplayObjectContainer{

    //头像
    private portraitPlayer: PortraitContainer;//玩家头像
    private portraitLeft: PortraitOtherContainer;//上家头像
    private portraitRight: PortraitOtherContainer;//下家头像
    private portraitTop: PortraitOtherContainer;//顶部头像
    //随机用户资料
    private user: User = PokerUtils.getRandomUser();
    private userLeft: User = PokerUtils.getRandomUser();
    private userTop: User = PokerUtils.getRandomUser();
    private userRight: User = PokerUtils.getRandomUser();
    //随机头像索引
    private playerIndex: number = Math.floor(Math.random() * 10) + 1;
    private rightIndex: number = Math.floor(Math.random() * 10) + 1;
    private topIndex: number = Math.floor(Math.random() * 10) + 1;
    private leftIndex: number = Math.floor(Math.random() * 10) + 1;
    //玩家座位号
    private mySeat: number = 1;
    private rightSeat: number = 2;
    private topSeat: number = 3;
    private leftSeat: number = 4;
    //是不是同一阵营
    private playerCamp :boolean =false;
    private rightCamp :boolean =false;
    private topCamp :boolean =false;
    private leftCamp :boolean =false;
    //同阵营的座位号
    private playerCampNumber :number =-1;
    private rightCampNumber :number =-1;
    private topCampNumber :number =-1;
    private leftCampNumber :number =-1;
    //是否初进游戏，决定加载阵营与否
    private isFirst: boolean = true;
    //初始化一副牌（洗牌）
    private pokers: Array<Poker> = PokerUtils.getRandomPokers();
    //玩家发到的牌
    private pokersPlayer: Array<Poker> = new Array<Poker>();
    //优先丢牌人座位号
    private firstThrowPokerSeat: number = -1;
    //优先出牌人座位号
    private firstOutPokerSeat: number = -1;
    //测试，优先丢牌人和优先出牌人id
    /*private firstThrowPokerId: number = -1;
    private firstOutPokerId: number = -1;*/
    /**
     * 抽牌
     */
    private drawpoker: PokerDrawContainer;//要抽的牌
    //抽到的牌的id
    //抽到的牌的值
    private draggedUp: egret.Bitmap;//保存抽取的上一张牌点击事件
    private draggedDown: egret.Bitmap;//保存抽取的上一张牌点击事件
    //玩家抽取的牌
    private pokerDrawArray: Array<Poker> = new Array<Poker>();
    private drawPokerRandom: number = Math.floor(Math.random() * 4 + 1);//[1,5)选取随机抽牌玩家
    private buttons: PlayerButtonContainer;//按钮组,显示抽牌、丢牌、[不要、提示、出牌]
    //抽到的牌的索引
    private drawPokerIndex: number = -1;
    private drawPokerId: number = -1;
    private drawPokerValue: number = -1;
    //抽到的暗牌的索引
    private darkPokerIndex: number = -1;
    private darkPokerId: number = -1;
    private darkPokerValue: number = -1;
    //优先丢牌、出牌头衔
    private fistThrowTitle: FirstThrowTitleContainer;
    private fistOutTitle: FirstOutTitleContainer;
    /**
     * 剩余牌数量
     */
    private playerCount: OtherPokerCountContains;
    private topCount: OtherPokerCountContains;
    private leftCount: OtherPokerCountContains;
    private rightCount: OtherPokerCountContains;
    private throwPokerMe:number;
    private throwPokerRight:number;
    private throwPokerTop:number;
    private throwPokerLeft:number;
    //定义要丢的牌
    private checkThrowPoker: Array<Poker> = new Array<Poker>();
    //玩家要丢的牌
    private PlayerThrowPoker: Array<Poker> = new Array<Poker>();
    //right家要丢的牌
    private RightThrowPoker: Array<Poker> = new Array<Poker>();
    //top家要丢的牌
    private TopThrowPoker: Array<Poker> = new Array<Poker>();
    //left家要丢的牌
    private LeftThrowPoker: Array<Poker> = new Array<Poker>();
    //玩家丢牌定义
    private playerThrowPoker: PokerThrowContainer;
    //right丢牌定义
    private rightThrowPoker: PokerThrowContainer;
    //top丢牌定义
    private topThrowPoker: PokerThrowContainer;
    //left丢牌定义
    private leftThrowPoker: PokerThrowContainer;
    //准备程度
    private PlayerReady:boolean = false;
    private RightReady:boolean = false;
    private TopReady:boolean = false;
    private LeftReady:boolean = false;
    private isInThere:number =-1;
    /**
     * 当前一手牌
     */
    private playedPoker: Array<Poker> = [];
    //private playedSeat: number = -1;
    private playedSeatId: number = -1;
    /**
     * 当前出牌座位号(现在轮到谁出牌)
     */
    //private outPokersSeat: number = -1;
    //private outPokersId: number = -1;
    //定义
    private playerOutPokers: PokerPlayerContainer;
    private topOutPokers: PokerOthersContainer;
    private rightOutPokers: PokerOthersContainer;
    private leftOutPokers: PokerOthersContainer;
    //玩家选择的牌
    private pokerSelectArray: Array<Poker> = new Array<Poker>();
    //top家出的牌
    private TopOutPokers: Array<Poker> = new Array<Poker>();
    //right家出的牌
    private RightOutPokers: Array<Poker> = new Array<Poker>();
    //left家出的牌
    private LeftOutPokers: Array<Poker> = new Array<Poker>();
    //文字提示区
    private textPlayer: TextOtherContainer;
    private textRight: TextOtherContainer;
    private textLeft: TextOtherContainer;
    private textTop: TextOtherContainer;
    








    private _gameTime:number;
    private _score:number;
    private _receiveCountValue:number;
    private moveTimeer:egret.Timer = new egret.Timer(100, 0);//计时
    private _scoreLabel:eui.Label;//分数和资料


    private  userids = [];//要发送到哪些id
    private timer: egret.Timer;//定时器测试
    private _countDownLabel:eui.Label;
    private time:number = 20;

    private _buttonAction:eui.Button;//开始游戏按钮

    /** 东西南北位置不可变动 */
    private northSeat: number = -1;
    private southSeat: number = -1;
    private westSeat: number = -1;
    private eastSeat: number = -1;
    //判断游戏是否结束用
    private northLength: number = 27;
    private southLength: number = 27;
    private westLength: number = 27;
    private eastLength: number = 27;
    //东西南北准备
    private northReady: boolean = false;
    private southReady: boolean = false;
    private westReady: boolean = false;
    private eastReady: boolean = false;

    /**
     * 当前回合数
     */
    private playPokerCount: number = 1;//第一回合激发抽牌，后面大于1则激发搬牌（即上家切牌）

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
		GameData.width = this.stage.stageWidth;
		GameData.height = this.stage.stageHeight;
		this.startLoad();
	}

    private startLoad():void {
		
		GameData.starPositionX = 0;

        if (GameData.syncFrame === true && GameData.isRoomOwner === true) {
			let result = mvs.MsEngine.getInstance.setFrameSync(GameData.frameRate);//设置帧同步
            if (result !== 0){
				console.log('设置帧同步率失败,错误码:' + result);
			}
        }
        /**
		 * 游戏结束标记置空
		 */
		GameData.isGameOver = false;
		this._gameTime = GameData.playerTime;
		this._score = 0;
		this._receiveCountValue = 0;

        /**
         * 加载游戏背景
         */
        let sky: Layout = new Layout(GameData.width,GameData.height);
        this.addChild(sky);

        /**
         * 暂时不改地图颜色
         */

        /**
         * 用户信息显示 暂不做
         */

        /**
         * 房间号显示
         */
        let roomIdLabel = new eui.Label();
        roomIdLabel.textColor = 0xffffff;
        roomIdLabel.fontFamily = "Tahoma";  //设置字体
		roomIdLabel.text = "房间号：" + GameData.roomID;
		roomIdLabel.size = 40;
        roomIdLabel.x = 20;
        roomIdLabel.y = 60;
        this.addChild(roomIdLabel);


        /**
         * 分数
         */

        let scoreLabel = new eui.Label();
        scoreLabel.textColor = 0xffffff;
        scoreLabel.fontFamily = "Tahoma";  //设置字体
		scoreLabel.size = 40;
        scoreLabel.x = 20;
        scoreLabel.y = 100;
		this._scoreLabel = scoreLabel;
        this.addChild(this._scoreLabel);

        /**
         * 延迟显示 暂不做
         */

        /**
         * 收到消息数量 暂不做
         */

        /**
         * 计时 暂不做
         */

        let countDownLabel = new eui.Label();
        countDownLabel.textColor = 0xffffff;
        countDownLabel.fontFamily = "Tahoma";  //设置字体
		countDownLabel.size = 60;
        countDownLabel.x = GameData.width/2;
        countDownLabel.y = 20;
		countDownLabel.text = "倒计时："+20;
		this._countDownLabel = countDownLabel;
        this.addChild(this._countDownLabel);

        /**
         * 有人离开 暂不做
         */

        /**
         * 帧同步时显示帧率  暂不做
         */

        /**
		 * 初始化并且设置分数
		 */
        this.initUserScore();

        this.addMsResponseListen();

        //注册matchvs网络监听事件
		//this.addMsResponseListen();
        this.runGame();

}
    private initUserScore() {
		let i:number = 0;
		for(i = 0; i < GameData.playerUserIds.length; i++) {
			GameData.playerUserIds[i].pValue = 0;
		}
		this.setScoreLabel();
	}
    private setScoreLabel() {

        let me:string = "[我]";
        for(let i =0; i < GameData.playerUserIds.length; i++){
            if(GameData.playerUserIds[i].id !== GameData.gameUser.id){
                me = "";
            }
            GameData["number"+(i+1)] = GameData.playerUserIds[i].name  + ': ' +GameData.playerUserIds[i].id+'>>'+ GameData.playerUserIds[i].pValue + me;
            this._scoreLabel.text = this._scoreLabel.text + GameData["number"+(i+1)] +"\n";
        }

    }

    /**
     * 异步加载资源
     */
    private async runGame() {
        //调用预加载资源方法
        await this.loadGameResource();
        this.sendGameServerEvents(JSON.stringify({
                 action: OnlineEvent.OE_LOADFINISH,
				 uid: GameData.gameUser.id
             }));
        //资源加载完毕后添加开始游戏按钮
        let buttonAction = new eui.Button();
        buttonAction.name = "buttonAction";
        buttonAction.label = "点击开始";
        buttonAction.width = 400;
        buttonAction.height = 100;
        buttonAction.x = 1920/2;
        buttonAction.y = 1080/2;
        this._buttonAction = buttonAction;
        this.addChild(this._buttonAction);
        if(!GameData.gameUser.isOwner){
            buttonAction.enabled = false;
            buttonAction.label = "等待房主开始游戏";
        }
        buttonAction.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonAction, this);
    }

    /**
     * 点击开始游戏按钮
     * 如果点击开始游戏按钮则清除该按钮后调用开始游戏方法
     */
    private onButtonAction(e: egret.TouchEvent) {
        this.sendGameServerEvents(JSON.stringify({
             action: OnlineEvent.OE_GAMESTART
          }));

    }

        //发送各种事件封装方法
    private sendOnlineEvents(json:string):void{
        mvs.MsEngine.getInstance.sendEventEx(0, json, 0, this.userids);
    }
    //发送给GameServer
    private sendGameServerEvents(json:string):void{
        mvs.MsEngine.getInstance.sendEventEx(1, json, 0, []);
    }


    /**
     * 预加载资源
     */
    private async loadGameResource(){
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            //await RES.loadGroup("loadinggame",5);
            const loadingGame = new LoadingProgress();
            //const loadingGame = new LoadingOne();
            this.addChild(loadingGame);
            await RES.loadGroup("portraits",4, loadingGame);
            await RES.loadGroup("drawpoker",3,loadingGame);
            await RES.loadGroup("pokers",2,loadingGame);
            await RES.loadGroup("buttons",1,loadingGame);
            this.removeChild(loadingGame);
        }
        catch (e) {
            console.error(e);
        }
    }


    

    private selectOrder():void{
        if(GameData.gameUser.isOwner){
                this.southSeat = GameData.playerUserIds[0].id;
                this.eastSeat = GameData.playerUserIds[1].id;;
                this.northSeat = GameData.playerUserIds[2].id;;
                this.westSeat = GameData.playerUserIds[3].id;;
                this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_SELECT_ORDER,
                    east:this.eastSeat,
                    south:this.southSeat,
                    west:this.westSeat,
                    north:this.northSeat
                }));
        }
    }


    /**
     * 计时器
     */
    private createTimer(delay: number, times: number, timerRun = (times: number) => { }, timerEnd = () => { }) {
        var timer = new egret.Timer(delay, times);
        timer.addEventListener(egret.TimerEvent.TIMER, timerRun, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, timerEnd, this);
        //开始计时
        timer.start();
    }



    /**
	 * 帧同步更新
	 */
	private frameUpdate(ev:egret.Event) {
		let data = ev.data;

    }


    /**
	 * 收到其他玩家的网络状态情况
	 */
	private networkStateNotify(ev:egret.Event){
		let netnotify = ev.data; 

    }

    /**
	 * 设置帧同步
	 */
	private setFrameSyncResponse(ev:egret.Event) {
		let rsp = ev.data;
		if(rsp.mStatus == 200) {
			console.log("设置帧同步率成功");
		} else {
			console.log("设置帧同步率失败");
		}
	}

    /**
	 * 离开房间异步回调
	 */
	private leaveRoomNotify(ev:egret.Event) {
        console.log("leaveRoomNotify");
		/*GameData.isGameOver = true;
		this.release();
		console.log("2结束房间ID：",  GameData.roomID, GameData.playerUserIds);
		GameSceneView._gameScene.showResult(GameData.playerUserIds,this._roomID);*/
        //GameData.gameUser.isOwner = false;
	}

    private test(){
        //egret.getTimer();
        let idCountDown = setInterval(() => {
			this._countDownLabel.text = (this._gameTime--).toString();
			if(this._gameTime == 0) {
                clearInterval(idCountDown);
			}
		}, 1000);
    }

    /**
	 * 收到消息事件
	 */
	private sendEventNotify(e:egret.Event) {
        let data = e.data;
        let jsonData = JSON.parse(data.cpProto);
        console.log("json.action:"+jsonData.action);
        if(data && data.cpProto){
            if(data.cpProto.indexOf(OnlineEvent.OE_GAMESTART) >=0){//房主点击开始游戏
                console.log("LoadingButAction");
            }
        }

    }


    /**
	 * gameserver回调
	 */
	private gameServerNotify(ev:egret.Event) {
		let data = ev.data;
        console.log("gameServerNotify");
        let jsonData = JSON.parse(data.cpProto);
        console.log("json.action:"+jsonData.action+",jsonData:"+JSON.stringify(jsonData));
        if(data && data.cpProto){
            if(data.cpProto.indexOf(OnlineEvent.OE_LOADFINISH) >=0){
                let allLoad:boolean = true;
                GameData.playerUserIds.forEach((user)=>{
				 if(user.id == jsonData.uid){
                     user.loadFinish = true;
                 }
                 if(!user.loadFinish){
                     allLoad = false;
                 }
			 });
             if(GameData.gameUser.isOwner){
                    if(!allLoad){
                        this._buttonAction.enabled = false;
                        this._buttonAction.label = "等待其他成员资源加载完成";
                    }else{
                            this._buttonAction.enabled = true;
                            this._buttonAction.label = "点击开始游戏";
                    }
            }
             console.log("jsonData.uid"+jsonData.uid);

        }else if(data.cpProto.indexOf(OnlineEvent.OE_GAMESTART) >=0){
                console.log("OE_GAMESTART");
                if(this.getChildByName("buttonAction") != null){
                    this.removeChild(this.getChildByName("buttonAction"));
                }
                this.selectOrder();
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SELECT_ORDER) >=0){
            console.log("OE_SELECT_ORDER");
            if(!GameData.gameUser.isOwner){
                this.southSeat = jsonData.south;
                this.eastSeat = jsonData.east;
                this.northSeat = jsonData.north;
                this.westSeat = jsonData.west;
            }
            this._scoreLabel.text += "东："+this.eastSeat+"，西："+this.westSeat+"，南："+this.southSeat+"，北："+this.northSeat;
            
            this.user.setName(GameData.gameUser.name);//将随机昵称改为在线的
            this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_SHOW_DATA,
                    direction:GameData.gameUser.id,
                    data:{name:this.user.getName(),sex:this.user.getSex(),index:this.playerIndex}
                }));
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SHOW_DATA) >=0){
            console.log("OE_SHOW_DATA");
             //更新各个用户资料
             this.playerDataUpdate(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SEND_POKERS) >=0){
            console.log("OE_SEND_POKERS");
            this.pokers = PokerUtils.getGameServerPokers(jsonData);
            this.drawPokerRandom = jsonData.randomDrawer;
            console.log("jsonData.randomDrawer:"+jsonData.randomDrawer);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SEND_AGAIN_POKERS) >=0){
            console.log("OE_SEND_AGAIN_POKERS");
            this.pokers = PokerUtils.getGameServerPokers(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SHOW_DRAWER_POKER) >=0){
            console.log("OE_SHOW_DRAWER_POKER");
            let json_data = JSON.parse(JSON.stringify(jsonData.data));
            this.dealwithDrawerPoker(json_data);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SHOW_SWITCH_POKER) >=0){
            console.log("OE_SHOW_SWITCH_POKER");
            //let json_data = JSON.parse(JSON.stringify(jsonData.data));
            this.dealwithSwitchPoker(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SHOW_THROW_POKER) >=0){
            console.log("OE_SHOW_THROW_POKER");
            this.dealwithThrowPoker(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SEARCH_CAMP) >=0){
            console.log("OE_SEARCH_CAMP");
            this.dealwithSearchCamp(jsonData);  
        }else if(data.cpProto.indexOf(OnlineEvent.OE_SHOW_CAMP) >=0){
            console.log("OE_SHOW_CAMP");
            this.dealwithShowCamp(jsonData);  
        }else if(data.cpProto.indexOf(OnlineEvent.OE_EXCHANGE_POKER) >=0){
            console.log("OE_EXCHANGE_POKER");
            this.exchangePoker();
        }else if(data.cpProto.indexOf(OnlineEvent.OE_FIRST_OUT_POKER) >=0){
            console.log("OE_FIRST_OUT_POKER");
                    this.playedPoker = [];
                    this.playedSeatId = jsonData.direction;//要比较的牌的Id
                    //this.outPokersId = jsonData.direction;//出牌人的Id
                    if(GameData.gameUser.id == jsonData.direction){
                        this.showButtons(RoomManager.ButtonsDiscard);
                    }   
        }else if(data.cpProto.indexOf(OnlineEvent.OE_OUT_POKERS) >= 0){
            console.log("OE_OUT_POKERS");
            this.OutPokersCompare(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_IS_GAMEOVER) >= 0){
            console.log("OE_IS_GAMEOVER");
            this.isGameOver(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_GAMEOVER) >= 0){
            console.log("OE_GAMEOVER");
            this.isAgainGame(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_GIVE_OUTPOKERS) >= 0){
            console.log("OE_GIVE_OUTPOKERS");
            this.CampOutPoker(jsonData);
        }else if(data.cpProto.indexOf(OnlineEvent.OE_READY) >= 0){
            console.log("OE_READY");
            this.Ready(jsonData);
        }
    }

}
    private Ready(jsonData):void{
        if(jsonData.direction == this.southSeat){
                this.southReady = true;
        }else if(jsonData.direction == this.northSeat){
                this.northReady = true;
        }else if(jsonData.direction == this.eastSeat){
                this.eastReady = true;
        }else if(jsonData.direction == this.westSeat){
                this.westReady = true;
        }
        //如果全都点击再来一局
        if(this.southReady && this.northReady && this.eastReady && this.westReady){
                    //初始化完毕，开始下一局游戏
                    this.returnInit();
        }
    }
    private returnReady():void{
        this.southReady = false;
        this.northReady = false;
        this.eastReady = false;
        this.westReady = false;
    }
    
     /**
     * 监听点击“出牌”按钮的动作
     * 点击出牌后：
     *  1.从自己牌的数组中移除已选择的牌
     *  2.刷新自己的牌
     *  3.刷新出牌区
     *  4.清空已选择牌的数组
     */
    public buttonChuPai(evt: egret.TouchEvent): void {
            console.log("开始出牌");
            if(this.pokerSelectArray.length == 0){
                console.log("出牌不能为空");
                return;
            }
            if (this.playedSeatId != GameData.gameUser.id) {
                    if (!PokerCompareUtils.comparePokers(this.pokerSelectArray, this.playedPoker)) {//当选择的牌没有上家大，不许出牌
                        return;
                        }
                    }
            if (PokerTypeUtils.getType(this.pokerSelectArray) == null && PokerTypeUtils.getSpecialType(this.pokerSelectArray) == null) {
                    console.log("你这选的是啥呀");
                    return;
                }
            this.pokersPlayer=PokerUtils.removePokers(this.pokersPlayer,this.pokerSelectArray);
            console.log("已出牌，剩余牌数", this.pokersPlayer.length);

            //当前一手牌，要比对的
            this.playedPoker =  PokerUtils.sortDescPokers(this.pokerSelectArray);

            this.clearButtons();


            let OutPokerIds:Array<number> = new Array<number> ();//存储出的牌的id
            this.playedPoker.forEach((poker)=>{
				 OutPokerIds.push(poker.getId());
			 });
            //出牌
            this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_OUT_POKERS,
                    direction:GameData.gameUser.id,
                    isOut:1,
                    data:{PokersID:OutPokerIds},
                    PokersLength:this.pokersPlayer.length
                }));

            
    }


    /**
     * 要不起，让别人给牌
     */
    public buttonBuYao(evt: egret.TouchEvent): void {
            if (this.playedSeatId == GameData.gameUser.id) {
                    return;
                }
            this.clearButtons();
            this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_OUT_POKERS,
                    direction:GameData.gameUser.id,
                    isOut:0,
                    data:{PokersID:[]},
                    PokersLength:this.pokersPlayer.length
                }));
    }


    /**
     * 出牌提示
     * 如果不知道怎么出牌，可根据提示给牌
     */
    public buttonTiShi(evt: egret.TouchEvent): void {//^^
        //this.pokerSelectArray = PokerUtils.sortDescPokers(this.pokerSelectArray);//避免右手握牌影响提示出牌
        this.pokerSelectArray = PokerSeekUtils.autoPromptOnline(this.pokersPlayer,this.playedPoker);
        console.log("this.pokerSelectArray自动提示的长度："+this.pokerSelectArray.length);
        //let p = RES.getRes("layout_json").poker;
        //let y = p.pokerUpMove;
        if(this.pokerSelectArray.length != 0){
            for(let i = 0;i < this.pokerSelectArray.length;i++){
                console.log("自定义起牌数为"+(i+1)+"的id和值:"+this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                //这是根据每张扑克的name属性获得对象，对牌的正序或者倒序没有影响【给牌时切换握牌方式获取不到对应牌的对象】
                let draggedObject: egret.Bitmap = <egret.Bitmap>StandaloneModel.mypoker.getChildByName(this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                console.log("测试是否获得对象,y值为:"+draggedObject.y);
                draggedObject.y = 0;
                console.log("再次测试是否获得对象,y值为:"+draggedObject.y);
            }
        }
    }
    private isAgainGame(jsonData):void{
        if(jsonData.winA == GameData.gameUser.id || jsonData.winB == GameData.gameUser.id){
            this.showResult(true);
        }else{
            this.showResult(false);
        }
    }


    /**
     * 如果游戏结束显示游戏结果
     */
    private showResult(isVictory: boolean) {
        this.clearGameResultShow();
        let result: GameResultContainer = new GameResultContainer(isVictory);
        result.name = "result";
        this.addChild(result);
        this.showButtons(RoomManager.ButtonsGameOver);
    }


    /**
     * 清除游戏结果显示遮罩层
     */
    private clearGameResultShow(): void{
        if (this.getChildByName("result") != null) {
            this.removeChild(this.getChildByName("result"));
        }
    }


    private isGameOver(jsonData):void{
        if(jsonData.direction == this.southSeat){
            this.southLength = jsonData.length;
        }else if(jsonData.direction == this.eastSeat){
            this.eastLength = jsonData.length;
        }else if(jsonData.direction == this.northSeat){
            this.northLength = jsonData.length;
        }else if(jsonData.direction == this.westSeat){
            this.westLength = jsonData.length;
        }
        //确定下一局的优先出牌人
        if(this.southLength == 0 && this.eastLength != 0 && this.northLength != 0 && this.westLength != 0){
                this.firstOutPokerSeat = 1;
        }
        if(this.eastLength == 0 && this.southLength != 0 && this.northLength != 0 && this.westLength != 0){
                this.firstOutPokerSeat = 2;
        }
        if(this.northLength == 0 && this.eastLength != 0 && this.southLength != 0 && this.westLength != 0){
                this.firstOutPokerSeat = 3;
        }
        if(this.westLength == 0 && this.eastLength != 0 && this.northLength != 0 && this.southLength != 0){
                this.firstOutPokerSeat = 4;
        }
        console.log("优先出牌人座位号是否改变?firstOutPokerSeat:"+this.firstOutPokerSeat);

        console.log("this.southLength:"+this.southLength+",this.eastLength:"+this.eastLength+",this.northLength:"+this.northLength+",this.westLength:"+this.westLength);
        console.log("【this.playerCamp:"+this.playerCamp+",this.rightCamp:"+this.rightCamp+",this.topCamp:"+this.topCamp+",this.leftCamp:"+this.leftCamp+"】");
        console.log("GameData.gameUser.id:"+GameData.gameUser.id+",this.southSeat:"+this.southSeat+",this.eastSeat:"+this.eastSeat+",this.northSeat:"+this.northSeat+",this.westSeat:"+this.westSeat);
        if(this.playerCamp && this.rightCamp){
            if(GameData.gameUser.id == this.southSeat){
                if(this.southLength == 0 && this.eastLength == 0 && (this.northLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.southSeat,this.eastSeat);
                }
                if(this.northLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.northSeat,this.westSeat);
                }
            }else if(GameData.gameUser.id == this.eastSeat){
                if(this.eastLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.eastSeat,this.northSeat);
                }
                if(this.southLength == 0 && this.westLength == 0 && (this.northLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.southSeat,this.westSeat);
                }
            }else if(GameData.gameUser.id == this.northSeat){
                if(this.westLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.westSeat,this.northSeat);
                }
                if(this.southLength == 0 && this.eastLength == 0 && (this.northLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.southSeat,this.eastSeat);
                }
            }else if(GameData.gameUser.id == this.westSeat){
                if(this.westLength == 0 && this.southLength == 0 && (this.northLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.westSeat,this.southSeat);
                }
                if(this.northLength == 0 && this.eastLength == 0 && (this.southLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.northSeat,this.eastSeat);
                }
            }
        }else if(this.playerCamp && this.topCamp){
            if(GameData.gameUser.id == this.southSeat){
                if(this.southLength == 0 && this.northLength == 0 && (this.eastLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.southSeat,this.northSeat);
                }
                if(this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)){
                        this.gameOver(true,this.eastSeat,this.westSeat);
                }
            }else if(GameData.gameUser.id == this.eastSeat){
                if(this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)){
                        this.gameOver(true,this.eastSeat,this.westSeat);
                }
                if(this.southLength == 0 && this.northLength == 0 && (this.westLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.southSeat,this.northSeat);
                }
            }else if(GameData.gameUser.id == this.northSeat){
                if(this.southLength == 0 && this.northLength == 0 && (this.eastLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.southSeat,this.northSeat);
                }
                if(this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)){
                        this.gameOver(true,this.eastSeat,this.westSeat);
                }
            }else if(GameData.gameUser.id == this.westSeat){
                if(this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)){
                        this.gameOver(true,this.eastSeat,this.westSeat);
                }
                if(this.southLength == 0 && this.northLength == 0 && (this.westLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.southSeat,this.northSeat);
                }
            }
        }else if(this.playerCamp && this.leftCamp){
            if(GameData.gameUser.id == this.southSeat){
                if(this.southLength == 0 && this.westLength == 0 && (this.eastLength != 0 || this.northLength != 0)){
                        this.gameOver(true,this.southSeat,this.westSeat);
                }
                if(this.eastLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.eastSeat,this.northSeat);
                }
            }else if(GameData.gameUser.id == this.eastSeat){
                if(this.eastLength == 0 && this.southLength == 0 && (this.westLength != 0 || this.northLength != 0)){
                        this.gameOver(true,this.eastSeat,this.southSeat);
                }
                if(this.westLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.westSeat,this.northSeat);
                }
            }else if(GameData.gameUser.id == this.northSeat){
                if(this.eastLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.eastSeat,this.northSeat);
                }
                if(this.southLength == 0 && this.westLength == 0 && (this.eastLength != 0 || this.northLength != 0)){
                        this.gameOver(true,this.southSeat,this.westSeat);
                }
            }else if(GameData.gameUser.id == this.westSeat){
                if(this.northLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.eastLength != 0)){
                        this.gameOver(true,this.northSeat,this.westSeat);
                }
                if(this.southLength == 0 && this.eastLength == 0 && (this.westLength != 0 || this.westLength != 0)){
                        this.gameOver(true,this.southSeat,this.eastSeat);
                }
            }
        }
     
    }
    /**
     * 判断游戏是否结束
     */
    private gameOver(gameOver:boolean,winId1:number,winId2:number): void {
        if(gameOver){
            this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_GAMEOVER,
                    winA:winId1,
                    winB:winId2
                }));
        }
        
    }
    private judgeGameOver(): void {
        this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_IS_GAMEOVER,
                    direction:GameData.gameUser.id,
                    length:this.pokersPlayer.length
                }));
    }
    private OutPokersCompare(jsonData):void{
                if(jsonData.direction == this.southSeat){/*南方向发出的牌*/
                    if(GameData.gameUser.id == this.southSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //this.outPokersId = this.eastSeat;//下一个出牌人的Id
                                /*更新我的牌*/
                                //刷新自己的牌
                                this.showPokerVertival(this.mySeat);
                                //刷新自己牌的数目
                                this.showCount(1, this.pokersPlayer.length);
                                //刷新出牌区
                                this.showPokerPlayer();
                                //清空已选择的牌数组
                                this.pokerSelectArray = new Array<Poker>();
                                this.judgeGameOver();//判断出牌后游戏是否结束
                        }else if(jsonData.isOut == 0){//不要
                                console.log("自己出的牌不可能为空");
                                this.showTextTip(this.mySeat);
                        }
                    }else if(GameData.gameUser.id == this.eastSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //展示其他玩家出的牌及数量
                                this.LeftOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.leftSeat);
                                this.showCount(this.leftSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.leftSeat);
                        }

                        this.clearPokerShow(this.mySeat);//到我出牌先把我之前出的刷掉
                        if(this.eastLength == 0){
                            //出牌权该移交给谁，是给自己的同阵营的玩家还是按顺序轮转
                            this.judgeOutPoker();
                        }else{
                            this.showButtons(RoomManager.ButtonsDiscard);
                        }
                   }else if(GameData.gameUser.id == this.northSeat){
                       if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.TopOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.topSeat);
                                this.showCount(this.topSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.topSeat);
                        }


                  }else if(GameData.gameUser.id == this.westSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.RightOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.rightSeat);
                                this.showCount(this.rightSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要

                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.rightSeat);
                        }
                }
            }else if(jsonData.direction == this.eastSeat){/*东方向发出的牌*/
                    if(GameData.gameUser.id == this.eastSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //this.outPokersId = this.eastSeat;//下一个出牌人的Id
                                /*更新我的牌*/
                                //刷新自己的牌
                                this.showPokerVertival(this.mySeat);
                                //刷新自己牌的数目
                                this.showCount(this.mySeat, this.pokersPlayer.length);
                                //刷新出牌区
                                this.showPokerPlayer();
                                //清空已选择的牌数组
                                this.pokerSelectArray = new Array<Poker>();
                                this.judgeGameOver();//判断出牌后游戏是否结束
                        }else if(jsonData.isOut == 0){//不要
                                console.log("自己出的牌不可能为空");
                                this.showTextTip(this.mySeat);
                        }
                    }else if(GameData.gameUser.id == this.southSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //展示其他玩家出的牌及数量
                                this.RightOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.rightSeat);
                                this.showCount(this.rightSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.rightSeat);
                        }
                   }else if(GameData.gameUser.id == this.northSeat){
                       if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.LeftOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.leftSeat);
                                this.showCount(this.leftSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.leftSeat);
                        }
                        this.clearPokerShow(this.mySeat);
                        if(this.northLength == 0){
                            //出牌权该移交给谁，是给自己的同阵营的玩家还是按顺序轮转
                            this.judgeOutPoker();
                        }else{
                            this.showButtons(RoomManager.ButtonsDiscard);
                        }


                  }else if(GameData.gameUser.id == this.westSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.TopOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.topSeat);
                                this.showCount(this.topSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要

                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.topSeat);
                        }
                }
            }else if(jsonData.direction == this.northSeat){/*北方向发出的牌*/
                    if(GameData.gameUser.id == this.northSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //this.outPokersId = this.eastSeat;//下一个出牌人的Id
                                /*更新我的牌*/
                                //刷新自己的牌
                                this.showPokerVertival(this.mySeat);
                                //刷新自己牌的数目
                                this.showCount(this.mySeat, this.pokersPlayer.length);
                                //刷新出牌区
                                this.showPokerPlayer();
                                //清空已选择的牌数组
                                this.pokerSelectArray = new Array<Poker>();
                                this.judgeGameOver();//判断出牌后游戏是否结束
                        }else if(jsonData.isOut == 0){//不要
                                console.log("自己出的牌不可能为空");
                                this.showTextTip(this.mySeat);
                        }
                    }else if(GameData.gameUser.id == this.southSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //展示其他玩家出的牌及数量
                                this.TopOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.topSeat);
                                this.showCount(this.topSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.topSeat);
                        }
                   }else if(GameData.gameUser.id == this.eastSeat){
                       if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.RightOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.rightSeat);
                                this.showCount(this.rightSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.rightSeat);
                        }
                        

                  }else if(GameData.gameUser.id == this.westSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.LeftOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.leftSeat);
                                this.showCount(this.leftSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要

                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.leftSeat);
                        }
                        this.clearPokerShow(this.mySeat);
                        if(this.westLength == 0){
                            //出牌权该移交给谁，是给自己的同阵营的玩家还是按顺序轮转
                            this.judgeOutPoker();
                        }else{
                            this.showButtons(RoomManager.ButtonsDiscard);
                        }
                }
            }else if(jsonData.direction == this.westSeat){/*西方向发出的牌*/
                    if(GameData.gameUser.id == this.westSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //this.outPokersId = this.eastSeat;//下一个出牌人的Id
                                /*更新我的牌*/
                                //刷新自己的牌
                                this.showPokerVertival(this.mySeat);
                                //刷新自己牌的数目
                                this.showCount(this.mySeat, this.pokersPlayer.length);
                                //刷新出牌区
                                this.showPokerPlayer();
                                //清空已选择的牌数组
                                this.pokerSelectArray = new Array<Poker>();
                                this.judgeGameOver();//判断出牌后游戏是否结束
                        }else if(jsonData.isOut == 0){//不要
                                console.log("自己出的牌不可能为空");
                                this.showTextTip(this.mySeat);
                        }
                    }else if(GameData.gameUser.id == this.southSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id


                                //展示其他玩家出的牌及数量
                                this.LeftOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.leftSeat);
                                this.showCount(this.leftSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.leftSeat);
                        }
                        this.clearPokerShow(this.mySeat);
                        if(this.southLength == 0){
                            //出牌权该移交给谁，是给自己的同阵营的玩家还是按顺序轮转
                            this.judgeOutPoker();
                        }else{
                            this.showButtons(RoomManager.ButtonsDiscard);
                        }
                   }else if(GameData.gameUser.id == this.eastSeat){
                       if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.TopOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.topSeat);
                                this.showCount(this.topSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要
                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.topSeat);
                        }
                        

                  }else if(GameData.gameUser.id == this.northSeat){
                        if(jsonData.isOut == 1){//出牌
                                this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData);//当前要比对的牌
                                this.playedSeatId = jsonData.direction;//当前要比对的id
                                //展示其他玩家出的牌及数量
                                this.RightOutPokers = this.playedPoker;
                                this.showOtherOutPoker(this.rightSeat);
                                this.showCount(this.rightSeat, jsonData.PokersLength);
                                //this.showTextTip(this.outPokersSeat);//不要

                        }else if(jsonData.isOut == 0){//不要
                                this.showTextTip(this.rightSeat);
                        }
                }
            }
    }
private judgeOutPoker():void{
    //出牌权该移交给谁，是给自己的同阵营的玩家还是按顺序轮转
    let campId:number = -1;
    let IsCamp:number = -1;
    if(this.playedSeatId == GameData.gameUser.id){
          //说明一圈没人要又到自己这边，得把出牌权交给队友
          //根据我的id找到队友的id
          campId = this.searchCampId();
          IsCamp = 1;
    }else{
          //直接按顺序到下一任出牌
          campId = this.searchOrderId();
          IsCamp = 0;
          }
    this.sendGameServerEvents(JSON.stringify({
            action:OnlineEvent.OE_GIVE_OUTPOKERS,
            direction:campId,
            isCamp:IsCamp
              }));
}
private CampOutPoker(jsonData):void{

        if(jsonData.direction == GameData.gameUser.id){
                if(jsonData.isCamp == 1){
                    this.playedSeatId = GameData.gameUser.id;
                }else if(jsonData.isCamp == 0){
                    console.log("不变，顺序出牌");
                }
                if(this.pokersPlayer.length <= 0){//如果到我的扑克牌长度为0时，应该轮到下一个人出牌,而不显示出牌选项
                    this.judgeOutPoker();
                }else if(this.pokersPlayer.length > 0){
                    this.showButtons(RoomManager.ButtonsDiscard);
                    this.clearShowOutPoker();
                } 
        }

}
private clearShowOutPoker():void{
        if(this.southLength == 0){
            if(GameData.gameUser.id == this.eastSeat){
                this.clearPokerShow(this.leftSeat);
            }else if(GameData.gameUser.id == this.northSeat){
                this.clearPokerShow(this.topSeat);
            }else if(GameData.gameUser.id == this.westSeat){
                this.clearPokerShow(this.rightSeat);
            }
        }else if(this.eastLength == 0){
            if(GameData.gameUser.id == this.southSeat){
                this.clearPokerShow(this.rightSeat);
            }else if(GameData.gameUser.id == this.northSeat){
                this.clearPokerShow(this.leftSeat);
            }else if(GameData.gameUser.id == this.westSeat){
                this.clearPokerShow(this.topSeat);
            }
        }else if(this.northLength == 0){
            if(GameData.gameUser.id == this.southSeat){
                this.clearPokerShow(this.topSeat);
            }else if(GameData.gameUser.id == this.eastSeat){
                this.clearPokerShow(this.rightSeat);
            }else if(GameData.gameUser.id == this.westSeat){
                this.clearPokerShow(this.leftSeat);
            }
        }else if(this.westLength == 0){
            if(GameData.gameUser.id == this.southSeat){
                this.clearPokerShow(this.leftSeat);
            }else if(GameData.gameUser.id == this.eastSeat){
                this.clearPokerShow(this.topSeat);
            }else if(GameData.gameUser.id == this.northSeat){
                this.clearPokerShow(this.rightSeat);
            }
        }
}
private searchOrderId():number{
    if(GameData.gameUser.id == this.southSeat){
            return this.eastSeat;
    }else if(GameData.gameUser.id == this.eastSeat){
            return this.northSeat;
    }else if(GameData.gameUser.id == this.northSeat){
            return this.westSeat;
    }else if(GameData.gameUser.id == this.westSeat){
            return this.southSeat;
    }
}
private searchCampId():number{
    if(GameData.gameUser.id == this.southSeat){
        if(this.playerCampNumber == 2){
            return this.eastSeat;
        }else if(this.playerCampNumber == 3){
            return this.northSeat;
        }else if(this.playerCampNumber == 4){
            return this.westSeat;
        }
    }else if(GameData.gameUser.id == this.eastSeat){
        if(this.playerCampNumber == 2){
            return this.northSeat;
        }else if(this.playerCampNumber == 3){
            return this.westSeat;
        }else if(this.playerCampNumber == 4){
            return this.southSeat;
        }
    }else if(GameData.gameUser.id == this.northSeat){
        if(this.playerCampNumber == 2){
            return this.westSeat;
        }else if(this.playerCampNumber == 3){
            return this.southSeat;
        }else if(this.playerCampNumber == 4){
            return this.eastSeat;
        }
    }else if(GameData.gameUser.id == this.westSeat){
        if(this.playerCampNumber == 2){
            return this.southSeat;
        }else if(this.playerCampNumber == 3){
            return this.eastSeat;
        }else if(this.playerCampNumber == 4){
            return this.northSeat;
        }
    }
}
     /**
     *  展示其他玩家不出牌时的文字提示区
     *  seat  玩家座位号
     */
    private showTextTip(seat: number) {
        this.clearPokerShow(seat);
        if (seat == 1){
            this.textPlayer = new TextOtherContainer(PokerUtils.getRandomTextTip(),1);
            this.textPlayer.name = "textPlayer";
            this.addChild(this.textPlayer);
        }else if (seat == 2){
            this.textRight = new TextOtherContainer(PokerUtils.getRandomTextTip(),2);
            this.textRight.name = "textRight";
            this.addChild(this.textRight);
        }else if (seat == 3){
            this.textTop = new TextOtherContainer(PokerUtils.getRandomTextTip(),3);
            this.textTop.name = "textTop";
            this.addChild(this.textTop);
        }else if (seat == 4) {
            this.textLeft = new TextOtherContainer(PokerUtils.getRandomTextTip(),4);
            this.textLeft.name = "textLeft";
            this.addChild(this.textLeft);
        }
    }


    /** 
    * 显示玩家出的牌
    * seat 座位号
    */
    private showPokerPlayer(){
        //this.clearPokerPlay();
        this.clearPokerShow(this.mySeat);
        this.playerOutPokers = new PokerPlayerContainer(PokerUtils.sortDescPokers(this.pokerSelectArray));
        this.playerOutPokers.name = "pokerPlayer";
        this.addChild(this.playerOutPokers);

    }

        /**
     * 展示其他玩家出的牌
     */
     private showOtherOutPoker(seat: number) {
        this.clearPokerShow(seat);
        if (seat == 2){
            this.rightOutPokers = new PokerOthersContainer(this.RightOutPokers,2);
            this.rightOutPokers.name = "rightOutPokers";
            this.addChild(this.rightOutPokers);
        }else if (seat == 3){
            this.topOutPokers = new PokerOthersContainer(this.TopOutPokers,3);
            this.topOutPokers.name = "topOutPokers";
            this.addChild(this.topOutPokers);
        }else if (seat == 4) {
            this.leftOutPokers = new PokerOthersContainer(this.LeftOutPokers,4);
            this.leftOutPokers.name = "leftOutPokers";
            this.addChild(this.leftOutPokers);
        }

    }

        /**
     * 清理玩家出牌展示区和不出牌提示区
     * seat 玩家座位号
     */
    private clearPokerShow(seat: number) {
        if (seat == 1) {
            if (this.getChildByName("pokerPlayer") != null) {
                this.removeChild(this.getChildByName("pokerPlayer"));
            }
            if (this.getChildByName("textPlayer") != null) {
                this.removeChild(this.getChildByName("textPlayer"));
            }
        }
         if (seat == 2) {
            if(this.getChildByName("rightOutPokers")!=null){
                this.removeChild(this.getChildByName("rightOutPokers"));
            }
            if (this.getChildByName("textRight") != null) {
                this.removeChild(this.getChildByName("textRight"));
            }
        }
        if (seat == 3) {
            if(this.getChildByName("topOutPokers")!=null){
                this.removeChild(this.getChildByName("topOutPokers"));
            }
            if (this.getChildByName("textTop") != null) {
                this.removeChild(this.getChildByName("textTop"));
            }
        }
        if (seat == 4) {
            if(this.getChildByName("leftOutPokers")!=null){
                this.removeChild(this.getChildByName("leftOutPokers"));
            }
            if (this.getChildByName("textLeft") != null) {
                this.removeChild(this.getChildByName("textLeft"));
            }
        }
        
    }

    

    private dealwithShowCamp(jsonData):void{
        //let json_data = JSON.parse(JSON.stringify(jsonData.data));
              this.playerCamp = true;
              if(this.firstThrowPokerSeat == 1){
                  if(jsonData.direction == this.eastSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.leftCamp = true;
                        }
                  }else if(jsonData.direction == this.northSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.topCamp = true;
                        }
                  }else if(jsonData.direction == this.westSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.rightCamp = true;
                        }
                  }
              }else if(this.firstThrowPokerSeat == 2){
                  if(jsonData.direction == this.southSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.leftCamp = true;
                        }
                  }else if(jsonData.direction == this.northSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.rightCamp = true;
                        }
                  }else if(jsonData.direction == this.westSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.topCamp = true;
                        }
                  }
              }else if(this.firstThrowPokerSeat == 3){
                  if(jsonData.direction == this.southSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.topCamp = true;
                        }
                  }else if(jsonData.direction == this.eastSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.rightCamp = true;
                        }
                  }else if(jsonData.direction == this.westSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.leftCamp = true;
                        }
                  }
              }else if(this.firstThrowPokerSeat == 4){
                  if(jsonData.direction == this.southSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.rightCamp = true;
                        }
                  }else if(jsonData.direction == this.eastSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.topCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.topCamp = true;
                        }
                  }else if(jsonData.direction == this.northSeat){
                        if(GameData.gameUser.id == this.southSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.eastSeat){
                                this.leftCamp = true;
                        }else if(GameData.gameUser.id == this.northSeat){
                                this.rightCamp = true;
                        }else if(GameData.gameUser.id == this.westSeat){
                                this.leftCamp = true;
                        }
                  }
              }
        console.log("【this.playerCamp:"+this.playerCamp+",this.rightCamp:"+this.rightCamp+",this.topCamp:"+this.topCamp+",this.leftCamp:"+this.leftCamp+"】");
         //交换牌并显示同阵营头像
        let startExchangeText: ShowText;
        let index :number = 3;
        let setAlpha:number = 1;
        let showThrowPokers = setInterval(() => {
                if(this.getChildByName("startExchangeText") != null){this.removeChild(this.getChildByName("startExchangeText"));}
                    startExchangeText = new ShowText("交换牌中...",660,500,100,setAlpha);
                    startExchangeText.name = "startExchangeText";
                    this.addChild(startExchangeText);
                    setAlpha -= 0.3;
            if(index <= 0){
                clearInterval(showThrowPokers);
                if(this.getChildByName("startExchangeText") != null){this.removeChild(this.getChildByName("startExchangeText"));}
                this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_EXCHANGE_POKER
                }));
            }
            index --;
        },1000);

            
    }

    /**
     * 同阵营玩家交换牌并显示同阵营头像，其他玩家归为同一阵营并返回丢出牌
     * 更新牌
     * 所有丢出的牌清理
     */
    private exchangePoker(){
        console.log("后来：this.playerCamp:"+this.playerCamp+",this.rightCamp"+this.rightCamp+",this.topCamp"+this.topCamp+",this.leftCamp"+this.leftCamp);
        //交换牌不再是初进游戏
        this.isFirst = false;
        if(this.playerCamp == true && this.rightCamp == true){
            if(GameData.gameUser.id == this.southSeat){
                    if(this.firstThrowPokerSeat == 1 || this.firstThrowPokerSeat == 2){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.RightThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.eastSeat){
                    if(this.firstThrowPokerSeat == 2 || this.firstThrowPokerSeat == 3){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.RightThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.northSeat){
                    if(this.firstThrowPokerSeat == 3 || this.firstThrowPokerSeat == 4){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.RightThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.westSeat){
                    if(this.firstThrowPokerSeat == 4 || this.firstThrowPokerSeat == 1){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.RightThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }

            this.showPortrait(this.isFirst,this.playerCamp);
            this.showOtherPortrait(2,this.isFirst,this.rightCamp);
            this.showOtherPortrait(3,this.isFirst,this.topCamp);
            this.showOtherPortrait(4,this.isFirst,this.leftCamp);
            this.playerCampNumber = 2;
            this.rightCampNumber = 1;
            this.topCampNumber = 4;
            this.leftCampNumber = 3;
        }
        if(this.playerCamp == true && this.topCamp == true){
            if(GameData.gameUser.id == this.southSeat){
                    if(this.firstThrowPokerSeat == 1 || this.firstThrowPokerSeat == 3){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.TopThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.eastSeat){
                    if(this.firstThrowPokerSeat == 2 || this.firstThrowPokerSeat == 4){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.TopThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.northSeat){
                    if(this.firstThrowPokerSeat == 3 || this.firstThrowPokerSeat == 1){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.TopThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.westSeat){
                    if(this.firstThrowPokerSeat == 4 || this.firstThrowPokerSeat == 2){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.TopThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }
            this.showPortrait(this.isFirst,this.playerCamp);
            this.showOtherPortrait(2,this.isFirst,this.rightCamp);
            this.showOtherPortrait(3,this.isFirst,this.topCamp);
            this.showOtherPortrait(4,this.isFirst,this.leftCamp);
            this.playerCampNumber = 3;
            this.rightCampNumber = 4;
            this.topCampNumber = 1;
            this.leftCampNumber = 2;
        }
        if(this.playerCamp == true && this.leftCamp == true){
            if(GameData.gameUser.id == this.southSeat){
                    if(this.firstThrowPokerSeat == 1 || this.firstThrowPokerSeat == 4){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.LeftThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.eastSeat){
                    if(this.firstThrowPokerSeat == 2 || this.firstThrowPokerSeat == 1){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.LeftThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.northSeat){
                    if(this.firstThrowPokerSeat == 3 || this.firstThrowPokerSeat == 2){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.LeftThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }else if(GameData.gameUser.id == this.westSeat){
                    if(this.firstThrowPokerSeat == 4 || this.firstThrowPokerSeat == 3){
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.LeftThrowPoker);
                    }else{
                            this.pokersPlayer=PokerUtils.addExchangePoker(this.pokersPlayer,this.PlayerThrowPoker);
                    }
            }
            this.showPortrait(this.isFirst,this.playerCamp);
            this.showOtherPortrait(2,this.isFirst,this.rightCamp);
            this.showOtherPortrait(3,this.isFirst,this.topCamp);
            this.showOtherPortrait(4,this.isFirst,this.leftCamp);
            this.playerCampNumber = 4;
            this.rightCampNumber = 3;
            this.topCampNumber = 2;
            this.leftCampNumber = 1;
        }
        //清理所有丢的牌
        this.clearAllThrowPoker();
        //刷新所有玩家牌
        this.refreshAllPoker();

}
    private firstOutData():void{
        this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_FIRST_OUT_POKER,
                    direction:GameData.gameUser.id
                }));
    }
    /**
     * 刷新所有玩家牌
     */
    private refreshAllPoker(){
        //this.clearPokers();
        this.showPokerVertival(this.mySeat);
        //开始给牌,具有优先给牌权的玩家，默认给玩家【等待优先给牌权玩家】
        if(this.firstOutPokerSeat == 1){
            if(GameData.gameUser.id == this.southSeat){
                    this.firstOutData();
                    //this.playedSeat = 1;
                    /*this.playedPoker = [];
                    this.playedSeatId = GameData.gameUser.id;//要比较的牌的Id
                    //this.outPokersSeat = 1;
                    this.outPokersId = GameData.gameUser.id;//出牌人的Id
                    this.showButtons(RoomManager.ButtonsDiscard);*/
            }

        }else if(this.firstOutPokerSeat == 2){
            if(GameData.gameUser.id == this.eastSeat){
                    this.firstOutData();
            }

        }else if(this.firstOutPokerSeat == 3){
            if(GameData.gameUser.id == this.northSeat){
                    this.firstOutData();
            }

        }else if(this.firstOutPokerSeat == 4){
            if(GameData.gameUser.id == this.westSeat){
                    this.firstOutData();
            }

        }
        
    }
    
    private filterCamp(id:number,value:number):Array<number>{
        let isInThere:boolean = true;
        let array:Array<number> = new Array<number>();
        if(Math.abs(id - this.PlayerThrowPoker[0].getId()) == 4 && value == this.PlayerThrowPoker[0].getOrderValue()){
            isInThere = false;
            array.push(this.PlayerThrowPoker[0].getId());
            array.push(this.PlayerThrowPoker[0].getOrderValue());
        }
        if(isInThere){
                 for(let i = 0;i < this.pokersPlayer.length; i++){
                        if(Math.abs(id - this.pokersPlayer[i].getId()) == 4 && value == this.pokersPlayer[i].getOrderValue()){
                                 array.push(this.pokersPlayer[i].getId());
                                 array.push(this.pokersPlayer[i].getOrderValue());
                                 break;
                        }
                }
        }

        return array;
    }
    
    private dealwithSearchCamp(jsonData):void{
            let json_data = JSON.parse(JSON.stringify(jsonData.data));
            let id:number = json_data.id;//21
            let value:number = json_data.value;//1
            console.log("【丢牌人丢的牌的id和value:"+id+","+value+"】")
            let sendId:number = -1;
            let sendValue:number = -1;
             if(jsonData.direction == this.southSeat){

                 if(GameData.gameUser.id != this.southSeat){
                        let array:Array<number> = this.filterCamp(id,value);
                        if(array.length == 2){
                                sendId = array[0];
                                sendValue = array[1];
                        }
                }
            }else if(jsonData.direction == this.eastSeat){

                 if(GameData.gameUser.id != this.eastSeat){
                        let array:Array<number> = this.filterCamp(id,value);
                        if(array.length == 2){
                                sendId = array[0];
                                sendValue = array[1];
                        }
                }
          }else if(jsonData.direction == this.northSeat){

                 if(GameData.gameUser.id != this.northSeat){
                        let array:Array<number> = this.filterCamp(id,value);
                        if(array.length == 2){
                                sendId = array[0];
                                sendValue = array[1];
                        }
                }
          }else if(jsonData.direction == this.westSeat){

                 if(GameData.gameUser.id != this.westSeat){
                        let array:Array<number> = this.filterCamp(id,value);
                        if(array.length == 2){
                                sendId = array[0];
                                sendValue = array[1];
                        }
                }
          }
          console.log("【sendId:"+sendId+"sendValue:"+sendValue+"】");
          if(sendId != -1 && sendValue != -1){
                this.sendGameServerEvents(JSON.stringify({
                            action:OnlineEvent.OE_SHOW_CAMP,
                            direction:GameData.gameUser.id,
                            data:{id:sendId,value:sendValue}
                        }));
            }
    }
    
    
    private dealwithThrowPoker(jsonData):void{
            let json_data = JSON.parse(JSON.stringify(jsonData.data));
            let poker:Poker = new Poker(json_data.id,json_data.value);
            let aPoker:Array<Poker> = new Array<Poker>();
            aPoker.push(poker);
            if(jsonData.direction == 1){
                if(GameData.gameUser.id == this.southSeat){
                        this.PlayerReady = true;
                }else if(GameData.gameUser.id == this.eastSeat){
                        this.LeftThrowPoker = aPoker;
                        this.showThrowPoker(this.leftSeat,false);
                        clearInterval(this.throwPokerLeft);
                        this.clearThrowTimerControl(this.leftSeat);
                        this.LeftReady = true;
                }else if(GameData.gameUser.id == this.northSeat){
                        this.TopThrowPoker = aPoker;
                        this.showThrowPoker(this.topSeat,false);
                        clearInterval(this.throwPokerTop);
                        this.clearThrowTimerControl(this.topSeat);
                        this.TopReady = true;
                }else if(GameData.gameUser.id == this.westSeat){
                        this.RightThrowPoker = aPoker;
                        this.showThrowPoker(this.rightSeat,false);
                        clearInterval(this.throwPokerRight);
                        this.clearThrowTimerControl(this.rightSeat);
                        this.RightReady = true;
                }
            }else if(jsonData.direction == 2){
                if(GameData.gameUser.id == this.southSeat){
                        this.RightThrowPoker = aPoker;
                        this.showThrowPoker(this.rightSeat,false);
                        clearInterval(this.throwPokerRight);
                        this.clearThrowTimerControl(this.rightSeat);
                        this.RightReady = true;
                }else if(GameData.gameUser.id == this.eastSeat){
                        this.PlayerReady = true;
                }else if(GameData.gameUser.id == this.northSeat){
                        this.LeftThrowPoker = aPoker;
                        this.showThrowPoker(this.leftSeat,false);
                        clearInterval(this.throwPokerLeft);
                        this.clearThrowTimerControl(this.leftSeat);
                        this.LeftReady = true;
                }else if(GameData.gameUser.id == this.westSeat){
                        this.TopThrowPoker = aPoker;
                        this.showThrowPoker(this.topSeat,false);
                        clearInterval(this.throwPokerTop);
                        this.clearThrowTimerControl(this.topSeat);
                        this.TopReady = true;
                }
            }else if(jsonData.direction == 3){
                if(GameData.gameUser.id == this.southSeat){
                        this.TopThrowPoker = aPoker;
                        this.showThrowPoker(this.topSeat,false);
                        clearInterval(this.throwPokerTop);
                        this.clearThrowTimerControl(this.topSeat);
                        this.TopReady = true;
                }else if(GameData.gameUser.id == this.eastSeat){
                        this.RightThrowPoker = aPoker;
                        this.showThrowPoker(this.rightSeat,false);
                        clearInterval(this.throwPokerRight);
                        this.clearThrowTimerControl(this.rightSeat);
                        this.RightReady = true;
                }else if(GameData.gameUser.id == this.northSeat){
                        this.PlayerReady = true;
                }else if(GameData.gameUser.id == this.westSeat){
                        this.LeftThrowPoker = aPoker;
                        this.showThrowPoker(this.leftSeat,false);
                        clearInterval(this.throwPokerLeft);
                        this.clearThrowTimerControl(this.leftSeat);
                        this.LeftReady = true;
                }
            }else if(jsonData.direction == 4){
                if(GameData.gameUser.id == this.southSeat){
                        this.LeftThrowPoker = aPoker;
                        this.showThrowPoker(this.leftSeat,false);
                        clearInterval(this.throwPokerLeft);
                        this.clearThrowTimerControl(this.leftSeat);
                        this.LeftReady = true;
                }else if(GameData.gameUser.id == this.eastSeat){
                        this.TopThrowPoker = aPoker;
                        this.showThrowPoker(this.topSeat,false);
                        clearInterval(this.throwPokerTop);
                        this.clearThrowTimerControl(this.topSeat);
                        this.TopReady = true;
                }else if(GameData.gameUser.id == this.northSeat){
                        this.RightThrowPoker = aPoker;
                        this.showThrowPoker(this.rightSeat,false);
                        clearInterval(this.throwPokerRight);
                        this.clearThrowTimerControl(this.rightSeat);
                        this.RightReady = true;
                }else if(GameData.gameUser.id == this.westSeat){
                        this.PlayerReady = true;
                }
            }
            if(this.PlayerReady && this.RightReady && this.TopReady && this.LeftReady){
                this.showEvreyoneThrowPoker();
                this.PlayerReady =false;
                this.RightReady =false;
                this.TopReady = false; 
                this.LeftReady = false;
            }
    }

    /**
     * 当所有玩家丢玩牌后展示
     */
    private showEvreyoneThrowPoker(): void{
        //还原计时器
        this.clearAllThrowPoker();
        this.showThrowPoker(this.mySeat,true);
        this.showThrowPoker(this.rightSeat,true);
        this.showThrowPoker(this.topSeat,true);
        this.showThrowPoker(this.leftSeat,true);
        let index: number =  3;
            let showPokers = setInterval(() => {
                if(index <=0){
                    clearInterval(showPokers);
                    this.searchMyCamp();
                }  
                index --;
            },1000);
    }

    private searchMyCamp():void{//查找我的阵营
        if(this.firstThrowPokerSeat == 1){
            if(GameData.gameUser.id == this.southSeat){
                    this.sendThrowEvent();
            }
        }else if(this.firstThrowPokerSeat == 2){
            if(GameData.gameUser.id == this.eastSeat){
                    this.sendThrowEvent();
            }
        }else if(this.firstThrowPokerSeat == 3){
            if(GameData.gameUser.id == this.northSeat){
                    this.sendThrowEvent();
            }
        }else if(this.firstThrowPokerSeat == 4){
            if(GameData.gameUser.id == this.westSeat){
                    this.sendThrowEvent();
            }
        }
    }
    private sendThrowEvent():void{
            this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_SEARCH_CAMP,
                    direction:GameData.gameUser.id,
                    data:{id:this.PlayerThrowPoker[0].getId(),value:this.PlayerThrowPoker[0].getOrderValue()}
                }));
    }
    private dealwithSwitchPoker(jsonData):void{
            let switchPokerIndex:number = jsonData.switchIndex;
            //展示切的牌
            this.clearDrawPokers();
            this.drawpoker = new PokerDrawContainer(this, this.pokers,false,switchPokerIndex);//为true显示明牌，为开发者模式
            this.drawpoker.name = "drawpoker";
            this.addChild(this.drawpoker);
            this.pokers = (this.pokers.slice(switchPokerIndex,this.pokers.length)).concat(this.pokers.slice(0,switchPokerIndex));
            this.showDealPokers();
    }
    private dealwithDrawerPoker(json_data):void{
            this.drawPokerIndex = json_data.index;
            this.drawPokerId = json_data.id;
            this.drawPokerValue = json_data.value;
            this.clearDrawPokers();
            this.drawpoker = new PokerDrawContainer(this, this.pokers,false,this.drawPokerIndex);//为true显示明牌，为开发者模式
            this.drawpoker.name = "drawpoker";
            this.addChild(this.drawpoker);
            //初始化抽的牌
            this.pokerDrawArray = new Array<Poker>();
            if(this.drawPokerValue == 14 || this.drawPokerValue == 15){
                console.log("judgeDrawer");
                this.judgeDrawer();//【未验证】
            }else{
                this.showDealPokers();
            }
    }

    /**
     * 抽牌和切牌完成后停留时间控制
     */
        private showDealPokers(): void{
            let count: number = 3;
            let showDrawer = setInterval(() => {
                if(this.playPokerCount > 1){
                        console.log("等待"+count+"秒自动【不显示】切牌完毕");
                    }else if(this.playPokerCount == 1){
                        console.log("等待"+count+"秒自动【显示】抽牌完毕");}
                    count --;
                if(count == 0) {
                    clearInterval(showDrawer);
                    if(this.playPokerCount > 1){
                        console.log("等待切牌【显示】结束");
                        this.dealPokersRestart();
                    }else if(this.playPokerCount == 1){
                        console.log("等待【显示】结束");
                        this.dealPokers();
                    }
                }
		    }, 1000);
        
    }
    private dealPokersRestart(): void{
        //开始发牌
        if(this.firstThrowPokerSeat == 1){//从seat=1开始发牌
                for(let i = this.pokers.length - 1;i >= 0; i--){
                        if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                        }else if(GameData.gameUser.id == this.eastSeat){
                                if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                        }else if(GameData.gameUser.id == this.northSeat){
                                if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                        }else if(GameData.gameUser.id == this.westSeat){
                                if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                        }
                    }
        }else if(this.firstThrowPokerSeat == 2){//从seat=2开始发牌
                for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }
                    }
        }else if(this.firstThrowPokerSeat == 3){//从seat=3开始发牌
                for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }
                    }
        }else if(this.firstThrowPokerSeat == 4){//从seat=4开始发牌
                for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
        }
        //将每个人的牌整理顺序
        this.pokersPlayer = PokerUtils.sortDescPokers(this.pokersPlayer);
        //分发完毕清空切牌列表
        this.clearDrawPokers();
        //开始衔接丢牌
        this.show();
    }
    /**
     * 抽牌显示结束，开始发牌 
     * 开始依据this.drawPokerIndex发牌
     * i最小为上最左，i最大为下最右，抽牌结束后依照抽牌的值从抽牌人逆序从一开始
     * 计数，直到数目达到所抽牌的值，此时指向谁便从谁开始逆序发牌，发牌从i最大开始
     * 随机选一个抽牌的人，只要不退回大厅就仅仅第一把为随机抽牌，后面根据顺序（逆序），如从
     * 最开始的优先丢牌权玩家开始逆序轮排优先丢牌权，而优先出牌权则是根据上回第一个把牌给完的人【重要，遍历注意位置】
     * 选取随机抽牌玩家【前方自动抽牌如丢牌代码】this.drawPokerRandom
     * 定义开始发牌玩家座位号
     * this.drawPokerValue % 4
     */
    private dealPokers(): void{
            //出牌座位号检测
         for(let i =0;i < this.pokers.length;i++){
                if(Math.abs(this.pokers[i].getId() - this.drawPokerId) == 4
                && this.pokers[i].getOrderValue() - this.drawPokerValue == 0){
                    console.log("找到暗牌了");
                    this.darkPokerIndex = i;
                    this.darkPokerId = this.pokers[i].getId();
                    this.darkPokerValue = this.drawPokerValue;
                }
            }
            //
            console.log("暗牌---this.darkPokerIndex:"+this.darkPokerIndex+",this.darkPokerId:"+this.darkPokerId+",this.darkPokerValue:"+this.darkPokerValue);
            //发牌
            if(this.drawPokerRandom == 1){/**从南方向开始计牌 */
                if(this.drawPokerValue % 4 == 1){//从南方向开始发牌
                    //丢牌座位号
                    if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 1;}
                    else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 2;}
                    else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 3;}
                    else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 4;}
                    //出牌座位号
                    if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 1;}
                    else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 2;}
                    else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 3;}
                    else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 4;}
                    //开始发牌
                    for(let i = this.pokers.length - 1;i >= 0; i--){
                        if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                        }else if(GameData.gameUser.id == this.eastSeat){
                                if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                        }else if(GameData.gameUser.id == this.northSeat){
                                if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                        }else if(GameData.gameUser.id == this.westSeat){
                                if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                        }
                    }
                }else if(this.drawPokerValue % 4 == 2){//从东开始发牌
                        //丢牌座位号
                        if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 2;}
                        else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 3;}
                        else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 4;}
                        else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 1;}
                        //出牌座位号
                        if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 2;}
                        else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 3;}
                        else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 4;}
                        else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 1;}
                        //开始发牌
                        for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
                }else if(this.drawPokerValue % 4 == 3){//从北开始发牌
                        //丢牌座位号
                        if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 3;}
                        else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 4;}
                        else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 1;}
                        else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 2;}
                        //出牌座位号
                        if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 3;}
                        else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 4;}
                        else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 1;}
                        else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 2;}
                        //开始发牌
                        for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
                }else if(this.drawPokerValue % 4 == 0){//从西开始发牌
                        //丢牌座位号
                        if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 4;}
                        else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 1;}
                        else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 2}
                        else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 3;}
                        //出牌座位号
                        if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 4;}
                        else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 1;}
                        else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 2;}
                        else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 3;}
                        //开始发牌
                        for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
                    }
                }else if(this.drawPokerRandom == 2){/**从东方向开始计牌 */
                    if(this.drawPokerValue % 4 == 1){//从东方向开始发牌
                    //丢牌座位号
                        if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 2;}
                        else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 3;}
                        else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 4;}
                        else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 1;}
                        //出牌座位号
                        if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 2;}
                        else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 3;}
                        else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 4;}
                        else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 1;}
                        //开始发牌
                        for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
                    }else if(this.drawPokerValue % 4 == 2){//从北方向开始发牌
                            //丢牌座位号
                            if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 3;}
                            else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 4;}
                            else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 1;}
                            else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 2;}
                            //出牌座位号
                            if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 3;}
                            else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 4;}
                            else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 1;}
                            else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 2;}
                            //开始发牌
                            for(let i = this.pokers.length - 1;i >= 0; i--){
                                if(GameData.gameUser.id == this.southSeat){
                                        if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.eastSeat){
                                        if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.northSeat){
                                        if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.westSeat){
                                        if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                                }
                            }
                    }else if(this.drawPokerValue % 4 == 3){//从西方向开始发牌
                            //丢牌座位号
                            if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 4;}
                            else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 1;}
                            else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 2}
                            else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 3;}
                            //出牌座位号
                            if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 4;}
                            else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 1;}
                            else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 2;}
                            else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 3;}
                            //开始发牌
                            for(let i = this.pokers.length - 1;i >= 0; i--){
                                if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.eastSeat){
                                        if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.northSeat){
                                        if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.westSeat){
                                        if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                                }
                            }
                        
                    }else if(this.drawPokerValue % 4 == 0){//从南方向开始发牌
                            //丢牌座位号
                            if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 1;}
                            else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 2;}
                            else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 3;}
                            else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 4;}
                            //出牌座位号
                            if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 1;}
                            else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 2;}
                            else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 3;}
                            else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 4;}
                            //开始发牌
                            for(let i = this.pokers.length - 1;i >= 0; i--){
                                if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.eastSeat){
                                        if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.northSeat){
                                        if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                                }else if(GameData.gameUser.id == this.westSeat){
                                        if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                                }
                            }
                        }
                
            }else if(this.drawPokerRandom == 3){/**从北方向开始计牌 */
                if(this.drawPokerValue % 4 == 1){//从北方向开始发牌
                   //丢牌座位号
                    if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 3;}
                    else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 4;}
                    else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 1;}
                    else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 2;}
                    //出牌座位号
                    if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 3;}
                    else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 4;}
                    else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 1;}
                    else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 2;}
                    //开始发牌
                    for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }
                    }
                }else if(this.drawPokerValue % 4 == 2){//从西方向开始发牌
                        //丢牌座位号
                        if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 4;}
                        else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 1;}
                        else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 2}
                        else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 3;}
                        //出牌座位号
                        if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 4;}
                        else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 1;}
                        else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 2;}
                        else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 3;}
                        //开始发牌
                        for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
                }else if(this.drawPokerValue % 4 == 3){//从南方向开始发牌
                        //丢牌座位号
                        if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 1;}
                        else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 2;}
                        else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 3;}
                        else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 4;}
                        //出牌座位号
                        if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 1;}
                        else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 2;}
                        else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 3;}
                        else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 4;}
                        //开始发牌
                        for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
                }else if(this.drawPokerValue % 4 == 0){//从东方向开始发牌
                        //丢牌座位号
                        if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 2;}
                        else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 3;}
                        else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 4;}
                        else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 1;}
                        //出牌座位号
                        if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 2;}
                        else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 3;}
                        else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 4;}
                        else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 1;}
                        //开始发牌
                        for(let i = this.pokers.length - 1;i >= 0; i--){
                            if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }
                        }
                    }
                 
            }else if(this.drawPokerRandom == 4){/**从西方向开始计牌 */
                if(this.drawPokerValue % 4 == 1){//从西方向开始发牌
                   //丢牌座位号
                    if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 4;}
                    else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 1;}
                    else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 2}
                    else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 3;}
                    //出牌座位号
                    if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 4;}
                    else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 1;}
                    else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 2;}
                    else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 3;}
                    //开始发牌
                    for(let i = this.pokers.length - 1;i >= 0; i--){
                        if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }
                    }
            }else if(this.drawPokerValue % 4 == 2){//从南方向开始发牌
                    //丢牌座位号
                    if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 1;}
                    else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 2;}
                    else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 3;}
                    else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 4;}
                    //出牌座位号
                    if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 1;}
                    else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 2;}
                    else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 3;}
                    else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 4;}
                    //开始发牌
                    for(let i = this.pokers.length - 1;i >= 0; i--){
                        if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }
                    }
            }else if(this.drawPokerValue % 4 == 3){//从东方向开始发牌
                    //丢牌座位号
                    if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 2;}
                    else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 3;}
                    else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 4;}
                    else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 1;}
                    //出牌座位号
                    if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 2;}
                    else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 3;}
                    else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 4;}
                    else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 1;}
                    //开始发牌
                    for(let i = this.pokers.length - 1;i >= 0; i--){
                        if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }
                    }
            }else if(this.drawPokerValue % 4 == 0){//从北方向开始发牌
                    //丢牌座位号
                    if(this.drawPokerIndex % 4 == 3){this.firstThrowPokerSeat = 3;}
                    else if(this.drawPokerIndex % 4 == 2){this.firstThrowPokerSeat = 4;}
                    else if(this.drawPokerIndex % 4 == 1){this.firstThrowPokerSeat = 1;}
                    else if(this.drawPokerIndex % 4 == 0){this.firstThrowPokerSeat = 2;}
                    //出牌座位号
                    if(this.darkPokerIndex % 4 == 3){this.firstOutPokerSeat = 3;}
                    else if(this.darkPokerIndex % 4 == 2){this.firstOutPokerSeat = 4;}
                    else if(this.darkPokerIndex % 4 == 1){this.firstOutPokerSeat = 1;}
                    else if(this.darkPokerIndex % 4 == 0){this.firstOutPokerSeat = 2;}
                    //开始发牌
                    for(let i = this.pokers.length - 1;i >= 0; i--){
                        if(GameData.gameUser.id == this.southSeat){
                                if(i % 4 == 1){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.eastSeat){
                                    if(i % 4 == 0){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.northSeat){
                                    if(i % 4 == 3){this.pokersPlayer.push(this.pokers[i]);}
                            }else if(GameData.gameUser.id == this.westSeat){
                                    if(i % 4 == 2){this.pokersPlayer.push(this.pokers[i]);}
                            }
                    }
                }
                
                
            }

            console.log(">>>>>优先丢牌座位号："+this.firstThrowPokerSeat+",>>>>>>>>优先出牌座位号："+this.firstOutPokerSeat);
            //将每个人的牌整理顺序
            this.pokersPlayer = PokerUtils.sortDescPokers(this.pokersPlayer);
            //分发完毕清空抽牌列表
            this.clearDrawPokers();
            //开始衔接丢牌
            this.show();
            
    }


    /**
     * 进入显示牌面阶段
     */
    private show() {
        //以头衔形式展示优先丢牌权和优先出牌权
        this.showThrowOrOutPokerTitle();
        /** 显示玩家的牌 */
        this.initPokers();

        this.showCount(this.mySeat, this.pokersPlayer.length);
        this.showCount(this.rightSeat, this.pokersPlayer.length);
        this.showCount(this.topSeat, this.pokersPlayer.length);
        this.showCount(this.leftSeat, this.pokersPlayer.length);
    }

    /**
     * 发牌，显示一张一张发牌的效果
     * 1.缓慢显示自己的牌
     * 2.缓慢刷新其他玩家的牌的计数
     */
    private initPokers() {
        let index: number = 27;
        let pokers: Array<Poker> = new Array<Poker>();
        let i: number = 0;
        let startThrowText: ShowText;
        let setAlpha: number = 1;

        let showPokers = setInterval(() => {
                console.log("发牌：", i);

                pokers.push(this.pokersPlayer[i]);
                this.clearPokers();
                StandaloneModel.mypoker = new PokerContainer(this, pokers,StandaloneModel.isLeftHand);
                StandaloneModel.mypoker.name = "mypoker";
                this.addChild(StandaloneModel.mypoker);
                this.showCount(this.mySeat, i + 1);
                this.showCount(this.rightSeat, i + 1);
                this.showCount(this.topSeat, i + 1);
                this.showCount(this.leftSeat, i + 1);
                i++;
                if(i >= 17 && i <27){
                    if(this.getChildByName("startThrowText") != null){this.removeChild(this.getChildByName("startThrowText"));}
                    startThrowText = new ShowText("等待丢牌...",580,500,130,setAlpha);
                    startThrowText.name = "startThrowText";
                    this.addChild(startThrowText);
                    setAlpha -= 0.1;
                }else if(i >= 27){
                        clearInterval(showPokers);
                        if(this.getChildByName("startThrowText") != null){this.removeChild(this.getChildByName("startThrowText"));}
                        console.log("发牌结束");
                        this.showAutoThrowPoker();
                }

        },300);

    }
    /**
     * 倒计时丢牌时间控制 
     */
    private showAutoThrowPoker():void{
         this.clearAllThrowPoker();
         //几个AI同时丢牌，显示，移除,刷新showThrowTimer
         this.throwPokerControlForMe(this.mySeat);
         this.throwPokerControlForRight(this.rightSeat);
         this.throwPokerControlForTop(this.topSeat);
         this.throwPokerControlForLeft(this.leftSeat);


         this.showButtons(RoomManager.ButtonsToThrowAPoker);

    }


     /**
     * 开始丢牌，
     * 其余三位玩家另选择一张牌进入交换排位，
     * 有与丢出牌相同牌的玩家加入阵营，同时另外两位玩家组成另外的阵营
     */
    public buttonDiuPai(evt: egret.TouchEvent): void {
        //玩家选中一张牌
        //没有该类型或者选中的牌数量不为一则不做处理
        if (PokerTypeUtils.isSingle(this.pokerSelectArray) == -1) {
            console.log("你这选的是啥呀");
            return;
        }
        //不能丢大小王
        if (this.pokerSelectArray[0].getOrderValue() > 13) {
            console.log("糟糕，选了大小王");
            return;
        }
        //如果自己有两张完全相同的牌,不能丢出其中一张
        if(this.firstThrowPokerSeat == 1){
            if(GameData.gameUser.id == this.southSeat){
                    if(this.isThrower()){return;}
            }
        }
        if(this.firstThrowPokerSeat == 2){
            if(GameData.gameUser.id == this.eastSeat){
                    if(this.isThrower()){return;}
            }
        }
        if(this.firstThrowPokerSeat == 3){
            if(GameData.gameUser.id == this.northSeat){
                    if(this.isThrower()){return;}
            }
        }
        if(this.firstThrowPokerSeat == 4){
            if(GameData.gameUser.id == this.westSeat){
                    if(this.isThrower()){return;}
            }
        }
        
        //清空按钮
        this.clearButtons();
        //要丢的牌等于挑选的牌
        this.PlayerThrowPoker=this.pokerSelectArray;
        //如果符合要求，则将该张牌显示到指定位置,刷新丢牌区
        this.showThrowPoker(this.mySeat,false);
        //清空已选择的牌数组
        this.pokerSelectArray = new Array<Poker>();
        this.clearButtons();
        //如果在丢牌时间内完成丢牌，则清除计时器【没用】
        console.log("自动丢牌1");
        //移除丢的牌
        this.pokersPlayer=PokerUtils.removePokers(this.pokersPlayer,this.PlayerThrowPoker);
        //刷新自己的牌
        this.showPokerVertival(this.mySeat);
                clearInterval(this.throwPokerMe);
                this.clearThrowTimerControl(this.mySeat);
                this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_SHOW_THROW_POKER,
                    direction:this.judgeMyDirection(),
                    data:{id:this.PlayerThrowPoker[0].getId(),value:this.PlayerThrowPoker[0].getOrderValue()}
                }));
    }

    private isThrower():boolean{
        let abc :boolean = false;
        for(let i = 0;i < this.pokersPlayer.length ; i++){
                if(Math.abs(this.pokerSelectArray[0].getId() - this.pokersPlayer[i].getId()) == 4 && 
                   this.pokerSelectArray[0].getOrderValue() == this.pokersPlayer[i].getOrderValue()){
                       abc = true;
                       break;
                   }
        }
        return abc;
    }
   /** 
    * 显示玩家丢的牌
    * seat 座位号
    */
    private showThrowPoker(seat: number,isShow :boolean){
        //this.clearAllThrowPoker();
        if(seat == 1){
            //this.clearSingleThrowPoker(1);
            this.playerThrowPoker =new PokerThrowContainer(seat,this.PlayerThrowPoker,isShow);
            this.playerThrowPoker.name = "playerThrowPoker";
            this.addChild(this.playerThrowPoker);
        }else if(seat == 2){
            //this.clearSingleThrowPoker(2);
            this.rightThrowPoker =new PokerThrowContainer(seat,this.RightThrowPoker,isShow);
            this.rightThrowPoker.name = "rightThrowPoker";
            this.addChild(this.rightThrowPoker);
        }else if(seat == 3){
            //this.clearSingleThrowPoker(3);
            this.topThrowPoker =new PokerThrowContainer(seat,this.TopThrowPoker,isShow);
            this.topThrowPoker.name = "topThrowPoker";
            this.addChild(this.topThrowPoker);
        }else if(seat == 4){
            //this.clearSingleThrowPoker(4);
            this.leftThrowPoker =new PokerThrowContainer(seat,this.LeftThrowPoker,isShow);
            this.leftThrowPoker.name = "leftThrowPoker";
            this.addChild(this.leftThrowPoker);
        }
    }

     /**
     * 显示其他玩家的明牌
     * seat 玩家座位号
     */
    private showPokerVertival(seat: number) {
            this.clearPokerVertical(seat);
            if(seat == 1){
                StandaloneModel.mypoker = new PokerContainer(this,this.pokersPlayer,StandaloneModel.isLeftHand);
                StandaloneModel.mypoker.name = "mypoker";
                this.addChild(StandaloneModel.mypoker);
            }
    }

        /**
     * 清理其他玩家的明牌
     * 清理玩家不出牌提示区
     * seat  玩家座位号
     */
    private clearPokerVertical(seat: number) {
        if (seat == 1) {
            if (this.getChildByName("mypoker") != null) {
                this.removeChild(this.getChildByName("mypoker"));
            }
        }
        if (seat == 2) {
            if(this.getChildByName("showRight")!=null){
                this.removeChild(this.getChildByName("showRight"));
            }
        }
        if (seat == 3) {
            if(this.getChildByName("showTop")!=null){
                this.removeChild(this.getChildByName("showTop"));
            }
        }
        if (seat == 4) {
            if(this.getChildByName("showLeft")!=null){
                this.removeChild(this.getChildByName("showLeft"));
            }
        }


    }

    /**
     * 丢牌时间的控制
     */
     private throwPokerControlForMe(seat :number){
         let count:number = 10;
         this.throwPokerMe = setInterval(() => {
            this.showThrowTimer(count,seat);
            count -- ;
            if(count < 0){
                  clearInterval(this.throwPokerMe);
            }
        },1000);
    }
    private throwPokerControlForRight(seat :number){
         let count:number = 10;
         this.throwPokerRight = setInterval(() => {
            this.showThrowTimer(count,seat);
            count -- ;
            if(count < 0){
                  clearInterval(this.throwPokerRight);
            }
        },1000);
    }
    private throwPokerControlForTop(seat :number){
         let count:number = 10;
         this.throwPokerTop = setInterval(() => {
            this.showThrowTimer(count,seat);
            count -- ;
            if(count < 0){
                  clearInterval(this.throwPokerTop);
            }
        },1000);
    }
    private throwPokerControlForLeft(seat :number){
         let count:number = 10;
         this.throwPokerLeft = setInterval(() => {
            this.showThrowTimer(count,seat);
            count -- ;
            if(count < 0){
                  clearInterval(this.throwPokerLeft);
            }
        },1000);
    }

    /**
     * 显示所有玩家丢牌的定时器
     */
    private showThrowTimer(index: number,seat: number) {
        //this.clearThrowTimer();
        this.clearThrowTimerControl(seat);
        if(seat == 1){
            //this.clearThrowTimerControl(1);
            let playerThrowTimer: OtherThrowTimer = new OtherThrowTimer(index + "",seat);
            playerThrowTimer.name = "playerThrowTimer";
            this.addChild(playerThrowTimer);
        }else if(seat == 2){
           // this.clearThrowTimerControl(2);
            let rightThrowTimer: OtherThrowTimer = new OtherThrowTimer(index + "",seat);
            rightThrowTimer.name = "rightThrowTimer";
            this.addChild(rightThrowTimer);
        }else if(seat == 3){
            //this.clearThrowTimerControl(3);
            let topThrowTimer: OtherThrowTimer = new OtherThrowTimer(index + "",seat);
            topThrowTimer.name = "topThrowTimer";
            this.addChild(topThrowTimer);
        }else if(seat == 4){
            //this.clearThrowTimerControl(4);
            let leftThrowTimer: OtherThrowTimer = new OtherThrowTimer(index + "",seat);
            leftThrowTimer.name = "leftThrowTimer";
            this.addChild(leftThrowTimer);
        }
    }

    /**
      * 清理相应玩家丢牌的定时器
      */
    private clearThrowTimerControl(seat :number) {
        if(seat == 1){
            if (this.getChildByName("playerThrowTimer") != null) {
                this.removeChild(this.getChildByName("playerThrowTimer"));
            }
        }else if(seat == 2){
            if (this.getChildByName("rightThrowTimer") != null) {
                this.removeChild(this.getChildByName("rightThrowTimer"));
            }
        }else if(seat == 3){
          if (this.getChildByName("topThrowTimer") != null) {
                this.removeChild(this.getChildByName("topThrowTimer"));
            }
        }else if(seat == 4){
           if (this.getChildByName("leftThrowTimer") != null) {
                this.removeChild(this.getChildByName("leftThrowTimer"));
            }
        }

    }
    /**
     * 清理所有玩家丢的牌
     */
    private clearAllThrowPoker(){
        if(this.getChildByName("playerThrowPoker")!=null){
            this.removeChild(this.getChildByName("playerThrowPoker"));
        }
        if(this.getChildByName("rightThrowPoker")!=null){
            this.removeChild(this.getChildByName("rightThrowPoker"));
        }
        if(this.getChildByName("topThrowPoker")!=null){
            this.removeChild(this.getChildByName("topThrowPoker"));
        }
        if(this.getChildByName("leftThrowPoker")!=null){
            this.removeChild(this.getChildByName("leftThrowPoker"));
        }
    }


    /**
     * 显示其他玩家剩余的牌的数量
     * seat 玩家座位号
     * count 剩余牌数量
     */
    private showCount(seat: number, count: number) {
        this.clearCount(seat);
        if (seat == 1) {
            this.playerCount = new OtherPokerCountContains(count,1);
            this.playerCount.name = "playerCount";
            this.addChild(this.playerCount);
        }else if (seat == 2) {
            this.rightCount = new OtherPokerCountContains(count,2);
            this.rightCount.name = "rightCount";
            this.addChild(this.rightCount);
        } else if (seat == 3){
            this.topCount = new OtherPokerCountContains(count,3);
            this.topCount.name = "topCount";
            this.addChild(this.topCount);
        }else if (seat == 4){
            this.leftCount = new OtherPokerCountContains(count,4);
            this.leftCount.name = "leftCount";
            this.addChild(this.leftCount);
        }
    }

        /**
     * 清理其他玩家剩余的牌的数量
     * seat 玩家座位号
     */
    private clearCount(seat: number) {
        if (seat == 1){
            if (this.getChildByName("playerCount") != null) {
                this.removeChild(this.getChildByName("playerCount"));
            }
         }else if (seat == 2){
            if (this.getChildByName("rightCount") != null) {
                this.removeChild(this.getChildByName("rightCount"));
            }
         }else if (seat == 3){
            if (this.getChildByName("topCount") != null) {
                this.removeChild(this.getChildByName("topCount"));
            }
        }else if (seat == 4) {
            if (this.getChildByName("leftCount") != null) {
                this.removeChild(this.getChildByName("leftCount"));
            }
        }
    }
     /**
     * 刷新自己的牌
     */
    private clearPokers():void{
        if (this.getChildByName("mypoker") != null) {
                this.removeChild(this.getChildByName("mypoker"));
            }
    }

    /**
     * 显示优先出牌和丢牌头衔
     */
    private showThrowOrOutPokerTitle(): void{
        this.cleatFirstTitle();
        let a = this.filterThrowAndOueTitle(this.firstThrowPokerSeat);
        //丢
        console.log("显示丢牌出牌头衔");//this.firstThrowPokerSeat  this.firstOutPokerSeat
        this.fistThrowTitle = new FirstThrowTitleContainer(a);
        this.fistThrowTitle.name ="fistThrowTitle";
        this.addChild(this.fistThrowTitle);

        let b = this.filterThrowAndOueTitle(this.firstOutPokerSeat);
        //出
        this.fistOutTitle = new FirstOutTitleContainer(b);
        this.fistOutTitle.name ="fistOutTitle";
        this.addChild(this.fistOutTitle);
    }

    private filterThrowAndOueTitle(value:number):number{
        let Seat:number = -1;
        if(value == 1){
            if(GameData.gameUser.id == this.southSeat){
                Seat = 1;
            }else if(GameData.gameUser.id == this.eastSeat){
                Seat = 4;
            }else if(GameData.gameUser.id == this.northSeat){
                Seat = 3;
            }else if(GameData.gameUser.id == this.westSeat){
                Seat = 2;
            }
        }else if(value == 2){
            if(GameData.gameUser.id == this.southSeat){
                Seat = 2;
            }else if(GameData.gameUser.id == this.eastSeat){
                Seat = 1;
            }else if(GameData.gameUser.id == this.northSeat){
                Seat = 4;
            }else if(GameData.gameUser.id == this.westSeat){
                Seat = 3;
            }
        }else if(value == 3){
            if(GameData.gameUser.id == this.southSeat){
                Seat = 3;
            }else if(GameData.gameUser.id == this.eastSeat){
                Seat = 2;
            }else if(GameData.gameUser.id == this.northSeat){
                Seat = 1;
            }else if(GameData.gameUser.id == this.westSeat){
                Seat = 4;
            }
        }else if(value == 4){
            if(GameData.gameUser.id == this.southSeat){
                Seat = 4;
            }else if(GameData.gameUser.id == this.eastSeat){
                Seat = 3;
            }else if(GameData.gameUser.id == this.northSeat){
                Seat = 2;
            }else if(GameData.gameUser.id == this.westSeat){
                Seat = 1;
            }
        }
        return Seat;
    }

       /**
     * 清理优先丢牌、出牌头衔
     */
    private cleatFirstTitle():void {
        if (this.getChildByName("fistThrowTitle") != null) {
                this.removeChild(this.getChildByName("fistThrowTitle"));}
        if (this.getChildByName("fistOutTitle") != null) {
                this.removeChild(this.getChildByName("fistOutTitle"));}
    }


    private playerDataUpdate(jsonData):void{
            let json_data = JSON.parse(JSON.stringify(jsonData.data));
            if(GameData.gameUser.id == this.southSeat){//如果我的位置是南
                    if(jsonData.direction == this.southSeat){
                            this.user.setName(json_data.name);
                            this.user.setSex(json_data.sex);
                            this.playerIndex = json_data.index;
                    }else if(jsonData.direction == this.eastSeat){
                            this.userRight.setName(json_data.name);
                            this.userRight.setSex(json_data.sex);
                            this.rightIndex = json_data.index;
                    }else if(jsonData.direction == this.northSeat){
                            this.userTop.setName(json_data.name);
                            this.userTop.setSex(json_data.sex);
                            this.topIndex = json_data.index;
                    }else if(jsonData.direction == this.westSeat){
                            this.userLeft.setName(json_data.name);
                            this.userLeft.setSex(json_data.sex);
                            this.leftIndex = json_data.index;
                    }
            }else if(GameData.gameUser.id == this.eastSeat){//如果我的位置是东
                    if(jsonData.direction == this.southSeat){
                            this.userLeft.setName(json_data.name);
                            this.userLeft.setSex(json_data.sex);
                            this.leftIndex = json_data.index;
                    }else if(jsonData.direction == this.eastSeat){
                            this.user.setName(json_data.name);
                            this.user.setSex(json_data.sex);
                            this.playerIndex = json_data.index;
                    }else if(jsonData.direction == this.northSeat){
                            this.userRight.setName(json_data.name);
                            this.userRight.setSex(json_data.sex);
                            this.rightIndex = json_data.index;
                    }else if(jsonData.direction == this.westSeat){
                            this.userTop.setName(json_data.name);
                            this.userTop.setSex(json_data.sex);
                            this.topIndex = json_data.index;
                    }
            }else if(GameData.gameUser.id == this.northSeat){//如果我的位置是北
                    if(jsonData.direction == this.southSeat){
                            this.userTop.setName(json_data.name);
                            this.userTop.setSex(json_data.sex);
                            this.topIndex = json_data.index;
                    }else if(jsonData.direction == this.eastSeat){
                            this.userLeft.setName(json_data.name);
                            this.userLeft.setSex(json_data.sex);
                            this.leftIndex = json_data.index;
                    }else if(jsonData.direction == this.northSeat){
                            this.user.setName(json_data.name);
                            this.user.setSex(json_data.sex);
                            this.playerIndex = json_data.index;
                    }else if(jsonData.direction == this.westSeat){
                            this.userRight.setName(json_data.name);
                            this.userRight.setSex(json_data.sex);
                            this.rightIndex = json_data.index;
                    }
            }else if(GameData.gameUser.id == this.westSeat){//如果我的位置是西
                    if(jsonData.direction == this.southSeat){
                            this.userRight.setName(json_data.name);
                            this.userRight.setSex(json_data.sex);
                            this.rightIndex = json_data.index;
                    }else if(jsonData.direction == this.eastSeat){
                            this.userTop.setName(json_data.name);
                            this.userTop.setSex(json_data.sex);
                            this.topIndex = json_data.index;
                    }else if(jsonData.direction == this.northSeat){
                            this.userLeft.setName(json_data.name);
                            this.userLeft.setSex(json_data.sex);
                            this.leftIndex = json_data.index;
                    }else if(jsonData.direction == this.westSeat){
                            this.user.setName(json_data.name);
                            this.user.setSex(json_data.sex);
                            this.playerIndex = json_data.index;
                    }
            }
                        
            //显示头像及昵称
            this.showPortraits();
            this.LoadingButAction();
    }
        /**
     * 当点击开始游戏,显示开发者模式和设置等界面,再调用this.init()开始游戏
     */
    private LoadingButAction(): void{
        //游戏设置
        let setButton = new Button("gamesetting",1830,40,50,50);
        this.addChild(setButton);
        setButton.touchEnabled = true;
        setButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetButtonClick, this);
        //开始游戏action
        console.log("游戏开始");
        this.init();

    }

    /**
     * 根据this.playPokerCount了解对局数
     * 如果是第一场对局，则随机选择人抽牌
     * 如果对局数大于一，则指定人切牌
     */
    private init(){
        //egret.getTimer();
        console.log("显示优先丢牌和出牌人："+this.firstThrowPokerSeat+","+this.firstOutPokerSeat);
        let startGameText: ShowText;
        let setAlpha: number = 1;
        let show_time:number = 3;

        let gameCountShow = setInterval(() => {
             show_time --;
			if(this.getChildByName("startGameText") != null){
                this.removeChild(this.getChildByName("startGameText"));
            }
             startGameText = new ShowText("第"+this.playPokerCount+"回合，开始！",600,420,130,setAlpha);
             startGameText.name = "startGameText";
             this.addChild(startGameText);
             setAlpha -= 0.3;
			if(show_time == 0) {
                clearInterval(gameCountShow);
                if(this.getChildByName("startGameText") != null){
                        this.removeChild(this.getChildByName("startGameText"));
                    }
                //第一回合激发抽牌，大于1激发切牌
                this.drawPoker();
			}
		}, 1000);

    }

    /**
     * 刷新108张牌，确定是抽牌还是切牌
     * 如果是抽牌，随机选中座位号为1则显示抽牌选项，不为1则自动抽牌
     * 如果是切牌，轮到座位号为1玩家切牌则显示切牌选项，不为1则自动切牌
     */
    private drawPoker(): void{
        //阵营标识还原后重新加载头像
        this.showPortraits();
        let index: number = 108;
        let drawpokers: Array<Poker> = new Array<Poker>();
        let i: number = 0;

        let selectPoker = setInterval(() => {
                drawpokers.push(this.pokers[i]);
                this.clearDrawPokers();
                this.drawpoker = new PokerDrawContainer(this, drawpokers,false,-1);//为true显示明牌，为开发者模式
                this.drawpoker.name = "drawpoker";
                this.addChild(this.drawpoker);
                i++;
                if(i >= 108){
                    clearInterval(selectPoker);
                    //如果游戏回合数为1则激发抽牌，不为1则激发切牌
                    if(this.playPokerCount == 1){
                        this.judgeDrawer();
                    }else if(this.playPokerCount > 1){
                        console.log("结束显示要切的牌和显示确认切牌");
                        //玩家切牌，如果上局优先丢牌玩家座位号为1则显示切牌选项,不为1则激发自动切牌
                        this.judgeSwitch();
                    }
                }


        },80);
    }
    private judgeSwitch():void{
            if(this.firstThrowPokerSeat == 1){
                       if(GameData.gameUser.id == this.westSeat){
                                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
                            }
           }else if(this.firstThrowPokerSeat == 2){
                       if(GameData.gameUser.id == this.southSeat){
                                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
                            }
           }else if(this.firstThrowPokerSeat == 3){
                       if(GameData.gameUser.id == this.eastSeat){
                                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
                            }
           }else if(this.firstThrowPokerSeat == 4){
                       if(GameData.gameUser.id == this.northSeat){
                                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
                            }
                        }
    }
    private judgeDrawer():void{
        console.log("结束显示要抽的牌和显示确认抽牌");
                        //随机抽取玩家抽牌，如果座位号为1则显示抽牌选项,不为1则激发自动抽牌
                        if(this.drawPokerRandom == 1){//代表南方向
                            if(GameData.gameUser.id == this.southSeat){
                                this.showButtons(RoomManager.ButtonsToDrawAPoker);
                            }
                        }else if(this.drawPokerRandom == 2){//代表东方向
                            if(GameData.gameUser.id == this.eastSeat){
                                this.showButtons(RoomManager.ButtonsToDrawAPoker);
                            }
                        }else if(this.drawPokerRandom == 3){//代表北方向
                            if(GameData.gameUser.id == this.northSeat){
                                this.showButtons(RoomManager.ButtonsToDrawAPoker);
                            }
                        }else if(this.drawPokerRandom == 4){//代表西方向
                            if(GameData.gameUser.id == this.westSeat){
                                this.showButtons(RoomManager.ButtonsToDrawAPoker);
                            }
                        }
    }

        private judgeMyDirection():number{
                if(GameData.gameUser.id == this.southSeat){
                                return 1;
                }else if(GameData.gameUser.id == this.eastSeat){
                                return 2;
                }else if(GameData.gameUser.id == this.northSeat){
                                return 3;
                }else if(GameData.gameUser.id == this.westSeat){
                                return 4;
                        }
    }
/*    private playerDataexChange(id:number):void{
        let my_direction:string = "中";
        if(id === this.southSeat){//如果我在南方向
            my_direction = "south";
        }else if(id === this.eastSeat){//如果我在东方向
            my_direction = "east";
        }else if(id === this.northSeat){//如果我在北方向
            my_direction = "north";
        }else if(id === this.westSeat){//如果我在西方向
            my_direction = "west";
    }
}*/

     /**
     * 座位号为1玩家抽牌
     * 监听点击“抽牌”按钮的动作
     * 点击抽牌后：
     *  1.清空抽牌列表
     *  2.展示该张牌
     *  3.清空显示的牌
     *  4.开始转换牌次序
     *  5.开始依序发牌
     */
    public buttonChouPai(evt: egret.TouchEvent): void {
        //清除抽牌按钮
        this.clearButtons();
        console.log("测试自己抽牌的BUG--this.pokerDrawArray.length:"+this.pokerDrawArray.length+",id:"+this.pokerDrawArray[0].getId());
        //找到抽牌id并显示
            for(let i =0;i < this.pokers.length;i++){
                if(this.pokers[i].getId() == this.pokerDrawArray[0].getId()){
                    this.drawPokerIndex = i;
                    this.drawPokerId = this.pokerDrawArray[0].getId();
                    this.drawPokerValue = this.pokerDrawArray[0].getOrderValue();
                    console.log("index:"+this.drawPokerIndex+",id:"+this.drawPokerId+",value:"+this.drawPokerValue);
                    //找到了就跳出循环
                    break;
                }
            }
            //console.log("测试结束");
            //从i最大开始发牌，看明抽的牌在哪家则谁丢牌，看暗抽的牌在哪家则谁出牌，调用丢牌函数成功衔接
            //如果抽到牌的值为大小王，则重新抽牌，主要是抽的牌还要找暗牌来区分先抽和先给
            /*if(this.drawPokerValue == 14 || this.drawPokerValue == 15){
                this.showButtons(RoomManager.ButtonsToDrawAPoker);
            }else{
                this.showDealPokers();
            }
*/
            this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_SHOW_DRAWER_POKER,
                    data:{index:this.drawPokerIndex,id:this.drawPokerId,value:this.drawPokerValue}
                }));

    }

    /**
     * 座位号为1玩家切牌
     * 监听点击“切牌”按钮的动作
     * 点击切牌后：
     *  1.清空切牌列表
     *  4.开始转换切牌后牌的次序
     *  5.开始依序发牌
     */
    public buttonQiePai(evt: egret.TouchEvent): void {
        //清除切牌按钮
        this.clearButtons();
        let switchPokerIndex: number = -1;
        //找到切牌id并以此为基准，将上方所有牌（包括这张）移到最下方，其中切的牌最后会发到自己手中
            for(let i =0;i < this.pokers.length;i++){
                if(this.pokers[i].getId() == this.pokerDrawArray[0].getId()){
                    switchPokerIndex = i;
                    break;
                }
            }
            this.sendGameServerEvents(JSON.stringify({
                    action:OnlineEvent.OE_SHOW_SWITCH_POKER,
                    switchIndex:switchPokerIndex
                }));
    }

    /**
     * 展示每位玩家的头像
     */
    private showPortraits(): void{
        /** 显示玩家头像 */
        this.showPortrait(this.isFirst,this.playerCamp);
        /** 显示right头像 */
        this.showOtherPortrait(this.rightSeat,this.isFirst, this.rightCamp);
        /** 显示top头像 */
        this.showOtherPortrait(this.topSeat,this.isFirst, this.topCamp);
        /** 显示left头像 */
        this.showOtherPortrait(this.leftSeat,this.isFirst, this.leftCamp);
    }

    /**
     * 显示玩家头像
     */
    private showPortrait(isFirst: boolean,isCamp: boolean) {
        this.clearPortrait();
        this.portraitPlayer = new PortraitContainer(this.user, this.playerIndex,isFirst, isCamp);
        this.portraitPlayer.name = "portraitPlayer";
        this.addChild(this.portraitPlayer);
    }
        /**
     * 清理要抽的牌
     */
    private clearDrawPokers() {
        if (this.getChildByName("drawpoker") != null) {
            this.removeChild(this.getChildByName("drawpoker"));
        }
    }

    /**
     * 清理玩家头像
     */
    private clearPortrait() {
        if (this.getChildByName("portraitPlayer") != null) {
            this.removeChild(this.getChildByName("portraitPlayer"));
        }
    }

    /**
     * 显示其他玩家头像
     * seat 玩家座位号
     * isCamp 是不是同一阵营
     */
    private showOtherPortrait(seat: number,isFirst: boolean, isCamp: boolean) {
        this.clearOtherPortrait(seat);
        if (seat == 3) {
            this.portraitTop = new PortraitOtherContainer(this.userTop, this.topIndex,isFirst,isCamp,3);
            this.portraitTop.name = "portraitTop";
            this.addChild(this.portraitTop);
        } else if (seat == 2){
            this.portraitRight = new PortraitOtherContainer(this.userRight, this.rightIndex,isFirst,isCamp,2);
            this.portraitRight.name = "portraitRight";
            this.addChild(this.portraitRight);
        } else if (seat == 4){
            this.portraitLeft = new PortraitOtherContainer(this.userLeft, this.leftIndex,isFirst,isCamp,4);
            this.portraitLeft.name = "portraitLeft";
            this.addChild(this.portraitLeft);
        }

    }


    /**
     * 清理其他玩家头像
     * seat 玩家座位号
     */
    private clearOtherPortrait(seat: number) {
        if (seat == 3) {
            if (this.getChildByName("portraitTop") != null) {
                this.removeChild(this.getChildByName("portraitTop"));
            }
        } else if (seat == 2){
            if (this.getChildByName("portraitRight") != null) {
                this.removeChild(this.getChildByName("portraitRight"));
            }
        }
        else if (seat == 4){
            
            if (this.getChildByName("portraitLeft") != null) {
                this.removeChild(this.getChildByName("portraitLeft"));
            }
        }
    }

         /**
     * 监听点击扑克的动作抽牌
     */
    public drawPokerClickUp(evt: egret.TouchEvent): void {
        let p = RES.getRes("layout_json").poker;
        let y = p.pokerDrawUpMove;
        //
        if(this.draggedUp != null){
            if (this.draggedUp.y == 0){
                this.draggedUp.y = y;
                this.pokerDrawArray= new Array<Poker>();}
        }
        if(this.draggedDown != null){
            if (this.draggedDown.y == p.pokerDrawAddy){
                this.draggedDown.y = y + p.pokerDrawAddy;
                this.pokerDrawArray= new Array<Poker>();}
        }
        //
        let draggedObject: egret.Bitmap = evt.currentTarget;
        this.draggedUp = evt.currentTarget;

        //显示扑克的y坐标和扑克的名称
        let id: number = parseInt(draggedObject.name.split(",")[0]);
        let orderValue: number = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y) {//选中牌，将牌加入数组
            draggedObject.y = 0;
            this.pokerDrawArray.push(new Poker(id, orderValue));
            console.log("上:选中的牌为："+id+","+orderValue+","+this.pokerDrawArray.length);

        } else {//取消选中牌，将牌从数组中移除
            draggedObject.y = y;
            let poker = new Poker(id, orderValue);
            console.log("上poker:"+poker.toString()+"|array:"+this.pokerDrawArray);
            this.pokerDrawArray = PokerUtils.removePokers(this.pokerDrawArray, [poker]);
            console.log("上removedArray:"+this.pokerDrawArray)
        }

    }
    
    /**
     * 监听点击扑克的动作抽牌
     */
    public drawPokerClickDown(evt: egret.TouchEvent): void {
        let p = RES.getRes("layout_json").poker;
        let y = p.pokerDrawUpMove;
        //
        if(this.draggedDown != null){
            if (this.draggedDown.y == p.pokerDrawAddy){
                this.draggedDown.y = y + p.pokerDrawAddy;
                this.pokerDrawArray= new Array<Poker>();}
        }
        if(this.draggedUp != null){
            if (this.draggedUp.y == 0){
                this.draggedUp.y = y;
                this.pokerDrawArray= new Array<Poker>();}
        }
        //
        let draggedObject: egret.Bitmap = evt.currentTarget;
        this.draggedDown = evt.currentTarget;;
        //显示扑克的y坐标和扑克的名称
        let id: number = parseInt(draggedObject.name.split(",")[0]);
        let orderValue: number = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y + p.pokerDrawAddy) {//选中牌，将牌加入数组
            draggedObject.y = p.pokerDrawAddy;
            this.pokerDrawArray.push(new Poker(id, orderValue));
            console.log("下:选中的牌为："+id+","+orderValue+","+this.pokerDrawArray.length);
        } else {//取消选中牌，将牌从数组中移除
            draggedObject.y = y + p.pokerDrawAddy;
            let poker = new Poker(id, orderValue);
            console.log("下poker:"+poker.toString()+"|array:"+this.pokerDrawArray);
            this.pokerDrawArray = PokerUtils.removePokers(this.pokerDrawArray, [poker]);
            console.log("下removedArray:"+this.pokerDrawArray)
        }

    }

    /**
     * 监听点击扑克的动作
     */
    public pokerClick(evt: egret.TouchEvent): void {//^^
        let p = RES.getRes("layout_json").poker;
        let y = p.pokerUpMove;
        let draggedObject: egret.Bitmap = evt.currentTarget;
        console.log("不是自定义draggedObject:"+draggedObject.name);
        //显示扑克的y坐标和扑克的名称
        let id: number = parseInt(draggedObject.name.split(",")[0]);
        let orderValue: number = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y) {//选中牌，将牌加入数组
            draggedObject.y = 0;
            this.pokerSelectArray.push(new Poker(id, orderValue));
            console.log("this.pokerSelectArray接替出牌添加测试长度："+this.pokerSelectArray.length);

        } else {//取消选中牌，将牌从数组中移除
            draggedObject.y = y;
            let poker = new Poker(id, orderValue);
            console.log("poker", poker.toString(), "array", this.pokerSelectArray);

            this.pokerSelectArray = PokerUtils.removePokers(this.pokerSelectArray, [poker]);
            console.log("removedArray", this.pokerSelectArray)
        }
        //console.log("draggedObject2:"+draggedObject.y);

    }
    /**
     * 再来一局
     */
    public buttonRestart(): void {
        this.clearGameResultShow();
        this.clearButtons();
        this.sendGameServerEvents(JSON.stringify({
            action:OnlineEvent.OE_READY,
            direction:GameData.gameUser.id
        }));

       
    }
    private returnInit():void{

        this.returnReady();

        //1.初始化每个玩家发到的牌
        this.pokersPlayer = new Array<Poker>();
        //2.清除玩家显示的牌
        this.clearPokerVertical(this.mySeat);
        //3.清除所有玩家出牌的明牌和出的牌的集合
        this.clearPokerShow(1);
        this.clearPokerShow(2);
        this.clearPokerShow(3);
        this.clearPokerShow(4);
        this.pokerSelectArray = new Array<Poker>();
        this.TopOutPokers = new Array<Poker>();
        this.RightOutPokers = new Array<Poker>();
        this.LeftOutPokers = new Array<Poker>();

        //4.为了解决丢的牌全部不为空再执行翻牌函数
        this.PlayerThrowPoker = new Array<Poker>();
        this.RightThrowPoker = new Array<Poker>();
        this.TopThrowPoker = new Array<Poker>();
        this.LeftThrowPoker = new Array<Poker>();

        //5.牌计数
        this.clearCount(1);
        this.clearCount(2);
        this.clearCount(3);
        this.clearCount(4);

        //7.清理阵营标识
        this.clearCamp();
        //8.清除丢牌出牌头衔
        this.cleatFirstTitle();
        //回合数+1，初始为1
        this.playPokerCount ++;
        //重新得到一副牌
        //this.pokers = PokerUtils.getRandomPokers();
        //初始化切的牌
        this.pokerDrawArray = new Array<Poker>();
        //console.log("此时优先丢牌人不变，优先出牌人不变才对："+this.firstThrowPokerSeat+",out:"+this.firstOutPokerSeat);
        
        if(this.firstThrowPokerSeat == 1){this.firstThrowPokerSeat = 2;}
            else if(this.firstThrowPokerSeat == 2){this.firstThrowPokerSeat = 3;}
            else if(this.firstThrowPokerSeat == 3){this.firstThrowPokerSeat = 4;}
            else if(this.firstThrowPokerSeat == 4){this.firstThrowPokerSeat = 1;}
            
        this.sendGameServerEvents(JSON.stringify({
            action:OnlineEvent.OE_AGAINGAME
        }));

        //开始游戏action
        console.log("再次开始游戏");
        this.init();
    }

    /**
     * 游戏结束，返回大厅
     */
    public buttonGameOver(): void {
        this.clearGameResultShow();
        console.log("返回大厅");
        let gameHall:GameHall = new GameHall(this.user);
        gameHall.name = "gameHall";
        this.parent.addChild(gameHall);
        this.parent.removeChild(this);
    }

        /**
     * 阵营全归false
     */
    private clearCamp(): void{
        this.isFirst = true;
        this.playerCamp = false;
        this.rightCamp = false;
        this.topCamp = false;
        this.leftCamp = false;
    }
    /**
     * 显示、丢牌出牌按钮组
     */
    private showButtons(type: number) {
        this.clearButtons();
        this.buttons = new PlayerButtonContainer(this, type);
        this.buttons.name = "buttons";
        this.addChild(this.buttons);
    }
        /**
     * 清理出牌按钮组,同showButtons()相关联
     */
    private clearButtons() {
        if (this.getChildByName("buttons") != null) {
            this.removeChild(this.getChildByName("buttons"));
        }
    }


    /**
	 * 注册 matchvs 组件监听事件
	 */
	private addMsResponseListen(){
		//this.moveTimeer.addEventListener(egret.TimerEvent.TIMER,this.RoleMoveFun,this);
        //发送消息异步回调
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
        //网络异常
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify,this);
        //设置帧同步回调
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SETFRAMESYNC_RSP, this.setFrameSyncResponse,this);
		//帧数据更新回调
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_FRAMEUPDATE, this.frameUpdate,this);
        //gameserver回调
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GAMESERVER_NTFY, this.gameServerNotify,this);
}

    public release(){
		//this.moveTimeer.removeEventListener(egret.TimerEvent.TIMER,this.RoleMoveFun,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);

        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);

		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify,this);

		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SETFRAMESYNC_RSP, this.setFrameSyncResponse,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_FRAMEUPDATE, this.frameUpdate,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GAMESERVER_NTFY, this.frameUpdate,this);
    }

    private onSetButtonClick(e: egret.TouchEvent) {
        console.log("tt");
        //console.log("this.getChildByName(gameSettingPannel):"+this.getChildByName("gameSettingPannel"));
        if(this.getChildByName("gameSettingPannel") != null){
            this.removeChild(this.getChildByName("gameSettingPannel"));
        }
        //【被遮挡问题暂不知道如何解决】
        let gamesettingpannel = new GameSettingPannel();
        gamesettingpannel.setMyPokers(this.pokersPlayer);
        gamesettingpannel.x = 735;
        gamesettingpannel.y = 425;
        this.addChild(gamesettingpannel);
        //this.addChildAt(gamesetting,9);//测试深度
        //console.log("提示栏深度值："+gamesetting.getChildAt;
        //this.test();
    }

}