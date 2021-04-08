class IndexProgress extends eui.ProgressBar implements  eui.UIComponent{
	public constructor() {
		super();
		this.skinName = "resource/eui_customize/IndexProgress.exml";
	}
	
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}