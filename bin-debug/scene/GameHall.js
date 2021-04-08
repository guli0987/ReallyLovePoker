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
var GameHall = (function (_super) {
    __extends(GameHall, _super);
    function GameHall(user) {
        var _this = _super.call(this) || this;
        _this.menuContainer = new HallMenuContainer(_this.user, _this);
        _this.user = user;
        _this.width = 1920;
        _this.height = 1080;
        //加载游戏大厅背景
        var sky = new HallLayout(_this.width, _this.height);
        _this.addChild(sky);
        //添加bg是为了在开发时观察Container的范围
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x9CBDBB, 0.6);
        bg.graphics.drawRect(0, 0, _this.width, _this.height);
        bg.graphics.endFill();
        // bg.alpha = 0.5;
        _this.addChild(bg);
        _this.show();
        return _this;
        //RES.loadGroup("gamebg", 5);
        /*RES.loadGroup("portraits", 4);
        RES.loadGroup("drawpoker", 3);
        RES.loadGroup("pokers", 2);
        RES.loadGroup("buttons", 1);*/
        //console.log("portraits load ok");
        //console.log("pokers load ok");
        //console.log("buttons load ok");
        //console.log("shops load ok");
    }
    GameHall.prototype.show = function () {
        this.menuContainer.name = "menuContainer";
        this.addChild(this.menuContainer);
    };
    GameHall.prototype.menuOfflineModeClick = function () {
        //console.log("menuOfflineModeClick---");
        var playerP2c = new StandaloneModel(this.user);
        this.parent.addChild(playerP2c);
        this.parent.removeChild(this);
        console.log("单机游戏子对象数量：" + playerP2c.numChildren);
    };
    GameHall.prototype.menuClassicModeClick = function () {
        console.log("menuClassicModeClick");
        egret.ImageLoader.crossOrigin = "anonymous"; //解决图片跨域问题
        /**
         * GameSceneView 游戏场景类
         */
        this._scene = new GameSceneView();
        this._scene.graphics.beginFill(0x000000, 0.3);
        this._scene.graphics.drawRect(this.x, this.y, this.width, this.height);
        this._scene.graphics.endFill();
        this.parent.addChild(this._scene);
        this.parent.removeChild(this);
    };
    return GameHall;
}(egret.DisplayObjectContainer));
__reflect(GameHall.prototype, "GameHall");
