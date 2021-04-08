class HallMenuContainer extends egret.DisplayObjectContainer{
	public constructor(user:User,gameHall) {
		super();
		this.show(user,gameHall);
	}
	private show(user:User,gameHall){
		
		let menuOfflineMode = new HallMenus("menu_offlineMode_png",450,300,300,520);//x,y,w,h
		menuOfflineMode.touchEnabled = true;
		menuOfflineMode.addEventListener(egret.TouchEvent.TOUCH_TAP,gameHall.menuOfflineModeClick,gameHall);
		this.addChild(menuOfflineMode);

		let menuClassicMode = new HallMenus("menu_classicMode_png",850,300,310,450);
		menuClassicMode.touchEnabled = true;
		menuClassicMode.addEventListener(egret.TouchEvent.TOUCH_TAP,gameHall.menuClassicModeClick,gameHall);
		this.addChild(menuClassicMode);

		let menuFriendMode = new HallMenus("menu_friendMode_png",1260,300,300,495);
		//menuFriendMode.touchEnabled = true;
		//menuFriendMode.addEventListener(egret.TouchEvent.TOUCH_TAP,gameHall.menuFriendModeClick,gameHall);
		this.addChild(menuFriendMode);
	}

}