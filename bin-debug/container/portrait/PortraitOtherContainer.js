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
var PortraitOtherContainer = (function (_super) {
    __extends(PortraitOtherContainer, _super);
    /**
     * 显示对手的头像
     * name 名称
     * index 头像
     * isLeft 是否是左边的玩家
     * isLandlord 是否是地主
     */
    function PortraitOtherContainer(user, index, isFirst, isCamp, isWho) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").portraitOtherContainer;
        if (isWho === 2) {
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
        var playerName = new TextTip(user.getName(), 0, 100, 16);
        playerName.width = 100;
        _this.addChild(playerName);
        if (!isFirst) {
            console.log("not	isFirst");
            var PX = 100;
            if (isWho == 2) {
                PX = -100;
            }
            var campName = void 0;
            if (isCamp) {
                campName = new TextTip("[友]", PX, 10, 32);
                campName.textColor = 0x0F2FFC;
            }
            else {
                //console.log("not	敌");
                campName = new TextTip("[敌]", PX, 10, 32);
                campName.textColor = 0xFA0803;
            }
            //console.log("???????");
            campName.width = 100;
            _this.addChild(campName);
        }
        _this.show(user, index);
        return _this;
    }
    PortraitOtherContainer.prototype.show = function (user, index) {
        var portrait = new DefaultPortrait(user.getSex(), index, 0, 0, 100, 100);
        this.addChild(portrait);
    };
    return PortraitOtherContainer;
}(egret.DisplayObjectContainer));
__reflect(PortraitOtherContainer.prototype, "PortraitOtherContainer");
