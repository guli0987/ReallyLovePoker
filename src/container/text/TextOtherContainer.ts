class TextOtherContainer extends egret.DisplayObjectContainer{
	/**
	 * 其他玩家不出牌时的文字提示
	 */
	public constructor(text:string,isWho :number) {
		super();
		let pc = RES.getRes("layout_json").textOtherContainer;
		
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
		// bg.graphics.beginFill( 0x112299);
    	// bg.graphics.drawRect( 0, 0, this.width, this.height ); 
    	// bg.graphics.endFill();
		// bg.alpha = 0.5;
		// this.addChild(bg);

		this.show(text,isWho);

	}
	private layout;
	private show(text:string,isWho :number){
		let x:number = 0;
		if(isWho === 2){
			x = 16 + (6 - text.length) * 64;
		}
		let tip:TextTip = new TextTip(text,x,0,64);
		this.addChild(tip);		
	}
}