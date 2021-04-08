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
 * 通用的游戏按钮容器，定义游戏中所有的按钮组
 */
var PlayerButtonContainer = (function (_super) {
    __extends(PlayerButtonContainer, _super);
    /**
     * 标准的斗地主玩家出牌动作按钮组容器
     * 包含:不要、提示、出牌、不可出牌按钮
     * player 当场景要加载该容器时，传入该场景，调用该容器的场景必须实现buttonOkClick(evt:egret.TouchEvent)方法，该方法是用来处理点击出牌按钮后执行的流程
     */
    function PlayerButtonContainer(player, type) {
        var _this = _super.call(this) || this;
        var pc = RES.getRes("layout_json").playerButtonContainer;
        _this.x = pc.x;
        _this.y = pc.y;
        _this.width = pc.width;
        _this.height = pc.height;
        //添加bg是为了在开发时观察Container的范围
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x112233);
        // bg.graphics.drawRect( 0, 0, this.width, this.height ); 
        // bg.graphics.endFill();
        // bg.alpha = 0.3;
        // this.addChild(bg);
        _this.show(player, type);
        return _this;
    }
    PlayerButtonContainer.prototype.show = function (player, type) {
        if (type == RoomManager.ButtonsToThrowAPoker) {
            /** 丢牌 */
            var buttonThrow = new Button("throw", 500, 40, 260, 160);
            buttonThrow.touchEnabled = true;
            buttonThrow.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonDiuPai, player);
            this.addChild(buttonThrow);
        }
        else if (type == RoomManager.ButtonsToDrawAPoker) {
            /** 抽牌 */
            var buttonDraw = new Button("draw", 400, 400, 260, 160);
            buttonDraw.touchEnabled = true;
            buttonDraw.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonChouPai, player);
            this.addChild(buttonDraw);
        }
        else if (type == RoomManager.ButtonsDiscard) {
            console.log("该一号玩家出牌了");
            /** 不要 */
            var buttonPass = new Button("pass", 25, 40, 260, 160);
            buttonPass.touchEnabled = true;
            buttonPass.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonBuYao, player);
            this.addChild(buttonPass);
            // let textPass:TextTip = new TextTip("不要",136,6,64);
            // this.addChild(textPass);
            /** 提示 */
            var buttonTip = new Button("tip", 350, 40, 260, 160);
            buttonTip.touchEnabled = true;
            buttonTip.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonTiShi, player);
            this.addChild(buttonTip);
            // let textTip:TextTip = new TextTip("提示",436,6,64);
            // this.addChild(textTip);
            /** 出牌 */
            var buttonOK = new Button("ok", 675, 40, 260, 160);
            buttonOK.touchEnabled = true;
            buttonOK.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonChuPai, player);
            this.addChild(buttonOK);
            // let textOk:TextTip = new TextTip("出牌",736,6,64);
            // this.addChild(textOk);
        }
        else if (type == RoomManager.ButtonsGameOver) {
            /** 离开房间 */
            var buttonLeave = new Button("leaveRoom", 200, 0, 300, 200);
            buttonLeave.touchEnabled = true;
            buttonLeave.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonGameOver, player);
            this.addChild(buttonLeave);
            /** 再来一把 */
            var buttonAgain = new Button("newGame", 600, 0, 300, 200);
            buttonAgain.touchEnabled = true;
            buttonAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonRestart, player);
            this.addChild(buttonAgain);
        }
        else if (type == RoomManager.ButtonsToSwitchAPoker) {
            /** 确定切牌 */
            var buttonDraw = new Button("switch", 400, 400, 300, 200);
            buttonDraw.touchEnabled = true;
            buttonDraw.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonQiePai, player);
            this.addChild(buttonDraw);
        }
        else if (type == RoomManager.ButtonsExpand) {
            /*"x":460,
        "y":420,*/
            //左边线
            var buttonExpandLineLeft = new Button("eline", -460, 580, 915, 10);
            buttonExpandLineLeft.touchEnabled = false;
            this.addChild(buttonExpandLineLeft);
            //默认1,中间expand
            var buttonExpand = new Button("expand", 450, 490, 100, 100);
            buttonExpand.touchEnabled = true;
            buttonExpand.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonExpand, player);
            this.addChild(buttonExpand);
            //右边线
            var buttonExpandLineRight = new Button("eline", 545, 580, 915, 10);
            buttonExpandLineRight.touchEnabled = false;
            this.addChild(buttonExpandLineRight);
        }
        else if (type == RoomManager.ButtonsTools) {
            //左边线
            var buttonHideLineLeft = new Button("hline", -460, 480, 915, 10);
            buttonHideLineLeft.touchEnabled = false;
            this.addChild(buttonHideLineLeft);
            //默认1,中间hide
            var buttonHide = new Button("hide", 450, 480, 100, 100);
            buttonHide.touchEnabled = true;
            buttonHide.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonHide, player);
            this.addChild(buttonHide);
            //右边线
            var buttonHideLineRight = new Button("hline", 545, 480, 915, 10);
            buttonHideLineRight.touchEnabled = false;
            this.addChild(buttonHideLineRight);
            //三个按钮选项
            /**减速 */
            var buttonSlowdown = new Button("slowdown", 60, 260, 200, 100);
            buttonSlowdown.touchEnabled = true;
            buttonSlowdown.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonSlowdown, player);
            this.addChild(buttonSlowdown);
            /**接管 */
            /*let buttonTakeover:Button = new Button("takeover",400,260,220,140);
            buttonTakeover.touchEnabled = true;
            buttonTakeover.addEventListener(egret.TouchEvent.TOUCH_TAP,player.buttonTakeover,player);
            this.addChild(buttonTakeover);*/
            /**加速 */
            var buttonSpeedup = new Button("speedup", 740, 260, 200, 100);
            buttonSpeedup.touchEnabled = true;
            buttonSpeedup.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonSpeedup, player);
            this.addChild(buttonSpeedup);
        }
        else if (type == RoomManager.ButtonsTakeOverOutPokers) {
            console.log("接替出牌");
            /** 不要 */
            var buttonPass = new Button("pass", 25, 40, 260, 160);
            buttonPass.touchEnabled = true;
            buttonPass.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonTiBuYao, player);
            this.addChild(buttonPass);
            /** 提示 */
            var buttonTip = new Button("tip", 350, 40, 260, 160);
            buttonTip.touchEnabled = true;
            buttonTip.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonTiTiShi, player);
            this.addChild(buttonTip);
            /** 出牌 */
            var buttonOK = new Button("ok", 675, 40, 260, 160);
            buttonOK.touchEnabled = true;
            buttonOK.addEventListener(egret.TouchEvent.TOUCH_TAP, player.buttonTiPai, player);
            this.addChild(buttonOK);
        }
    };
    return PlayerButtonContainer;
}(egret.DisplayObjectContainer));
__reflect(PlayerButtonContainer.prototype, "PlayerButtonContainer");
