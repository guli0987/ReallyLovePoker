class GameUser {

	public id:number = 0;	//用户ID
	public name:string = "";	//名称
	public avatar:string = "http://www.wetes.cn/SY/upload/tom.jpg";//头像
	public sex:string = "未知"; //性别
	public token:string = "";			//校验值
	public pValue:number = 0;			//积分
	public tableID:number = 0;			//座位ID
	public isOwner = false;				//房主标记
	public loadFinish = false;			//资源是否加载完成

	public constructor() {
	}
}