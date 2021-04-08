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
/**
 * 通用的游戏结果显示容器，显示游戏结果
 */
var GameResultContainer = (function (_super) {
    __extends(GameResultContainer, _super);
    /**
     * 显示游戏结果
     * isVictory 是否胜利
     */
    function GameResultContainer(isVictory) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").layout;
        _this.x = 0;
        _this.y = 0;
        _this.width = pc.stageWidth;
        _this.height = pc.stageHeight;
        /** 遮罩层 */
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x112233);
        bg.graphics.drawRect(0, 0, _this.width, _this.height);
        bg.graphics.endFill();
        bg.alpha = 0.3;
        _this.addChild(bg);
        _this.show(isVictory);
        return _this;
    }
    GameResultContainer.prototype.show = function (isVictory) {
        var text;
        if (isVictory) {
            text = new TextTip("\\胜利/", 880, 700, 128);
            text.textColor = 0xFC0513;
        }
        else {
            text = new TextTip("/失败\\", 880, 700, 128);
            text.textColor = 0x020202;
        }
        this.addChild(text);
    };
    return GameResultContainer;
}(egret.DisplayObjectContainer));
__reflect(GameResultContainer.prototype, "GameResultContainer");
