class PokerPlayerContainer extends egret.DisplayObjectContainer{
	/**
	 * 标准扑克容器，控制自己的牌
	 * 这个容器支持点击选牌操作，可以用来做斗地主、跑得快等
	 * arrays 扑克id的数组
	 * x 扑克的x坐标
	 */
	public constructor(arrays:Array<Poker>) {
		super();
		let pc = RES.getRes("layout_json").pokerPlayerContainer;

		this.x = pc.x;
		this.y = pc.y;
		this.width = pc.width;
		this.height = pc.height;
		
		//添加bg是为了在开发时观察Container的范围
		// let bg:egret.Shape = new egret.Shape();
		// bg.graphics.beginFill( 0x113355);
    	// bg.graphics.drawRect( 0, 0, this.width, this.height ); 
    	// bg.graphics.endFill();
		// bg.alpha = 0.3;
		// this.addChild(bg);

		this.show(arrays);
    
	}

  	private show(arrays:Array<Poker>){
		  let p = RES.getRes("layout_json").poker;
		  let x =  (20 - arrays.length) * 0.5 * p.pokerPlaySpace;//居中排列
		for(var i = 0; i < arrays.length;i++){
			let poker:PokerMod = new PokerMod(arrays[i],
			x + i * p.pokerPlaySpace,0,
			p.pokerTestWidth,p.pokerTestHeight);
			this.addChild(poker);
		}  	
	}
}