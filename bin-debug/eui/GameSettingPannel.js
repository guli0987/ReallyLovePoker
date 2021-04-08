var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameSettingPannel = (function (_super) {
    __extends(GameSettingPannel, _super);
    function GameSettingPannel() {
        var _this = _super.call(this) || this;
        _this.radioCode = -1;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "resource/eui_customize/GameSettingPannel.exml";
        _this.name = "gameSettingPannel";
        _this.test();
        return _this;
    }
    GameSettingPannel.prototype.test = function () {
        //返回
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnReturn, this);
        //确认
        this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnConfirm, this);
        //测试确认按钮监听函数
        //this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,thisparent.btnConfirm,this.parent);
        //单选按钮组
        this.initRadioButtonWithGroup();
        //状态切换
        //this.initSwitch();
    };
    GameSettingPannel.prototype.onComplete = function () {
        console.log("onComplete");
    };
    GameSettingPannel.prototype.btnReturn = function () {
        console.log("button btnReturn");
        if (this.parent.getChildByName("gameSettingPannel") != null) {
            this.parent.removeChild(this.parent.getChildByName("gameSettingPannel"));
        }
        /*若想要获取按钮的文本对象请使用如下方法：
        var button = new eui.Button();
        (<eui.Label>button.labelDisplay).size = 50；*/
    };
    GameSettingPannel.prototype.setMyPokers = function (mypokers) {
        this.myPoker = mypokers;
    };
    GameSettingPannel.prototype.getMyPokers = function () {
        return this.myPoker;
    };
    GameSettingPannel.prototype.btnConfirm = function () {
        console.log("button btnConfirm");
        if (this.radioCode == 1) {
            if (this.parent.getChildByName("mypoker") != null) {
                this.parent.removeChild(this.parent.getChildByName("mypoker"));
            }
            StandaloneModel.mypoker = new PokerContainer(this.parent, this.getMyPokers(), false);
            StandaloneModel.mypoker.name = "mypoker";
            this.parent.addChild(StandaloneModel.mypoker);
            StandaloneModel.isLeftHand = false;
        }
        else {
            if (this.parent.getChildByName("mypoker") != null) {
                this.parent.removeChild(this.parent.getChildByName("mypoker"));
            }
            StandaloneModel.mypoker = new PokerContainer(this.parent, this.getMyPokers(), true);
            StandaloneModel.mypoker.name = "mypoker";
            this.parent.addChild(StandaloneModel.mypoker);
            StandaloneModel.isLeftHand = true;
        }
        //关闭界面
        if (this.parent.getChildByName("gameSettingPannel") != null) {
            this.parent.removeChild(this.parent.getChildByName("gameSettingPannel"));
        }
        /*若想要获取按钮的文本对象请使用如下方法：
        var button = new eui.Button();
        (<eui.Label>button.labelDisplay).size = 50；*/
    };
    /**
     * 单选按钮组
     */
    GameSettingPannel.prototype.initRadioButtonWithGroup = function () {
        var radioGroup = new eui.RadioButtonGroup();
        radioGroup.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this); //CHANGE值得深究
        this.radio_left.value = 0;
        this.radio_left.group = radioGroup;
        this.radio_right.value = 1;
        this.radio_right.group = radioGroup;
        if (StandaloneModel.isLeftHand) {
            this.radio_left.selected = true; //左手握牌默认选中
            this.radioCode = 0;
        }
        else {
            this.radio_right.selected = true;
            this.radioCode = 1;
        }
    };
    GameSettingPannel.prototype.radioChangeHandler = function (evt) {
        var radioGroup = evt.target;
        console.log(radioGroup.selectedValue);
        if (radioGroup.selectedValue == 1) {
            this.radioCode = 1;
            //StandaloneModel.isLeftHand = false;
        }
        else {
            this.radioCode = 0;
            //StandaloneModel.isLeftHand = true;
        }
    };
    GameSettingPannel.prototype.initSwitch = function () {
        this.ts_music.label = "This is a ToggleButton";
        this.ts_music.addEventListener(eui.UIEvent.CHANGE, this.changeHandler, this);
    };
    GameSettingPannel.prototype.changeHandler = function (evt) {
        egret.log(evt.target.selected);
    };
    GameSettingPannel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSettingPannel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return GameSettingPannel;
}(eui.Component));
__reflect(GameSettingPannel.prototype, "GameSettingPannel", ["eui.UIComponent", "egret.DisplayObject"]);
