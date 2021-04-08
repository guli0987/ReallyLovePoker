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
 * 用户头像显示容器
 */
var PortraitContainer = (function (_super) {
    __extends(PortraitContainer, _super);
    function PortraitContainer(user, index, isFirst, isCamp) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").portraitContainer;
        _this.x = pc.x;
        _this.y = pc.y;
        _this.width = pc.width;
        _this.height = pc.height;
        //添加bg是为了在开发时观察Container的范围
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x112233);
        // bg.graphics.drawRect( 0, 0, this.width, this.height ); 
        // bg.graphics.endFill();
        // bg.alpha = 0.5;
        // this.addChild(bg);
        var playerName = new TextTip(user.getName(), 0, 100, 16);
        playerName.width = 100;
        _this.addChild(playerName);
        if (!isFirst) {
            if (isCamp) {
                var playerName_1 = new TextTip("[友]", 100, 10, 32);
                playerName_1.textColor = 0x0F2FFC;
                playerName_1.width = 100;
                _this.addChild(playerName_1);
            }
        }
        _this.show(user.getSex(), index);
        return _this;
    }
    PortraitContainer.prototype.show = function (sex, index) {
        var portrait = new DefaultPortrait(sex, index, 0, 0, 100, 100);
        this.addChild(portrait);
    };
    return PortraitContainer;
}(egret.DisplayObjectContainer));
__reflect(PortraitContainer.prototype, "PortraitContainer");
