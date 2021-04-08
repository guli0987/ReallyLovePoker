/**
 * 显示其他玩家的明牌
 */
class PokerVerticalContainer extends egret.DisplayObjectContainer{
	/**
	 * 竖着排列的牌，用于显示对手的明牌
	 * arrays 扑克id的数组
	 * x 扑克的x坐标
	 */
	public constructor(arrays:Array<Poker>,isWho:number) {
		super();
		let pc = RES.getRes("layout_json").pokerVerticalContainer;
		
		if(isWho===1){
            
        }else if(isWho===2){
            this.x = pc.rightX;
            this.y = pc.rightY;
            this.width = pc.width;
		    this.height = pc.height;
        }else if(isWho===3){
            this.x = pc.topX;
            this.y = pc.topY;
            this.width=pc.topW;
            this.height=pc.topH;
        }else if(isWho===4){
            this.x = pc.leftX;
            this.y = pc.leftY;
            this.width = pc.width;
		    this.height = pc.height;
        }
		
		//添加bg是为了在开发时观察Container的范围
		// let bg:egret.Shape = new egret.Shape();
		// bg.graphics.beginFill( 0x112299);
    	// bg.graphics.drawRect( 0, 0, this.width, this.height ); 
    	// bg.graphics.endFill();
		// bg.alpha = 0.5;
		// this.addChild(bg);
        if(isWho===2||isWho===4){
            this.show(arrays);
        }else if(isWho===3){
            this.showTop(arrays);
        }
		
    
	}

	/**
	 * 横着排列
	 */
	private show(arrays:Array<Poker>){
		  let p = RES.getRes("layout_json").poker;
		  let x:number = 0;
		  let y:number = 0;
		for(var i = 0; i < arrays.length;i++){
			if(i >= 14) {
				y = 40;
			}
			if(x >= 14){
				x = x - 14;
			}
			let poker:PokerMod = new PokerMod(arrays[i],
			x * p.pokerSmallSpace, y,
			p.pokerSmallWidth,p.pokerSmallHeight);
			x ++;
			this.addChild(poker);
		}
	  	
	}
    private showTop(arrays:Array<Poker>){
		  let p = RES.getRes("layout_json").poker;
		  let x = 0;
		  
		for(var i = 0; i < arrays.length;i++){
			let poker:PokerMod = new PokerMod(arrays[i],
			x + i * p.pokerSmallSpace,0,
			p.pokerSmallWidth,p.pokerSmallHeight);
			this.addChild(poker);
		}
	  	
	}
	/**
	 * 竖着排列
	 */
  	private show1(arrays:Array<Poker>){
		  let p = RES.getRes("layout_json").poker;
		  let x:number = 0;
		  let y:number = 0;
		for(var i = 0; i < arrays.length;i++){
			if(i >= 10) {
				x = p.pokerSmallHeight * 0.3;
			}
			if(y >= 10){
				y = y - 10;
			}
			let poker:PokerMod = new PokerMod(arrays[i],
			x, y * p.pokerSmallSpace,
			p.pokerSmallWidth,p.pokerSmallHeight);
			y ++;
			this.addChild(poker);
		}
	  	
	}
}