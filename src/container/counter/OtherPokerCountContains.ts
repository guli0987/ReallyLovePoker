class OtherPokerCountContains extends egret.DisplayObjectContainer{
	/**
	 * 显示对手剩余的牌的数量
	 * isLeft 是否是左边的玩家
	 */
	public constructor(count:number,isWho:number) {
		super();
		let pc = RES.getRes("layout_json").otherPokerCountContainer;
		if(isWho===1){
            this.x =pc.playerX;
            this.y =pc.playerY;
        }else if(isWho===2){
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


		let pokerCount:TextTip = new TextTip(count+"",0,60,32);
		pokerCount.width  = 100;
		this.addChild(pokerCount);
    
	}
	
  	
}