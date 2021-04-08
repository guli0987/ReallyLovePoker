class GameSettingPannel extends eui.Component implements  eui.UIComponent {
	private myPoker:Array<Poker>;
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this)
		this.skinName = "resource/eui_customize/GameSettingPannel.exml";
		this.name = "gameSettingPannel";
		this.test();
	}
	/**
     * panel组件控制
     */
    public moveArea:eui.Group;
    public titleDisplay:eui.Label;
    public btn_confirm:eui.Button;
    public btn_return:eui.Button;
    public radio_left:eui.RadioButton;
    public radio_right:eui.RadioButton;
    public ti_bug:eui.TextInput;
    public ts_music:eui.ToggleSwitch;
	private radioCode:number = -1;
	public test():void{
		//返回
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnReturn,this);
		//确认
		this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnConfirm,this);
		//测试确认按钮监听函数
		//this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,thisparent.btnConfirm,this.parent);
		//单选按钮组
		this.initRadioButtonWithGroup();
		//状态切换
		//this.initSwitch();
	}


	private onComplete():void{
        console.log("onComplete");
    }


	public btnReturn():void{
		console.log("button btnReturn");
		if(this.parent.getChildByName("gameSettingPannel") != null){
            this.parent.removeChild(this.parent.getChildByName("gameSettingPannel"));
        }
	/*若想要获取按钮的文本对象请使用如下方法：
	var button = new eui.Button();
	(<eui.Label>button.labelDisplay).size = 50；*/
	}
	public setMyPokers(mypokers:Array<Poker>){
		this.myPoker = mypokers;
	}
	public getMyPokers():Array<Poker>{
		return this.myPoker;
	}
	public btnConfirm():void{
		console.log("button btnConfirm");
		if(this.radioCode == 1){
			if(this.parent.getChildByName("mypoker") != null){
				this.parent.removeChild(this.parent.getChildByName("mypoker"));
        	}
			StandaloneModel.mypoker = new PokerContainer(this.parent,this.getMyPokers(),false);
            StandaloneModel.mypoker.name = "mypoker";
            this.parent.addChild(StandaloneModel.mypoker);
			StandaloneModel.isLeftHand = false;
		}else{
			if(this.parent.getChildByName("mypoker") != null){
				this.parent.removeChild(this.parent.getChildByName("mypoker"));
        	}
			StandaloneModel.mypoker = new PokerContainer(this.parent,this.getMyPokers(),true);
            StandaloneModel.mypoker.name = "mypoker";
            this.parent.addChild(StandaloneModel.mypoker);
			StandaloneModel.isLeftHand = true;
		}
		//关闭界面
		if(this.parent.getChildByName("gameSettingPannel") != null){
            this.parent.removeChild(this.parent.getChildByName("gameSettingPannel"));
        }
		
	/*若想要获取按钮的文本对象请使用如下方法：
	var button = new eui.Button();
	(<eui.Label>button.labelDisplay).size = 50；*/
	}
	/**
	 * 单选按钮组
	 */
	private initRadioButtonWithGroup():void {
		var radioGroup: eui.RadioButtonGroup = new eui.RadioButtonGroup();
		radioGroup.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);//CHANGE值得深究

		this.radio_left.value = 0;
		this.radio_left.group = radioGroup;
		

		this.radio_right.value = 1;
		this.radio_right.group = radioGroup;

		if(StandaloneModel.isLeftHand){
			this.radio_left.selected = true;//左手握牌默认选中
			this.radioCode = 0;
		}else{
			this.radio_right.selected = true;
			this.radioCode = 1;
		}

	}
	private radioChangeHandler(evt:eui.UIEvent):void {
		var radioGroup: eui.RadioButtonGroup = evt.target;
		console.log(radioGroup.selectedValue);
		if(radioGroup.selectedValue == 1){
			this.radioCode = 1;
			//StandaloneModel.isLeftHand = false;

		}else{
			this.radioCode = 0;
			//StandaloneModel.isLeftHand = true;
		}
	}

	private initSwitch():void{
		this.ts_music.label = "This is a ToggleButton";
		this.ts_music.addEventListener(eui.UIEvent.CHANGE, this.changeHandler, this);
	}


	private changeHandler(evt:eui.UIEvent) {
		egret.log(evt.target.selected);
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