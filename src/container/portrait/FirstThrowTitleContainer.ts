class FirstThrowTitleContainer extends egret.DisplayObjectContainer{
	/**
	 * 显示对手的头像
	 * name 名称
	 * index 头像
	 * isLeft 是否是左边的玩家
	 * isLandlord 是否是地主
	 */
	public constructor(firstThrowSeat :number) {
		super();
		let pc = RES.getRes("layout_json").firstTitleContainer;
		this.width = pc.width;
		this.height = pc.height;
		let pd: number = -30;

		if(firstThrowSeat===1){
            this.x =pc.playerX;
            this.y =pc.playerY;
        }else if(firstThrowSeat===2){
            this.x = pc.rightX;
            this.y = pc.rightY;
			pd = 20;
        }else if(firstThrowSeat===3){
            this.x = pc.topX;
            this.y = pc.topY;
        }else if(firstThrowSeat===4){
            this.x = pc.leftX;
            this.y = pc.leftY;
        }

        //优先丢牌头衔
		let firstThrowTitle:TextTip = new TextTip("【丢牌】",pd+10,35,20);
		firstThrowTitle.width  = 100;
		this.addChild(firstThrowTitle);

	}
}