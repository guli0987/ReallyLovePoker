class OtherThrowTimer extends egret.DisplayObjectContainer{
	/**
	 * 其他玩家不出牌时的文字提示
	 */
	public constructor(text:string,isWho:number) {
		super();
		let pc = RES.getRes("layout_json").otherPlayingTimer;
		if(isWho === 1){
            this.x = pc.playerX;
            this.y = pc.playerY;
        }else if(isWho === 2){
            this.x = pc.rightX;
            this.y = pc.rightY;
        }else if(isWho === 3){
            this.x = pc.topX;
            this.y = pc.topY;
        }else if(isWho === 4){
            this.x = pc.leftX;
            this.y = pc.leftY;
        }
		this.width = pc.width;
		this.height = pc.height;


		this.show(text,isWho);

	}
	private layout;
	private show(text:string,isWho:number){
		let tip:TextTip = new TextTip(text,0,0,48);
		this.addChild(tip);		
	}
}