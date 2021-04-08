class PokerPrompt extends egret.Bitmap {
  /**
   * 创建一个标准的扑克牌对象
   * index 扑克index
   * x 扑克的x坐标
   * y 扑克的y坐标
   * w 扑克的宽
   * h 扑克的高
   */
	public constructor(poker:Poker,isClick:boolean) {
        let p = RES.getRes("layout_json").poker;
        let y = p.pokerUpMove;
		var pokerName:string = poker.getId() + "_png";
        super(RES.getRes(pokerName));
        if(isClick){
            this.y = 0;
        }else{
            this.y = y;
        }
        console.log("name"+this.name);
	}
}