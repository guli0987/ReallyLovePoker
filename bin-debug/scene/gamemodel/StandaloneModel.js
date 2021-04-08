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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 单机游戏场景
 */
var StandaloneModel = (function (_super) {
    __extends(StandaloneModel, _super);
    /**
     * 单机游戏场景
     */
    function StandaloneModel(user) {
        var _this = _super.call(this) || this;
        /**
         * 是否是开发模式，开发模式下将显示明牌
         */
        _this.isDevelop = false; //默认false
        _this.developButtonCount = 1;
        /**
         * 是否接管队友的牌
         */
        _this.isTakeOverRightPoker = false;
        _this.isTakeOverTopPoker = false;
        _this.isTakeOverLeftPoker = false;
        //玩家抽取的牌
        _this.pokerDrawArray = new Array();
        //抽到的牌的索引
        _this.drawPokerIndex = -1;
        _this.drawPokerId = -1;
        _this.drawPokerValue = -1;
        //抽到的暗牌的索引
        _this.darkPokerIndex = -1;
        _this.darkPokerId = -1;
        _this.darkPokerValue = -1;
        _this.drawPokerRandom = Math.floor(Math.random() * 4 + 1); //[1,5)选取随机抽牌玩家
        /**
         * 计时器定义null
         */
        //随机头像索引
        _this.playerIndex = Math.floor(Math.random() * 10) + 1;
        _this.rightIndex = Math.floor(Math.random() * 10) + 1;
        _this.topIndex = Math.floor(Math.random() * 10) + 1;
        _this.leftIndex = Math.floor(Math.random() * 10) + 1;
        //是否初进游戏，决定加载阵营与否
        _this.isFirst = true;
        //如果有一个人把牌给完，接下来的牌执行情况
        _this.currentPokerNull = -1;
        //随机用户资料
        _this.userLeft = PokerUtils.getRandomUser();
        _this.userTop = PokerUtils.getRandomUser();
        _this.userRight = PokerUtils.getRandomUser();
        /**
         * 发牌
         */
        //初始化一副牌（洗牌）
        _this.pokers = PokerUtils.getRandomPokers();
        //玩家发到的牌
        _this.pokersPlayer = new Array(); //=PokerUtils.sortDescPokers(this.pokers.slice(0, 27));
        //right家发到的牌
        _this.pokersRight = new Array();
        //top家发到的牌
        _this.pokersTop = new Array();
        //left家发到的牌
        _this.pokersLeft = new Array();
        //定义要丢的牌
        _this.checkThrowPoker = new Array();
        //玩家要丢的牌
        _this.PlayerThrowPoker = new Array();
        //right家要丢的牌
        _this.RightThrowPoker = new Array();
        //top家要丢的牌
        _this.TopThrowPoker = new Array();
        //left家要丢的牌
        _this.LeftThrowPoker = new Array();
        //是不是同一阵营
        _this.playerCamp = false;
        _this.rightCamp = false;
        _this.topCamp = false;
        _this.leftCamp = false;
        //同阵营的座位号
        _this.playerCampNumber = -1;
        _this.rightCampNumber = -1;
        _this.topCampNumber = -1;
        _this.leftCampNumber = -1;
        //玩家出的牌
        _this.imBuYao = false;
        //玩家选择的牌
        _this.pokerSelectArray = new Array();
        //top家出的牌
        _this.TopOutPokers = new Array();
        //right家出的牌
        _this.RightOutPokers = new Array();
        //left家出的牌
        _this.LeftOutPokers = new Array();
        /**
         * 人机出牌随机等待时间
         */
        _this.waitTimeindex = 5; //随机等待0到5秒
        /**
          * 人机出牌随机等待时间执行频率
          */
        _this.waitTimefrequency = 1000; //有15秒出牌时间，所以频率不宜改动
        /** 东西南北位置不可变动 */
        //玩家座位号
        _this.mySeat = 1;
        //其余玩家座位号
        _this.rightSeat = 2;
        _this.topSeat = 3;
        _this.leftSeat = 4;
        //具有优先丢牌权的玩家，随机抽取，以后考虑线性同余随机数
        //private throwPokerRandom: number = Math.floor(Math.random() * 4 + 1);//[1,5)
        //优先丢牌人座位号
        _this.firstThrowPokerSeat = -1;
        //优先出牌人座位号
        _this.firstOutPokerSeat = -1;
        /**
         * 当前出牌座位号(现在轮到谁出牌)
         */
        _this.outPokersSeat = -1;
        /**
         * 循环计时器
         */
        _this.timer = new egret.Timer(500, 0);
        /**
         * 当前一手牌
         */
        _this.playedPoker = [];
        _this.playedSeat = -1;
        /**
         * 当前回合数
         */
        _this.playPokerCount = 1; //第一回合激发抽牌，后面大于1则激发搬牌（即上家切牌）
        _this.user = user;
        _this.layout = RES.getRes("layout_json").layout;
        //加载游戏背景
        var sky = new Layout(_this.layout.stageWidth, _this.layout.stageHeight);
        _this.addChild(sky);
        //console.log("this.layout.stageWidth:"+this.layout.stageWidth+",this.layout.stageHeight:"+this.layout.stageHeight);
        //加载返回按钮
        var tip = new TextTip("返回", 10, 10, 66);
        tip.touchEnabled = true;
        tip.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.buttonGameOver, _this);
        _this.addChild(tip);
        //调用异步加载资源方法
        _this.runGame();
        return _this;
    }
    /**
     * 异步加载资源
     */
    StandaloneModel.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buttonAction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //调用预加载资源方法
                    return [4 /*yield*/, this.loadGameResource()];
                    case 1:
                        //调用预加载资源方法
                        _a.sent();
                        buttonAction = new eui.Button();
                        buttonAction.name = "buttonAction";
                        buttonAction.label = "点击开始";
                        buttonAction.x = 1920 / 2;
                        buttonAction.y = 1080 / 2;
                        this.addChild(buttonAction);
                        buttonAction.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonAction, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 预加载资源
     */
    StandaloneModel.prototype.loadGameResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingGame, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        loadingGame = new LoadingProgress();
                        //const loadingGame = new LoadingOne();
                        this.addChild(loadingGame);
                        return [4 /*yield*/, RES.loadGroup("portraits", 4, loadingGame)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("drawpoker", 3, loadingGame)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("pokers", 2, loadingGame)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("buttons", 1, loadingGame)];
                    case 5:
                        _a.sent();
                        this.removeChild(loadingGame);
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * 点击开始游戏按钮
    * 如果点击开始游戏按钮则清除该按钮后调用开始游戏方法
    */
    StandaloneModel.prototype.onButtonAction = function (e) {
        if (this.getChildByName("buttonAction") != null) {
            this.removeChild(this.getChildByName("buttonAction"));
        }
        this.LoadingButAction();
        //测试mytool
        //this.myTool();
    };
    /**
     * 当点击开始游戏,显示开发者模式和设置等界面,再调用this.init()开始游戏
     */
    StandaloneModel.prototype.LoadingButAction = function () {
        //开发者模式		
        var button = new eui.Button();
        button.label = "开发者模式";
        button.x = 1680;
        button.y = 40;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonGameTest, this);
        //游戏设置
        var setButton = new Button("gamesetting", 1830, 40, 50, 50);
        this.addChild(setButton);
        setButton.touchEnabled = true;
        setButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetButtonClick, this);
        //开始游戏action
        this.init();
    };
    /**
     * 根据this.playPokerCount了解对局数
     * 如果是第一场对局，则随机选择人抽牌
     * 如果对局数大于一，则指定人切牌
     */
    StandaloneModel.prototype.init = function () {
        var _this = this;
        console.log("显示优先丢牌和出牌人：" + this.firstThrowPokerSeat + "," + this.firstOutPokerSeat);
        //第一回合，开始
        var startGameText;
        var setAlpha = 1;
        this.createTimer(100, 20, function () {
            if (_this.getChildByName("startGameText") != null) {
                _this.removeChild(_this.getChildByName("startGameText"));
            }
            startGameText = new ShowText("第" + _this.playPokerCount + "回合，开始！", 600, 420, 130, setAlpha);
            startGameText.name = "startGameText";
            _this.addChild(startGameText);
            setAlpha -= 0.05;
        }, function () {
            if (_this.getChildByName("startGameText") != null) {
                _this.removeChild(_this.getChildByName("startGameText"));
            }
            console.log("测试进程");
            //第一回合激发抽牌，大于1激发切牌
            _this.drawPoker();
        });
    };
    /**
     * 刷新108张牌，确定是抽牌还是切牌
     * 如果是抽牌，随机选中座位号为1则显示抽牌选项，不为1则自动抽牌
     * 如果是切牌，轮到座位号为1玩家切牌则显示切牌选项，不为1则自动切牌
     */
    StandaloneModel.prototype.drawPoker = function () {
        var _this = this;
        //阵营标识还原后重新加载头像
        this.showPortraits();
        var index = 108;
        var drawpokers = new Array();
        var i = 0;
        // this.soundChannel = this.sound.play(0, 1);
        // this.soundChannel.volume = 0.5;
        this.createTimer(80, index, function () {
            // this.soundChannel.stop();
            if (_this.playPokerCount == 1) {
                console.log("显示要抽的牌：", i);
            }
            else if (_this.playPokerCount > 1) {
                console.log("显示要切的牌：", i);
            }
            drawpokers.push(_this.pokers[i]);
            _this.clearDrawPokers();
            _this.drawpoker = new PokerDrawContainer(_this, drawpokers, false, -1); //为true显示明牌，为开发者模式
            _this.drawpoker.name = "drawpoker";
            _this.addChild(_this.drawpoker);
            i++;
            // this.soundChannel = this.sound.play(0, 1);
        }, function () {
            //如果游戏回合数为1则激发抽牌，不为1则激发切牌
            if (_this.playPokerCount == 1) {
                console.log("结束显示要抽的牌和显示确认抽牌");
                //随机抽取玩家抽牌，如果座位号为1则显示抽牌选项,不为1则激发自动抽牌
                if (_this.drawPokerRandom == 1) {
                    _this.showButtons(RoomManager.ButtonsToDrawAPoker);
                }
                else {
                    _this.autoDrawPoker();
                }
            }
            else if (_this.playPokerCount > 1) {
                console.log("结束显示要切的牌和显示确认切牌");
                //玩家切牌，如果上局优先丢牌玩家座位号为1则显示切牌选项,不为1则激发自动切牌
                if (_this.firstThrowPokerSeat == 1) {
                    _this.showButtons(RoomManager.ButtonsToSwitchAPoker);
                }
                else {
                    _this.autoSwitchPoker();
                }
            }
        });
    };
    /**
   * 展示每位玩家的头像
   */
    StandaloneModel.prototype.showPortraits = function () {
        /** 显示玩家头像 */
        this.showPortrait(this.isFirst, this.playerCamp);
        /** 显示right头像 */
        this.showOtherPortrait(this.rightSeat, this.isFirst, this.rightCamp);
        /** 显示top头像 */
        this.showOtherPortrait(this.topSeat, this.isFirst, this.topCamp);
        /** 显示left头像 */
        this.showOtherPortrait(this.leftSeat, this.isFirst, this.leftCamp);
    };
    /**
     * 座位号为1玩家抽牌
     * 监听点击“抽牌”按钮的动作
     * 点击抽牌后：
     *  1.清空抽牌列表
     *  2.展示该张牌
     *  3.清空显示的牌
     *  4.开始转换牌次序
     *  5.开始依序发牌
     */
    StandaloneModel.prototype.buttonChouPai = function (evt) {
        //清除抽牌按钮
        this.clearButtons();
        console.log("测试自己抽牌的BUG--this.pokerDrawArray.length:" + this.pokerDrawArray.length + ",id:" + this.pokerDrawArray[0].getId());
        //找到抽牌id并显示
        for (var i = 0; i < this.pokers.length; i++) {
            if (this.pokers[i].getId() == this.pokerDrawArray[0].getId()) {
                this.clearDrawPokers();
                this.drawpoker = new PokerDrawContainer(this, this.pokers, false, i); //为true显示明牌，为开发者模式
                this.drawpoker.name = "drawpoker";
                this.addChild(this.drawpoker);
                this.drawPokerIndex = i;
                this.drawPokerId = this.pokerDrawArray[0].getId();
                this.drawPokerValue = this.pokerDrawArray[0].getOrderValue();
                console.log("index:" + this.drawPokerIndex + ",id:" + this.drawPokerId + ",value:" + this.drawPokerValue);
                //初始化抽的牌
                this.pokerDrawArray = new Array();
                //找到了就跳出循环
                break;
            }
        }
        //console.log("测试结束");
        //从i最大开始发牌，看明抽的牌在哪家则谁丢牌，看暗抽的牌在哪家则谁出牌，调用丢牌函数成功衔接
        //如果抽到牌的值为大小王，则重新抽牌，主要是抽的牌还要找暗牌来区分先抽和先给
        if (this.drawPokerValue == 14 || this.drawPokerValue == 15) {
            this.showButtons(RoomManager.ButtonsToDrawAPoker);
        }
        else {
            this.showDealPokers();
        }
    };
    /**
    * 座位号不为1自动抽牌
    * 自动抽牌间隔时间控制
    */
    StandaloneModel.prototype.autoDrawPoker = function () {
        var _this = this;
        var indexTime = 60;
        var startDrawText;
        var setAlpha = 1;
        this.createTimer(30, indexTime, function () {
            if (_this.getChildByName("startDrawText") != null) {
                _this.removeChild(_this.getChildByName("startDrawText"));
            }
            startDrawText = new ShowText(_this.drawPokerRandom + "号AI玩家开始自动抽牌中", 400, 800, 100, setAlpha);
            startDrawText.name = "startDrawText";
            _this.addChild(startDrawText);
            setAlpha -= 0.05;
        }, function () {
            if (_this.getChildByName("startDrawText") != null) {
                _this.removeChild(_this.getChildByName("startDrawText"));
            }
            console.log("等待" + _this.drawPokerRandom + "号AI玩家自动抽牌结束");
            _this.doAutoDrawPoker();
        });
    };
    /**
     * 座位号不为1自动抽牌
     * 自动抽牌控制
     */
    StandaloneModel.prototype.doAutoDrawPoker = function () {
        var result = -1;
        if (this.drawPokerRandom == 2) {
            result = Math.floor(Math.random() * 108); //[0,108)=[0,107]
        }
        else if (this.drawPokerRandom == 3) {
            result = Math.floor(Math.random() * 108);
        }
        else if (this.drawPokerRandom == 4) {
            result = Math.floor(Math.random() * 108);
        }
        console.log("result:" + result);
        this.clearDrawPokers();
        this.drawpoker = new PokerDrawContainer(this, this.pokers, false, result); //为true显示明牌，为开发者模式
        this.drawpoker.name = "drawpoker";
        this.addChild(this.drawpoker);
        this.drawPokerIndex = result;
        this.drawPokerId = this.pokers[result].getId();
        this.drawPokerValue = this.pokers[result].getOrderValue();
        console.log("this.drawPokerIndex:" + this.drawPokerIndex + ",this.drawPokerId:" + this.drawPokerId + ",this.drawPokerValue:" + this.drawPokerValue);
        //这个函数得到优先出牌权的属性和分发牌
        //如果抽到牌的值为大小王，则重新抽牌，主要是抽的牌还要找暗牌来区分先抽和先给
        if (this.drawPokerValue == 14 || this.drawPokerValue == 15) {
            this.autoDrawPoker();
        }
        else {
            this.showDealPokers();
        }
    };
    /**
     * 座位号为1玩家切牌
     * 监听点击“切牌”按钮的动作
     * 点击切牌后：
     *  1.清空切牌列表
     *  4.开始转换切牌后牌的次序
     *  5.开始依序发牌
     */
    StandaloneModel.prototype.buttonQiePai = function (evt) {
        //清除切牌按钮
        this.clearButtons();
        var switchPokerId = -1;
        //找到切牌id并以此为基准，将上方所有牌（包括这张）移到最下方，其中切的牌最后会发到自己手中
        for (var i = 0; i < this.pokers.length; i++) {
            if (this.pokers[i].getId() == this.pokerDrawArray[0].getId()) {
                switchPokerId = i;
                break;
            }
        }
        console.log("要切牌的id:" + this.pokerDrawArray[0].getId() + ",要切牌的索引：" + switchPokerId);
        //展示切的牌
        this.clearDrawPokers();
        this.drawpoker = new PokerDrawContainer(this, this.pokers, false, switchPokerId); //为true显示明牌，为开发者模式
        this.drawpoker.name = "drawpoker";
        this.addChild(this.drawpoker);
        //开始切换牌的顺序=PokerUtils.sortDescPokers(this.pokers.slice(0, 27));private pokersRight: Array<Poker> = new Array<Poker>();
        this.pokers = (this.pokers.slice(switchPokerId, this.pokers.length)).concat(this.pokers.slice(0, switchPokerId));
        //切牌完毕，优先丢牌座位号+1，如果上局为1这局为2，上局为2这局为3，上局为3这局为4，上局为4这局为1
        if (this.firstThrowPokerSeat == 1) {
            this.firstThrowPokerSeat = 2;
        }
        else if (this.firstThrowPokerSeat == 2) {
            this.firstThrowPokerSeat = 3;
        }
        else if (this.firstThrowPokerSeat == 3) {
            this.firstThrowPokerSeat = 4;
        }
        else if (this.firstThrowPokerSeat == 4) {
            this.firstThrowPokerSeat = 1;
        }
        //从i最大开始发牌，从优先丢牌人开始发牌
        //this.dealPokersRestart();
        this.showDealPokers();
    };
    /**
     * 座位号不为1自动切牌
     * 自动切牌时间间隔控制
     */
    StandaloneModel.prototype.autoSwitchPoker = function () {
        var _this = this;
        var indexTime = 60;
        var count = 3;
        var startSwitchText;
        var setAlpha = 1;
        this.createTimer(50, indexTime, function () {
            if (_this.getChildByName("startSwitchText") != null) {
                _this.removeChild(_this.getChildByName("startSwitchText"));
            }
            startSwitchText = new ShowText(_this.firstThrowPokerSeat + "号AI玩家开始自动切牌中", 400, 800, 100, setAlpha);
            startSwitchText.name = "startSwitchText";
            _this.addChild(startSwitchText);
            setAlpha -= 0.05;
        }, function () {
            if (_this.getChildByName("startSwitchText") != null) {
                _this.removeChild(_this.getChildByName("startSwitchText"));
            }
            console.log("等待" + _this.firstThrowPokerSeat + "号AI玩家自动切牌结束");
            _this.doAutoSwitchPoker();
        });
    };
    /**
    * 座位号不为1自动切牌
    * 自动切牌控制
    */
    StandaloneModel.prototype.doAutoSwitchPoker = function () {
        var result = -1;
        if (this.drawPokerRandom == 2) {
            result = Math.floor(Math.random() * 108); //[0,108)=[0,107]
        }
        else if (this.drawPokerRandom == 3) {
            result = Math.floor(Math.random() * 108);
        }
        else if (this.drawPokerRandom == 4) {
            result = Math.floor(Math.random() * 108);
        }
        console.log("result:" + result);
        //展示切的牌
        this.clearDrawPokers();
        this.drawpoker = new PokerDrawContainer(this, this.pokers, false, result); //为true显示明牌，为开发者模式
        this.drawpoker.name = "drawpoker";
        this.addChild(this.drawpoker);
        //【切牌动画？】有时优先丢牌座位号：4,优先出牌座位号：-1 
        //开始切换牌的顺序=PokerUtils.sortDescPokers(this.pokers.slice(0, 27));private pokersRight: Array<Poker> = new Array<Poker>();
        this.pokers = (this.pokers.slice(result, this.pokers.length)).concat(this.pokers.slice(0, result));
        //切牌完毕，优先丢牌座位号+1，如果上局为1这局为2，上局为2这局为3，上局为3这局为4，上局为4这局为1
        if (this.firstThrowPokerSeat == 1) {
            this.firstThrowPokerSeat = 2;
        }
        else if (this.firstThrowPokerSeat == 2) {
            this.firstThrowPokerSeat = 3;
        }
        else if (this.firstThrowPokerSeat == 3) {
            this.firstThrowPokerSeat = 4;
        }
        else if (this.firstThrowPokerSeat == 4) {
            this.firstThrowPokerSeat = 1;
        }
        //这个函数得到优先出牌权的属性和分发牌
        this.showDealPokers();
    };
    /**
     * 抽牌和切牌完成后停留时间控制
     */
    StandaloneModel.prototype.showDealPokers = function () {
        var _this = this;
        var indexTime = 3;
        var count = 3;
        this.createTimer(1000, indexTime, function () {
            if (_this.playPokerCount > 1) {
                console.log("等待" + count + "秒自动【不显示】切牌完毕");
            }
            else if (_this.playPokerCount == 1) {
                console.log("等待" + count + "秒自动【显示】抽牌完毕");
            }
            count--;
        }, function () {
            if (_this.playPokerCount > 1) {
                console.log("等待切牌【显示】结束");
                _this.dealPokersRestart();
            }
            else if (_this.playPokerCount == 1) {
                console.log("等待【显示】结束");
                _this.dealPokers();
            }
        });
    };
    /**
    * 抽牌显示结束，开始发牌
    * 开始依据this.drawPokerIndex发牌
    * i最小为上最左，i最大为下最右，抽牌结束后依照抽牌的值从抽牌人逆序从一开始
    * 计数，直到数目达到所抽牌的值，此时指向谁便从谁开始逆序发牌，发牌从i最大开始
    * 随机选一个抽牌的人，只要不退回大厅就仅仅第一把为随机抽牌，后面根据顺序（逆序），如从
    * 最开始的优先丢牌权玩家开始逆序轮排优先丢牌权，而优先出牌权则是根据上回第一个把牌给完的人【重要，遍历注意位置】
    * 选取随机抽牌玩家【前方自动抽牌如丢牌代码】this.drawPokerRandom
    * 定义开始发牌玩家座位号
    * this.drawPokerValue % 4
    */
    StandaloneModel.prototype.dealPokers = function () {
        //出牌座位号检测
        for (var i = 0; i < this.pokers.length; i++) {
            if (Math.abs(this.pokers[i].getId() - this.drawPokerId) == 4
                && this.pokers[i].getOrderValue() - this.drawPokerValue == 0) {
                console.log("找到暗牌了");
                this.darkPokerIndex = i;
                this.darkPokerId = this.pokers[i].getId();
                this.darkPokerValue = this.drawPokerValue;
            }
        }
        //
        console.log("暗牌---this.darkPokerIndex:" + this.darkPokerIndex + ",this.darkPokerId:" + this.darkPokerId + ",this.darkPokerValue:" + this.darkPokerValue);
        //console.log("this.darkPokerIndex:"+this.darkPokerIndex);
        //发牌
        if (this.drawPokerRandom == 1) {
            if (this.drawPokerValue % 4 == 1) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 4;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 4;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 1;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 1;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 2;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 2;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 3;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 3;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                }
            }
        }
        else if (this.drawPokerRandom == 2) {
            if (this.drawPokerValue % 4 == 1) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 1;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 1;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 2;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 2;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 3;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 3;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 4;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 4;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                }
            }
        }
        else if (this.drawPokerRandom == 3) {
            if (this.drawPokerValue % 4 == 1) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 2;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 2;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 3;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 3;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 4;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 4;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 1;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 1;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
        }
        else if (this.drawPokerRandom == 4) {
            if (this.drawPokerValue % 4 == 1) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 3;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 3;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 4;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 4;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 2;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 1;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 2;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 1;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //丢牌座位号
                if (this.drawPokerIndex % 4 == 3) {
                    this.firstThrowPokerSeat = 3;
                }
                else if (this.drawPokerIndex % 4 == 2) {
                    this.firstThrowPokerSeat = 4;
                }
                else if (this.drawPokerIndex % 4 == 1) {
                    this.firstThrowPokerSeat = 1;
                }
                else if (this.drawPokerIndex % 4 == 0) {
                    this.firstThrowPokerSeat = 2;
                }
                //出牌座位号
                if (this.darkPokerIndex % 4 == 3) {
                    this.firstOutPokerSeat = 3;
                }
                else if (this.darkPokerIndex % 4 == 2) {
                    this.firstOutPokerSeat = 4;
                }
                else if (this.darkPokerIndex % 4 == 1) {
                    this.firstOutPokerSeat = 1;
                }
                else if (this.darkPokerIndex % 4 == 0) {
                    this.firstOutPokerSeat = 2;
                }
                //开始发牌
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (i % 4 == 3) {
                        this.pokersTop.push(this.pokers[i]);
                    }
                    else if (i % 4 == 2) {
                        this.pokersLeft.push(this.pokers[i]);
                    }
                    else if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                    else if (i % 4 == 0) {
                        this.pokersRight.push(this.pokers[i]);
                    }
                }
            }
        }
        console.log(">>>>>优先丢牌座位号：" + this.firstThrowPokerSeat + ",>>>>>>>>优先出牌座位号：" + this.firstOutPokerSeat);
        //将每个人的牌整理顺序
        this.pokersPlayer = PokerUtils.sortDescPokers(this.pokersPlayer);
        this.pokersRight = PokerUtils.sortDescPokers(this.pokersRight);
        this.pokersTop = PokerUtils.sortDescPokers(this.pokersTop);
        this.pokersLeft = PokerUtils.sortDescPokers(this.pokersLeft);
        //分发完毕清空抽牌列表
        this.clearDrawPokers();
        //开始衔接丢牌
        this.show();
    };
    /**
     *  切牌显示结束，开始发牌 【有点发牌的疑问，第二局+从谁开始发牌】
     */
    StandaloneModel.prototype.dealPokersRestart = function () {
        //开始发牌
        if (this.firstThrowPokerSeat == 1) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (i % 4 == 3) {
                    this.pokersPlayer.push(this.pokers[i]);
                }
                else if (i % 4 == 2) {
                    this.pokersRight.push(this.pokers[i]);
                }
                else if (i % 4 == 1) {
                    this.pokersTop.push(this.pokers[i]);
                }
                else if (i % 4 == 0) {
                    this.pokersLeft.push(this.pokers[i]);
                }
            }
        }
        else if (this.firstThrowPokerSeat == 2) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (i % 4 == 3) {
                    this.pokersRight.push(this.pokers[i]);
                }
                else if (i % 4 == 2) {
                    this.pokersTop.push(this.pokers[i]);
                }
                else if (i % 4 == 1) {
                    this.pokersLeft.push(this.pokers[i]);
                }
                else if (i % 4 == 0) {
                    this.pokersPlayer.push(this.pokers[i]);
                }
            }
        }
        else if (this.firstThrowPokerSeat == 3) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (i % 4 == 3) {
                    this.pokersTop.push(this.pokers[i]);
                }
                else if (i % 4 == 2) {
                    this.pokersLeft.push(this.pokers[i]);
                }
                else if (i % 4 == 1) {
                    this.pokersPlayer.push(this.pokers[i]);
                }
                else if (i % 4 == 0) {
                    this.pokersRight.push(this.pokers[i]);
                }
            }
        }
        else if (this.firstThrowPokerSeat == 4) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (i % 4 == 3) {
                    this.pokersLeft.push(this.pokers[i]);
                }
                else if (i % 4 == 2) {
                    this.pokersPlayer.push(this.pokers[i]);
                }
                else if (i % 4 == 1) {
                    this.pokersRight.push(this.pokers[i]);
                }
                else if (i % 4 == 0) {
                    this.pokersTop.push(this.pokers[i]);
                }
            }
        }
        //将每个人的牌整理顺序
        this.pokersPlayer = PokerUtils.sortDescPokers(this.pokersPlayer);
        this.pokersRight = PokerUtils.sortDescPokers(this.pokersRight);
        this.pokersTop = PokerUtils.sortDescPokers(this.pokersTop);
        this.pokersLeft = PokerUtils.sortDescPokers(this.pokersLeft);
        //分发完毕清空切牌列表
        this.clearDrawPokers();
        //开始衔接丢牌
        this.show();
    };
    /**
     * 进入显示牌面阶段
     */
    StandaloneModel.prototype.show = function () {
        //以头衔形式展示优先丢牌权和优先出牌权
        this.showThrowOrOutPokerTitle();
        /** 显示玩家的牌 */
        this.initPokers();
        this.showCount(this.mySeat, this.pokersPlayer.length);
        this.showCount(this.rightSeat, this.pokersRight.length);
        this.showCount(this.topSeat, this.pokersTop.length);
        this.showCount(this.leftSeat, this.pokersLeft.length);
        //如果是开发者模式则明牌显示其余玩家的牌
        if (this.isDevelop) {
            /** 显示right的牌 */
            this.showRight = new PokerVerticalContainer(this.pokersRight, this.rightSeat);
            this.showRight.name = "showRight";
            this.addChild(this.showRight);
            /** 显示left的牌 */
            this.showLeft = new PokerVerticalContainer(this.pokersLeft, this.leftSeat);
            this.showLeft.name = "showLeft";
            this.addChild(this.showLeft);
            /** 显示top的牌 */
            this.showTop = new PokerVerticalContainer(this.pokersTop, this.topSeat);
            this.showTop.name = "showTop";
            this.addChild(this.showTop);
        }
    };
    /**
     * 显示优先出牌和丢牌头衔
     */
    StandaloneModel.prototype.showThrowOrOutPokerTitle = function () {
        this.cleatFirstTitle();
        //丢
        console.log("显示丢牌出牌头衔"); //this.firstThrowPokerSeat  this.firstOutPokerSeat
        this.fistThrowTitle = new FirstThrowTitleContainer(this.firstThrowPokerSeat);
        this.fistThrowTitle.name = "fistThrowTitle";
        this.addChild(this.fistThrowTitle);
        //出
        this.fistOutTitle = new FirstOutTitleContainer(this.firstOutPokerSeat);
        this.fistOutTitle.name = "fistOutTitle";
        this.addChild(this.fistOutTitle);
    };
    /**
     * 发牌，显示一张一张发牌的效果
     * 1.缓慢显示自己的牌
     * 2.缓慢刷新其他玩家的牌的计数
     */
    StandaloneModel.prototype.initPokers = function () {
        var _this = this;
        var index = 27;
        var pokers = new Array();
        var i = 0;
        // this.soundChannel = this.sound.play(0, 1);
        // this.soundChannel.volume = 0.5;
        var startThrowText;
        var setAlpha = 1;
        this.createTimer(300, index, function () {
            // this.soundChannel.stop();
            console.log("发牌：", i);
            pokers.push(_this.pokersPlayer[i]);
            _this.clearPokers();
            StandaloneModel.mypoker = new PokerContainer(_this, pokers, StandaloneModel.isLeftHand);
            StandaloneModel.mypoker.name = "mypoker";
            _this.addChild(StandaloneModel.mypoker);
            _this.showCount(_this.mySeat, i + 1);
            _this.showCount(_this.rightSeat, i + 1);
            _this.showCount(_this.topSeat, i + 1);
            _this.showCount(_this.leftSeat, i + 1); //座位号食指代表着东南西北方向
            i++;
            // this.soundChannel = this.sound.play(0, 1);
            if (i >= 17) {
                if (_this.getChildByName("startThrowText") != null) {
                    _this.removeChild(_this.getChildByName("startThrowText"));
                }
                startThrowText = new ShowText("等待丢牌...", 580, 500, 130, setAlpha);
                startThrowText.name = "startThrowText";
                _this.addChild(startThrowText);
                setAlpha -= 0.1;
            }
        }, function () {
            if (_this.getChildByName("startThrowText") != null) {
                _this.removeChild(_this.getChildByName("startThrowText"));
            }
            console.log("发牌结束");
            /** 显示丢牌按钮 */
            _this.showAutoThrowPoker();
        });
    };
    /**
     * 倒计时丢牌时间控制
     */
    StandaloneModel.prototype.showAutoThrowPoker = function () {
        this.clearAllThrowPoker();
        //几个AI同时丢牌，显示，移除,刷新showThrowTimer
        this.throwPokerControl(this.mySeat);
        this.throwPokerControl(this.rightSeat);
        this.throwPokerControl(this.topSeat);
        this.throwPokerControl(this.leftSeat);
        //自动丢牌动画，明牌显示所有玩家丢的牌
        this.CycleTiming();
    };
    //循环计时器
    StandaloneModel.prototype.CycleTiming = function () {
        //创建一个计时器对象
        //var timer:egret.Timer = new egret.Timer(500,10);
        //注册事件侦听器
        this.timer.reset();
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        //开始计时
        this.timer.start();
        //timer.reset();
        //timer.stop();
    };
    //计时中
    StandaloneModel.prototype.timerFunc = function () {
        console.log("计时中..");
        if (this.TopThrowPoker.length != 0 && this.LeftThrowPoker.length != 0 && this.PlayerThrowPoker.length != 0 && this.RightThrowPoker.length != 0) {
            //自动丢牌动画，明牌显示所有玩家丢的牌
            //this.timer.stop();
            this.timer.reset();
            this.showEvreyoneThrowPoker();
            console.log("计时中满足条件..");
        }
    };
    //计时结束
    StandaloneModel.prototype.timerComFunc = function () { console.log("结束"); };
    /**
     * 丢牌时间的控制
     */
    StandaloneModel.prototype.throwPokerControl = function (seat) {
        var _this = this;
        if (seat != 1) {
            var index = Math.floor(Math.random() * 5) + 3;
            //let index: number = 10;
            var time_1 = 10;
            this.createTimer(1000, index, function () {
                _this.showThrowTimer(time_1--, seat);
            }, function () {
                //清理相应玩家丢牌定时器
                _this.clearThrowTimerControl(seat);
                if (seat == 2) {
                    _this.RightThrowPoker = PokerSeekUtils.autoThrowPlay(_this.pokersRight);
                    _this.showThrowPoker(2, false);
                    _this.pokersRight = PokerUtils.removePokers(_this.pokersRight, _this.RightThrowPoker);
                    if (_this.isDevelop) {
                        _this.showPokerVertival(2);
                    }
                    console.log("自动丢牌2");
                }
                else if (seat == 3) {
                    _this.TopThrowPoker = PokerSeekUtils.autoThrowPlay(_this.pokersTop);
                    _this.showThrowPoker(3, false);
                    _this.pokersTop = PokerUtils.removePokers(_this.pokersTop, _this.TopThrowPoker);
                    if (_this.isDevelop) {
                        _this.showPokerVertival(3);
                    }
                    console.log("自动丢牌3");
                }
                else if (seat == 4) {
                    _this.LeftThrowPoker = PokerSeekUtils.autoThrowPlay(_this.pokersLeft);
                    _this.showThrowPoker(4, false);
                    _this.pokersLeft = PokerUtils.removePokers(_this.pokersLeft, _this.LeftThrowPoker);
                    if (_this.isDevelop) {
                        _this.showPokerVertival(4);
                    }
                    console.log("自动丢牌4");
                }
            });
        }
        else {
            this.showButtons(RoomManager.ButtonsToThrowAPoker);
        }
    };
    /**
    * 开始丢牌，
    * 其余三位玩家另选择一张牌进入交换排位，
    * 有与丢出牌相同牌的玩家加入阵营，同时另外两位玩家组成另外的阵营
    */
    StandaloneModel.prototype.buttonDiuPai = function (evt) {
        //玩家选中一张牌
        //没有该类型或者选中的牌数量不为一则不做处理
        if (PokerTypeUtils.isSingle(this.pokerSelectArray) == -1) {
            console.log("你这选的是啥呀");
            return;
        }
        //不能丢大小王
        if (this.pokerSelectArray[0].getOrderValue() > 13) {
            console.log("糟糕，选了大小王");
            return;
        }
        //清空按钮
        this.clearButtons();
        //要丢的牌等于挑选的牌
        this.PlayerThrowPoker = this.pokerSelectArray;
        //如果符合要求，则将该张牌显示到指定位置,刷新丢牌区
        this.showThrowPoker(this.mySeat, false);
        //清空已选择的牌数组
        this.pokerSelectArray = new Array();
        this.clearButtons();
        //如果在丢牌时间内完成丢牌，则清除计时器【没用】
        this.clearThrowTimerControl(1);
        console.log("自动丢牌1");
        //移除丢的牌
        this.pokersPlayer = PokerUtils.removePokers(this.pokersPlayer, this.PlayerThrowPoker);
        //刷新自己的牌
        this.showPokerVertival(this.mySeat);
        //return;
        //自动丢牌动画，明牌显示所有玩家丢的牌【】
        //this.showEvreyoneThrowPoker();
    };
    /**
     * 当所有玩家丢玩牌后展示
     */
    StandaloneModel.prototype.showEvreyoneThrowPoker = function () {
        var _this = this;
        //还原计时器
        this.clearAllThrowPoker();
        this.showThrowPoker(this.mySeat, true);
        this.showThrowPoker(this.rightSeat, true);
        this.showThrowPoker(this.topSeat, true);
        this.showThrowPoker(this.leftSeat, true);
        var index = 3;
        this.createTimer(1000, index, function () {
            console.log("显示丢的牌3秒倒计时");
        }, function () {
            _this.autoThrowPlay();
        });
    };
    /**
     * 探寻具有优先丢牌权的玩家丢的牌与其他丢的牌相撞情况
     */
    StandaloneModel.prototype.isSearchCamp = function (searchPoker) {
        if (Math.abs(searchPoker[0].getId() - this.checkThrowPoker[0].getId()) == 4
            && searchPoker[0].getOrderValue() - this.checkThrowPoker[0].getOrderValue() == 0) {
            return true;
        }
        return false;
    };
    /**
     * 自动丢牌的控制
     * 当轮到玩家丢牌时，退出自动丢牌，
     * 当轮到系统出牌时，随机延迟一段时间，同时倒计时10秒（相当与人的思考时间）
     * bug,疑似丢出的牌跟对门的放置的牌相同时不互换
     */
    StandaloneModel.prototype.autoThrowPlay = function () {
        var _this = this;
        //if (this.outPokersSeat == 1) {//玩家出牌，不采用自动出牌模式
        //return;
        //}
        console.log("开始自动丢牌");
        console.log("开始自动丢牌" + this.PlayerThrowPoker + "," + this.RightThrowPoker + "," + this.TopThrowPoker + "," + this.LeftThrowPoker);
        console.log("丢牌玩家的座位号——————————————" + this.firstThrowPokerSeat);
        //所有玩家都丢出牌后，根据选中的优先丢牌全的玩家查找并交换牌
        var isContinueSearch = false;
        if (this.firstThrowPokerSeat == 1) {
            this.checkThrowPoker = this.PlayerThrowPoker;
            this.playerCamp = true;
            if (this.isSearchCamp(this.TopThrowPoker)) {
                isContinueSearch = true;
                this.topCamp = true;
            }
            if (this.isSearchCamp(this.RightThrowPoker)) {
                isContinueSearch = true;
                this.rightCamp = true;
            }
            if (this.isSearchCamp(this.LeftThrowPoker)) {
                isContinueSearch = true;
                this.leftCamp = true;
            }
        }
        else if (this.firstThrowPokerSeat == 2) {
            this.checkThrowPoker = this.RightThrowPoker;
            this.rightCamp = true;
            if (this.isSearchCamp(this.TopThrowPoker)) {
                isContinueSearch = true;
                this.topCamp = true;
            }
            if (this.isSearchCamp(this.PlayerThrowPoker)) {
                isContinueSearch = true;
                this.playerCamp = true;
            }
            if (this.isSearchCamp(this.LeftThrowPoker)) {
                isContinueSearch = true;
                this.leftCamp = true;
            }
        }
        else if (this.firstThrowPokerSeat == 3) {
            this.checkThrowPoker = this.TopThrowPoker;
            this.topCamp = true;
            if (this.isSearchCamp(this.PlayerThrowPoker)) {
                isContinueSearch = true;
                this.playerCamp = true;
            }
            if (this.isSearchCamp(this.RightThrowPoker)) {
                isContinueSearch = true;
                this.rightCamp = true;
            }
            if (this.isSearchCamp(this.LeftThrowPoker)) {
                isContinueSearch = true;
                this.leftCamp = true;
            }
        }
        else if (this.firstThrowPokerSeat == 4) {
            this.checkThrowPoker = this.LeftThrowPoker;
            this.leftCamp = true;
            if (this.isSearchCamp(this.TopThrowPoker)) {
                isContinueSearch = true;
                this.topCamp = true;
            }
            if (this.isSearchCamp(this.RightThrowPoker)) {
                isContinueSearch = true;
                this.rightCamp = true;
            }
            if (this.isSearchCamp(this.PlayerThrowPoker)) {
                isContinueSearch = true;
                this.playerCamp = true;
            }
        }
        //console.log("要丢的牌"+this.checkThrowPoker.length);
        console.log("要丢的牌" + this.checkThrowPoker[0].getId() + "," + this.checkThrowPoker[0].getOrderValue() + ",长度:" + this.checkThrowPoker.length);
        //得遍历所有牌找到相同的牌，如果两张牌都在自己家则无效丢牌 判断id差是否为4，且value是否相等
        //丢牌id this.PlayerThrowPoker[0].getId();丢牌value this.PlayerThrowPoker[0].getOrderValue();
        if (!isContinueSearch) {
            for (var i = 0; i < this.pokersPlayer.length; i++) {
                if (Math.abs(this.pokersPlayer[i].getId() - this.checkThrowPoker[0].getId()) == 4
                    && this.pokersPlayer[i].getOrderValue() == this.checkThrowPoker[0].getOrderValue()) {
                    if (this.firstThrowPokerSeat == 1) {
                        console.log("在自己家，无效丢牌1");
                        return;
                    }
                    else {
                        this.playerCamp = true;
                    }
                }
            }
            for (var i = 0; i < this.pokersRight.length; i++) {
                if (Math.abs(this.pokersRight[i].getId() - this.checkThrowPoker[0].getId()) == 4
                    && this.pokersRight[i].getOrderValue() == this.checkThrowPoker[0].getOrderValue()) {
                    console.log("在Right家");
                    if (this.firstThrowPokerSeat == 2) {
                        console.log("在自己家，无效丢牌2");
                        return;
                    }
                    else {
                        this.rightCamp = true;
                    }
                }
            }
            for (var i = 0; i < this.pokersTop.length; i++) {
                if (Math.abs(this.pokersTop[i].getId() - this.checkThrowPoker[0].getId()) == 4
                    && this.pokersTop[i].getOrderValue() == this.checkThrowPoker[0].getOrderValue()) {
                    console.log("在Top家");
                    if (this.firstThrowPokerSeat == 3) {
                        console.log("在自己家，无效丢牌3");
                        return;
                    }
                    else {
                        this.topCamp = true;
                    }
                }
            }
            for (var i = 0; i < this.pokersLeft.length; i++) {
                if (Math.abs(this.pokersLeft[i].getId() - this.checkThrowPoker[0].getId()) == 4
                    && this.pokersLeft[i].getOrderValue() == this.checkThrowPoker[0].getOrderValue()) {
                    console.log("在Left家");
                    if (this.firstThrowPokerSeat == 4) {
                        console.log("在自己家，无效丢牌4");
                        return;
                    }
                    else {
                        this.leftCamp = true;
                    }
                }
            }
        }
        //【有问题啊，this.playerCamp:false,this.rightCampfalse,this.topCampfalse,this.leftCamptrue】没找到
        console.log("后来：this.playerCamp:" + this.playerCamp + ",this.rightCamp" + this.rightCamp + ",this.topCamp" + this.topCamp + ",this.leftCamp" + this.leftCamp);
        //交换牌并显示同阵营头像
        var indexTime = 60;
        var startExchangeText;
        var index = 1;
        var setAlpha = 1;
        this.createTimer(50, indexTime, function () {
            if (_this.getChildByName("startExchangeText") != null) {
                _this.removeChild(_this.getChildByName("startExchangeText"));
            }
            startExchangeText = new ShowText("交换牌中...", 660, 500, 100, setAlpha);
            startExchangeText.name = "startExchangeText";
            _this.addChild(startExchangeText);
            setAlpha -= 0.05;
            index++;
        }, function () {
            console.log("等待交换牌时间结束");
            _this.exchangePoker();
        });
    };
    /**
     * 同阵营玩家交换牌并显示同阵营头像，其他玩家归为同一阵营并返回丢出牌
     * 更新牌
     * 所有丢出的牌清理
     */
    StandaloneModel.prototype.exchangePoker = function () {
        //交换牌不再是初进游戏
        this.isFirst = false;
        if (this.playerCamp == true && this.rightCamp == true) {
            this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.RightThrowPoker);
            this.pokersRight = PokerUtils.addExchangePoker(this.pokersRight, this.PlayerThrowPoker);
            //其他玩家归为同一阵营并返回丢出牌
            this.pokersTop = PokerUtils.addExchangePoker(this.pokersTop, this.TopThrowPoker);
            this.pokersLeft = PokerUtils.addExchangePoker(this.pokersLeft, this.LeftThrowPoker);
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 2;
            this.rightCampNumber = 1;
            this.topCampNumber = 4;
            this.leftCampNumber = 3;
            //this.show
        }
        if (this.playerCamp == true && this.topCamp == true) {
            this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.TopThrowPoker);
            this.pokersTop = PokerUtils.addExchangePoker(this.pokersTop, this.PlayerThrowPoker);
            //其他玩家归为同一阵营并返回丢出牌
            this.pokersRight = PokerUtils.addExchangePoker(this.pokersRight, this.RightThrowPoker);
            this.pokersLeft = PokerUtils.addExchangePoker(this.pokersLeft, this.LeftThrowPoker);
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 3;
            this.rightCampNumber = 4;
            this.topCampNumber = 1;
            this.leftCampNumber = 2;
        }
        if (this.playerCamp == true && this.leftCamp == true) {
            this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.LeftThrowPoker);
            this.pokersLeft = PokerUtils.addExchangePoker(this.pokersLeft, this.PlayerThrowPoker);
            //其他玩家归为同一阵营并返回丢出牌
            this.pokersRight = PokerUtils.addExchangePoker(this.pokersRight, this.RightThrowPoker);
            this.pokersTop = PokerUtils.addExchangePoker(this.pokersTop, this.TopThrowPoker);
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 4;
            this.rightCampNumber = 3;
            this.topCampNumber = 2;
            this.leftCampNumber = 1;
        }
        //如果player为false
        if (this.playerCamp == false && this.rightCamp == false) {
            this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
            this.pokersRight = PokerUtils.addExchangePoker(this.pokersRight, this.RightThrowPoker);
            //其他玩家归为同一阵营并返回丢出牌
            this.pokersTop = PokerUtils.addExchangePoker(this.pokersTop, this.LeftThrowPoker);
            this.pokersLeft = PokerUtils.addExchangePoker(this.pokersLeft, this.TopThrowPoker);
            //设置显示阵营符号
            this.playerCamp = true;
            this.rightCamp = true;
            this.topCamp = false;
            this.leftCamp = false;
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 2;
            this.rightCampNumber = 1;
            this.topCampNumber = 4;
            this.leftCampNumber = 3;
            //this.show
        }
        if (this.playerCamp == false && this.topCamp == false) {
            this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
            this.pokersTop = PokerUtils.addExchangePoker(this.pokersTop, this.TopThrowPoker);
            //其他玩家归为同一阵营并返回丢出牌
            this.pokersRight = PokerUtils.addExchangePoker(this.pokersRight, this.LeftThrowPoker);
            this.pokersLeft = PokerUtils.addExchangePoker(this.pokersLeft, this.RightThrowPoker);
            //设置显示阵营符号
            this.playerCamp = true;
            this.rightCamp = false;
            this.topCamp = true;
            this.leftCamp = false;
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 3;
            this.rightCampNumber = 4;
            this.topCampNumber = 1;
            this.leftCampNumber = 2;
        }
        if (this.playerCamp == false && this.leftCamp == false) {
            this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
            this.pokersLeft = PokerUtils.addExchangePoker(this.pokersLeft, this.LeftThrowPoker);
            //其他玩家归为同一阵营并返回丢出牌
            this.pokersRight = PokerUtils.addExchangePoker(this.pokersRight, this.TopThrowPoker);
            this.pokersTop = PokerUtils.addExchangePoker(this.pokersTop, this.RightThrowPoker);
            //设置显示阵营符号
            this.playerCamp = true;
            this.rightCamp = false;
            this.topCamp = false;
            this.leftCamp = true;
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 4;
            this.rightCampNumber = 3;
            this.topCampNumber = 2;
            this.leftCampNumber = 1;
        }
        //清理所有丢的牌
        this.clearAllThrowPoker();
        //刷新所有玩家牌
        this.refreshAllPoker();
    };
    /**
     * 刷新所有玩家牌
     */
    StandaloneModel.prototype.refreshAllPoker = function () {
        //this.clearPokers();
        this.showPokerVertival(this.mySeat);
        if (this.isDevelop) {
            this.showPokerVertival(this.rightSeat);
            this.showPokerVertival(this.topSeat);
            this.showPokerVertival(this.leftSeat);
        }
        //开始给牌,具有优先给牌权的玩家，默认给玩家【等待优先给牌权玩家】
        if (this.firstOutPokerSeat == 1) {
            this.playedSeat = 1;
            this.outPokersSeat = 1;
            this.showButtons(RoomManager.ButtonsDiscard);
        }
        else if (this.firstOutPokerSeat == 2) {
            //this.playedPoker = [];
            this.playedSeat = 2;
            this.outPokersSeat = 2;
            this.autoOutPokers();
        }
        else if (this.firstOutPokerSeat == 3) {
            this.playedSeat = 3;
            this.outPokersSeat = 3;
            this.autoOutPokers();
        }
        else if (this.firstOutPokerSeat == 4) {
            this.playedSeat = 4;
            this.outPokersSeat = 4;
            this.autoOutPokers();
        }
    };
    /**
    * 监听点击“出牌”按钮的动作
    * 点击出牌后：
    *  1.从自己牌的数组中移除已选择的牌
    *  2.刷新自己的牌
    *  3.刷新出牌区
    *  4.清空已选择牌的数组
    */
    StandaloneModel.prototype.buttonChuPai = function (evt) {
        //this.pokerSelectArray = PokerUtils.sortDescPokers(this.pokerSelectArray);//避免右手握牌影响提示出牌
        console.log("开始出牌");
        if (this.playedSeat != 1) {
            if (!PokerCompareUtils.comparePokers(this.pokerSelectArray, this.playedPoker)) {
                //console.log("没有上家的牌大,上家座位号：", this.playedSeat);
                return;
            }
        }
        if (PokerTypeUtils.getType(this.pokerSelectArray) == null && PokerTypeUtils.getSpecialType(this.pokerSelectArray) == null) {
            console.log("你这选的是啥呀");
            return;
        }
        this.pokersPlayer = PokerUtils.removePokers(this.pokersPlayer, this.pokerSelectArray);
        console.log("已出牌，剩余牌数", this.pokersPlayer.length);
        this.imBuYao = false;
        console.log("imBuYao:" + this.imBuYao);
        //刷新自己的牌
        this.showPokerVertival(this.mySeat);
        //刷新自己牌的数目
        this.showCount(1, this.pokersPlayer.length);
        //刷新出牌区
        this.showPokerPlayer();
        //当前一手牌，要比对的
        this.playedPoker = PokerUtils.sortDescPokers(this.pokerSelectArray);
        //当前要比对的座位号
        this.playedSeat = 1;
        //清空已选择的牌数组
        this.pokerSelectArray = new Array();
        this.clearButtons();
        if (this.gameOver())
            return;
        if (this.checkIsNullPoker(this.mySeat)) {
            this.currentPokerNull = this.mySeat;
            //如果自己牌给完，出现加速和接管选项
            this.myTool();
        }
        else {
            //开始自动出牌
            //该二号座位的AI出牌了
            this.outPokersSeat = 2;
            //this.autoOutPokers();
            this.checkPokerNull();
        }
        console.log("this.currentPokerNull为：" + this.currentPokerNull);
    };
    /**
     * 要不起，让别人给牌
     */
    StandaloneModel.prototype.buttonBuYao = function (evt) {
        this.imBuYao = true; //我不要
        this.clearButtons();
        this.showTextTip(this.outPokersSeat);
        //this.pokerSelectArray = new Array<Poker>();//点击了牌但不要，直接还原
        this.outPokersSeat = 2;
        this.checkPokerNull();
    };
    /**
     * 出牌提示
     * 如果不知道怎么出牌，可根据提示给牌
     */
    StandaloneModel.prototype.buttonTiShi = function (evt) {
        //this.pokerSelectArray = PokerUtils.sortDescPokers(this.pokerSelectArray);//避免右手握牌影响提示出牌
        this.pokerSelectArray = PokerSeekUtils.autoPrompt(this.pokersPlayer, this.mySeat, this.playerCampNumber, this.playedPoker, this.playedSeat);
        console.log("this.pokerSelectArray自动提示的长度：" + this.pokerSelectArray.length);
        //let p = RES.getRes("layout_json").poker;
        //let y = p.pokerUpMove;
        if (this.pokerSelectArray.length != 0) {
            for (var i = 0; i < this.pokerSelectArray.length; i++) {
                console.log("自定义起牌数为" + (i + 1) + "的id和值:" + this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                //这是根据每张扑克的name属性获得对象，对牌的正序或者倒序没有影响【给牌时切换握牌方式获取不到对应牌的对象】
                var draggedObject = StandaloneModel.mypoker.getChildByName(this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                console.log("测试是否获得对象,y值为:" + draggedObject.y);
                draggedObject.y = 0;
                console.log("再次测试是否获得对象,y值为:" + draggedObject.y);
            }
        }
    };
    /**
     * [接替好友出牌]
     * 监听点击“出牌”按钮的动作
     * 点击出牌后：
     *  1.从自己牌的数组中移除已选择的牌
     *  2.刷新自己的牌
     *  3.刷新出牌区
     *  4.清空已选择牌的数组
     */
    StandaloneModel.prototype.buttonTiPai = function (evt) {
        //this.pokerSelectArray = PokerUtils.sortDescPokers(this.pokerSelectArray);//避免右手握牌影响提示出牌
        console.log("开始接替出牌");
        if (this.playedSeat != this.playerCampNumber) {
            if (!PokerCompareUtils.comparePokers(this.pokerSelectArray, this.playedPoker)) {
                //console.log("没有上家的牌大,上家座位号：", this.playedSeat);
                return;
            }
        }
        if (PokerTypeUtils.getType(this.pokerSelectArray) == null && PokerTypeUtils.getSpecialType(this.pokerSelectArray) == null) {
            console.log("你这选的是啥呀");
            return;
        }
        for (var i = 0; i < this.pokerSelectArray.length; i++) {
            console.log("this.pokerSelectArray:" + this.pokerSelectArray[i].getId());
        }
        console.log("this.pokerSelectArray.length:" + this.pokerSelectArray.length);
        //接替出牌符合条件
        if (this.isTakeOverRightPoker == true) {
            console.log("右为true");
            this.RightOutPokers = this.pokerSelectArray;
            console.log("this.LeftOutPokers" + this.RightOutPokers.length);
            this.showOtherOutPoker(this.rightSeat); //显示2号位置出的牌
            this.pokersRight = PokerUtils.sortDescPokers(PokerUtils.removePokers(this.pokersRight, this.RightOutPokers));
            this.takeoverFriendPokers(this.playerCampNumber); //刷新玩家接替别人出的牌
            if (this.isDevelop)
                this.showPokerVertival(this.rightSeat); //刷新显示的牌
            this.playedPoker = this.RightOutPokers;
            this.playedSeat = this.rightSeat;
            this.showCount(this.rightSeat, this.pokersRight.length);
            if (this.gameOver())
                return;
            this.outPokersSeat = 3;
            this.checkPokerNull();
        }
        if (this.isTakeOverTopPoker == true) {
            console.log("上为true");
            this.TopOutPokers = this.pokerSelectArray;
            console.log("this.LeftOutPokers" + this.TopOutPokers.length);
            this.showOtherOutPoker(this.topSeat); //显示3号位置出的牌
            this.pokersTop = PokerUtils.sortDescPokers(PokerUtils.removePokers(this.pokersTop, this.TopOutPokers));
            this.takeoverFriendPokers(this.playerCampNumber); //刷新玩家接替别人出的牌
            if (this.isDevelop)
                this.showPokerVertival(this.topSeat);
            this.playedPoker = this.TopOutPokers;
            this.playedSeat = this.topSeat;
            this.showCount(this.topSeat, this.pokersTop.length);
            if (this.gameOver())
                return;
            this.outPokersSeat = 4;
            this.checkPokerNull();
        }
        if (this.isTakeOverLeftPoker == true) {
            console.log("左为true");
            this.LeftOutPokers = this.pokerSelectArray;
            console.log("this.LeftOutPokers" + this.LeftOutPokers.length);
            this.showOtherOutPoker(this.leftSeat); //显示4号位置出的牌
            this.pokersLeft = PokerUtils.sortDescPokers(PokerUtils.removePokers(this.pokersLeft, this.LeftOutPokers));
            this.takeoverFriendPokers(this.playerCampNumber); //刷新玩家接替别人出的牌
            if (this.isDevelop)
                this.showPokerVertival(this.leftSeat);
            this.playedPoker = this.LeftOutPokers;
            this.playedSeat = this.leftSeat;
            this.showCount(this.leftSeat, this.pokersLeft.length);
            if (this.gameOver())
                return;
            this.outPokersSeat = 1;
            this.checkPokerNull();
        }
        this.pokerSelectArray = new Array();
        this.clearButtons();
    };
    /**
     * [接替好友出牌提示]
     * 出牌提示
     * 如果不知道怎么出牌，可根据提示给牌
     */
    StandaloneModel.prototype.buttonTiTiShi = function (evt) {
        var friendsPokers = Array();
        if (this.isTakeOverRightPoker == true) {
            friendsPokers = this.pokersRight;
        }
        if (this.isTakeOverTopPoker == true) {
            friendsPokers = this.pokersTop;
        }
        if (this.isTakeOverLeftPoker == true) {
            friendsPokers = this.pokersLeft;
        }
        this.pokerSelectArray = PokerSeekUtils.autoPrompt(friendsPokers, this.playerCampNumber, -1, this.playedPoker, this.playedSeat);
        console.log("this.pokerSelectArray自动提示的长度：" + this.pokerSelectArray.length);
        if (this.pokerSelectArray.length != 0) {
            for (var i = 0; i < this.pokerSelectArray.length; i++) {
                console.log("自定义起牌数为" + (i + 1) + "的id和值:" + this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                //这是根据每张扑克的name属性获得对象，对牌的正序或者倒序没有影响【给牌时切换握牌方式获取不到对应牌的对象】
                var draggedObject = StandaloneModel.mypoker.getChildByName(this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                console.log("测试是否获得对象,y值为:" + draggedObject.y);
                draggedObject.y = 0;
                console.log("再次测试是否获得对象,y值为:" + draggedObject.y);
            }
        }
    };
    /**
     * [接替好友不要牌]
     * 要不起，让别人给牌
     */
    StandaloneModel.prototype.buttonTiBuYao = function (evt) {
        console.log("接替不要牌");
        this.showTextTip(this.outPokersSeat);
        if (this.isTakeOverRightPoker == true) {
            this.RightOutPokers = new Array();
            this.outPokersSeat = 3;
        }
        if (this.isTakeOverTopPoker == true) {
            this.TopOutPokers = new Array();
            this.outPokersSeat = 4;
        }
        if (this.isTakeOverLeftPoker == true) {
            this.LeftOutPokers = new Array();
            this.outPokersSeat = 1;
        }
        this.checkPokerNull();
        this.clearButtons();
    };
    /**
     * 自动出牌的时间控制
     * 当轮到玩家出牌时，退出自动出牌，
     * 当轮到系统出牌时，随机延迟一段时间，同时倒计时15秒（相当与人的思考时间）
     */
    StandaloneModel.prototype.autoOutPokers = function () {
        var _this = this;
        if (this.gameOver())
            return;
        //if (this.outPokersSeat == 1) {//玩家出牌，不采用自动出牌模式
        //return;
        //}
        console.log("测试进程");
        this.clearPokerShow(this.outPokersSeat);
        //随机等待0到5秒
        var index = Math.floor(Math.random() * 5) + 1;
        var indexTime = -1;
        if (this.waitTimeindex != 5) {
            indexTime = this.waitTimeindex;
        }
        else {
            indexTime = index;
        }
        var time = 15;
        this.createTimer(this.waitTimefrequency, indexTime, function () {
            _this.showOPTimer(time--);
        }, function () {
            _this.clearOPTimer();
            _this.doAutoOutPokers();
        });
    };
    /**
     * 自动出牌执行逻辑及控制
     */
    StandaloneModel.prototype.doAutoOutPokers = function () {
        if (this.outPokersSeat == 2) {
            this.RightOutPokers = PokerSeekUtils.autoPlay(this.pokersRight, this.rightSeat, this.rightCampNumber, this.playedPoker, this.playedSeat);
            if (this.RightOutPokers == null || this.RightOutPokers.length == 0) {
                this.showTextTip(this.outPokersSeat);
                this.RightOutPokers = new Array();
            }
            else {
                this.showOtherOutPoker(this.rightSeat);
                this.pokersRight = PokerUtils.sortDescPokers(PokerUtils.removePokers(this.pokersRight, this.RightOutPokers));
                if (this.isDevelop)
                    this.showPokerVertival(this.rightSeat);
                this.playedPoker = this.RightOutPokers;
                this.playedSeat = this.rightSeat;
                this.showCount(this.rightSeat, this.pokersRight.length);
                if (this.gameOver())
                    return;
                //如果牌给完了，判断自己牌的长度是否为0
                if (this.checkIsNullPoker(this.rightSeat))
                    this.currentPokerNull = this.rightSeat;
                console.log("this.currentPokerNull为：" + this.currentPokerNull);
            }
            this.outPokersSeat = 3;
            this.checkPokerNull();
        }
        else if (this.outPokersSeat == 3) {
            this.TopOutPokers = PokerSeekUtils.autoPlay(this.pokersTop, this.topSeat, this.topCampNumber, this.playedPoker, this.playedSeat);
            if (this.TopOutPokers == null || this.TopOutPokers.length == 0) {
                this.showTextTip(this.outPokersSeat);
                this.TopOutPokers = new Array();
            }
            else {
                this.showOtherOutPoker(this.topSeat);
                this.pokersTop = PokerUtils.sortDescPokers(PokerUtils.removePokers(this.pokersTop, this.TopOutPokers));
                if (this.isDevelop)
                    this.showPokerVertival(this.topSeat);
                this.playedPoker = this.TopOutPokers;
                this.playedSeat = this.topSeat;
                this.showCount(this.topSeat, this.pokersTop.length);
                if (this.gameOver())
                    return;
                if (this.checkIsNullPoker(this.topSeat))
                    this.currentPokerNull = this.topSeat;
                console.log("this.currentPokerNull为：" + this.currentPokerNull);
            }
            this.outPokersSeat = 4;
            this.checkPokerNull();
        }
        else if (this.outPokersSeat == 4) {
            this.LeftOutPokers = PokerSeekUtils.autoPlay(this.pokersLeft, this.leftSeat, this.leftCampNumber, this.playedPoker, this.playedSeat);
            if (this.LeftOutPokers == null || this.LeftOutPokers.length == 0) {
                this.showTextTip(this.outPokersSeat);
                this.LeftOutPokers = new Array();
            }
            else {
                this.showOtherOutPoker(this.leftSeat);
                this.pokersLeft = PokerUtils.sortDescPokers(PokerUtils.removePokers(this.pokersLeft, this.LeftOutPokers));
                if (this.isDevelop)
                    this.showPokerVertival(this.leftSeat);
                this.playedPoker = this.LeftOutPokers;
                this.playedSeat = this.leftSeat;
                this.showCount(this.leftSeat, this.pokersLeft.length);
                if (this.gameOver())
                    return;
                if (this.checkIsNullPoker(this.leftSeat))
                    this.currentPokerNull = this.leftSeat;
                console.log("this.currentPokerNull为：" + this.currentPokerNull);
            }
            //
            this.outPokersSeat = 1;
            this.checkPokerNull();
        }
    };
    /**
     * 如果出完牌后发现自己的牌给完了，判断是否有人要牌，轮转一圈后没人要则己方玩家自动出牌
     */
    StandaloneModel.prototype.checkIsNullPoker = function (seat) {
        if (seat == 1) {
            if (this.pokersPlayer.length == 0) {
                console.log("this.currentPokerNull为1");
                this.imBuYao = true;
                return true;
            }
        }
        else if (seat == 2) {
            if (this.pokersRight.length == 0) {
                console.log("this.currentPokerNull为2");
                this.RightOutPokers = new Array();
                return true;
            }
        }
        else if (seat == 3) {
            if (this.pokersTop.length == 0) {
                console.log("this.currentPokerNull为3");
                this.TopOutPokers = new Array();
                return true;
            }
        }
        else if (seat == 4) {
            if (this.pokersLeft.length == 0) {
                console.log("this.currentPokerNull为4");
                this.LeftOutPokers = new Array();
                return true;
            }
        }
        return false;
    };
    /**
     * 如果有一位玩家把牌出完，判断是否存在友方玩家接替的情况
     */
    StandaloneModel.prototype.friendGainOutPoker = function () {
        console.log("this.imBuYao && this.RightOutPokers == null && this.LeftOutPokers == null && this.TopOutPokers == null:" + this.imBuYao + "||" + this.RightOutPokers.length + "||" + this.LeftOutPokers.length + "||" + this.TopOutPokers.length);
        if (this.currentPokerNull == this.mySeat) {
            //this.clearPokerPlay();
            console.log("如果1号位牌出完");
            //如果另外三个人出牌都为空
            if (this.RightOutPokers.length == 0 && this.LeftOutPokers.length == 0 && this.TopOutPokers.length == 0) {
                console.log("~~~~1");
                this.playedPoker = new Array();
                //this.playedSeat = this.rightSeat;
                this.outPokersSeat = this.playerCampNumber;
            }
            else {
                this.outPokersSeat = this.rightSeat;
            }
        }
        else if (this.currentPokerNull == this.rightSeat) {
            //this.clearPokerShow(this.rightSeat);
            console.log("如果2号位牌出完");
            if (this.imBuYao == true && this.LeftOutPokers.length == 0 && this.TopOutPokers.length == 0) {
                console.log("~~~~2");
                this.playedPoker = new Array();
                this.outPokersSeat = this.rightCampNumber;
            }
            else {
                this.outPokersSeat = this.topSeat;
            }
        }
        else if (this.currentPokerNull == this.topSeat) {
            //this.clearPokerShow(this.topSeat);
            console.log("如果3号位牌出完");
            if (this.imBuYao == true && this.LeftOutPokers.length == 0 && this.RightOutPokers.length == 0) {
                console.log("~~~~3");
                this.playedPoker = new Array();
                this.outPokersSeat = this.topCampNumber;
            }
            else {
                this.outPokersSeat = this.leftSeat;
            }
        }
        else if (this.currentPokerNull == this.leftSeat) {
            //this.clearPokerShow(this.leftSeat);
            console.log("如果4号位牌出完");
            if (this.imBuYao == true && this.LeftOutPokers.length == 0 && this.TopOutPokers.length == 0) {
                console.log("~~~~4");
                this.playedPoker = new Array();
                this.outPokersSeat = this.leftCampNumber;
            }
            else {
                this.outPokersSeat = this.mySeat;
            }
        }
        this.checkOutPoker();
    };
    /**
     * 检测所有玩家牌空情况，牌出完的玩家直接略过
     */
    StandaloneModel.prototype.checkPokerNull = function () {
        console.log("checkPokerNull()");
        if (this.outPokersSeat == 1) {
            if (this.pokersPlayer.length == 0) {
                this.clearPokerShow(this.mySeat);
                if (this.currentPokerNull == 1) {
                    this.friendGainOutPoker();
                }
                else {
                    console.log("一看this.currentPokerNull不为1");
                    this.outPokersSeat = 2;
                    this.checkPokerNull();
                }
            }
            else {
                this.checkOutPoker();
            }
        }
        else if (this.outPokersSeat == 2) {
            if (this.pokersRight.length == 0) {
                this.clearPokerShow(this.rightSeat);
                if (this.currentPokerNull == 2) {
                    this.friendGainOutPoker();
                }
                else {
                    console.log("一看this.currentPokerNull不为2");
                    this.outPokersSeat = 3;
                    this.checkPokerNull();
                }
            }
            else {
                this.checkOutPoker();
            }
        }
        else if (this.outPokersSeat == 3) {
            if (this.pokersTop.length == 0) {
                this.clearPokerShow(this.topSeat);
                if (this.currentPokerNull == 3) {
                    this.friendGainOutPoker();
                }
                else {
                    console.log("一看this.currentPokerNull不为3");
                    this.outPokersSeat = 4;
                    this.checkPokerNull();
                }
            }
            else {
                this.checkOutPoker();
            }
        }
        else if (this.outPokersSeat == 4) {
            if (this.pokersLeft.length == 0) {
                this.clearPokerShow(this.leftSeat);
                if (this.currentPokerNull == 4) {
                    this.friendGainOutPoker();
                }
                else {
                    console.log("一看this.currentPokerNull不为4");
                    this.outPokersSeat = 1;
                    this.checkPokerNull();
                }
            }
            else {
                this.checkOutPoker();
            }
        }
    };
    /**
    * 检测该谁出牌
    * 如果存在接替出牌情况，先清理被接替玩家的文字或者出牌信息
    * 再展示出牌按钮
    */
    StandaloneModel.prototype.checkOutPoker = function () {
        if (this.outPokersSeat == 1) {
            console.log("执行玩家函数");
            this.clearPokerShow(this.mySeat);
            this.showButtons(RoomManager.ButtonsDiscard);
        }
        else {
            console.log("执行出牌函数:" + this.outPokersSeat);
            if (this.isTakeOverRightPoker == false && this.isTakeOverTopPoker == false && this.isTakeOverLeftPoker == false) {
                this.autoOutPokers();
            }
            else {
                if (this.outPokersSeat == 2) {
                    if (this.isTakeOverRightPoker == true) {
                        console.log("222222222");
                        this.clearPokerShow(this.rightSeat);
                        this.showButtons(RoomManager.ButtonsTakeOverOutPokers);
                    }
                    else {
                        this.autoOutPokers();
                    }
                }
                if (this.outPokersSeat == 3) {
                    if (this.isTakeOverTopPoker == true) {
                        console.log("3333333333");
                        this.clearPokerShow(this.topSeat);
                        this.showButtons(RoomManager.ButtonsTakeOverOutPokers);
                    }
                    else {
                        this.autoOutPokers();
                    }
                }
                if (this.outPokersSeat == 4) {
                    if (this.isTakeOverLeftPoker == true) {
                        console.log("44444444");
                        this.clearPokerShow(this.leftSeat);
                        this.showButtons(RoomManager.ButtonsTakeOverOutPokers);
                    }
                    else {
                        this.autoOutPokers();
                    }
                }
            }
        }
    };
    /**
     * 判断游戏是否结束【自动出牌压飞机带对子有问题】
     */
    StandaloneModel.prototype.gameOver = function () {
        //记住最先把牌给完的人
        if (this.pokersPlayer.length == 0 && this.pokersRight.length != 0 && this.pokersTop.length != 0 && this.pokersLeft.length != 0) {
            this.firstOutPokerSeat = this.mySeat;
            //console.log("outoutout==1");
            //this.rememberFirst = true;
        }
        if (this.pokersRight.length == 0 && this.pokersPlayer.length != 0 && this.pokersTop.length != 0 && this.pokersLeft.length != 0) {
            this.firstOutPokerSeat = this.rightSeat;
            //console.log("outoutout==2");
            //this.rememberFirst = true;
        }
        if (this.pokersTop.length == 0 && this.pokersPlayer.length != 0 && this.pokersRight.length != 0 && this.pokersLeft.length != 0) {
            this.firstOutPokerSeat = this.topSeat;
            //console.log("outoutout==3");
            //this.rememberFirst = true;
        }
        if (this.pokersLeft.length == 0 && this.pokersPlayer.length != 0 && this.pokersTop.length != 0 && this.pokersRight.length != 0) {
            this.firstOutPokerSeat = this.leftSeat;
            //console.log("outoutout==4");
            //this.rememberFirst = true;
        }
        //console.log("下一局优先出牌人出现："+this.firstOutPokerSeat);
        //
        console.log("gameover:" + this.pokersPlayer.length + "&& " + this.pokersRight.length + "&&" + this.pokersTop.length + "&&" + this.pokersLeft.length);
        if (this.playerCamp == true && this.rightCamp == true) {
            if (this.pokersPlayer.length == 0 && this.pokersRight.length == 0 && (this.pokersTop.length != 0 || this.pokersLeft.length != 0)) {
                this.showResult(true);
                return true;
            }
            if (this.pokersTop.length == 0 && this.pokersLeft.length == 0 && (this.pokersPlayer.length != 0 || this.pokersRight.length != 0)) {
                this.showResult(false);
                return true;
            }
        }
        if (this.playerCamp == true && this.topCamp == true) {
            if (this.pokersPlayer.length == 0 && this.pokersTop.length == 0 && (this.pokersRight.length != 0 || this.pokersLeft.length != 0)) {
                this.showResult(true);
                return true;
            }
            if (this.pokersRight.length == 0 && this.pokersLeft.length == 0 && (this.pokersPlayer.length != 0 || this.pokersTop.length != 0)) {
                this.showResult(false);
                return true;
            }
        }
        if (this.playerCamp == true && this.leftCamp == true) {
            if (this.pokersPlayer.length == 0 && this.pokersLeft.length == 0 && (this.pokersTop.length != 0 || this.pokersRight.length != 0)) {
                this.showResult(true);
                return true;
            }
            if (this.pokersTop.length == 0 && this.pokersRight.length == 0 && (this.pokersPlayer.length != 0 || this.pokersLeft.length != 0)) {
                this.showResult(false);
                return true;
            }
        }
        return;
    };
    /**
     * 如果游戏结束显示游戏结果
     */
    StandaloneModel.prototype.showResult = function (isVictory) {
        this.clearGameResultShow();
        var result = new GameResultContainer(isVictory);
        result.name = "result";
        this.addChild(result);
        this.showButtons(RoomManager.ButtonsGameOver);
    };
    /**
     * 清除游戏结果显示遮罩层
     */
    StandaloneModel.prototype.clearGameResultShow = function () {
        if (this.getChildByName("result") != null) {
            this.removeChild(this.getChildByName("result"));
        }
    };
    /**
     * 展示其他玩家出的牌
     */
    StandaloneModel.prototype.showOtherOutPoker = function (seat) {
        this.clearPokerShow(seat);
        if (seat == 2) {
            this.rightOutPokers = new PokerOthersContainer(this.RightOutPokers, 2);
            this.rightOutPokers.name = "rightOutPokers";
            this.addChild(this.rightOutPokers);
        }
        else if (seat == 3) {
            this.topOutPokers = new PokerOthersContainer(this.TopOutPokers, 3);
            this.topOutPokers.name = "topOutPokers";
            this.addChild(this.topOutPokers);
        }
        else if (seat == 4) {
            this.leftOutPokers = new PokerOthersContainer(this.LeftOutPokers, 4);
            this.leftOutPokers.name = "leftOutPokers";
            this.addChild(this.leftOutPokers);
        }
    };
    /**
     * 清理玩家出牌展示区和不出牌提示区
     * seat 玩家座位号
     */
    StandaloneModel.prototype.clearPokerShow = function (seat) {
        if (seat == 1) {
            if (this.getChildByName("pokerPlayer") != null) {
                this.removeChild(this.getChildByName("pokerPlayer"));
            }
            if (this.getChildByName("textPlayer") != null) {
                this.removeChild(this.getChildByName("textPlayer"));
            }
        }
        if (seat == 2) {
            if (this.getChildByName("rightOutPokers") != null) {
                this.removeChild(this.getChildByName("rightOutPokers"));
            }
            if (this.getChildByName("textRight") != null) {
                this.removeChild(this.getChildByName("textRight"));
            }
        }
        if (seat == 3) {
            if (this.getChildByName("topOutPokers") != null) {
                this.removeChild(this.getChildByName("topOutPokers"));
            }
            if (this.getChildByName("textTop") != null) {
                this.removeChild(this.getChildByName("textTop"));
            }
        }
        if (seat == 4) {
            if (this.getChildByName("leftOutPokers") != null) {
                this.removeChild(this.getChildByName("leftOutPokers"));
            }
            if (this.getChildByName("textLeft") != null) {
                this.removeChild(this.getChildByName("textLeft"));
            }
        }
    };
    /**
     *  展示其他玩家不出牌时的文字提示区
     *  seat  玩家座位号
     */
    StandaloneModel.prototype.showTextTip = function (seat) {
        this.clearPokerShow(seat);
        if (seat == 1) {
            this.textPlayer = new TextOtherContainer(PokerUtils.getRandomTextTip(), 1);
            this.textPlayer.name = "textPlayer";
            this.addChild(this.textPlayer);
        }
        else if (seat == 2) {
            this.textRight = new TextOtherContainer(PokerUtils.getRandomTextTip(), 2);
            this.textRight.name = "textRight";
            this.addChild(this.textRight);
        }
        else if (seat == 3) {
            this.textTop = new TextOtherContainer(PokerUtils.getRandomTextTip(), 3);
            this.textTop.name = "textTop";
            this.addChild(this.textTop);
        }
        else if (seat == 4) {
            this.textLeft = new TextOtherContainer(PokerUtils.getRandomTextTip(), 4);
            this.textLeft.name = "textLeft";
            this.addChild(this.textLeft);
        }
    };
    /**
     * 显示其他玩家的明牌
     * seat 玩家座位号
     */
    StandaloneModel.prototype.showPokerVertival = function (seat) {
        this.clearPokerVertical(seat);
        if (seat == 1) {
            StandaloneModel.mypoker = new PokerContainer(this, this.pokersPlayer, StandaloneModel.isLeftHand);
            StandaloneModel.mypoker.name = "mypoker";
            this.addChild(StandaloneModel.mypoker);
        }
        else if (seat == 2) {
            this.showRight = new PokerVerticalContainer(this.pokersRight, 2);
            this.showRight.name = "showRight";
            this.addChild(this.showRight);
        }
        else if (seat == 3) {
            this.showTop = new PokerVerticalContainer(this.pokersTop, 3);
            this.showTop.name = "showTop";
            this.addChild(this.showTop);
        }
        else if (seat == 4) {
            this.showLeft = new PokerVerticalContainer(this.pokersLeft, 4);
            this.showLeft.name = "showLeft";
            this.addChild(this.showLeft);
        }
    };
    /**
     * 接管并显示队友的牌
     */
    StandaloneModel.prototype.takeoverFriendPokers = function (seat) {
        this.clearPokerVertical(this.mySeat);
        var friendsPoker = Array();
        if (seat == 2) {
            this.isTakeOverRightPoker = true;
            friendsPoker = this.pokersRight;
        }
        else if (seat == 3) {
            this.isTakeOverTopPoker = true;
            friendsPoker = this.pokersTop;
        }
        else if (seat == 4) {
            this.isTakeOverLeftPoker = true;
            friendsPoker = this.pokersLeft;
        }
        StandaloneModel.mypoker = new PokerContainer(this, friendsPoker, StandaloneModel.isLeftHand);
        StandaloneModel.mypoker.name = "mypoker";
        this.addChild(StandaloneModel.mypoker);
    };
    /**
     * 清理其他玩家的明牌
     * 清理玩家不出牌提示区
     * seat  玩家座位号
     */
    StandaloneModel.prototype.clearPokerVertical = function (seat) {
        if (seat == 1) {
            if (this.getChildByName("mypoker") != null) {
                this.removeChild(this.getChildByName("mypoker"));
            }
        }
        if (seat == 2) {
            if (this.getChildByName("showRight") != null) {
                this.removeChild(this.getChildByName("showRight"));
            }
        }
        if (seat == 3) {
            if (this.getChildByName("showTop") != null) {
                this.removeChild(this.getChildByName("showTop"));
            }
        }
        if (seat == 4) {
            if (this.getChildByName("showLeft") != null) {
                this.removeChild(this.getChildByName("showLeft"));
            }
        }
    };
    /**
     * 清理玩家出牌
     */
    StandaloneModel.prototype.clearPokerPlay = function () {
        if (this.getChildByName("pokerPlayer") != null) {
            this.removeChild(this.getChildByName("pokerPlayer"));
        }
    };
    /**
    * 显示玩家出的牌
    * seat 座位号
    */
    StandaloneModel.prototype.showPokerPlayer = function () {
        //this.clearPokerPlay();
        this.clearPokerShow(this.mySeat);
        this.playerOutPokers = new PokerPlayerContainer(PokerUtils.sortDescPokers(this.pokerSelectArray));
        this.playerOutPokers.name = "pokerPlayer";
        this.addChild(this.playerOutPokers);
    };
    /**
    * 显示玩家丢的牌
    * seat 座位号
    */
    StandaloneModel.prototype.showThrowPoker = function (seat, isShow) {
        //this.clearAllThrowPoker();
        if (seat == 1) {
            //this.clearSingleThrowPoker(1);
            this.playerThrowPoker = new PokerThrowContainer(seat, this.PlayerThrowPoker, isShow);
            this.playerThrowPoker.name = "playerThrowPoker";
            this.addChild(this.playerThrowPoker);
        }
        else if (seat == 2) {
            //this.clearSingleThrowPoker(2);
            this.rightThrowPoker = new PokerThrowContainer(seat, this.RightThrowPoker, isShow);
            this.rightThrowPoker.name = "rightThrowPoker";
            this.addChild(this.rightThrowPoker);
        }
        else if (seat == 3) {
            //this.clearSingleThrowPoker(3);
            this.topThrowPoker = new PokerThrowContainer(seat, this.TopThrowPoker, isShow);
            this.topThrowPoker.name = "topThrowPoker";
            this.addChild(this.topThrowPoker);
        }
        else if (seat == 4) {
            //this.clearSingleThrowPoker(4);
            this.leftThrowPoker = new PokerThrowContainer(seat, this.LeftThrowPoker, isShow);
            this.leftThrowPoker.name = "leftThrowPoker";
            this.addChild(this.leftThrowPoker);
        }
    };
    /**
     * 清理所有玩家丢的牌
     */
    StandaloneModel.prototype.clearAllThrowPoker = function () {
        if (this.getChildByName("playerThrowPoker") != null) {
            this.removeChild(this.getChildByName("playerThrowPoker"));
        }
        if (this.getChildByName("rightThrowPoker") != null) {
            this.removeChild(this.getChildByName("rightThrowPoker"));
        }
        if (this.getChildByName("topThrowPoker") != null) {
            this.removeChild(this.getChildByName("topThrowPoker"));
        }
        if (this.getChildByName("leftThrowPoker") != null) {
            this.removeChild(this.getChildByName("leftThrowPoker"));
        }
    };
    /**
     * 清理单个玩家丢的牌
     */
    StandaloneModel.prototype.clearSingleThrowPoker = function (seat) {
        if (seat == 1) {
            if (this.getChildByName("playerThrowPoker") != null) {
                this.removeChild(this.getChildByName("playerThrowPoker"));
            }
        }
        if (seat == 2) {
            if (this.getChildByName("rightThrowPoker") != null) {
                this.removeChild(this.getChildByName("rightThrowPoker"));
            }
        }
        if (seat == 3) {
            if (this.getChildByName("topThrowPoker") != null) {
                this.removeChild(this.getChildByName("topThrowPoker"));
            }
        }
        if (seat == 4) {
            if (this.getChildByName("leftThrowPoker") != null) {
                this.removeChild(this.getChildByName("leftThrowPoker"));
            }
        }
    };
    /**
     * 显示玩家头像
     */
    StandaloneModel.prototype.showPortrait = function (isFirst, isCamp) {
        this.clearPortrait();
        this.portraitPlayer = new PortraitContainer(this.user, this.playerIndex, isFirst, isCamp);
        this.portraitPlayer.name = "portraitPlayer";
        this.addChild(this.portraitPlayer);
    };
    /**
     * 清理玩家头像
     */
    StandaloneModel.prototype.clearPortrait = function () {
        if (this.getChildByName("portraitPlayer") != null) {
            this.removeChild(this.getChildByName("portraitPlayer"));
        }
    };
    /**
     * 显示其他玩家头像
     * seat 玩家座位号
     * isCamp 是不是同一阵营
     */
    StandaloneModel.prototype.showOtherPortrait = function (seat, isFirst, isCamp) {
        this.clearOtherPortrait(seat);
        if (seat == 3) {
            this.portraitTop = new PortraitOtherContainer(this.userTop, this.topIndex, isFirst, isCamp, 3);
            this.portraitTop.name = "portraitTop";
            this.addChild(this.portraitTop);
        }
        else if (seat == 2) {
            this.portraitRight = new PortraitOtherContainer(this.userRight, this.rightIndex, isFirst, isCamp, 2);
            this.portraitRight.name = "portraitRight";
            this.addChild(this.portraitRight);
        }
        else if (seat == 4) {
            this.portraitLeft = new PortraitOtherContainer(this.userLeft, this.leftIndex, isFirst, isCamp, 4);
            this.portraitLeft.name = "portraitLeft";
            this.addChild(this.portraitLeft);
        }
    };
    /**
     * 清理其他玩家头像
     * seat 玩家座位号
     */
    StandaloneModel.prototype.clearOtherPortrait = function (seat) {
        if (seat == 3) {
            if (this.getChildByName("portraitTop") != null) {
                this.removeChild(this.getChildByName("portraitTop"));
            }
        }
        else if (seat == 2) {
            if (this.getChildByName("portraitRight") != null) {
                this.removeChild(this.getChildByName("portraitRight"));
            }
        }
        else if (seat == 4) {
            if (this.getChildByName("portraitLeft") != null) {
                this.removeChild(this.getChildByName("portraitLeft"));
            }
        }
    };
    /**
     * 清理优先丢牌、出牌头衔
     */
    StandaloneModel.prototype.cleatFirstTitle = function () {
        if (this.getChildByName("fistThrowTitle") != null) {
            this.removeChild(this.getChildByName("fistThrowTitle"));
        }
        if (this.getChildByName("fistOutTitle") != null) {
            this.removeChild(this.getChildByName("fistOutTitle"));
        }
    };
    /**
     * 显示、丢牌出牌按钮组
     */
    StandaloneModel.prototype.showButtons = function (type) {
        this.clearButtons();
        this.buttons = new PlayerButtonContainer(this, type);
        this.buttons.name = "buttons";
        this.addChild(this.buttons);
    };
    /**
    * 显示其他玩家剩余的牌的数量
    * seat 玩家座位号
    * count 剩余牌数量
    */
    StandaloneModel.prototype.showCount = function (seat, count) {
        this.clearCount(seat);
        if (seat == 1) {
            this.playerCount = new OtherPokerCountContains(count, 1);
            this.playerCount.name = "playerCount";
            this.addChild(this.playerCount);
        }
        else if (seat == 2) {
            this.rightCount = new OtherPokerCountContains(count, 2);
            this.rightCount.name = "rightCount";
            this.addChild(this.rightCount);
        }
        else if (seat == 3) {
            this.topCount = new OtherPokerCountContains(count, 3);
            this.topCount.name = "topCount";
            this.addChild(this.topCount);
        }
        else if (seat == 4) {
            this.leftCount = new OtherPokerCountContains(count, 4);
            this.leftCount.name = "leftCount";
            this.addChild(this.leftCount);
        }
    };
    /**
     * 清理出牌按钮组,同showButtons()相关联
     */
    StandaloneModel.prototype.clearButtons = function () {
        if (this.getChildByName("buttons") != null) {
            this.removeChild(this.getChildByName("buttons"));
        }
    };
    /**
     * 清理要抽的牌
     */
    StandaloneModel.prototype.clearDrawPokers = function () {
        if (this.getChildByName("drawpoker") != null) {
            this.removeChild(this.getChildByName("drawpoker"));
        }
    };
    /**
     * 清理其他玩家剩余的牌的数量
     * seat 玩家座位号
     */
    StandaloneModel.prototype.clearCount = function (seat) {
        if (seat == 1) {
            if (this.getChildByName("playerCount") != null) {
                this.removeChild(this.getChildByName("playerCount"));
            }
        }
        else if (seat == 2) {
            if (this.getChildByName("rightCount") != null) {
                this.removeChild(this.getChildByName("rightCount"));
            }
        }
        else if (seat == 3) {
            if (this.getChildByName("topCount") != null) {
                this.removeChild(this.getChildByName("topCount"));
            }
        }
        else if (seat == 4) {
            if (this.getChildByName("leftCount") != null) {
                this.removeChild(this.getChildByName("leftCount"));
            }
        }
    };
    /**
     * 清理所有玩家丢牌的定时器
     */
    StandaloneModel.prototype.clearThrowTimer = function () {
        if (this.getChildByName("playerThrowTimer") != null) {
            this.removeChild(this.getChildByName("playerThrowTimer"));
        }
        if (this.getChildByName("rightThrowTimer") != null) {
            this.removeChild(this.getChildByName("rightThrowTimer"));
        }
        if (this.getChildByName("topThrowTimer") != null) {
            this.removeChild(this.getChildByName("topThrowTimer"));
        }
        if (this.getChildByName("leftThrowTimer") != null) {
            this.removeChild(this.getChildByName("leftThrowTimer"));
        }
    };
    /**
     * 清理相应玩家丢牌的定时器
     */
    StandaloneModel.prototype.clearThrowTimerControl = function (seat) {
        if (seat == 1) {
            if (this.getChildByName("playerThrowTimer") != null) {
                this.removeChild(this.getChildByName("playerThrowTimer"));
            }
        }
        else if (seat == 2) {
            if (this.getChildByName("rightThrowTimer") != null) {
                this.removeChild(this.getChildByName("rightThrowTimer"));
            }
        }
        else if (seat == 3) {
            if (this.getChildByName("topThrowTimer") != null) {
                this.removeChild(this.getChildByName("topThrowTimer"));
            }
        }
        else if (seat == 4) {
            if (this.getChildByName("leftThrowTimer") != null) {
                this.removeChild(this.getChildByName("leftThrowTimer"));
            }
        }
    };
    /**
     * 显示所有玩家丢牌的定时器
     */
    StandaloneModel.prototype.showThrowTimer = function (index, seat) {
        //this.clearThrowTimer();
        this.clearThrowTimerControl(seat);
        if (seat == 1) {
            //this.clearThrowTimerControl(1);
            var playerThrowTimer = new OtherThrowTimer(index + "", seat);
            playerThrowTimer.name = "playerThrowTimer";
            this.addChild(playerThrowTimer);
        }
        else if (seat == 2) {
            // this.clearThrowTimerControl(2);
            var rightThrowTimer = new OtherThrowTimer(index + "", seat);
            rightThrowTimer.name = "rightThrowTimer";
            this.addChild(rightThrowTimer);
        }
        else if (seat == 3) {
            //this.clearThrowTimerControl(3);
            var topThrowTimer = new OtherThrowTimer(index + "", seat);
            topThrowTimer.name = "topThrowTimer";
            this.addChild(topThrowTimer);
        }
        else if (seat == 4) {
            //this.clearThrowTimerControl(4);
            var leftThrowTimer = new OtherThrowTimer(index + "", seat);
            leftThrowTimer.name = "leftThrowTimer";
            this.addChild(leftThrowTimer);
        }
    };
    /**
     * 清理其他玩家出牌的定时器
     */
    StandaloneModel.prototype.clearOPTimer = function () {
        if (this.getChildByName("otherPlayingTimer") != null) {
            this.removeChild(this.getChildByName("otherPlayingTimer"));
        }
    };
    /**
     * 显示其他玩家出牌的定时器
     */
    StandaloneModel.prototype.showOPTimer = function (index) {
        this.clearOPTimer();
        var timer = new OtherPlayingTimer(index + "", this.outPokersSeat);
        timer.name = "otherPlayingTimer";
        this.addChild(timer);
    };
    /**
     * 计时器
     */
    StandaloneModel.prototype.createTimer = function (delay, times, timerRun, timerEnd) {
        if (timerRun === void 0) { timerRun = function (times) { }; }
        if (timerEnd === void 0) { timerEnd = function () { }; }
        var timer = new egret.Timer(delay, times);
        timer.addEventListener(egret.TimerEvent.TIMER, timerRun, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, timerEnd, this);
        //开始计时
        timer.start();
    };
    /**
    * 监听点击扑克的动作
    */
    StandaloneModel.prototype.pokerClick = function (evt) {
        var p = RES.getRes("layout_json").poker;
        var y = p.pokerUpMove;
        var draggedObject = evt.currentTarget;
        console.log("不是自定义draggedObject:" + draggedObject.name);
        //显示扑克的y坐标和扑克的名称
        var id = parseInt(draggedObject.name.split(",")[0]);
        var orderValue = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y) {
            draggedObject.y = 0;
            this.pokerSelectArray.push(new Poker(id, orderValue));
            console.log("this.pokerSelectArray接替出牌添加测试：" + this.pokerSelectArray.length);
        }
        else {
            draggedObject.y = y;
            var poker = new Poker(id, orderValue);
            console.log("poker", poker.toString(), "array", this.pokerSelectArray);
            this.pokerSelectArray = PokerUtils.removePokers(this.pokerSelectArray, [poker]);
            console.log("removedArray", this.pokerSelectArray);
        }
        //console.log("draggedObject2:"+draggedObject.y);
    };
    /**
    * 监听点击扑克的动作抽牌
    */
    StandaloneModel.prototype.drawPokerClickUp = function (evt) {
        var p = RES.getRes("layout_json").poker;
        var y = p.pokerDrawUpMove;
        //
        if (this.draggedUp != null) {
            if (this.draggedUp.y == 0) {
                this.draggedUp.y = y;
                this.pokerDrawArray = new Array();
            }
        }
        if (this.draggedDown != null) {
            if (this.draggedDown.y == p.pokerDrawAddy) {
                this.draggedDown.y = y + p.pokerDrawAddy;
                this.pokerDrawArray = new Array();
            }
        }
        //
        var draggedObject = evt.currentTarget;
        this.draggedUp = evt.currentTarget;
        //显示扑克的y坐标和扑克的名称
        var id = parseInt(draggedObject.name.split(",")[0]);
        var orderValue = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y) {
            draggedObject.y = 0;
            this.pokerDrawArray.push(new Poker(id, orderValue));
            console.log("上:选中的牌为：" + id + "," + orderValue + "," + this.pokerDrawArray.length);
        }
        else {
            draggedObject.y = y;
            var poker = new Poker(id, orderValue);
            console.log("上poker:" + poker.toString() + "|array:" + this.pokerDrawArray);
            this.pokerDrawArray = PokerUtils.removePokers(this.pokerDrawArray, [poker]);
            console.log("上removedArray:" + this.pokerDrawArray);
        }
    };
    /**
     * 监听点击扑克的动作抽牌
     */
    StandaloneModel.prototype.drawPokerClickDown = function (evt) {
        var p = RES.getRes("layout_json").poker;
        var y = p.pokerDrawUpMove;
        //
        if (this.draggedDown != null) {
            if (this.draggedDown.y == p.pokerDrawAddy) {
                this.draggedDown.y = y + p.pokerDrawAddy;
                this.pokerDrawArray = new Array();
            }
        }
        if (this.draggedUp != null) {
            if (this.draggedUp.y == 0) {
                this.draggedUp.y = y;
                this.pokerDrawArray = new Array();
            }
        }
        //
        var draggedObject = evt.currentTarget;
        this.draggedDown = evt.currentTarget;
        ;
        //显示扑克的y坐标和扑克的名称
        var id = parseInt(draggedObject.name.split(",")[0]);
        var orderValue = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y + p.pokerDrawAddy) {
            draggedObject.y = p.pokerDrawAddy;
            this.pokerDrawArray.push(new Poker(id, orderValue));
            console.log("下:选中的牌为：" + id + "," + orderValue + "," + this.pokerDrawArray.length);
        }
        else {
            draggedObject.y = y + p.pokerDrawAddy;
            var poker = new Poker(id, orderValue);
            console.log("下poker:" + poker.toString() + "|array:" + this.pokerDrawArray);
            this.pokerDrawArray = PokerUtils.removePokers(this.pokerDrawArray, [poker]);
            console.log("下removedArray:" + this.pokerDrawArray);
        }
    };
    /**
     * 阵营全归false
     */
    StandaloneModel.prototype.clearCamp = function () {
        this.isFirst = true;
        this.playerCamp = false;
        this.rightCamp = false;
        this.topCamp = false;
        this.leftCamp = false;
    };
    /**
     * 刷新自己的牌
     */
    StandaloneModel.prototype.clearPokers = function () {
        if (this.getChildByName("mypoker") != null) {
            this.removeChild(this.getChildByName("mypoker"));
        }
    };
    /**
     * 添加工具栏
     * 1.^代表隐藏了工具栏，点击展开expand
     * 2.︶代表展开了具栏，点击隐藏hide
     * 3.<<代表其他玩家出牌速度减缓slowdown，>>代表加速其他玩家出牌速度speedup
     * 4.“接管”选项可以接管友方的牌takeover,(托管Hosting)
     */
    StandaloneModel.prototype.myTool = function () {
        console.log("myTool");
        //先判断是否接管，如果接管则调用接管方法，不接管按原来调用
        if (this.getChildByName("takeoverPannel") != null) {
            this.removeChild(this.getChildByName("takeoverPannel"));
        }
        //【被遮挡问题暂不知道如何解决】
        var takeoverpannel = new TakeOverFriend(this);
        takeoverpannel.x = 735;
        takeoverpannel.y = 425;
        this.addChild(takeoverpannel);
        //this.showButtons(RoomManager.ButtonsExpand);
    };
    //点击展开工具栏
    StandaloneModel.prototype.buttonExpand = function () {
        console.log("buttonExpand");
        this.showButtons(RoomManager.ButtonsTools);
    };
    //点击收回工具栏
    StandaloneModel.prototype.buttonHide = function () {
        console.log("buttonHide");
        this.showButtons(RoomManager.ButtonsExpand);
    };
    //接管队友的牌
    StandaloneModel.prototype.takeoverConfirm = function (evt) {
        if (this.getChildByName("takeoverPannel") != null) {
            this.removeChild(this.getChildByName("takeoverPannel"));
        }
        console.log("buttonTakeover");
        //更换座位号,所有用到座位号的全换
        //this.LoadingButAction();
        this.takeoverFriendPokers(this.playerCampNumber); //isTakeOverFriendPoker
        this.outPokersSeat = 2;
        this.checkPokerNull();
    };
    //返回
    StandaloneModel.prototype.takeoverReturn = function (evt) {
        if (this.getChildByName("takeoverPannel") != null) {
            this.removeChild(this.getChildByName("takeoverPannel"));
        }
        this.showButtons(RoomManager.ButtonsExpand);
        this.outPokersSeat = 2;
        this.checkPokerNull(); //不接管队友的牌，游戏继续
    };
    //减速
    StandaloneModel.prototype.buttonSlowdown = function () {
        console.log("buttonSlowdown");
        this.waitTimeindex = this.waitTimeindex + 1;
    };
    //加快出牌速度
    StandaloneModel.prototype.buttonSpeedup = function () {
        console.log("buttonSpeedup");
        if (this.waitTimeindex > 1) {
            this.waitTimeindex = this.waitTimeindex - 1;
        }
        else {
            this.waitTimeindex = 1;
        }
    };
    /**
    * 再来一局
    */
    StandaloneModel.prototype.buttonRestart = function () {
        this.clearGameResultShow();
        this.clearButtons();
        /**
         * 初始化玩家牌为空集合
         * 清除玩家显示的牌和隐藏其他玩家的明牌
         * 清除所有玩家出牌的明牌和出的牌的集合
         * 清除所有玩家牌计数的数量
         * 清除其他玩家出牌定时器
         * 清除所有玩家头衔，初始化头像，同阵营座位号和丢牌集合不用，因为会覆盖
         */
        //1.初始化每个玩家发到的牌
        this.pokersPlayer = new Array();
        this.pokersRight = new Array();
        this.pokersTop = new Array();
        this.pokersLeft = new Array();
        //2.
        this.clearPokerVertical(1);
        this.clearPokerVertical(2);
        this.clearPokerVertical(3);
        this.clearPokerVertical(4);
        //3.
        this.clearPokerShow(1);
        this.clearPokerShow(2);
        this.clearPokerShow(3);
        this.clearPokerShow(4);
        this.pokerSelectArray = new Array();
        this.TopOutPokers = new Array();
        this.RightOutPokers = new Array();
        this.LeftOutPokers = new Array();
        //4.为了解决丢的牌全部不为空再执行翻牌函数
        this.PlayerThrowPoker = new Array();
        this.RightThrowPoker = new Array();
        this.TopThrowPoker = new Array();
        this.LeftThrowPoker = new Array();
        //5.
        this.clearCount(1);
        this.clearCount(2);
        this.clearCount(3);
        this.clearCount(4);
        //6.
        this.clearOPTimer();
        //7.
        this.clearCamp();
        //8.清除丢牌出牌头衔
        this.cleatFirstTitle();
        //9.当前扑克为空值的座位号重置
        this.currentPokerNull = -1;
        //10.人机出牌时间还原
        this.waitTimeindex = 5;
        //11.是否接管好友扑克状态还原
        this.isTakeOverRightPoker = false;
        this.isTakeOverTopPoker = false;
        this.isTakeOverLeftPoker = false;
        /** 开始新的一局 */
        //回合数+1，初始为1
        this.playPokerCount++;
        //重新得到一副牌
        this.pokers = PokerUtils.getRandomPokers();
        //初始化切的牌
        this.pokerDrawArray = new Array();
        console.log("此时优先丢牌人不变，优先出牌人不变才对：" + this.firstThrowPokerSeat + ",out:" + this.firstOutPokerSeat);
        //初始化完毕，开始下一局游戏
        this.init();
    };
    /**
     * 游戏结束，返回大厅
     */
    StandaloneModel.prototype.buttonGameOver = function () {
        this.clearGameResultShow();
        console.log("返回大厅");
        var gameHall = new GameHall(this.user);
        gameHall.name = "gameHall";
        this.parent.addChild(gameHall);
        this.parent.removeChild(this);
    };
    /**
     * 开发者模式，显示其他玩家明牌
     */
    StandaloneModel.prototype.buttonGameTest = function () {
        console.log("开发者第" + this.developButtonCount + "点击");
        if (this.developButtonCount % 2 != 0) {
            this.isDevelop = true;
            this.showPokerVertival(2);
            this.showPokerVertival(3);
            this.showPokerVertival(4);
        }
        else {
            this.isDevelop = false;
            this.clearPokerVertical(2);
            this.clearPokerVertical(3);
            this.clearPokerVertical(4);
        }
        this.developButtonCount++;
    };
    /**
     * 点击按钮
     * Click the button
     */
    StandaloneModel.prototype.onSetButtonClick = function (e) {
        console.log("tt");
        //console.log("this.getChildByName(gameSettingPannel):"+this.getChildByName("gameSettingPannel"));
        if (this.getChildByName("gameSettingPannel") != null) {
            this.removeChild(this.getChildByName("gameSettingPannel"));
        }
        //【被遮挡问题暂不知道如何解决】
        var gamesettingpannel = new GameSettingPannel();
        gamesettingpannel.setMyPokers(this.pokersPlayer);
        gamesettingpannel.x = 735;
        gamesettingpannel.y = 425;
        this.addChild(gamesettingpannel);
        //this.addChildAt(gamesetting,9);//测试深度
        //console.log("提示栏深度值："+gamesetting.getChildAt;
        //this.test();
    };
    /**
     * 握牌方式
     */
    StandaloneModel.isLeftHand = true; //默认true左手握牌
    return StandaloneModel;
}(egret.DisplayObjectContainer));
__reflect(StandaloneModel.prototype, "StandaloneModel");
