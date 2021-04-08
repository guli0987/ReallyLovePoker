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
var FirstThrowTitleContainer = (function (_super) {
    __extends(FirstThrowTitleContainer, _super);
    /**
     * 显示对手的头像
     * name 名称
     * index 头像
     * isLeft 是否是左边的玩家
     * isLandlord 是否是地主
     */
    function FirstThrowTitleContainer(firstThrowSeat) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").firstTitleContainer;
        _this.width = pc.width;
        _this.height = pc.height;
        var pd = -30;
        if (firstThrowSeat === 1) {
            _this.x = pc.playerX;
            _this.y = pc.playerY;
        }
        else if (firstThrowSeat === 2) {
            _this.x = pc.rightX;
            _this.y = pc.rightY;
            pd = 20;
        }
        else if (firstThrowSeat === 3) {
            _this.x = pc.topX;
            _this.y = pc.topY;
        }
        else if (firstThrowSeat === 4) {
            _this.x = pc.leftX;
            _this.y = pc.leftY;
        }
        //优先丢牌头衔
        var firstThrowTitle = new TextTip("【丢牌】", pd + 10, 35, 20);
        firstThrowTitle.width = 100;
        _this.addChild(firstThrowTitle);
        return _this;
    }
    return FirstThrowTitleContainer;
}(egret.DisplayObjectContainer));
__reflect(FirstThrowTitleContainer.prototype, "FirstThrowTitleContainer");
