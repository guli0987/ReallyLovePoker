/**
 * 标准扑克容器，显示其他玩家出的牌
 */
class PokerOthersContainer extends egret.DisplayObjectContainer{
	/**
	 * 标准扑克容器，显示其他玩家出的牌
	 * 这个容器只能显示牌，不能对牌进行操作
	 * arrays 扑克id的数组
	 * x 扑克的x坐标
	 */
	public constructor(arrays:Array<Poker>,isWho:number) {
		super();
		let pc = RES.getRes("layout_json").pokerOthersContainer;
		
		if(isWho===2){
            this.x = pc.rightX;
            this.y = pc.rightY;
        }else if(isWho===3){
            this.x = pc.topX;
            this.y = pc.topY;
        }else if(isWho===4){
            this.x = pc.leftX;
            this.y = pc.leftY;
        }
		
		this.width = pc.width;
		this.height = pc.height;
		
		//添加bg是为了在开发时观察Container的范围
		// let bg:egret.Shape = new egret.Shape();
		// bg.graphics.beginFill( 0x112233);
    	// bg.graphics.drawRect( 0, 0, this.width, this.height ); 
    	// bg.graphics.endFill();
		// bg.alpha = 0.5;
		// this.addChild(bg);

		this.show(arrays,isWho);
    
	}
	/**
	 * 左边玩家出的牌靠左排列，右边玩家出的牌靠右排列
	 */
  	private show(arrays:Array<Poker>,isWho:number){
		  let p = RES.getRes("layout_json").poker;
		  let x = 0;//默认靠左排列
		  
		  if(isWho === 3){
			x =  (20 - arrays.length) * p.pokerSmallSpace;//靠右排列
		  }
		for(var i = 0; i < arrays.length;i++){
			let poker:PokerMod = new PokerMod(arrays[i],
			x + i * p.pokerSmallSpace,0,
			p.pokerSmallWidth,p.pokerSmallHeight);
			this.addChild(poker);
		}
	  	
	}
}