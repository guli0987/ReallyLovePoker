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
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.skinName = "LoginSkin";
        _this.addMsResponseListen();
        return _this;
    }
    Login.prototype.getMyChilds = function (partName, instance) {
        var _this = this;
        if ("btn_enter" == partName) {
            this.btn_enter = instance;
            this.btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.loginTween();
                console.log(" environment=" + GameData.DEFAULT_ENV + " gameid=" + GameData.gameID);
                //let result = mvs.MsEngine.getInstance.init(GameData.CHANNEL, GameData.DEFAULT_ENV, GameData.gameID, GameData.appkey);
                var result = mvs.MsEngine.getInstance.init(GameData.CHANNEL, GameData.RELEASE_TEST, GameData.gameID, GameData.appkey);
            }, this);
        }
        else if ("rect_clear" == partName) {
            this.rect_clear = instance;
            this.rect_clear.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearTween, this);
        }
        else if ("lab_clear" == partName) {
            this.lab_clear = instance;
            this.lab_clear.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearTween, this);
        }
    };
    Login.prototype.clearTween = function (event) {
        var _this = this;
        //LocalStore_Clear();
        mvs.MsEngine.getInstance.LocalStoreClear();
        egret.Tween.get(this.lab_clearNote).to({ alpha: 1 }, 500).call(function () {
            _this.lab_clearNote.visible = true;
        }).wait(500).to({ alpha: 0 }, 500).call(function () {
            _this.lab_clearNote.visible = false;
        });
    };
    //登录缓动动画
    Login.prototype.loginTween = function () {
        //遮罩图
        this.topMask = new egret.Shape();
        this.topMask.graphics.beginFill(0x000000, 0.4);
        this.topMask.graphics.drawRect(0, 0, this.width, this.height);
        this.topMask.graphics.endFill();
        this.addChild(this.topMask);
        //加载进度文字显示
        this.textField = new egret.TextField();
        this.textField.text = "登录中...";
        this.addChild(this.textField);
        this.textField.x = this.width / 2 - 50;
        this.textField.y = this.height / 2 - 120;
        this.textField.width = 180;
        this.textField.height = 100;
        //this.textField.textAlign = egret.HorizontalAlign.CENTER;
        //缓动动画
        this.textField_power = new egret.TextField();
        this.textField_power.text = ".";
        this.textField_power.textColor = 0xCCCCCC;
        this.textField_power.size = 100;
        this.textField_power.fontFamily = "White";
        this.textField_power.textAlign = "center";
        this.textField_power.x = this.width / 2;
        this.textField_power.y = this.height / 2 + 100;
        egret.Tween.get(this.textField_power, { loop: true })
            .to({ rotation: 360 }, 800, egret.Ease.cubicIn).play();
        this.addChild(this.textField_power);
    };
    Login.prototype.clearLoginTween = function () {
        console.log("clearLoginTween");
        this.removeChild(this.topMask);
        this.removeChild(this.textField);
        egret.Tween.removeTweens(this.textField_power);
        this.removeChild(this.textField_power);
    };
    Login.prototype.partAdded = function (partName, instance) {
        this.getMyChilds(partName, instance);
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Login.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Login.prototype.addMsResponseListen = function () {
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_INIT_RSP, this.initResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP, this.registerUserResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LOGIN_RSP, this.loginResponse, this);
    };
    Login.prototype.release = function () {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_INIT_RSP, this.initResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP, this.registerUserResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LOGIN_RSP, this.loginResponse, this);
    };
    Login.prototype.initResponse = function (ev) {
        console.log("Login initResponse,status:" + ev.data.status);
        if (ev.data.status !== 200) {
            console.log("init failed", ev.data.status);
            return;
        }
        mvs.MsEngine.getInstance.registerUser();
    };
    /**
     * 调用 matchvs 注册接口回调
     */
    Login.prototype.registerUserResponse = function (ev) {
        console.log("Login registerUserResponse,status:" + ev.data.status);
        var userInfo = ev.data;
        GameData.gameUser.id = userInfo.id;
        GameData.gameUser.name = userInfo.name;
        GameData.gameUser.avatar = userInfo.avatar;
        GameData.gameUser.token = userInfo.token;
        //登录
        if (userInfo.status === 0) {
            mvs.MsEngine.getInstance.login(userInfo.id, userInfo.token);
        }
    };
    /**
     * 调用 matchvs login 接口回调处理
     */
    Login.prototype.loginResponse = function (ev) {
        console.log("Login loginResponse,status:" + ev.data.status);
        //mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LOGIN_RSP, this.loginResponse,this);
        var login = ev.data;
        console.log("loginResponse, status=" + login.status);
        if (login.status !== 200) {
            console.log("登录失败");
        }
        else {
            console.log("登录成功 roomID=" + login.roomID + "(刚开始登录为0,不为0说明在房间中途掉线)");
            if (login.roomID != 0) {
                GameData.roomID = login.roomID;
                //重新连接
                GameSceneView._gameScene.reconnectView();
            }
            else {
                this.clearLoginTween();
                this.release(); //测试
                GameSceneView._gameScene.lobby();
            }
        }
    };
    return Login;
}(eui.Component));
__reflect(Login.prototype, "Login", ["eui.UIComponent", "egret.DisplayObject"]);
