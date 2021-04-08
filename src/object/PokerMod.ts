class PokerMod extends egret.Bitmap {
  /**
   * 创建一个标准的扑克牌对象
   * index 扑克index
   * x 扑克的x坐标
   * y 扑克的y坐标
   * w 扑克的宽
   * h 扑克的高
   */
	public constructor(poker:Poker,x:number,y:number,w:number,h:number) {
		var pokerName:string = poker.getId() + "_png";
    super(RES.getRes(pokerName));
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.name = poker.getId() + "," + poker.getOrderValue();
	}
}