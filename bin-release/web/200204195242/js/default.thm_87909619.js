window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","GameSettings":"resource/eui_customize/GameSettings.exml","GameSettingPannel":"resource/eui_customize/GameSettingPannel.exml","TakeOverFriend":"resource/eui_customize/TakeOverFriend.exml","IndexProgress":"resource/eui_customize/IndexProgress.exml","test":"resource/eui_customize/test.exml"};generateEUI.paths['resource/eui_customize/GameSettingPannel.exml'] = window.GameSettingPannelSkin = (function (_super) {
	__extends(GameSettingPannelSkin, _super);
	function GameSettingPannelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","btn_confirm","btn_return","radio_left","radio_right","ti_bug","ts_music"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.btn_confirm_i(),this.btn_return_i(),this._Label1_i(),this.radio_left_i(),this.radio_right_i(),this._Label2_i(),this._Label3_i(),this.ti_bug_i(),this.ts_music_i(),this._Label4_i()];
	}
	var _proto = GameSettingPannelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = -2;
		t.right = 2;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.left = 15;
		t.right = 5;
		t.size = 24;
		t.text = "游戏设置";
		t.textAlign = "center";
		t.textColor = 0x050000;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.btn_confirm_i = function () {
		var t = new eui.Button();
		this.btn_confirm = t;
		t.anchorOffsetY = 0;
		t.bottom = 16;
		t.height = 44;
		t.horizontalCenter = 69;
		t.label = "确认";
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "返回";
		t.x = 77;
		t.y = 240;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "握牌方式：";
		t.textColor = 0x050000;
		t.x = 38;
		t.y = 80;
		return t;
	};
	_proto.radio_left_i = function () {
		var t = new eui.RadioButton();
		this.radio_left = t;
		t.label = "左手";
		t.x = 198;
		t.y = 84;
		return t;
	};
	_proto.radio_right_i = function () {
		var t = new eui.RadioButton();
		this.radio_right = t;
		t.label = "右手";
		t.x = 293;
		t.y = 84;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "游戏声音：";
		t.textColor = 0x020000;
		t.x = 38;
		t.y = 135;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "问题反馈：";
		t.textColor = 0x070000;
		t.x = 38;
		t.y = 188;
		return t;
	};
	_proto.ti_bug_i = function () {
		var t = new eui.TextInput();
		this.ti_bug = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = false;
		t.height = 27.06;
		t.rotation = 360;
		t.width = 194.84;
		t.x = 188.68;
		t.y = 187.85;
		return t;
	};
	_proto.ts_music_i = function () {
		var t = new eui.ToggleSwitch();
		this.ts_music = t;
		t.enabled = false;
		t.label = "关";
		t.x = 286.1;
		t.y = 135;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 18;
		t.italic = true;
		t.size = 15;
		t.text = "规则";
		t.textColor = 0x0431f7;
		t.width = 37;
		t.x = 342.5;
		t.y = 253;
		return t;
	};
	return GameSettingPannelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_customize/GameSettings.exml'] = window.GameSettingsSkin = (function (_super) {
	__extends(GameSettingsSkin, _super);
	function GameSettingsSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = GameSettingsSkin.prototype;

	return GameSettingsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_customize/IndexProgress.exml'] = window.IndexProgressSkin = (function (_super) {
	__extends(IndexProgressSkin, _super);
	function IndexProgressSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 26;
		this.width = 66;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = IndexProgressSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(23,13,20,0);
		t.source = "index_track_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(23,13,20,0);
		t.source = "index_thumb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return IndexProgressSkin;
})(eui.Skin);generateEUI.paths['resource/eui_customize/TakeOverFriend.exml'] = window.TakeOverFriendSkin = (function (_super) {
	__extends(TakeOverFriendSkin, _super);
	function TakeOverFriendSkin() {
		_super.call(this);
		this.skinParts = ["takeoverTitle","takeover_return","takeover_confirm"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Label1_i(),this.takeover_return_i(),this.takeover_confirm_i()];
	}
	var _proto = TakeOverFriendSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.takeoverTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.takeoverTitle_i = function () {
		var t = new eui.Label();
		this.takeoverTitle = t;
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.text = "游戏通知";
		t.textAlign = "center";
		t.textColor = 0x050000;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.text = "是否接管友方的扑克？";
		t.textColor = 0x070000;
		t.width = 319;
		t.x = 45.5;
		t.y = 90;
		return t;
	};
	_proto.takeover_return_i = function () {
		var t = new eui.Button();
		this.takeover_return = t;
		t.label = "返回";
		t.x = 71;
		t.y = 217;
		return t;
	};
	_proto.takeover_confirm_i = function () {
		var t = new eui.Button();
		this.takeover_confirm = t;
		t.label = "确认";
		t.x = 230;
		t.y = 217;
		return t;
	};
	return TakeOverFriendSkin;
})(eui.Skin);generateEUI.paths['resource/eui_customize/test.exml'] = window.testSkin = (function (_super) {
	__extends(testSkin, _super);
	function testSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = testSkin.prototype;

	return testSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 44;
		t.horizontalCenter = 0;
		t.label = "click!";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/screen/ErrorNote.exml'] = window.ErrorNoteSkin = (function (_super) {
	__extends(ErrorNoteSkin, _super);
	var ErrorNoteSkin$Skin1 = 	(function (_super) {
		__extends(ErrorNoteSkin$Skin1, _super);
		function ErrorNoteSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = ErrorNoteSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ErrorNoteSkin$Skin1;
	})(eui.Skin);

	function ErrorNoteSkin() {
		_super.call(this);
		this.skinParts = ["lab_userID","btn_return","lab_title","lab_content","btn_reconnect"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this.btn_reconnect_i()];
	}
	var _proto = ErrorNoteSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 1702;
		t.x = 71;
		t.y = 56;
		t.elementsContent = [this.lab_userID_i(),this.btn_return_i(),this.lab_title_i()];
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.size = 24;
		t.text = "用户ID：";
		t.textAlign = "left";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 1466;
		t.y = 13;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "";
		t.width = 32;
		t.x = 0;
		t.y = 9;
		t.skinName = ErrorNoteSkin$Skin1;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.height = 50;
		t.size = 36;
		t.text = "错误";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 1180;
		t.x = 370;
		t.y = 240;
		t.elementsContent = [this._Rect1_i(),this.lab_content_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.height = 320;
		t.strokeAlpha = 1;
		t.strokeColor = 0x00c1e0;
		t.strokeWeight = 2;
		t.width = 1180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_content_i = function () {
		var t = new eui.Label();
		this.lab_content = t;
		t.size = 24;
		t.text = "error";
		t.textColor = 0xfc2a00;
		t.width = 1046;
		t.x = 57.84;
		t.y = 20;
		return t;
	};
	_proto.btn_reconnect_i = function () {
		var t = new eui.Button();
		this.btn_reconnect = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "重连";
		t.width = 650;
		t.y = 670;
		return t;
	};
	return ErrorNoteSkin;
})(eui.Skin);generateEUI.paths['resource/screen/Lobby.exml'] = window.LobbySkin = (function (_super) {
	__extends(LobbySkin, _super);
	var LobbySkin$Skin2 = 	(function (_super) {
		__extends(LobbySkin$Skin2, _super);
		function LobbySkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = LobbySkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LobbySkin$Skin2;
	})(eui.Skin);

	function LobbySkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_lobby","lab_userID","img_header","lab_joinRandRoom","lab_createRoom","lab_joinWithPro","lab_frameSync","lab_joinRoom","lab_roomList"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.btn_return_i(),this.lab_lobby_i(),this.lab_userID_i(),this.img_header_i(),this._Rect2_i(),this.lab_joinRandRoom_i(),this._Image2_i(),this.lab_createRoom_i(),this._Image3_i(),this.lab_joinWithPro_i(),this.lab_frameSync_i(),this.lab_joinRoom_i(),this.lab_roomList_i()];
	}
	var _proto = LobbySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 64;
		t.strokeColor = 0x00e2ed;
		t.strokeWeight = 2;
		t.width = 64;
		t.x = 1535;
		t.y = 53;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 61;
		t.y = 63;
		t.skinName = LobbySkin$Skin2;
		return t;
	};
	_proto.lab_lobby_i = function () {
		var t = new eui.Label();
		this.lab_lobby = t;
		t.anchorOffsetX = 0;
		t.height = 50;
		t.size = 36;
		t.text = "游戏大厅";
		t.verticalAlign = "middle";
		t.width = 165;
		t.x = 120;
		t.y = 56;
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.size = 24;
		t.text = "用户ID：235699";
		t.textAlign = "left";
		t.textColor = 0x999999;
		t.x = 1624;
		t.y = 63;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.height = 64;
		t.width = 64;
		t.x = 1535;
		t.y = 53;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.height = 320;
		t.strokeColor = 0x5d5d5d;
		t.strokeWeight = 1;
		t.width = 2;
		t.x = 1012;
		t.y = 175;
		return t;
	};
	_proto.lab_joinRandRoom_i = function () {
		var t = new eui.Label();
		this.lab_joinRandRoom = t;
		t.height = 67;
		t.size = 48;
		t.text = "随机匹配";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 614;
		t.y = 205;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "arrow_left_png";
		t.width = 30;
		t.x = 545;
		t.y = 219;
		return t;
	};
	_proto.lab_createRoom_i = function () {
		var t = new eui.Label();
		this.lab_createRoom = t;
		t.height = 67;
		t.size = 48;
		t.text = "创建房间";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 1185;
		t.y = 205;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "arrow_left_png";
		t.width = 30;
		t.x = 1124;
		t.y = 219;
		return t;
	};
	_proto.lab_joinWithPro_i = function () {
		var t = new eui.Label();
		this.lab_joinWithPro = t;
		t.height = 40;
		t.size = 28;
		t.text = "自定义属性匹配";
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 607;
		t.y = 330;
		return t;
	};
	_proto.lab_frameSync_i = function () {
		var t = new eui.Label();
		this.lab_frameSync = t;
		t.height = 40;
		t.size = 28;
		t.text = "帧同步匹配";
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 638;
		t.y = 426;
		return t;
	};
	_proto.lab_joinRoom_i = function () {
		var t = new eui.Label();
		this.lab_joinRoom = t;
		t.height = 40;
		t.size = 28;
		t.text = "加入指定房间";
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 1176;
		t.y = 426;
		return t;
	};
	_proto.lab_roomList_i = function () {
		var t = new eui.Label();
		this.lab_roomList = t;
		t.height = 40;
		t.size = 28;
		t.text = "查看房间列表";
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 1183;
		t.y = 330;
		return t;
	};
	return LobbySkin;
})(eui.Skin);generateEUI.paths['resource/screen/Login.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["btn_enter","rect_clear","lab_clear","lab_clearNote"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.btn_enter_i(),this.rect_clear_i(),this.lab_clear_i(),this.lab_clearNote_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "真爱扑克在线匹配测试";
		t.y = 119;
		return t;
	};
	_proto.btn_enter_i = function () {
		var t = new eui.Button();
		this.btn_enter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "进入测试";
		t.width = 476;
		t.y = 470;
		return t;
	};
	_proto.rect_clear_i = function () {
		var t = new eui.Rect();
		this.rect_clear = t;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0x282828;
		t.height = 70;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0x00c1e0;
		t.strokeWeight = 2;
		t.width = 200;
		t.y = 611;
		return t;
	};
	_proto.lab_clear_i = function () {
		var t = new eui.Label();
		this.lab_clear = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "清除缓存";
		t.textColor = 0x00c1e0;
		t.y = 636;
		return t;
	};
	_proto.lab_clearNote_i = function () {
		var t = new eui.Group();
		this.lab_clearNote = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 300;
		t.y = 752;
		t.elementsContent = [this._Rect1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0x606060;
		t.height = 44;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 28;
		t.size = 20;
		t.text = "缓存清除成功";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 40;
		t.y = 8;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/screen/MatchProperty.exml'] = window.MatchPropertySkin = (function (_super) {
	__extends(MatchPropertySkin, _super);
	var MatchPropertySkin$Skin3 = 	(function (_super) {
		__extends(MatchPropertySkin$Skin3, _super);
		function MatchPropertySkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = MatchPropertySkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MatchPropertySkin$Skin3;
	})(eui.Skin);

	function MatchPropertySkin() {
		_super.call(this);
		this.skinParts = ["lab_userID","btn_return","lab_lobby","img_header","btn_start","rect_proA","rect_proB","lab_A","lab_B","rad_B","rad_A"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.btn_start_i(),this._Group2_i()];
	}
	var _proto = MatchPropertySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 1674;
		t.x = 71;
		t.y = 56;
		t.elementsContent = [this.lab_userID_i(),this.btn_return_i(),this.lab_lobby_i(),this.img_header_i(),this._Rect1_i()];
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.size = 24;
		t.text = "用户ID：";
		t.textAlign = "left";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 1438;
		t.y = 13;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "";
		t.width = 32;
		t.x = 0;
		t.y = 9;
		t.skinName = MatchPropertySkin$Skin3;
		return t;
	};
	_proto.lab_lobby_i = function () {
		var t = new eui.Label();
		this.lab_lobby = t;
		t.height = 50;
		t.size = 36;
		t.text = "自定义属性匹配";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.height = 60;
		t.width = 60;
		t.x = 1340;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 60;
		t.strokeColor = 0x00E2ED;
		t.strokeWeight = 2;
		t.width = 60;
		t.x = 1340;
		t.y = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "开始匹配";
		t.width = 395;
		t.y = 563.92;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 233;
		t.elementsContent = [this.rect_proA_i(),this.rect_proB_i(),this.lab_A_i(),this.lab_B_i(),this.rad_B_i(),this.rad_A_i()];
		return t;
	};
	_proto.rect_proA_i = function () {
		var t = new eui.Rect();
		this.rect_proA = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x354244;
		t.height = 92;
		t.strokeColor = 0x00c1e0;
		t.strokeWeight = 2;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rect_proB_i = function () {
		var t = new eui.Rect();
		this.rect_proB = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x555555;
		t.height = 92;
		t.strokeColor = 0x00c1e0;
		t.width = 640;
		t.x = 0;
		t.y = 123;
		return t;
	};
	_proto.lab_A_i = function () {
		var t = new eui.Label();
		this.lab_A = t;
		t.size = 28;
		t.text = "属性A";
		t.textColor = 0x00c1e0;
		t.x = 283;
		t.y = 26;
		return t;
	};
	_proto.lab_B_i = function () {
		var t = new eui.Label();
		this.lab_B = t;
		t.size = 28;
		t.text = "属性B";
		t.textColor = 0xcfcfcf;
		t.x = 283;
		t.y = 149;
		return t;
	};
	_proto.rad_B_i = function () {
		var t = new eui.RadioButton();
		this.rad_B = t;
		t.label = "";
		t.value = "1";
		t.x = 32;
		t.y = 156;
		return t;
	};
	_proto.rad_A_i = function () {
		var t = new eui.RadioButton();
		this.rad_A = t;
		t.label = "";
		t.selected = true;
		t.value = "0";
		t.x = 32;
		t.y = 33;
		return t;
	};
	return MatchPropertySkin;
})(eui.Skin);generateEUI.paths['resource/screen/MatchRoomID.exml'] = window.MatchRoomIDSkin = (function (_super) {
	__extends(MatchRoomIDSkin, _super);
	var MatchRoomIDSkin$Skin4 = 	(function (_super) {
		__extends(MatchRoomIDSkin$Skin4, _super);
		function MatchRoomIDSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = MatchRoomIDSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MatchRoomIDSkin$Skin4;
	})(eui.Skin);

	function MatchRoomIDSkin() {
		_super.call(this);
		this.skinParts = ["lab_userID","btn_return","lab_title","img_header","btn_start","rect_roomID","edt_roomID","lab_note"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this.btn_start_i(),this._Group2_i(),this.lab_note_i()];
	}
	var _proto = MatchRoomIDSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 33;
		t.horizontalCenter = 0;
		t.text = "请输入房间号";
		t.verticalAlign = "middle";
		t.y = 170;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 1752;
		t.x = 71;
		t.y = 56;
		t.elementsContent = [this.lab_userID_i(),this.btn_return_i(),this.lab_title_i(),this.img_header_i(),this._Rect1_i()];
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.size = 24;
		t.text = "用户ID：";
		t.textAlign = "left";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 1521;
		t.y = 9.01;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "";
		t.width = 32;
		t.x = 0;
		t.y = 9;
		t.skinName = MatchRoomIDSkin$Skin4;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.height = 50;
		t.size = 36;
		t.text = "房间列表";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.height = 60;
		t.width = 60;
		t.x = 1418;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 60;
		t.strokeColor = 0x00E2ED;
		t.strokeWeight = 2;
		t.width = 60;
		t.x = 1418;
		t.y = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "进入房间";
		t.width = 468;
		t.y = 570;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 220;
		t.elementsContent = [this.rect_roomID_i(),this.edt_roomID_i()];
		return t;
	};
	_proto.rect_roomID_i = function () {
		var t = new eui.Rect();
		this.rect_roomID = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 92;
		t.horizontalCenter = 0;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.width = 800;
		t.y = 0;
		return t;
	};
	_proto.edt_roomID_i = function () {
		var t = new eui.EditableText();
		this.edt_roomID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61.33;
		t.size = 48;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 776;
		t.x = 11.67;
		t.y = 15.67;
		return t;
	};
	_proto.lab_note_i = function () {
		var t = new eui.Label();
		this.lab_note = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "提示：";
		t.textColor = 0xff5959;
		t.y = 334;
		return t;
	};
	return MatchRoomIDSkin;
})(eui.Skin);generateEUI.paths['resource/screen/MatchUI.exml'] = window.MatchUISkin = (function (_super) {
	__extends(MatchUISkin, _super);
	var MatchUISkin$Skin5 = 	(function (_super) {
		__extends(MatchUISkin$Skin5, _super);
		function MatchUISkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = MatchUISkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MatchUISkin$Skin5;
	})(eui.Skin);

	function MatchUISkin() {
		_super.call(this);
		this.skinParts = ["lab_userID","btn_return","lab_lobby","rect_player1","rect_player2","rect_player3","rect_player4","lab_matchmode","btn_start","lab_player1","lab_player2","lab_player3","lab_player4","lab_roomID","lab_userID0","lab_userID1","lab_userID2","lab_userID3","lab_userID4","check_closeRoom","rad_mapA","rad_mapB","group_map","img_owner","btn_kick2","btn_kick3","btn_kick4"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.rect_player1_i(),this.rect_player2_i(),this.rect_player3_i(),this.rect_player4_i(),this.lab_matchmode_i(),this.btn_start_i(),this.lab_player1_i(),this.lab_player2_i(),this.lab_player3_i(),this.lab_player4_i(),this.lab_roomID_i(),this.lab_userID0_i(),this.lab_userID1_i(),this.lab_userID2_i(),this.lab_userID3_i(),this.lab_userID4_i(),this.check_closeRoom_i(),this.group_map_i(),this.img_owner_i(),this.btn_kick2_i(),this.btn_kick3_i(),this.btn_kick4_i()];
	}
	var _proto = MatchUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 1.01;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 1764;
		t.x = 71;
		t.y = 56;
		t.elementsContent = [this.lab_userID_i(),this.btn_return_i(),this.lab_lobby_i()];
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.size = 24;
		t.text = "用户ID：";
		t.textAlign = "left";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 1484;
		t.y = 13;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "";
		t.width = 32;
		t.x = 0;
		t.y = 9;
		t.skinName = MatchUISkin$Skin5;
		return t;
	};
	_proto.lab_lobby_i = function () {
		var t = new eui.Label();
		this.lab_lobby = t;
		t.height = 50;
		t.size = 36;
		t.text = "等待玩家加入";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.rect_player1_i = function () {
		var t = new eui.Rect();
		this.rect_player1 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0x555555;
		t.height = 200;
		t.width = 200;
		t.x = 320;
		t.y = 312;
		return t;
	};
	_proto.rect_player2_i = function () {
		var t = new eui.Rect();
		this.rect_player2 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0x555555;
		t.height = 200;
		t.width = 200;
		t.x = 680;
		t.y = 312;
		return t;
	};
	_proto.rect_player3_i = function () {
		var t = new eui.Rect();
		this.rect_player3 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0x555555;
		t.height = 200;
		t.width = 200;
		t.x = 1040;
		t.y = 312;
		return t;
	};
	_proto.rect_player4_i = function () {
		var t = new eui.Rect();
		this.rect_player4 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0x555555;
		t.height = 200;
		t.width = 200;
		t.x = 1400;
		t.y = 312;
		return t;
	};
	_proto.lab_matchmode_i = function () {
		var t = new eui.Label();
		this.lab_matchmode = t;
		t.anchorOffsetX = 0;
		t.height = 33;
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 260;
		t.x = 336;
		t.y = 63.96;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.enabled = true;
		t.height = 70;
		t.horizontalCenter = -2;
		t.label = "开始游戏";
		t.touchEnabled = true;
		t.width = 353;
		t.y = 713.99;
		return t;
	};
	_proto.lab_player1_i = function () {
		var t = new eui.Label();
		this.lab_player1 = t;
		t.height = 112;
		t.size = 80;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 379;
		t.y = 356;
		return t;
	};
	_proto.lab_player2_i = function () {
		var t = new eui.Label();
		this.lab_player2 = t;
		t.height = 112;
		t.size = 80;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x757575;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 739;
		t.y = 356;
		return t;
	};
	_proto.lab_player3_i = function () {
		var t = new eui.Label();
		this.lab_player3 = t;
		t.height = 112;
		t.size = 80;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0x757575;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 1097;
		t.y = 356;
		return t;
	};
	_proto.lab_player4_i = function () {
		var t = new eui.Label();
		this.lab_player4 = t;
		t.height = 112;
		t.size = 80;
		t.text = "4";
		t.textAlign = "center";
		t.textColor = 0x757575;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 1455;
		t.y = 356;
		return t;
	};
	_proto.lab_roomID_i = function () {
		var t = new eui.Label();
		this.lab_roomID = t;
		t.size = 24;
		t.text = "房间号：";
		t.x = 120;
		t.y = 132;
		return t;
	};
	_proto.lab_userID0_i = function () {
		var t = new eui.Label();
		this.lab_userID0 = t;
		t.horizontalCenter = -7;
		t.size = 40;
		t.text = "小提示：需要满4个玩家才能开始游戏";
		t.textColor = 0x999999;
		t.y = 976;
		return t;
	};
	_proto.lab_userID1_i = function () {
		var t = new eui.Label();
		this.lab_userID1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 24;
		t.text = "待加入";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 320;
		t.y = 528;
		return t;
	};
	_proto.lab_userID2_i = function () {
		var t = new eui.Label();
		this.lab_userID2 = t;
		t.size = 24;
		t.text = "待加入";
		t.textAlign = "center";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 678.74;
		t.y = 525;
		return t;
	};
	_proto.lab_userID3_i = function () {
		var t = new eui.Label();
		this.lab_userID3 = t;
		t.size = 24;
		t.text = "待加入";
		t.textAlign = "center";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 1035.01;
		t.y = 525;
		return t;
	};
	_proto.lab_userID4_i = function () {
		var t = new eui.Label();
		this.lab_userID4 = t;
		t.size = 24;
		t.text = "待加入";
		t.textAlign = "center";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 1397.01;
		t.y = 525;
		return t;
	};
	_proto.check_closeRoom_i = function () {
		var t = new eui.CheckBox();
		this.check_closeRoom = t;
		t.enabled = true;
		t.height = 30;
		t.horizontalCenter = 0;
		t.label = "允许加入";
		t.selected = true;
		t.width = 120;
		t.y = 619.57;
		return t;
	};
	_proto.group_map_i = function () {
		var t = new eui.Group();
		this.group_map = t;
		t.width = 1480;
		t.x = 220;
		t.y = 182;
		t.elementsContent = [this._Rect1_i(),this.rad_mapA_i(),this.rad_mapB_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x555555;
		t.height = 46.67;
		t.strokeWeight = 2;
		t.width = 1480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rad_mapA_i = function () {
		var t = new eui.RadioButton();
		this.rad_mapA = t;
		t.label = "彩图";
		t.selected = true;
		t.value = "0";
		t.x = 526.97;
		t.y = 12;
		return t;
	};
	_proto.rad_mapB_i = function () {
		var t = new eui.RadioButton();
		this.rad_mapB = t;
		t.label = "灰图";
		t.value = "1";
		t.x = 934.32;
		t.y = 12.5;
		return t;
	};
	_proto.img_owner_i = function () {
		var t = new eui.Image();
		this.img_owner = t;
		t.height = 32;
		t.source = "owner_png";
		t.width = 90;
		t.x = 366;
		t.y = 485;
		return t;
	};
	_proto.btn_kick2_i = function () {
		var t = new eui.Button();
		this.btn_kick2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "踢掉";
		t.name = "btn_kick2";
		t.width = 90;
		t.x = 731;
		t.y = 485;
		return t;
	};
	_proto.btn_kick3_i = function () {
		var t = new eui.Button();
		this.btn_kick3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "踢掉";
		t.name = "btn_kick3";
		t.width = 90;
		t.x = 1092;
		t.y = 485;
		return t;
	};
	_proto.btn_kick4_i = function () {
		var t = new eui.Button();
		this.btn_kick4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "踢掉";
		t.name = "btn_kick3";
		t.width = 90;
		t.x = 1451;
		t.y = 485;
		return t;
	};
	return MatchUISkin;
})(eui.Skin);generateEUI.paths['resource/screen/ReconnectUI.exml'] = window.ReconnectUISkin = (function (_super) {
	__extends(ReconnectUISkin, _super);
	var ReconnectUISkin$Skin6 = 	(function (_super) {
		__extends(ReconnectUISkin$Skin6, _super);
		function ReconnectUISkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = ReconnectUISkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReconnectUISkin$Skin6;
	})(eui.Skin);

	function ReconnectUISkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_title0","lab_note"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Rect1_i(),this.lab_note_i()];
	}
	var _proto = ReconnectUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 71;
		t.y = 56;
		t.elementsContent = [this.btn_return_i(),this.lab_title0_i()];
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "";
		t.width = 32;
		t.x = 0;
		t.y = 9;
		t.skinName = ReconnectUISkin$Skin6;
		return t;
	};
	_proto.lab_title0_i = function () {
		var t = new eui.Label();
		this.lab_title0 = t;
		t.height = 50;
		t.size = 36;
		t.text = "断线重连";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillAlpha = 0.2;
		t.fillColor = 0x545454;
		t.height = 50;
		t.horizontalCenter = 0;
		t.strokeColor = 0x545454;
		t.strokeWeight = 2;
		t.width = 540;
		t.y = 334.57;
		return t;
	};
	_proto.lab_note_i = function () {
		var t = new eui.Label();
		this.lab_note = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "重连中...";
		t.textAlign = "center";
		t.textColor = 0x00c1e0;
		t.width = 200;
		t.y = 348;
		return t;
	};
	return ReconnectUISkin;
})(eui.Skin);generateEUI.paths['resource/screen/RoomItem.exml'] = window.RoomItemSkin = (function (_super) {
	__extends(RoomItemSkin, _super);
	function RoomItemSkin() {
		_super.call(this);
		this.skinParts = ["btn_enter","lab_roomID","lab_roomNum","lab_state","lab_map"];
		
		this.height = 129;
		this.width = 800;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = RoomItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchThrough = false;
		t.x = 0;
		t.y = 14;
		t.elementsContent = [this.btn_enter_i(),this.lab_roomID_i(),this.lab_roomNum_i(),this.lab_state_i(),this.lab_map_i(),this._Rect1_i()];
		return t;
	};
	_proto.btn_enter_i = function () {
		var t = new eui.Button();
		this.btn_enter = t;
		t.height = 70;
		t.label = "进入房间";
		t.width = 160;
		t.x = 627;
		t.y = 0;
		return t;
	};
	_proto.lab_roomID_i = function () {
		var t = new eui.Label();
		this.lab_roomID = t;
		t.height = 33;
		t.size = 24;
		t.text = "房间ID：";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_roomNum_i = function () {
		var t = new eui.Label();
		this.lab_roomNum = t;
		t.height = 33;
		t.size = 24;
		t.text = "房间人数：";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 45;
		return t;
	};
	_proto.lab_state_i = function () {
		var t = new eui.Label();
		this.lab_state = t;
		t.height = 33;
		t.size = 24;
		t.text = "房间状态：";
		t.verticalAlign = "middle";
		t.x = 188;
		t.y = 45;
		return t;
	};
	_proto.lab_map_i = function () {
		var t = new eui.Label();
		this.lab_map = t;
		t.height = 33;
		t.size = 24;
		t.text = "地图：";
		t.verticalAlign = "middle";
		t.x = 405;
		t.y = 45;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x545454;
		t.height = 1;
		t.width = 800;
		t.x = 0;
		t.y = 101;
		return t;
	};
	return RoomItemSkin;
})(eui.Skin);generateEUI.paths['resource/screen/RoomListUI.exml'] = window.RoomListUISkin = (function (_super) {
	__extends(RoomListUISkin, _super);
	var RoomListUISkin$Skin7 = 	(function (_super) {
		__extends(RoomListUISkin$Skin7, _super);
		function RoomListUISkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = RoomListUISkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomListUISkin$Skin7;
	})(eui.Skin);

	function RoomListUISkin() {
		_super.call(this);
		this.skinParts = ["lab_userID","btn_return","lab_title","img_header","lab_getInfo","data_roomList"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Scroller1_i()];
	}
	var _proto = RoomListUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 1080;
		t.source = "bg2_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 1737;
		t.x = 71;
		t.y = 56;
		t.elementsContent = [this.lab_userID_i(),this.btn_return_i(),this.lab_title_i(),this.img_header_i(),this._Rect1_i(),this.lab_getInfo_i()];
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.size = 24;
		t.text = "用户ID：";
		t.textAlign = "left";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 1472;
		t.y = 13;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.label = "";
		t.width = 32;
		t.x = 0;
		t.y = 9;
		t.skinName = RoomListUISkin$Skin7;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.height = 50;
		t.size = 36;
		t.text = "房间列表";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.height = 60;
		t.width = 60;
		t.x = 1374;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 60;
		t.strokeColor = 0x00E2ED;
		t.strokeWeight = 2;
		t.width = 60;
		t.x = 1374;
		t.y = 0;
		return t;
	};
	_proto.lab_getInfo_i = function () {
		var t = new eui.Label();
		this.lab_getInfo = t;
		t.size = 20;
		t.text = "正在获取......";
		t.x = 226;
		t.y = 17;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.width = 1312;
		t.y = 188;
		t.viewport = this.data_roomList_i();
		return t;
	};
	_proto.data_roomList_i = function () {
		var t = new eui.List();
		this.data_roomList = t;
		t.width = 1312;
		return t;
	};
	return RoomListUISkin;
})(eui.Skin);