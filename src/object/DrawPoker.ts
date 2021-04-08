class DrawPoker extends egret.Bitmap {
  /**
   * 创建一个标准的扑克牌对象
   * index 扑克index
   * x 扑克的x坐标
   * y 扑克的y坐标
   * w 扑克的宽
   * h 扑克的高
   */
	public constructor(poker:Poker,x:number,y:number,w:number,h:number,isShow:boolean) {
    var pokerName:string = poker.getId() + "_png";
    if(isShow){
        super(RES.getRes(pokerName));
    }else{
        super(RES.getRes("drawpoker_png"));
    }
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.name = poker.getId() + "," + poker.getOrderValue();
	}
}