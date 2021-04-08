class TextTip extends egret.TextField {
	/**
	 * 文字提示
	 */
	public constructor(text:string,x:number,y:number,size:number) {
		super();
		this.x = x;
		this.y = y;
		//颜色
		this.textColor = 0x778899;
		//大小
		this.size = size;
		//字体
		this.fontFamily = "KaiTi";
		//布局
		this.textAlign = egret.HorizontalAlign.CENTER;
		this.text = text;
	}
}