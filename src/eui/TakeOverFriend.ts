class TakeOverFriend extends eui.Component implements  eui.UIComponent {
	public constructor(theThis) {
		super();
		this.skinName = "resource/eui_customize/TakeOverFriend.exml";
		this.name = "takeoverPannel";
		this.btnControl(theThis);
	}

	public takeover_return:eui.Button;
	public takeover_confirm:eui.Button;
	private btnControl(theThis):void{
		//返回
		this.takeover_return.addEventListener(egret.TouchEvent.TOUCH_TAP,theThis.takeoverReturn,theThis);
		//确认
		this.takeover_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,theThis.takeoverConfirm,theThis);
	}
	/*public takeoverReturn():void{
		if(this.parent.getChildByName("takeoverPannel") != null){
            this.parent.removeChild(this.parent.getChildByName("takeoverPannel"));
		}
	}*/
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}