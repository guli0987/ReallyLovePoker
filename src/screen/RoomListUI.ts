class RoomListUI extends eui.Component implements  eui.UIComponent {

	private btn_return:eui.Button;
	private lab_userID:eui.Label;
	private img_header:eui.Image;
	
	private lab_getInfo:eui.Label;

	private roomItemA:eui.ArrayCollection = new eui.ArrayCollection([]);

	private _getRoomListFlter:MsRoomFilter;
	private _roomListSprite:egret.Sprite = null;
	private data_roomList:eui.List;
	private _timer: egret.Timer;
	public constructor() {
		super();
		this.skinName = "RoomListUISkin";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		this.getChilds(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this._roomListSprite = new egret.Sprite();
        this.addChild(this._roomListSprite);
		this.getRoomListEx();
		this._timer = new egret.Timer(2000, 0);//指定重复次数。如果为零，则计时器将持续不断重复运行
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        //监听获取房间列表事件
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP,this.getRoomListExResponse,this);
        this._timer.start();

		//this.getRoomListEx();
	}

	private getChilds(partName:string,instance:any){
		if("lab_userID" == partName){
			this.lab_userID = instance;
			this.lab_userID.text = "用户："+GameData.gameUser.id+"\n"+GameData.gameUser.name;
		}else if("img_header" == partName){
			this.img_header = instance;
			this.img_header.source = GameData.gameUser.avatar;
		}else if("btn_return" == partName){
			this.btn_return = instance;
			this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonExitRoom, this);
		}else if("data_roomList" == partName){
			this.data_roomList = instance;
		}else if("lab_getInfo" == partName){
			this.lab_getInfo = instance;
		}
	}

	private mbuttonExitRoom(event:egret.TouchEvent){
        this._timer.stop();//计时结束
        //退出房间成功进入游戏大厅
        GameSceneView._gameScene.lobby();
    }

	 private timerFunc(event: egret.Event) {
        this.getRoomListEx();
    }

	/**
     * 获取房间列表 扩展接口，附带更多的返回信息
     */
    private getRoomListEx():void{
        /*let filter = new MsRoomFilterEx(GameData.createRoomInfo.maxPlayer,
        GameData.createRoomInfo.mode,
        GameData.createRoomInfo.canWatch,
        "mapA", 0, 0, 0, 0, 10, 2);*/
        mvs.MsEngine.getInstance.getRoomListEx(GameData.thefilter);
    }

	/**
     * 获取房间信息列表扩展接口，跟getRoomList接口相比 此接口提供更多的房间信息
     */
    private getRoomListExResponse(ev:egret.Event){
        let rsp:MsGetRoomListExRsp = ev.data;
        if(rsp.status !== 200){
			this.lab_getInfo.text = "获取失败!";
            return
        }
        if(rsp.roomAttrs.length === 0){
			this.lab_getInfo.text = "当前没有房间";
			this.data_roomList.dataProvider = new eui.ArrayCollection([]);
            return;
        }
		this.lab_getInfo.text = "";

		this.roomItemA.removeAll();
        for(let i = 0; i < rsp.roomAttrs.length ; i++){
			console.log("房间数：",rsp.total+":"+rsp.roomAttrs.length);
			let it = {
				_parent:this,
				_roomID: rsp.roomAttrs[i].roomID,
				_num: rsp.roomAttrs[i].gamePlayer,
				_state:rsp.roomAttrs[i].state,
				_map:rsp.roomAttrs[i].roomProperty,
				_max:rsp.roomAttrs[i].maxPlayer,
			}
			this.roomItemA.addItem(it);
        }
		this.data_roomList.dataProvider = this.roomItemA;
		this.data_roomList.itemRenderer = RoomItem;
    }

/**
 * 获取房间列表返回类型的子类型，房间信息类型，MsGetRoomListExRsp 类型中使用
 *  {string} roomID       房间ID
 *  {string} roomName     房间名称
 *  {number} maxPlayer    房间可容纳最多人数
 *  {number} gamePlayer   当前房间游戏人数
 *  {number} watchPlayer  当前房间观战人数
 *  {number} mode         创建房间时，开发者自己定义的 mode 数据
 *  {number} canWatch     是否可观战 1-可以 2-不可以
 *  {string} roomProperty 房间属性，开发者自定义数据，比如地图
 *  {number} owner        房主ID
 *  {number} state        房间状态 0-StateNil 1-StateOpen 2-StateClosed
 *  {string} createTime   房间创建时间
 */
    public Release(){
        this._timer.stop();
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP,this.getRoomListExResponse,this);
    }
	
}