class PokerDrawContainer extends egret.DisplayObjectContainer{
	/**
	 * 标准扑克容器，控制自己的牌
	 * 这个容器支持点击选牌操作，可以用来做斗地主、跑得快等
	 * player 场景，当场景加载该容器时，传入该场景，该场景必须实现pokerClick（evt:egret.TouchEvent）方法，用来处理点击扑克后执行的处理流程
	 * arrays 扑克id的数组
	 * x 扑克的x坐标
	 */
	public constructor(player,arrays:Array<Poker>,isShow:boolean,showOnePoker:number) {
		super();
		let pc = RES.getRes("layout_json").pokerDrawContainer;
		
		this.x = pc.x;
		this.y = pc.y;
		this.width = pc.width;
		this.height = pc.height;
		this.show(player,arrays,isShow,showOnePoker);
    
	}
	
  	private show(player,arrays:Array<Poker>,isShow:boolean,showOnePoker:number){
		let p = RES.getRes("layout_json").poker;
		let x = 0;
		let addy:number = 0;
		let addx:number = 0;
		for(var i = 0; i < arrays.length;i++){
			if(i > 53){
				addy = p.pokerDrawAddy;
				addx = p.pokerDrawAddx * p.pokerDrawSpace;
			}else{
				addy = 0;
				addx = 0;
			}
			let pdShow:boolean = false;
			if(i != showOnePoker){
				pdShow = isShow;
			}else{
				pdShow = true;
			}
			let poker:DrawPoker = new DrawPoker(arrays[i],
			x + i * p.pokerDrawSpace - addx,p.pokerDrawUpMove + addy,
			p.pokerDrawWidth,p.pokerDrawHeight,pdShow);//x,y,w,h,是否显示正面
			poker.touchEnabled = true;
			if(i > 53){
				poker.addEventListener(egret.TouchEvent.TOUCH_TAP,player.drawPokerClickDown,player);
			}else{
				poker.addEventListener(egret.TouchEvent.TOUCH_TAP,player.drawPokerClickUp,player);
			}			
			this.addChild(poker);
		}
	  	
	}
	public removePokerByNames(name:Array<number>){
		for(var i = 0 ; i < name.length ; i ++){
			if(this.getChildByName(name[i] + "") != null){
				this.removeChild(this.getChildByName(name[i] + ""));
			}
		}
		
	}
}