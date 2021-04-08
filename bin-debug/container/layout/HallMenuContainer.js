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
var HallMenuContainer = (function (_super) {
    __extends(HallMenuContainer, _super);
    function HallMenuContainer(user, gameHall) {
        var _this = _super.call(this) || this;
        _this.show(user, gameHall);
        return _this;
    }
    HallMenuContainer.prototype.show = function (user, gameHall) {
        var menuOfflineMode = new HallMenus("menu_offlineMode_png", 450, 300, 300, 520); //x,y,w,h
        menuOfflineMode.touchEnabled = true;
        menuOfflineMode.addEventListener(egret.TouchEvent.TOUCH_TAP, gameHall.menuOfflineModeClick, gameHall);
        this.addChild(menuOfflineMode);
        var menuClassicMode = new HallMenus("menu_classicMode_png", 850, 300, 310, 450);
        menuClassicMode.touchEnabled = true;
        menuClassicMode.addEventListener(egret.TouchEvent.TOUCH_TAP, gameHall.menuClassicModeClick, gameHall);
        this.addChild(menuClassicMode);
        var menuFriendMode = new HallMenus("menu_friendMode_png", 1260, 300, 300, 495);
        //menuFriendMode.touchEnabled = true;
        //menuFriendMode.addEventListener(egret.TouchEvent.TOUCH_TAP,gameHall.menuFriendModeClick,gameHall);
        this.addChild(menuFriendMode);
    };
    return HallMenuContainer;
}(egret.DisplayObjectContainer));
__reflect(HallMenuContainer.prototype, "HallMenuContainer");
