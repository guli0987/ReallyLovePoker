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
var OtherPokerCountContains = (function (_super) {
    __extends(OtherPokerCountContains, _super);
    /**
     * 显示对手剩余的牌的数量
     * isLeft 是否是左边的玩家
     */
    function OtherPokerCountContains(count, isWho) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").otherPokerCountContainer;
        if (isWho === 1) {
            _this.x = pc.playerX;
            _this.y = pc.playerY;
        }
        else if (isWho === 2) {
            _this.x = pc.rightX;
            _this.y = pc.rightY;
        }
        else if (isWho === 3) {
            _this.x = pc.topX;
            _this.y = pc.topY;
        }
        else if (isWho === 4) {
            _this.x = pc.leftX;
            _this.y = pc.leftY;
        }
        _this.width = pc.width;
        _this.height = pc.height;
        //添加bg是为了在开发时观察Container的范围
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x112233);
        // bg.graphics.drawRect( 0, 0, this.width, this.height ); 
        // bg.graphics.endFill();
        // bg.alpha = 0.5;
        // this.addChild(bg);
        var pokerCount = new TextTip(count + "", 0, 60, 32);
        pokerCount.width = 100;
        _this.addChild(pokerCount);
        return _this;
    }
    return OtherPokerCountContains;
}(egret.DisplayObjectContainer));
__reflect(OtherPokerCountContains.prototype, "OtherPokerCountContains");
