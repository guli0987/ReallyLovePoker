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
var GameSettings = (function (_super) {
    __extends(GameSettings, _super);
    function GameSettings() {
        return _super.call(this) || this;
    }
    GameSettings.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSettings.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return GameSettings;
}(eui.Component));
__reflect(GameSettings.prototype, "GameSettings", ["eui.UIComponent", "egret.DisplayObject"]);
