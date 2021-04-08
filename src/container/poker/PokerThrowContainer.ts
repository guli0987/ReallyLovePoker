/**
 * 标准扑克容器，显示所有玩家丢出的牌
 */
class PokerThrowContainer extends egret.DisplayObjectContainer{

    public constructor(isWho: number,arrays:Array<Poker>,isShow: boolean){
        super();
        let pc = RES.getRes("layout_json").pokerThrowContainer;
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

        this.show(arrays,isShow);
    }
    private show(arrays:Array<Poker>,isShow: boolean){
        let p = RES.getRes("layout_json").poker;
		  let x = 0;
		for(var i = 0; i < arrays.length;i++){
            let poker:DrawPoker = new DrawPoker(arrays[i],
			x + i * p.pokerSmallSpace,0,
			p.pokerSmallWidth,p.pokerSmallHeight,isShow);
            this.addChild(poker);
		}

    }

}