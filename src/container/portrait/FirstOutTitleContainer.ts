class FirstOutTitleContainer extends egret.DisplayObjectContainer{
	/**
	 * 显示对手的头像
	 * name 名称
	 * index 头像
	 * isLeft 是否是左边的玩家
	 * isLandlord 是否是地主
	 */
	public constructor(firstOutSeat: number) {
		super();
		let pc = RES.getRes("layout_json").firstTitleContainer;
		this.width = pc.width;
		this.height = pc.height;
        let pd: number = -30;
        if(firstOutSeat===1){
            this.x =pc.playerX;
            this.y =pc.playerY;
        }else if(firstOutSeat===2){
            this.x = pc.rightX;
            this.y = pc.rightY;
            pd = 20;
        }else if(firstOutSeat===3){
            this.x = pc.topX;
            this.y = pc.topY;
        }else if(firstOutSeat===4){
            this.x = pc.leftX;
            this.y = pc.leftY;
        }
        //优先出牌头衔
        let firstOutTitle:TextTip = new TextTip("【出牌】",pd+10,50,20);
		firstOutTitle.width  = 100;
		this.addChild(firstOutTitle);
	}
}