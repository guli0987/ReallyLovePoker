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
var TextOtherContainer = (function (_super) {
    __extends(TextOtherContainer, _super);
    /**
     * 其他玩家不出牌时的文字提示
     */
    function TextOtherContainer(text, isWho) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").textOtherContainer;
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
        // bg.graphics.beginFill( 0x112299);
        // bg.graphics.drawRect( 0, 0, this.width, this.height ); 
        // bg.graphics.endFill();
        // bg.alpha = 0.5;
        // this.addChild(bg);
        _this.show(text, isWho);
        return _this;
    }
    TextOtherContainer.prototype.show = function (text, isWho) {
        var x = 0;
        if (isWho === 2) {
            x = 16 + (6 - text.length) * 64;
        }
        var tip = new TextTip(text, x, 0, 64);
        this.addChild(tip);
    };
    return TextOtherContainer;
}(egret.DisplayObjectContainer));
__reflect(TextOtherContainer.prototype, "TextOtherContainer");
