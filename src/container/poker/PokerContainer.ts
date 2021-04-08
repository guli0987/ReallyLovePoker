class PokerContainer extends egret.DisplayObjectContainer{
	/**
	 * 标准扑克容器，控制自己的牌
	 * 这个容器支持点击选牌操作，可以用来做斗地主、跑得快等
	 * player 场景，当场景加载该容器时，传入该场景，该场景必须实现pokerClick（evt:egret.TouchEvent）方法，用来处理点击扑克后执行的处理流程
	 * arrays 扑克id的数组
	 * x 扑克的x坐标
	 */
	public constructor(player,arrays:Array<Poker>,isLeftHand:boolean) {
		super();
		let pc = RES.getRes("layout_json").pokerContainer;
		
		this.x = pc.x;
		this.y = pc.y;
		this.width = pc.width;
		this.height = pc.height;
		
		if(isLeftHand){
			arrays = PokerUtils.sortDescPokers(arrays);//9988755，0123456
		}else{
			arrays = PokerUtils.sortAscPokers(arrays);//5578899，0123456
		}

		this.show(player,arrays);
    
	}
	
  	private show(player,arrays:Array<Poker>){
		let p = RES.getRes("layout_json").poker;
		let x = (26 - arrays.length) * 0.5 * p.pokerMiddleSpace;//居中排列
		
		for(var i = 0; i < arrays.length;i++){
			let poker:PokerMod = new PokerMod(arrays[i],
			x + i * p.pokerMiddleSpace,p.pokerUpMove,
			p.pokerWidth,p.pokerHeight);//x,y,w,h
			//poker.name = "pokerIs"+arrays[i].getId();
			poker.touchEnabled = true;
			poker.addEventListener(egret.TouchEvent.TOUCH_TAP,player.pokerClick,player);
			this.addChild(poker);
		}
	  	
	}
	public removePokerByNames(name:Array<number>){
		for(var i = 0 ; i < name.length ; i ++){
			if(this.getChildByName(name[i] + "") != null){
				this.removeChild(this.getChildByName(name[i] + ""));
			}
		}
		
	}
	// private draggedObject:egret.Bitmap;
	
	

	/**
	 * 点击扑克
	 * 点击扑克，点击到的扑克向上移动20PX,
	 * 再次点击，扑克回到原位
	 */
// 	private pokerClick(evt:egret.TouchEvent):void{
//       let p = RES.getRes("layout_json").poker;
//       let y = p.pokerUpMove;
// 	  let draggedObject:egret.Bitmap = evt.currentTarget;
// 	  //显示扑克的y坐标和扑克的名称
// 	  console.log("pokerClick: y:",draggedObject.y,draggedObject.name);
//       if(draggedObject.y == y){
//         draggedObject.y = 0;
//       }else{
//         draggedObject.y = y;                
//       }
//   }

}