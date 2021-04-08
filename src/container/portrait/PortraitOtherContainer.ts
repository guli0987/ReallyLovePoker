class PortraitOtherContainer extends egret.DisplayObjectContainer{
	/**
	 * 显示对手的头像
	 * name 名称
	 * index 头像
	 * isLeft 是否是左边的玩家
	 * isLandlord 是否是地主
	 */
	public constructor(user:User,index:number,isFirst:boolean,isCamp:boolean,isWho:number) {
		super();
		let pc = RES.getRes("layout_json").portraitOtherContainer;
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


		let playerName:TextTip = new TextTip(user.getName(),0,100,16);
		playerName.width  = 100;
		this.addChild(playerName);
		if(!isFirst){
			console.log("not	isFirst");
			let PX :number = 100;
			if(isWho == 2){
				PX = -100;
			}
			let campName:TextTip;
			if(isCamp){//console.log("is	友");
				campName = new TextTip("[友]",PX,10,32);
				campName.textColor = 0x0F2FFC;
			}else{
				//console.log("not	敌");
				campName = new TextTip("[敌]",PX,10,32);
				campName.textColor = 0xFA0803;
			}
			//console.log("???????");
			campName.width  = 100;
			this.addChild(campName);
		}
		this.show(user,index);
	}
	
  	private show(user:User,index:number){  
		let portrait:DefaultPortrait = new DefaultPortrait(user.getSex(),index,0,0,100,100);
		this.addChild(portrait);
	}
}