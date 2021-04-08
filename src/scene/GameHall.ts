class GameHall extends egret.DisplayObjectContainer{
	public constructor(user:User) {
		super();
		this.user = user;
		this.width = 1920;
		this.height = 1080;

		//加载游戏大厅背景
		let sky: HallLayout = new HallLayout(this.width,this.height);
        this.addChild(sky);

		//添加bg是为了在开发时观察Container的范围
		let bg:egret.Shape = new egret.Shape();
		bg.graphics.beginFill( 0x9CBDBB,0.6);
    	bg.graphics.drawRect( 0, 0, this.width, this.height ); 
    	bg.graphics.endFill();
		// bg.alpha = 0.5;
		this.addChild(bg);
		this.show();
		//RES.loadGroup("gamebg", 5);
		/*RES.loadGroup("portraits", 4);
		RES.loadGroup("drawpoker", 3);
        RES.loadGroup("pokers", 2);
		RES.loadGroup("buttons", 1);*/
		//console.log("portraits load ok");
		//console.log("pokers load ok");
		//console.log("buttons load ok");
		//console.log("shops load ok");

	}
	private user:User;
	private menuContainer:HallMenuContainer  = new HallMenuContainer(this.user,this);

	private show(){
		this.menuContainer.name = "menuContainer";
		this.addChild(this.menuContainer);
		
	}
	 private menuOfflineModeClick(){
		 //console.log("menuOfflineModeClick---");
		 let playerP2c:StandaloneModel = new StandaloneModel(this.user);
         this.parent.addChild(playerP2c);
		 this.parent.removeChild(this);
		 console.log("单机游戏子对象数量："+playerP2c.numChildren)
	 }

	 private _scene:GameSceneView;
	 private menuClassicModeClick(){
		 console.log("menuClassicModeClick");
		 egret.ImageLoader.crossOrigin = "anonymous";//解决图片跨域问题
        /**
         * GameSceneView 游戏场景类
         */
		this._scene = new GameSceneView();
        this._scene.graphics.beginFill(0x000000,0.3);
        this._scene.graphics.drawRect(this.x,this.y, this.width, this.height);
        this._scene.graphics.endFill();
        this.parent.addChild(this._scene);
		this.parent.removeChild(this);
	 }

}