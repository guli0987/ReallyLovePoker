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
var MultiplayerOnline = (function (_super) {
    __extends(MultiplayerOnline, _super);
    function MultiplayerOnline() {
        var _this = _super.call(this) || this;
        //??????????????????
        _this.user = PokerUtils.getRandomUser();
        _this.userLeft = PokerUtils.getRandomUser();
        _this.userTop = PokerUtils.getRandomUser();
        _this.userRight = PokerUtils.getRandomUser();
        //??????????????????
        _this.playerIndex = Math.floor(Math.random() * 10) + 1;
        _this.rightIndex = Math.floor(Math.random() * 10) + 1;
        _this.topIndex = Math.floor(Math.random() * 10) + 1;
        _this.leftIndex = Math.floor(Math.random() * 10) + 1;
        //???????????????
        _this.mySeat = 1;
        _this.rightSeat = 2;
        _this.topSeat = 3;
        _this.leftSeat = 4;
        //?????????????????????
        _this.playerCamp = false;
        _this.rightCamp = false;
        _this.topCamp = false;
        _this.leftCamp = false;
        //?????????????????????
        _this.playerCampNumber = -1;
        _this.rightCampNumber = -1;
        _this.topCampNumber = -1;
        _this.leftCampNumber = -1;
        //?????????????????????????????????????????????
        _this.isFirst = true;
        //??????????????????????????????
        _this.pokers = PokerUtils.getRandomPokers();
        //??????????????????
        _this.pokersPlayer = new Array();
        //????????????????????????
        _this.firstThrowPokerSeat = -1;
        //????????????????????????
        _this.firstOutPokerSeat = -1;
        //??????????????????
        _this.pokerDrawArray = new Array();
        _this.drawPokerRandom = Math.floor(Math.random() * 4 + 1); //[1,5)????????????????????????
        //?????????????????????
        _this.drawPokerIndex = -1;
        _this.drawPokerId = -1;
        _this.drawPokerValue = -1;
        //????????????????????????
        _this.darkPokerIndex = -1;
        _this.darkPokerId = -1;
        _this.darkPokerValue = -1;
        //??????????????????
        _this.checkThrowPoker = new Array();
        //??????????????????
        _this.PlayerThrowPoker = new Array();
        //right???????????????
        _this.RightThrowPoker = new Array();
        //top???????????????
        _this.TopThrowPoker = new Array();
        //left???????????????
        _this.LeftThrowPoker = new Array();
        //????????????
        _this.PlayerReady = false;
        _this.RightReady = false;
        _this.TopReady = false;
        _this.LeftReady = false;
        _this.isInThere = -1;
        /**
         * ???????????????
         */
        _this.playedPoker = [];
        //private playedSeat: number = -1;
        _this.playedSeatId = -1;
        //??????????????????
        _this.pokerSelectArray = new Array();
        //top????????????
        _this.TopOutPokers = new Array();
        //right????????????
        _this.RightOutPokers = new Array();
        //left????????????
        _this.LeftOutPokers = new Array();
        _this.moveTimeer = new egret.Timer(100, 0); //??????
        _this.userids = []; //??????????????????id
        _this.time = 20;
        /** ?????????????????????????????? */
        _this.northSeat = -1;
        _this.southSeat = -1;
        _this.westSeat = -1;
        _this.eastSeat = -1;
        //???????????????????????????
        _this.northLength = 27;
        _this.southLength = 27;
        _this.westLength = 27;
        _this.eastLength = 27;
        //??????????????????
        _this.northReady = false;
        _this.southReady = false;
        _this.westReady = false;
        _this.eastReady = false;
        /**
         * ???????????????
         */
        _this.playPokerCount = 1; //???????????????????????????????????????1????????????????????????????????????
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MultiplayerOnline.prototype.onAddToStage = function (event) {
        GameData.width = this.stage.stageWidth;
        GameData.height = this.stage.stageHeight;
        this.startLoad();
    };
    MultiplayerOnline.prototype.startLoad = function () {
        GameData.starPositionX = 0;
        if (GameData.syncFrame === true && GameData.isRoomOwner === true) {
            var result = mvs.MsEngine.getInstance.setFrameSync(GameData.frameRate); //???????????????
            if (result !== 0) {
                console.log('????????????????????????,?????????:' + result);
            }
        }
        /**
         * ????????????????????????
         */
        GameData.isGameOver = false;
        this._gameTime = GameData.playerTime;
        this._score = 0;
        this._receiveCountValue = 0;
        /**
         * ??????????????????
         */
        var sky = new Layout(GameData.width, GameData.height);
        this.addChild(sky);
        /**
         * ????????????????????????
         */
        /**
         * ?????????????????? ?????????
         */
        /**
         * ???????????????
         */
        var roomIdLabel = new eui.Label();
        roomIdLabel.textColor = 0xffffff;
        roomIdLabel.fontFamily = "Tahoma"; //????????????
        roomIdLabel.text = "????????????" + GameData.roomID;
        roomIdLabel.size = 40;
        roomIdLabel.x = 20;
        roomIdLabel.y = 60;
        this.addChild(roomIdLabel);
        /**
         * ??????
         */
        var scoreLabel = new eui.Label();
        scoreLabel.textColor = 0xffffff;
        scoreLabel.fontFamily = "Tahoma"; //????????????
        scoreLabel.size = 40;
        scoreLabel.x = 20;
        scoreLabel.y = 100;
        this._scoreLabel = scoreLabel;
        this.addChild(this._scoreLabel);
        /**
         * ???????????? ?????????
         */
        /**
         * ?????????????????? ?????????
         */
        /**
         * ?????? ?????????
         */
        var countDownLabel = new eui.Label();
        countDownLabel.textColor = 0xffffff;
        countDownLabel.fontFamily = "Tahoma"; //????????????
        countDownLabel.size = 60;
        countDownLabel.x = GameData.width / 2;
        countDownLabel.y = 20;
        countDownLabel.text = "????????????" + 20;
        this._countDownLabel = countDownLabel;
        this.addChild(this._countDownLabel);
        /**
         * ???????????? ?????????
         */
        /**
         * ????????????????????????  ?????????
         */
        /**
         * ???????????????????????????
         */
        this.initUserScore();
        this.addMsResponseListen();
        //??????matchvs??????????????????
        //this.addMsResponseListen();
        this.runGame();
    };
    MultiplayerOnline.prototype.initUserScore = function () {
        var i = 0;
        for (i = 0; i < GameData.playerUserIds.length; i++) {
            GameData.playerUserIds[i].pValue = 0;
        }
        this.setScoreLabel();
    };
    MultiplayerOnline.prototype.setScoreLabel = function () {
        var me = "[???]";
        for (var i = 0; i < GameData.playerUserIds.length; i++) {
            if (GameData.playerUserIds[i].id !== GameData.gameUser.id) {
                me = "";
            }
            GameData["number" + (i + 1)] = GameData.playerUserIds[i].name + ': ' + GameData.playerUserIds[i].id + '>>' + GameData.playerUserIds[i].pValue + me;
            this._scoreLabel.text = this._scoreLabel.text + GameData["number" + (i + 1)] + "\n";
        }
    };
    /**
     * ??????????????????
     */
    MultiplayerOnline.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buttonAction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //???????????????????????????
                    return [4 /*yield*/, this.loadGameResource()];
                    case 1:
                        //???????????????????????????
                        _a.sent();
                        this.sendGameServerEvents(JSON.stringify({
                            action: OnlineEvent.OE_LOADFINISH,
                            uid: GameData.gameUser.id
                        }));
                        buttonAction = new eui.Button();
                        buttonAction.name = "buttonAction";
                        buttonAction.label = "????????????";
                        buttonAction.width = 400;
                        buttonAction.height = 100;
                        buttonAction.x = 1920 / 2;
                        buttonAction.y = 1080 / 2;
                        this._buttonAction = buttonAction;
                        this.addChild(this._buttonAction);
                        if (!GameData.gameUser.isOwner) {
                            buttonAction.enabled = false;
                            buttonAction.label = "????????????????????????";
                        }
                        buttonAction.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonAction, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ????????????????????????
     * ???????????????????????????????????????????????????????????????????????????
     */
    MultiplayerOnline.prototype.onButtonAction = function (e) {
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_GAMESTART
        }));
    };
    //??????????????????????????????
    MultiplayerOnline.prototype.sendOnlineEvents = function (json) {
        mvs.MsEngine.getInstance.sendEventEx(0, json, 0, this.userids);
    };
    //?????????GameServer
    MultiplayerOnline.prototype.sendGameServerEvents = function (json) {
        mvs.MsEngine.getInstance.sendEventEx(1, json, 0, []);
    };
    /**
     * ???????????????
     */
    MultiplayerOnline.prototype.loadGameResource = function () {
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
    MultiplayerOnline.prototype.selectOrder = function () {
        if (GameData.gameUser.isOwner) {
            this.southSeat = GameData.playerUserIds[0].id;
            this.eastSeat = GameData.playerUserIds[1].id;
            ;
            this.northSeat = GameData.playerUserIds[2].id;
            ;
            this.westSeat = GameData.playerUserIds[3].id;
            ;
            this.sendGameServerEvents(JSON.stringify({
                action: OnlineEvent.OE_SELECT_ORDER,
                east: this.eastSeat,
                south: this.southSeat,
                west: this.westSeat,
                north: this.northSeat
            }));
        }
    };
    /**
     * ?????????
     */
    MultiplayerOnline.prototype.createTimer = function (delay, times, timerRun, timerEnd) {
        if (timerRun === void 0) { timerRun = function (times) { }; }
        if (timerEnd === void 0) { timerEnd = function () { }; }
        var timer = new egret.Timer(delay, times);
        timer.addEventListener(egret.TimerEvent.TIMER, timerRun, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, timerEnd, this);
        //????????????
        timer.start();
    };
    /**
     * ???????????????
     */
    MultiplayerOnline.prototype.frameUpdate = function (ev) {
        var data = ev.data;
    };
    /**
     * ???????????????????????????????????????
     */
    MultiplayerOnline.prototype.networkStateNotify = function (ev) {
        var netnotify = ev.data;
    };
    /**
     * ???????????????
     */
    MultiplayerOnline.prototype.setFrameSyncResponse = function (ev) {
        var rsp = ev.data;
        if (rsp.mStatus == 200) {
            console.log("????????????????????????");
        }
        else {
            console.log("????????????????????????");
        }
    };
    /**
     * ????????????????????????
     */
    MultiplayerOnline.prototype.leaveRoomNotify = function (ev) {
        console.log("leaveRoomNotify");
        /*GameData.isGameOver = true;
        this.release();
        console.log("2????????????ID???",  GameData.roomID, GameData.playerUserIds);
        GameSceneView._gameScene.showResult(GameData.playerUserIds,this._roomID);*/
        //GameData.gameUser.isOwner = false;
    };
    MultiplayerOnline.prototype.test = function () {
        var _this = this;
        //egret.getTimer();
        var idCountDown = setInterval(function () {
            _this._countDownLabel.text = (_this._gameTime--).toString();
            if (_this._gameTime == 0) {
                clearInterval(idCountDown);
            }
        }, 1000);
    };
    /**
     * ??????????????????
     */
    MultiplayerOnline.prototype.sendEventNotify = function (e) {
        var data = e.data;
        var jsonData = JSON.parse(data.cpProto);
        console.log("json.action:" + jsonData.action);
        if (data && data.cpProto) {
            if (data.cpProto.indexOf(OnlineEvent.OE_GAMESTART) >= 0) {
                console.log("LoadingButAction");
            }
        }
    };
    /**
     * gameserver??????
     */
    MultiplayerOnline.prototype.gameServerNotify = function (ev) {
        var data = ev.data;
        console.log("gameServerNotify");
        var jsonData = JSON.parse(data.cpProto);
        console.log("json.action:" + jsonData.action + ",jsonData:" + JSON.stringify(jsonData));
        if (data && data.cpProto) {
            if (data.cpProto.indexOf(OnlineEvent.OE_LOADFINISH) >= 0) {
                var allLoad_1 = true;
                GameData.playerUserIds.forEach(function (user) {
                    if (user.id == jsonData.uid) {
                        user.loadFinish = true;
                    }
                    if (!user.loadFinish) {
                        allLoad_1 = false;
                    }
                });
                if (GameData.gameUser.isOwner) {
                    if (!allLoad_1) {
                        this._buttonAction.enabled = false;
                        this._buttonAction.label = "????????????????????????????????????";
                    }
                    else {
                        this._buttonAction.enabled = true;
                        this._buttonAction.label = "??????????????????";
                    }
                }
                console.log("jsonData.uid" + jsonData.uid);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_GAMESTART) >= 0) {
                console.log("OE_GAMESTART");
                if (this.getChildByName("buttonAction") != null) {
                    this.removeChild(this.getChildByName("buttonAction"));
                }
                this.selectOrder();
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SELECT_ORDER) >= 0) {
                console.log("OE_SELECT_ORDER");
                if (!GameData.gameUser.isOwner) {
                    this.southSeat = jsonData.south;
                    this.eastSeat = jsonData.east;
                    this.northSeat = jsonData.north;
                    this.westSeat = jsonData.west;
                }
                this._scoreLabel.text += "??????" + this.eastSeat + "?????????" + this.westSeat + "?????????" + this.southSeat + "?????????" + this.northSeat;
                this.user.setName(GameData.gameUser.name); //??????????????????????????????
                this.sendGameServerEvents(JSON.stringify({
                    action: OnlineEvent.OE_SHOW_DATA,
                    direction: GameData.gameUser.id,
                    data: { name: this.user.getName(), sex: this.user.getSex(), index: this.playerIndex }
                }));
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SHOW_DATA) >= 0) {
                console.log("OE_SHOW_DATA");
                //????????????????????????
                this.playerDataUpdate(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SEND_POKERS) >= 0) {
                console.log("OE_SEND_POKERS");
                this.pokers = PokerUtils.getGameServerPokers(jsonData);
                this.drawPokerRandom = jsonData.randomDrawer;
                console.log("jsonData.randomDrawer:" + jsonData.randomDrawer);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SEND_AGAIN_POKERS) >= 0) {
                console.log("OE_SEND_AGAIN_POKERS");
                this.pokers = PokerUtils.getGameServerPokers(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SHOW_DRAWER_POKER) >= 0) {
                console.log("OE_SHOW_DRAWER_POKER");
                var json_data = JSON.parse(JSON.stringify(jsonData.data));
                this.dealwithDrawerPoker(json_data);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SHOW_SWITCH_POKER) >= 0) {
                console.log("OE_SHOW_SWITCH_POKER");
                //let json_data = JSON.parse(JSON.stringify(jsonData.data));
                this.dealwithSwitchPoker(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SHOW_THROW_POKER) >= 0) {
                console.log("OE_SHOW_THROW_POKER");
                this.dealwithThrowPoker(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SEARCH_CAMP) >= 0) {
                console.log("OE_SEARCH_CAMP");
                this.dealwithSearchCamp(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_SHOW_CAMP) >= 0) {
                console.log("OE_SHOW_CAMP");
                this.dealwithShowCamp(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_EXCHANGE_POKER) >= 0) {
                console.log("OE_EXCHANGE_POKER");
                this.exchangePoker();
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_FIRST_OUT_POKER) >= 0) {
                console.log("OE_FIRST_OUT_POKER");
                this.playedPoker = [];
                this.playedSeatId = jsonData.direction; //??????????????????Id
                //this.outPokersId = jsonData.direction;//????????????Id
                if (GameData.gameUser.id == jsonData.direction) {
                    this.showButtons(RoomManager.ButtonsDiscard);
                }
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_OUT_POKERS) >= 0) {
                console.log("OE_OUT_POKERS");
                this.OutPokersCompare(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_IS_GAMEOVER) >= 0) {
                console.log("OE_IS_GAMEOVER");
                this.isGameOver(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_GAMEOVER) >= 0) {
                console.log("OE_GAMEOVER");
                this.isAgainGame(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_GIVE_OUTPOKERS) >= 0) {
                console.log("OE_GIVE_OUTPOKERS");
                this.CampOutPoker(jsonData);
            }
            else if (data.cpProto.indexOf(OnlineEvent.OE_READY) >= 0) {
                console.log("OE_READY");
                this.Ready(jsonData);
            }
        }
    };
    MultiplayerOnline.prototype.Ready = function (jsonData) {
        if (jsonData.direction == this.southSeat) {
            this.southReady = true;
        }
        else if (jsonData.direction == this.northSeat) {
            this.northReady = true;
        }
        else if (jsonData.direction == this.eastSeat) {
            this.eastReady = true;
        }
        else if (jsonData.direction == this.westSeat) {
            this.westReady = true;
        }
        //??????????????????????????????
        if (this.southReady && this.northReady && this.eastReady && this.westReady) {
            //???????????????????????????????????????
            this.returnInit();
        }
    };
    MultiplayerOnline.prototype.returnReady = function () {
        this.southReady = false;
        this.northReady = false;
        this.eastReady = false;
        this.westReady = false;
    };
    /**
    * ???????????????????????????????????????
    * ??????????????????
    *  1.?????????????????????????????????????????????
    *  2.??????????????????
    *  3.???????????????
    *  4.???????????????????????????
    */
    MultiplayerOnline.prototype.buttonChuPai = function (evt) {
        console.log("????????????");
        if (this.pokerSelectArray.length == 0) {
            console.log("??????????????????");
            return;
        }
        if (this.playedSeatId != GameData.gameUser.id) {
            if (!PokerCompareUtils.comparePokers(this.pokerSelectArray, this.playedPoker)) {
                return;
            }
        }
        if (PokerTypeUtils.getType(this.pokerSelectArray) == null && PokerTypeUtils.getSpecialType(this.pokerSelectArray) == null) {
            console.log("?????????????????????");
            return;
        }
        this.pokersPlayer = PokerUtils.removePokers(this.pokersPlayer, this.pokerSelectArray);
        console.log("????????????????????????", this.pokersPlayer.length);
        //??????????????????????????????
        this.playedPoker = PokerUtils.sortDescPokers(this.pokerSelectArray);
        this.clearButtons();
        var OutPokerIds = new Array(); //??????????????????id
        this.playedPoker.forEach(function (poker) {
            OutPokerIds.push(poker.getId());
        });
        //??????
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_OUT_POKERS,
            direction: GameData.gameUser.id,
            isOut: 1,
            data: { PokersID: OutPokerIds },
            PokersLength: this.pokersPlayer.length
        }));
    };
    /**
     * ???????????????????????????
     */
    MultiplayerOnline.prototype.buttonBuYao = function (evt) {
        if (this.playedSeatId == GameData.gameUser.id) {
            return;
        }
        this.clearButtons();
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_OUT_POKERS,
            direction: GameData.gameUser.id,
            isOut: 0,
            data: { PokersID: [] },
            PokersLength: this.pokersPlayer.length
        }));
    };
    /**
     * ????????????
     * ???????????????????????????????????????????????????
     */
    MultiplayerOnline.prototype.buttonTiShi = function (evt) {
        //this.pokerSelectArray = PokerUtils.sortDescPokers(this.pokerSelectArray);//????????????????????????????????????
        this.pokerSelectArray = PokerSeekUtils.autoPromptOnline(this.pokersPlayer, this.playedPoker);
        console.log("this.pokerSelectArray????????????????????????" + this.pokerSelectArray.length);
        //let p = RES.getRes("layout_json").poker;
        //let y = p.pokerUpMove;
        if (this.pokerSelectArray.length != 0) {
            for (var i = 0; i < this.pokerSelectArray.length; i++) {
                console.log("?????????????????????" + (i + 1) + "???id??????:" + this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                //???????????????????????????name???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                var draggedObject = StandaloneModel.mypoker.getChildByName(this.pokerSelectArray[i].getId() + "," + this.pokerSelectArray[i].getOrderValue());
                console.log("????????????????????????,y??????:" + draggedObject.y);
                draggedObject.y = 0;
                console.log("??????????????????????????????,y??????:" + draggedObject.y);
            }
        }
    };
    MultiplayerOnline.prototype.isAgainGame = function (jsonData) {
        if (jsonData.winA == GameData.gameUser.id || jsonData.winB == GameData.gameUser.id) {
            this.showResult(true);
        }
        else {
            this.showResult(false);
        }
    };
    /**
     * ????????????????????????????????????
     */
    MultiplayerOnline.prototype.showResult = function (isVictory) {
        this.clearGameResultShow();
        var result = new GameResultContainer(isVictory);
        result.name = "result";
        this.addChild(result);
        this.showButtons(RoomManager.ButtonsGameOver);
    };
    /**
     * ?????????????????????????????????
     */
    MultiplayerOnline.prototype.clearGameResultShow = function () {
        if (this.getChildByName("result") != null) {
            this.removeChild(this.getChildByName("result"));
        }
    };
    MultiplayerOnline.prototype.isGameOver = function (jsonData) {
        if (jsonData.direction == this.southSeat) {
            this.southLength = jsonData.length;
        }
        else if (jsonData.direction == this.eastSeat) {
            this.eastLength = jsonData.length;
        }
        else if (jsonData.direction == this.northSeat) {
            this.northLength = jsonData.length;
        }
        else if (jsonData.direction == this.westSeat) {
            this.westLength = jsonData.length;
        }
        //?????????????????????????????????
        if (this.southLength == 0 && this.eastLength != 0 && this.northLength != 0 && this.westLength != 0) {
            this.firstOutPokerSeat = 1;
        }
        if (this.eastLength == 0 && this.southLength != 0 && this.northLength != 0 && this.westLength != 0) {
            this.firstOutPokerSeat = 2;
        }
        if (this.northLength == 0 && this.eastLength != 0 && this.southLength != 0 && this.westLength != 0) {
            this.firstOutPokerSeat = 3;
        }
        if (this.westLength == 0 && this.eastLength != 0 && this.northLength != 0 && this.southLength != 0) {
            this.firstOutPokerSeat = 4;
        }
        console.log("?????????????????????????????????????firstOutPokerSeat:" + this.firstOutPokerSeat);
        console.log("this.southLength:" + this.southLength + ",this.eastLength:" + this.eastLength + ",this.northLength:" + this.northLength + ",this.westLength:" + this.westLength);
        console.log("???this.playerCamp:" + this.playerCamp + ",this.rightCamp:" + this.rightCamp + ",this.topCamp:" + this.topCamp + ",this.leftCamp:" + this.leftCamp + "???");
        console.log("GameData.gameUser.id:" + GameData.gameUser.id + ",this.southSeat:" + this.southSeat + ",this.eastSeat:" + this.eastSeat + ",this.northSeat:" + this.northSeat + ",this.westSeat:" + this.westSeat);
        if (this.playerCamp && this.rightCamp) {
            if (GameData.gameUser.id == this.southSeat) {
                if (this.southLength == 0 && this.eastLength == 0 && (this.northLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.southSeat, this.eastSeat);
                }
                if (this.northLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.northSeat, this.westSeat);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (this.eastLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.northSeat);
                }
                if (this.southLength == 0 && this.westLength == 0 && (this.northLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.southSeat, this.westSeat);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (this.westLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.westSeat, this.northSeat);
                }
                if (this.southLength == 0 && this.eastLength == 0 && (this.northLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.southSeat, this.eastSeat);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (this.westLength == 0 && this.southLength == 0 && (this.northLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.westSeat, this.southSeat);
                }
                if (this.northLength == 0 && this.eastLength == 0 && (this.southLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.northSeat, this.eastSeat);
                }
            }
        }
        else if (this.playerCamp && this.topCamp) {
            if (GameData.gameUser.id == this.southSeat) {
                if (this.southLength == 0 && this.northLength == 0 && (this.eastLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.southSeat, this.northSeat);
                }
                if (this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.westSeat);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.westSeat);
                }
                if (this.southLength == 0 && this.northLength == 0 && (this.westLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.southSeat, this.northSeat);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (this.southLength == 0 && this.northLength == 0 && (this.eastLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.southSeat, this.northSeat);
                }
                if (this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.westSeat);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (this.eastLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.northLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.westSeat);
                }
                if (this.southLength == 0 && this.northLength == 0 && (this.westLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.southSeat, this.northSeat);
                }
            }
        }
        else if (this.playerCamp && this.leftCamp) {
            if (GameData.gameUser.id == this.southSeat) {
                if (this.southLength == 0 && this.westLength == 0 && (this.eastLength != 0 || this.northLength != 0)) {
                    this.gameOver(true, this.southSeat, this.westSeat);
                }
                if (this.eastLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.northSeat);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (this.eastLength == 0 && this.southLength == 0 && (this.westLength != 0 || this.northLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.southSeat);
                }
                if (this.westLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.westSeat, this.northSeat);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (this.eastLength == 0 && this.northLength == 0 && (this.southLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.eastSeat, this.northSeat);
                }
                if (this.southLength == 0 && this.westLength == 0 && (this.eastLength != 0 || this.northLength != 0)) {
                    this.gameOver(true, this.southSeat, this.westSeat);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (this.northLength == 0 && this.westLength == 0 && (this.southLength != 0 || this.eastLength != 0)) {
                    this.gameOver(true, this.northSeat, this.westSeat);
                }
                if (this.southLength == 0 && this.eastLength == 0 && (this.westLength != 0 || this.westLength != 0)) {
                    this.gameOver(true, this.southSeat, this.eastSeat);
                }
            }
        }
    };
    /**
     * ????????????????????????
     */
    MultiplayerOnline.prototype.gameOver = function (gameOver, winId1, winId2) {
        if (gameOver) {
            this.sendGameServerEvents(JSON.stringify({
                action: OnlineEvent.OE_GAMEOVER,
                winA: winId1,
                winB: winId2
            }));
        }
    };
    MultiplayerOnline.prototype.judgeGameOver = function () {
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_IS_GAMEOVER,
            direction: GameData.gameUser.id,
            length: this.pokersPlayer.length
        }));
    };
    MultiplayerOnline.prototype.OutPokersCompare = function (jsonData) {
        if (jsonData.direction == this.southSeat) {
            if (GameData.gameUser.id == this.southSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //this.outPokersId = this.eastSeat;//?????????????????????Id
                    /*???????????????*/
                    //??????????????????
                    this.showPokerVertival(this.mySeat);
                    //????????????????????????
                    this.showCount(1, this.pokersPlayer.length);
                    //???????????????
                    this.showPokerPlayer();
                    //???????????????????????????
                    this.pokerSelectArray = new Array();
                    this.judgeGameOver(); //?????????????????????????????????
                }
                else if (jsonData.isOut == 0) {
                    console.log("??????????????????????????????");
                    this.showTextTip(this.mySeat);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.LeftOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.leftSeat);
                    this.showCount(this.leftSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.leftSeat);
                }
                this.clearPokerShow(this.mySeat); //???????????????????????????????????????
                if (this.eastLength == 0) {
                    //?????????????????????????????????????????????????????????????????????????????????
                    this.judgeOutPoker();
                }
                else {
                    this.showButtons(RoomManager.ButtonsDiscard);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.TopOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.topSeat);
                    this.showCount(this.topSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.topSeat);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.RightOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.rightSeat);
                    this.showCount(this.rightSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.rightSeat);
                }
            }
        }
        else if (jsonData.direction == this.eastSeat) {
            if (GameData.gameUser.id == this.eastSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //this.outPokersId = this.eastSeat;//?????????????????????Id
                    /*???????????????*/
                    //??????????????????
                    this.showPokerVertival(this.mySeat);
                    //????????????????????????
                    this.showCount(this.mySeat, this.pokersPlayer.length);
                    //???????????????
                    this.showPokerPlayer();
                    //???????????????????????????
                    this.pokerSelectArray = new Array();
                    this.judgeGameOver(); //?????????????????????????????????
                }
                else if (jsonData.isOut == 0) {
                    console.log("??????????????????????????????");
                    this.showTextTip(this.mySeat);
                }
            }
            else if (GameData.gameUser.id == this.southSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.RightOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.rightSeat);
                    this.showCount(this.rightSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.rightSeat);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.LeftOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.leftSeat);
                    this.showCount(this.leftSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.leftSeat);
                }
                this.clearPokerShow(this.mySeat);
                if (this.northLength == 0) {
                    //?????????????????????????????????????????????????????????????????????????????????
                    this.judgeOutPoker();
                }
                else {
                    this.showButtons(RoomManager.ButtonsDiscard);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.TopOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.topSeat);
                    this.showCount(this.topSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.topSeat);
                }
            }
        }
        else if (jsonData.direction == this.northSeat) {
            if (GameData.gameUser.id == this.northSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //this.outPokersId = this.eastSeat;//?????????????????????Id
                    /*???????????????*/
                    //??????????????????
                    this.showPokerVertival(this.mySeat);
                    //????????????????????????
                    this.showCount(this.mySeat, this.pokersPlayer.length);
                    //???????????????
                    this.showPokerPlayer();
                    //???????????????????????????
                    this.pokerSelectArray = new Array();
                    this.judgeGameOver(); //?????????????????????????????????
                }
                else if (jsonData.isOut == 0) {
                    console.log("??????????????????????????????");
                    this.showTextTip(this.mySeat);
                }
            }
            else if (GameData.gameUser.id == this.southSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.TopOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.topSeat);
                    this.showCount(this.topSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.topSeat);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.RightOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.rightSeat);
                    this.showCount(this.rightSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.rightSeat);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.LeftOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.leftSeat);
                    this.showCount(this.leftSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.leftSeat);
                }
                this.clearPokerShow(this.mySeat);
                if (this.westLength == 0) {
                    //?????????????????????????????????????????????????????????????????????????????????
                    this.judgeOutPoker();
                }
                else {
                    this.showButtons(RoomManager.ButtonsDiscard);
                }
            }
        }
        else if (jsonData.direction == this.westSeat) {
            if (GameData.gameUser.id == this.westSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //this.outPokersId = this.eastSeat;//?????????????????????Id
                    /*???????????????*/
                    //??????????????????
                    this.showPokerVertival(this.mySeat);
                    //????????????????????????
                    this.showCount(this.mySeat, this.pokersPlayer.length);
                    //???????????????
                    this.showPokerPlayer();
                    //???????????????????????????
                    this.pokerSelectArray = new Array();
                    this.judgeGameOver(); //?????????????????????????????????
                }
                else if (jsonData.isOut == 0) {
                    console.log("??????????????????????????????");
                    this.showTextTip(this.mySeat);
                }
            }
            else if (GameData.gameUser.id == this.southSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.LeftOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.leftSeat);
                    this.showCount(this.leftSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.leftSeat);
                }
                this.clearPokerShow(this.mySeat);
                if (this.southLength == 0) {
                    //?????????????????????????????????????????????????????????????????????????????????
                    this.judgeOutPoker();
                }
                else {
                    this.showButtons(RoomManager.ButtonsDiscard);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.TopOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.topSeat);
                    this.showCount(this.topSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.topSeat);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (jsonData.isOut == 1) {
                    this.playedPoker = PokerUtils.getGameServerOutPokers(jsonData); //?????????????????????
                    this.playedSeatId = jsonData.direction; //??????????????????id
                    //????????????????????????????????????
                    this.RightOutPokers = this.playedPoker;
                    this.showOtherOutPoker(this.rightSeat);
                    this.showCount(this.rightSeat, jsonData.PokersLength);
                    //this.showTextTip(this.outPokersSeat);//??????
                }
                else if (jsonData.isOut == 0) {
                    this.showTextTip(this.rightSeat);
                }
            }
        }
    };
    MultiplayerOnline.prototype.judgeOutPoker = function () {
        //?????????????????????????????????????????????????????????????????????????????????
        var campId = -1;
        var IsCamp = -1;
        if (this.playedSeatId == GameData.gameUser.id) {
            //?????????????????????????????????????????????????????????????????????
            //????????????id???????????????id
            campId = this.searchCampId();
            IsCamp = 1;
        }
        else {
            //?????????????????????????????????
            campId = this.searchOrderId();
            IsCamp = 0;
        }
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_GIVE_OUTPOKERS,
            direction: campId,
            isCamp: IsCamp
        }));
    };
    MultiplayerOnline.prototype.CampOutPoker = function (jsonData) {
        if (jsonData.direction == GameData.gameUser.id) {
            if (jsonData.isCamp == 1) {
                this.playedSeatId = GameData.gameUser.id;
            }
            else if (jsonData.isCamp == 0) {
                console.log("?????????????????????");
            }
            if (this.pokersPlayer.length <= 0) {
                this.judgeOutPoker();
            }
            else if (this.pokersPlayer.length > 0) {
                this.showButtons(RoomManager.ButtonsDiscard);
                this.clearShowOutPoker();
            }
        }
    };
    MultiplayerOnline.prototype.clearShowOutPoker = function () {
        if (this.southLength == 0) {
            if (GameData.gameUser.id == this.eastSeat) {
                this.clearPokerShow(this.leftSeat);
            }
            else if (GameData.gameUser.id == this.northSeat) {
                this.clearPokerShow(this.topSeat);
            }
            else if (GameData.gameUser.id == this.westSeat) {
                this.clearPokerShow(this.rightSeat);
            }
        }
        else if (this.eastLength == 0) {
            if (GameData.gameUser.id == this.southSeat) {
                this.clearPokerShow(this.rightSeat);
            }
            else if (GameData.gameUser.id == this.northSeat) {
                this.clearPokerShow(this.leftSeat);
            }
            else if (GameData.gameUser.id == this.westSeat) {
                this.clearPokerShow(this.topSeat);
            }
        }
        else if (this.northLength == 0) {
            if (GameData.gameUser.id == this.southSeat) {
                this.clearPokerShow(this.topSeat);
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                this.clearPokerShow(this.rightSeat);
            }
            else if (GameData.gameUser.id == this.westSeat) {
                this.clearPokerShow(this.leftSeat);
            }
        }
        else if (this.westLength == 0) {
            if (GameData.gameUser.id == this.southSeat) {
                this.clearPokerShow(this.leftSeat);
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                this.clearPokerShow(this.topSeat);
            }
            else if (GameData.gameUser.id == this.northSeat) {
                this.clearPokerShow(this.rightSeat);
            }
        }
    };
    MultiplayerOnline.prototype.searchOrderId = function () {
        if (GameData.gameUser.id == this.southSeat) {
            return this.eastSeat;
        }
        else if (GameData.gameUser.id == this.eastSeat) {
            return this.northSeat;
        }
        else if (GameData.gameUser.id == this.northSeat) {
            return this.westSeat;
        }
        else if (GameData.gameUser.id == this.westSeat) {
            return this.southSeat;
        }
    };
    MultiplayerOnline.prototype.searchCampId = function () {
        if (GameData.gameUser.id == this.southSeat) {
            if (this.playerCampNumber == 2) {
                return this.eastSeat;
            }
            else if (this.playerCampNumber == 3) {
                return this.northSeat;
            }
            else if (this.playerCampNumber == 4) {
                return this.westSeat;
            }
        }
        else if (GameData.gameUser.id == this.eastSeat) {
            if (this.playerCampNumber == 2) {
                return this.northSeat;
            }
            else if (this.playerCampNumber == 3) {
                return this.westSeat;
            }
            else if (this.playerCampNumber == 4) {
                return this.southSeat;
            }
        }
        else if (GameData.gameUser.id == this.northSeat) {
            if (this.playerCampNumber == 2) {
                return this.westSeat;
            }
            else if (this.playerCampNumber == 3) {
                return this.southSeat;
            }
            else if (this.playerCampNumber == 4) {
                return this.eastSeat;
            }
        }
        else if (GameData.gameUser.id == this.westSeat) {
            if (this.playerCampNumber == 2) {
                return this.southSeat;
            }
            else if (this.playerCampNumber == 3) {
                return this.eastSeat;
            }
            else if (this.playerCampNumber == 4) {
                return this.northSeat;
            }
        }
    };
    /**
    *  ????????????????????????????????????????????????
    *  seat  ???????????????
    */
    MultiplayerOnline.prototype.showTextTip = function (seat) {
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
    * ?????????????????????
    * seat ?????????
    */
    MultiplayerOnline.prototype.showPokerPlayer = function () {
        //this.clearPokerPlay();
        this.clearPokerShow(this.mySeat);
        this.playerOutPokers = new PokerPlayerContainer(PokerUtils.sortDescPokers(this.pokerSelectArray));
        this.playerOutPokers.name = "pokerPlayer";
        this.addChild(this.playerOutPokers);
    };
    /**
 * ???????????????????????????
 */
    MultiplayerOnline.prototype.showOtherOutPoker = function (seat) {
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
 * ????????????????????????????????????????????????
 * seat ???????????????
 */
    MultiplayerOnline.prototype.clearPokerShow = function (seat) {
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
    MultiplayerOnline.prototype.dealwithShowCamp = function (jsonData) {
        var _this = this;
        //let json_data = JSON.parse(JSON.stringify(jsonData.data));
        this.playerCamp = true;
        if (this.firstThrowPokerSeat == 1) {
            if (jsonData.direction == this.eastSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.leftCamp = true;
                }
            }
            else if (jsonData.direction == this.northSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.topCamp = true;
                }
            }
            else if (jsonData.direction == this.westSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.rightCamp = true;
                }
            }
        }
        else if (this.firstThrowPokerSeat == 2) {
            if (jsonData.direction == this.southSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.leftCamp = true;
                }
            }
            else if (jsonData.direction == this.northSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.rightCamp = true;
                }
            }
            else if (jsonData.direction == this.westSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.topCamp = true;
                }
            }
        }
        else if (this.firstThrowPokerSeat == 3) {
            if (jsonData.direction == this.southSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.topCamp = true;
                }
            }
            else if (jsonData.direction == this.eastSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.rightCamp = true;
                }
            }
            else if (jsonData.direction == this.westSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.leftCamp = true;
                }
            }
        }
        else if (this.firstThrowPokerSeat == 4) {
            if (jsonData.direction == this.southSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.rightCamp = true;
                }
            }
            else if (jsonData.direction == this.eastSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.topCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.topCamp = true;
                }
            }
            else if (jsonData.direction == this.northSeat) {
                if (GameData.gameUser.id == this.southSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    this.leftCamp = true;
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    this.rightCamp = true;
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    this.leftCamp = true;
                }
            }
        }
        console.log("???this.playerCamp:" + this.playerCamp + ",this.rightCamp:" + this.rightCamp + ",this.topCamp:" + this.topCamp + ",this.leftCamp:" + this.leftCamp + "???");
        //?????????????????????????????????
        var startExchangeText;
        var index = 3;
        var setAlpha = 1;
        var showThrowPokers = setInterval(function () {
            if (_this.getChildByName("startExchangeText") != null) {
                _this.removeChild(_this.getChildByName("startExchangeText"));
            }
            startExchangeText = new ShowText("????????????...", 660, 500, 100, setAlpha);
            startExchangeText.name = "startExchangeText";
            _this.addChild(startExchangeText);
            setAlpha -= 0.3;
            if (index <= 0) {
                clearInterval(showThrowPokers);
                if (_this.getChildByName("startExchangeText") != null) {
                    _this.removeChild(_this.getChildByName("startExchangeText"));
                }
                _this.sendGameServerEvents(JSON.stringify({
                    action: OnlineEvent.OE_EXCHANGE_POKER
                }));
            }
            index--;
        }, 1000);
    };
    /**
     * ???????????????????????????????????????????????????????????????????????????????????????????????????
     * ?????????
     * ????????????????????????
     */
    MultiplayerOnline.prototype.exchangePoker = function () {
        console.log("?????????this.playerCamp:" + this.playerCamp + ",this.rightCamp" + this.rightCamp + ",this.topCamp" + this.topCamp + ",this.leftCamp" + this.leftCamp);
        //??????????????????????????????
        this.isFirst = false;
        if (this.playerCamp == true && this.rightCamp == true) {
            if (GameData.gameUser.id == this.southSeat) {
                if (this.firstThrowPokerSeat == 1 || this.firstThrowPokerSeat == 2) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.RightThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (this.firstThrowPokerSeat == 2 || this.firstThrowPokerSeat == 3) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.RightThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (this.firstThrowPokerSeat == 3 || this.firstThrowPokerSeat == 4) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.RightThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (this.firstThrowPokerSeat == 4 || this.firstThrowPokerSeat == 1) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.RightThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 2;
            this.rightCampNumber = 1;
            this.topCampNumber = 4;
            this.leftCampNumber = 3;
        }
        if (this.playerCamp == true && this.topCamp == true) {
            if (GameData.gameUser.id == this.southSeat) {
                if (this.firstThrowPokerSeat == 1 || this.firstThrowPokerSeat == 3) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.TopThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (this.firstThrowPokerSeat == 2 || this.firstThrowPokerSeat == 4) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.TopThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (this.firstThrowPokerSeat == 3 || this.firstThrowPokerSeat == 1) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.TopThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (this.firstThrowPokerSeat == 4 || this.firstThrowPokerSeat == 2) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.TopThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
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
            if (GameData.gameUser.id == this.southSeat) {
                if (this.firstThrowPokerSeat == 1 || this.firstThrowPokerSeat == 4) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.LeftThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                if (this.firstThrowPokerSeat == 2 || this.firstThrowPokerSeat == 1) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.LeftThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.northSeat) {
                if (this.firstThrowPokerSeat == 3 || this.firstThrowPokerSeat == 2) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.LeftThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            else if (GameData.gameUser.id == this.westSeat) {
                if (this.firstThrowPokerSeat == 4 || this.firstThrowPokerSeat == 3) {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.LeftThrowPoker);
                }
                else {
                    this.pokersPlayer = PokerUtils.addExchangePoker(this.pokersPlayer, this.PlayerThrowPoker);
                }
            }
            this.showPortrait(this.isFirst, this.playerCamp);
            this.showOtherPortrait(2, this.isFirst, this.rightCamp);
            this.showOtherPortrait(3, this.isFirst, this.topCamp);
            this.showOtherPortrait(4, this.isFirst, this.leftCamp);
            this.playerCampNumber = 4;
            this.rightCampNumber = 3;
            this.topCampNumber = 2;
            this.leftCampNumber = 1;
        }
        //?????????????????????
        this.clearAllThrowPoker();
        //?????????????????????
        this.refreshAllPoker();
    };
    MultiplayerOnline.prototype.firstOutData = function () {
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_FIRST_OUT_POKER,
            direction: GameData.gameUser.id
        }));
    };
    /**
     * ?????????????????????
     */
    MultiplayerOnline.prototype.refreshAllPoker = function () {
        //this.clearPokers();
        this.showPokerVertival(this.mySeat);
        //????????????,?????????????????????????????????????????????????????????????????????????????????
        if (this.firstOutPokerSeat == 1) {
            if (GameData.gameUser.id == this.southSeat) {
                this.firstOutData();
                //this.playedSeat = 1;
                /*this.playedPoker = [];
                this.playedSeatId = GameData.gameUser.id;//??????????????????Id
                //this.outPokersSeat = 1;
                this.outPokersId = GameData.gameUser.id;//????????????Id
                this.showButtons(RoomManager.ButtonsDiscard);*/
            }
        }
        else if (this.firstOutPokerSeat == 2) {
            if (GameData.gameUser.id == this.eastSeat) {
                this.firstOutData();
            }
        }
        else if (this.firstOutPokerSeat == 3) {
            if (GameData.gameUser.id == this.northSeat) {
                this.firstOutData();
            }
        }
        else if (this.firstOutPokerSeat == 4) {
            if (GameData.gameUser.id == this.westSeat) {
                this.firstOutData();
            }
        }
    };
    MultiplayerOnline.prototype.filterCamp = function (id, value) {
        var isInThere = true;
        var array = new Array();
        if (Math.abs(id - this.PlayerThrowPoker[0].getId()) == 4 && value == this.PlayerThrowPoker[0].getOrderValue()) {
            isInThere = false;
            array.push(this.PlayerThrowPoker[0].getId());
            array.push(this.PlayerThrowPoker[0].getOrderValue());
        }
        if (isInThere) {
            for (var i = 0; i < this.pokersPlayer.length; i++) {
                if (Math.abs(id - this.pokersPlayer[i].getId()) == 4 && value == this.pokersPlayer[i].getOrderValue()) {
                    array.push(this.pokersPlayer[i].getId());
                    array.push(this.pokersPlayer[i].getOrderValue());
                    break;
                }
            }
        }
        return array;
    };
    MultiplayerOnline.prototype.dealwithSearchCamp = function (jsonData) {
        var json_data = JSON.parse(JSON.stringify(jsonData.data));
        var id = json_data.id; //21
        var value = json_data.value; //1
        console.log("????????????????????????id???value:" + id + "," + value + "???");
        var sendId = -1;
        var sendValue = -1;
        if (jsonData.direction == this.southSeat) {
            if (GameData.gameUser.id != this.southSeat) {
                var array = this.filterCamp(id, value);
                if (array.length == 2) {
                    sendId = array[0];
                    sendValue = array[1];
                }
            }
        }
        else if (jsonData.direction == this.eastSeat) {
            if (GameData.gameUser.id != this.eastSeat) {
                var array = this.filterCamp(id, value);
                if (array.length == 2) {
                    sendId = array[0];
                    sendValue = array[1];
                }
            }
        }
        else if (jsonData.direction == this.northSeat) {
            if (GameData.gameUser.id != this.northSeat) {
                var array = this.filterCamp(id, value);
                if (array.length == 2) {
                    sendId = array[0];
                    sendValue = array[1];
                }
            }
        }
        else if (jsonData.direction == this.westSeat) {
            if (GameData.gameUser.id != this.westSeat) {
                var array = this.filterCamp(id, value);
                if (array.length == 2) {
                    sendId = array[0];
                    sendValue = array[1];
                }
            }
        }
        console.log("???sendId:" + sendId + "sendValue:" + sendValue + "???");
        if (sendId != -1 && sendValue != -1) {
            this.sendGameServerEvents(JSON.stringify({
                action: OnlineEvent.OE_SHOW_CAMP,
                direction: GameData.gameUser.id,
                data: { id: sendId, value: sendValue }
            }));
        }
    };
    MultiplayerOnline.prototype.dealwithThrowPoker = function (jsonData) {
        var json_data = JSON.parse(JSON.stringify(jsonData.data));
        var poker = new Poker(json_data.id, json_data.value);
        var aPoker = new Array();
        aPoker.push(poker);
        if (jsonData.direction == 1) {
            if (GameData.gameUser.id == this.southSeat) {
                this.PlayerReady = true;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                this.LeftThrowPoker = aPoker;
                this.showThrowPoker(this.leftSeat, false);
                clearInterval(this.throwPokerLeft);
                this.clearThrowTimerControl(this.leftSeat);
                this.LeftReady = true;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                this.TopThrowPoker = aPoker;
                this.showThrowPoker(this.topSeat, false);
                clearInterval(this.throwPokerTop);
                this.clearThrowTimerControl(this.topSeat);
                this.TopReady = true;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                this.RightThrowPoker = aPoker;
                this.showThrowPoker(this.rightSeat, false);
                clearInterval(this.throwPokerRight);
                this.clearThrowTimerControl(this.rightSeat);
                this.RightReady = true;
            }
        }
        else if (jsonData.direction == 2) {
            if (GameData.gameUser.id == this.southSeat) {
                this.RightThrowPoker = aPoker;
                this.showThrowPoker(this.rightSeat, false);
                clearInterval(this.throwPokerRight);
                this.clearThrowTimerControl(this.rightSeat);
                this.RightReady = true;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                this.PlayerReady = true;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                this.LeftThrowPoker = aPoker;
                this.showThrowPoker(this.leftSeat, false);
                clearInterval(this.throwPokerLeft);
                this.clearThrowTimerControl(this.leftSeat);
                this.LeftReady = true;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                this.TopThrowPoker = aPoker;
                this.showThrowPoker(this.topSeat, false);
                clearInterval(this.throwPokerTop);
                this.clearThrowTimerControl(this.topSeat);
                this.TopReady = true;
            }
        }
        else if (jsonData.direction == 3) {
            if (GameData.gameUser.id == this.southSeat) {
                this.TopThrowPoker = aPoker;
                this.showThrowPoker(this.topSeat, false);
                clearInterval(this.throwPokerTop);
                this.clearThrowTimerControl(this.topSeat);
                this.TopReady = true;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                this.RightThrowPoker = aPoker;
                this.showThrowPoker(this.rightSeat, false);
                clearInterval(this.throwPokerRight);
                this.clearThrowTimerControl(this.rightSeat);
                this.RightReady = true;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                this.PlayerReady = true;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                this.LeftThrowPoker = aPoker;
                this.showThrowPoker(this.leftSeat, false);
                clearInterval(this.throwPokerLeft);
                this.clearThrowTimerControl(this.leftSeat);
                this.LeftReady = true;
            }
        }
        else if (jsonData.direction == 4) {
            if (GameData.gameUser.id == this.southSeat) {
                this.LeftThrowPoker = aPoker;
                this.showThrowPoker(this.leftSeat, false);
                clearInterval(this.throwPokerLeft);
                this.clearThrowTimerControl(this.leftSeat);
                this.LeftReady = true;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                this.TopThrowPoker = aPoker;
                this.showThrowPoker(this.topSeat, false);
                clearInterval(this.throwPokerTop);
                this.clearThrowTimerControl(this.topSeat);
                this.TopReady = true;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                this.RightThrowPoker = aPoker;
                this.showThrowPoker(this.rightSeat, false);
                clearInterval(this.throwPokerRight);
                this.clearThrowTimerControl(this.rightSeat);
                this.RightReady = true;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                this.PlayerReady = true;
            }
        }
        if (this.PlayerReady && this.RightReady && this.TopReady && this.LeftReady) {
            this.showEvreyoneThrowPoker();
            this.PlayerReady = false;
            this.RightReady = false;
            this.TopReady = false;
            this.LeftReady = false;
        }
    };
    /**
     * ?????????????????????????????????
     */
    MultiplayerOnline.prototype.showEvreyoneThrowPoker = function () {
        var _this = this;
        //???????????????
        this.clearAllThrowPoker();
        this.showThrowPoker(this.mySeat, true);
        this.showThrowPoker(this.rightSeat, true);
        this.showThrowPoker(this.topSeat, true);
        this.showThrowPoker(this.leftSeat, true);
        var index = 3;
        var showPokers = setInterval(function () {
            if (index <= 0) {
                clearInterval(showPokers);
                _this.searchMyCamp();
            }
            index--;
        }, 1000);
    };
    MultiplayerOnline.prototype.searchMyCamp = function () {
        if (this.firstThrowPokerSeat == 1) {
            if (GameData.gameUser.id == this.southSeat) {
                this.sendThrowEvent();
            }
        }
        else if (this.firstThrowPokerSeat == 2) {
            if (GameData.gameUser.id == this.eastSeat) {
                this.sendThrowEvent();
            }
        }
        else if (this.firstThrowPokerSeat == 3) {
            if (GameData.gameUser.id == this.northSeat) {
                this.sendThrowEvent();
            }
        }
        else if (this.firstThrowPokerSeat == 4) {
            if (GameData.gameUser.id == this.westSeat) {
                this.sendThrowEvent();
            }
        }
    };
    MultiplayerOnline.prototype.sendThrowEvent = function () {
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_SEARCH_CAMP,
            direction: GameData.gameUser.id,
            data: { id: this.PlayerThrowPoker[0].getId(), value: this.PlayerThrowPoker[0].getOrderValue() }
        }));
    };
    MultiplayerOnline.prototype.dealwithSwitchPoker = function (jsonData) {
        var switchPokerIndex = jsonData.switchIndex;
        //???????????????
        this.clearDrawPokers();
        this.drawpoker = new PokerDrawContainer(this, this.pokers, false, switchPokerIndex); //???true?????????????????????????????????
        this.drawpoker.name = "drawpoker";
        this.addChild(this.drawpoker);
        this.pokers = (this.pokers.slice(switchPokerIndex, this.pokers.length)).concat(this.pokers.slice(0, switchPokerIndex));
        this.showDealPokers();
    };
    MultiplayerOnline.prototype.dealwithDrawerPoker = function (json_data) {
        this.drawPokerIndex = json_data.index;
        this.drawPokerId = json_data.id;
        this.drawPokerValue = json_data.value;
        this.clearDrawPokers();
        this.drawpoker = new PokerDrawContainer(this, this.pokers, false, this.drawPokerIndex); //???true?????????????????????????????????
        this.drawpoker.name = "drawpoker";
        this.addChild(this.drawpoker);
        //??????????????????
        this.pokerDrawArray = new Array();
        if (this.drawPokerValue == 14 || this.drawPokerValue == 15) {
            console.log("judgeDrawer");
            this.judgeDrawer(); //???????????????
        }
        else {
            this.showDealPokers();
        }
    };
    /**
     * ??????????????????????????????????????????
     */
    MultiplayerOnline.prototype.showDealPokers = function () {
        var _this = this;
        var count = 3;
        var showDrawer = setInterval(function () {
            if (_this.playPokerCount > 1) {
                console.log("??????" + count + "????????????????????????????????????");
            }
            else if (_this.playPokerCount == 1) {
                console.log("??????" + count + "?????????????????????????????????");
            }
            count--;
            if (count == 0) {
                clearInterval(showDrawer);
                if (_this.playPokerCount > 1) {
                    console.log("??????????????????????????????");
                    _this.dealPokersRestart();
                }
                else if (_this.playPokerCount == 1) {
                    console.log("????????????????????????");
                    _this.dealPokers();
                }
            }
        }, 1000);
    };
    MultiplayerOnline.prototype.dealPokersRestart = function () {
        //????????????
        if (this.firstThrowPokerSeat == 1) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (GameData.gameUser.id == this.southSeat) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
        }
        else if (this.firstThrowPokerSeat == 2) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (GameData.gameUser.id == this.southSeat) {
                    if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
        }
        else if (this.firstThrowPokerSeat == 3) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (GameData.gameUser.id == this.southSeat) {
                    if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
        }
        else if (this.firstThrowPokerSeat == 4) {
            for (var i = this.pokers.length - 1; i >= 0; i--) {
                if (GameData.gameUser.id == this.southSeat) {
                    if (i % 4 == 2) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.eastSeat) {
                    if (i % 4 == 1) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.northSeat) {
                    if (i % 4 == 0) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
                else if (GameData.gameUser.id == this.westSeat) {
                    if (i % 4 == 3) {
                        this.pokersPlayer.push(this.pokers[i]);
                    }
                }
            }
        }
        //??????????????????????????????
        this.pokersPlayer = PokerUtils.sortDescPokers(this.pokersPlayer);
        //??????????????????????????????
        this.clearDrawPokers();
        //??????????????????
        this.show();
    };
    /**
     * ?????????????????????????????????
     * ????????????this.drawPokerIndex??????
     * i?????????????????????i????????????????????????????????????????????????????????????????????????????????????
     * ???????????????????????????????????????????????????????????????????????????????????????????????????i????????????
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * ???????????????????????????????????????????????????????????????this.drawPokerRandom
     * ?????????????????????????????????
     * this.drawPokerValue % 4
     */
    MultiplayerOnline.prototype.dealPokers = function () {
        //?????????????????????
        for (var i = 0; i < this.pokers.length; i++) {
            if (Math.abs(this.pokers[i].getId() - this.drawPokerId) == 4
                && this.pokers[i].getOrderValue() - this.drawPokerValue == 0) {
                console.log("???????????????");
                this.darkPokerIndex = i;
                this.darkPokerId = this.pokers[i].getId();
                this.darkPokerValue = this.drawPokerValue;
            }
        }
        //
        console.log("??????---this.darkPokerIndex:" + this.darkPokerIndex + ",this.darkPokerId:" + this.darkPokerId + ",this.darkPokerValue:" + this.darkPokerValue);
        //??????
        if (this.drawPokerRandom == 1) {
            if (this.drawPokerValue % 4 == 1) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
        }
        else if (this.drawPokerRandom == 2) {
            if (this.drawPokerValue % 4 == 1) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
        }
        else if (this.drawPokerRandom == 3) {
            if (this.drawPokerValue % 4 == 1) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
        }
        else if (this.drawPokerRandom == 4) {
            if (this.drawPokerValue % 4 == 1) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 2) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 3) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
            else if (this.drawPokerValue % 4 == 0) {
                //???????????????
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
                //???????????????
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
                //????????????
                for (var i = this.pokers.length - 1; i >= 0; i--) {
                    if (GameData.gameUser.id == this.southSeat) {
                        if (i % 4 == 1) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.eastSeat) {
                        if (i % 4 == 0) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.northSeat) {
                        if (i % 4 == 3) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                    else if (GameData.gameUser.id == this.westSeat) {
                        if (i % 4 == 2) {
                            this.pokersPlayer.push(this.pokers[i]);
                        }
                    }
                }
            }
        }
        console.log(">>>>>????????????????????????" + this.firstThrowPokerSeat + ",>>>>>>>>????????????????????????" + this.firstOutPokerSeat);
        //??????????????????????????????
        this.pokersPlayer = PokerUtils.sortDescPokers(this.pokersPlayer);
        //??????????????????????????????
        this.clearDrawPokers();
        //??????????????????
        this.show();
    };
    /**
     * ????????????????????????
     */
    MultiplayerOnline.prototype.show = function () {
        //??????????????????????????????????????????????????????
        this.showThrowOrOutPokerTitle();
        /** ?????????????????? */
        this.initPokers();
        this.showCount(this.mySeat, this.pokersPlayer.length);
        this.showCount(this.rightSeat, this.pokersPlayer.length);
        this.showCount(this.topSeat, this.pokersPlayer.length);
        this.showCount(this.leftSeat, this.pokersPlayer.length);
    };
    /**
     * ??????????????????????????????????????????
     * 1.????????????????????????
     * 2.???????????????????????????????????????
     */
    MultiplayerOnline.prototype.initPokers = function () {
        var _this = this;
        var index = 27;
        var pokers = new Array();
        var i = 0;
        var startThrowText;
        var setAlpha = 1;
        var showPokers = setInterval(function () {
            console.log("?????????", i);
            pokers.push(_this.pokersPlayer[i]);
            _this.clearPokers();
            StandaloneModel.mypoker = new PokerContainer(_this, pokers, StandaloneModel.isLeftHand);
            StandaloneModel.mypoker.name = "mypoker";
            _this.addChild(StandaloneModel.mypoker);
            _this.showCount(_this.mySeat, i + 1);
            _this.showCount(_this.rightSeat, i + 1);
            _this.showCount(_this.topSeat, i + 1);
            _this.showCount(_this.leftSeat, i + 1);
            i++;
            if (i >= 17 && i < 27) {
                if (_this.getChildByName("startThrowText") != null) {
                    _this.removeChild(_this.getChildByName("startThrowText"));
                }
                startThrowText = new ShowText("????????????...", 580, 500, 130, setAlpha);
                startThrowText.name = "startThrowText";
                _this.addChild(startThrowText);
                setAlpha -= 0.1;
            }
            else if (i >= 27) {
                clearInterval(showPokers);
                if (_this.getChildByName("startThrowText") != null) {
                    _this.removeChild(_this.getChildByName("startThrowText"));
                }
                console.log("????????????");
                _this.showAutoThrowPoker();
            }
        }, 300);
    };
    /**
     * ???????????????????????????
     */
    MultiplayerOnline.prototype.showAutoThrowPoker = function () {
        this.clearAllThrowPoker();
        //??????AI??????????????????????????????,??????showThrowTimer
        this.throwPokerControlForMe(this.mySeat);
        this.throwPokerControlForRight(this.rightSeat);
        this.throwPokerControlForTop(this.topSeat);
        this.throwPokerControlForLeft(this.leftSeat);
        this.showButtons(RoomManager.ButtonsToThrowAPoker);
    };
    /**
    * ???????????????
    * ?????????????????????????????????????????????????????????
    * ?????????????????????????????????????????????????????????????????????????????????????????????
    */
    MultiplayerOnline.prototype.buttonDiuPai = function (evt) {
        //?????????????????????
        //???????????????????????????????????????????????????????????????
        if (PokerTypeUtils.isSingle(this.pokerSelectArray) == -1) {
            console.log("?????????????????????");
            return;
        }
        //??????????????????
        if (this.pokerSelectArray[0].getOrderValue() > 13) {
            console.log("????????????????????????");
            return;
        }
        //???????????????????????????????????????,????????????????????????
        if (this.firstThrowPokerSeat == 1) {
            if (GameData.gameUser.id == this.southSeat) {
                if (this.isThrower()) {
                    return;
                }
            }
        }
        if (this.firstThrowPokerSeat == 2) {
            if (GameData.gameUser.id == this.eastSeat) {
                if (this.isThrower()) {
                    return;
                }
            }
        }
        if (this.firstThrowPokerSeat == 3) {
            if (GameData.gameUser.id == this.northSeat) {
                if (this.isThrower()) {
                    return;
                }
            }
        }
        if (this.firstThrowPokerSeat == 4) {
            if (GameData.gameUser.id == this.westSeat) {
                if (this.isThrower()) {
                    return;
                }
            }
        }
        //????????????
        this.clearButtons();
        //??????????????????????????????
        this.PlayerThrowPoker = this.pokerSelectArray;
        //?????????????????????????????????????????????????????????,???????????????
        this.showThrowPoker(this.mySeat, false);
        //???????????????????????????
        this.pokerSelectArray = new Array();
        this.clearButtons();
        //?????????????????????????????????????????????????????????????????????
        console.log("????????????1");
        //???????????????
        this.pokersPlayer = PokerUtils.removePokers(this.pokersPlayer, this.PlayerThrowPoker);
        //??????????????????
        this.showPokerVertival(this.mySeat);
        clearInterval(this.throwPokerMe);
        this.clearThrowTimerControl(this.mySeat);
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_SHOW_THROW_POKER,
            direction: this.judgeMyDirection(),
            data: { id: this.PlayerThrowPoker[0].getId(), value: this.PlayerThrowPoker[0].getOrderValue() }
        }));
    };
    MultiplayerOnline.prototype.isThrower = function () {
        var abc = false;
        for (var i = 0; i < this.pokersPlayer.length; i++) {
            if (Math.abs(this.pokerSelectArray[0].getId() - this.pokersPlayer[i].getId()) == 4 &&
                this.pokerSelectArray[0].getOrderValue() == this.pokersPlayer[i].getOrderValue()) {
                abc = true;
                break;
            }
        }
        return abc;
    };
    /**
     * ?????????????????????
     * seat ?????????
     */
    MultiplayerOnline.prototype.showThrowPoker = function (seat, isShow) {
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
    * ???????????????????????????
    * seat ???????????????
    */
    MultiplayerOnline.prototype.showPokerVertival = function (seat) {
        this.clearPokerVertical(seat);
        if (seat == 1) {
            StandaloneModel.mypoker = new PokerContainer(this, this.pokersPlayer, StandaloneModel.isLeftHand);
            StandaloneModel.mypoker.name = "mypoker";
            this.addChild(StandaloneModel.mypoker);
        }
    };
    /**
 * ???????????????????????????
 * ??????????????????????????????
 * seat  ???????????????
 */
    MultiplayerOnline.prototype.clearPokerVertical = function (seat) {
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
     * ?????????????????????
     */
    MultiplayerOnline.prototype.throwPokerControlForMe = function (seat) {
        var _this = this;
        var count = 10;
        this.throwPokerMe = setInterval(function () {
            _this.showThrowTimer(count, seat);
            count--;
            if (count < 0) {
                clearInterval(_this.throwPokerMe);
            }
        }, 1000);
    };
    MultiplayerOnline.prototype.throwPokerControlForRight = function (seat) {
        var _this = this;
        var count = 10;
        this.throwPokerRight = setInterval(function () {
            _this.showThrowTimer(count, seat);
            count--;
            if (count < 0) {
                clearInterval(_this.throwPokerRight);
            }
        }, 1000);
    };
    MultiplayerOnline.prototype.throwPokerControlForTop = function (seat) {
        var _this = this;
        var count = 10;
        this.throwPokerTop = setInterval(function () {
            _this.showThrowTimer(count, seat);
            count--;
            if (count < 0) {
                clearInterval(_this.throwPokerTop);
            }
        }, 1000);
    };
    MultiplayerOnline.prototype.throwPokerControlForLeft = function (seat) {
        var _this = this;
        var count = 10;
        this.throwPokerLeft = setInterval(function () {
            _this.showThrowTimer(count, seat);
            count--;
            if (count < 0) {
                clearInterval(_this.throwPokerLeft);
            }
        }, 1000);
    };
    /**
     * ????????????????????????????????????
     */
    MultiplayerOnline.prototype.showThrowTimer = function (index, seat) {
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
      * ????????????????????????????????????
      */
    MultiplayerOnline.prototype.clearThrowTimerControl = function (seat) {
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
     * ???????????????????????????
     */
    MultiplayerOnline.prototype.clearAllThrowPoker = function () {
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
     * ???????????????????????????????????????
     * seat ???????????????
     * count ???????????????
     */
    MultiplayerOnline.prototype.showCount = function (seat, count) {
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
 * ???????????????????????????????????????
 * seat ???????????????
 */
    MultiplayerOnline.prototype.clearCount = function (seat) {
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
    * ??????????????????
    */
    MultiplayerOnline.prototype.clearPokers = function () {
        if (this.getChildByName("mypoker") != null) {
            this.removeChild(this.getChildByName("mypoker"));
        }
    };
    /**
     * ?????????????????????????????????
     */
    MultiplayerOnline.prototype.showThrowOrOutPokerTitle = function () {
        this.cleatFirstTitle();
        var a = this.filterThrowAndOueTitle(this.firstThrowPokerSeat);
        //???
        console.log("????????????????????????"); //this.firstThrowPokerSeat  this.firstOutPokerSeat
        this.fistThrowTitle = new FirstThrowTitleContainer(a);
        this.fistThrowTitle.name = "fistThrowTitle";
        this.addChild(this.fistThrowTitle);
        var b = this.filterThrowAndOueTitle(this.firstOutPokerSeat);
        //???
        this.fistOutTitle = new FirstOutTitleContainer(b);
        this.fistOutTitle.name = "fistOutTitle";
        this.addChild(this.fistOutTitle);
    };
    MultiplayerOnline.prototype.filterThrowAndOueTitle = function (value) {
        var Seat = -1;
        if (value == 1) {
            if (GameData.gameUser.id == this.southSeat) {
                Seat = 1;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                Seat = 4;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                Seat = 3;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                Seat = 2;
            }
        }
        else if (value == 2) {
            if (GameData.gameUser.id == this.southSeat) {
                Seat = 2;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                Seat = 1;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                Seat = 4;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                Seat = 3;
            }
        }
        else if (value == 3) {
            if (GameData.gameUser.id == this.southSeat) {
                Seat = 3;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                Seat = 2;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                Seat = 1;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                Seat = 4;
            }
        }
        else if (value == 4) {
            if (GameData.gameUser.id == this.southSeat) {
                Seat = 4;
            }
            else if (GameData.gameUser.id == this.eastSeat) {
                Seat = 3;
            }
            else if (GameData.gameUser.id == this.northSeat) {
                Seat = 2;
            }
            else if (GameData.gameUser.id == this.westSeat) {
                Seat = 1;
            }
        }
        return Seat;
    };
    /**
  * ?????????????????????????????????
  */
    MultiplayerOnline.prototype.cleatFirstTitle = function () {
        if (this.getChildByName("fistThrowTitle") != null) {
            this.removeChild(this.getChildByName("fistThrowTitle"));
        }
        if (this.getChildByName("fistOutTitle") != null) {
            this.removeChild(this.getChildByName("fistOutTitle"));
        }
    };
    MultiplayerOnline.prototype.playerDataUpdate = function (jsonData) {
        var json_data = JSON.parse(JSON.stringify(jsonData.data));
        if (GameData.gameUser.id == this.southSeat) {
            if (jsonData.direction == this.southSeat) {
                this.user.setName(json_data.name);
                this.user.setSex(json_data.sex);
                this.playerIndex = json_data.index;
            }
            else if (jsonData.direction == this.eastSeat) {
                this.userRight.setName(json_data.name);
                this.userRight.setSex(json_data.sex);
                this.rightIndex = json_data.index;
            }
            else if (jsonData.direction == this.northSeat) {
                this.userTop.setName(json_data.name);
                this.userTop.setSex(json_data.sex);
                this.topIndex = json_data.index;
            }
            else if (jsonData.direction == this.westSeat) {
                this.userLeft.setName(json_data.name);
                this.userLeft.setSex(json_data.sex);
                this.leftIndex = json_data.index;
            }
        }
        else if (GameData.gameUser.id == this.eastSeat) {
            if (jsonData.direction == this.southSeat) {
                this.userLeft.setName(json_data.name);
                this.userLeft.setSex(json_data.sex);
                this.leftIndex = json_data.index;
            }
            else if (jsonData.direction == this.eastSeat) {
                this.user.setName(json_data.name);
                this.user.setSex(json_data.sex);
                this.playerIndex = json_data.index;
            }
            else if (jsonData.direction == this.northSeat) {
                this.userRight.setName(json_data.name);
                this.userRight.setSex(json_data.sex);
                this.rightIndex = json_data.index;
            }
            else if (jsonData.direction == this.westSeat) {
                this.userTop.setName(json_data.name);
                this.userTop.setSex(json_data.sex);
                this.topIndex = json_data.index;
            }
        }
        else if (GameData.gameUser.id == this.northSeat) {
            if (jsonData.direction == this.southSeat) {
                this.userTop.setName(json_data.name);
                this.userTop.setSex(json_data.sex);
                this.topIndex = json_data.index;
            }
            else if (jsonData.direction == this.eastSeat) {
                this.userLeft.setName(json_data.name);
                this.userLeft.setSex(json_data.sex);
                this.leftIndex = json_data.index;
            }
            else if (jsonData.direction == this.northSeat) {
                this.user.setName(json_data.name);
                this.user.setSex(json_data.sex);
                this.playerIndex = json_data.index;
            }
            else if (jsonData.direction == this.westSeat) {
                this.userRight.setName(json_data.name);
                this.userRight.setSex(json_data.sex);
                this.rightIndex = json_data.index;
            }
        }
        else if (GameData.gameUser.id == this.westSeat) {
            if (jsonData.direction == this.southSeat) {
                this.userRight.setName(json_data.name);
                this.userRight.setSex(json_data.sex);
                this.rightIndex = json_data.index;
            }
            else if (jsonData.direction == this.eastSeat) {
                this.userTop.setName(json_data.name);
                this.userTop.setSex(json_data.sex);
                this.topIndex = json_data.index;
            }
            else if (jsonData.direction == this.northSeat) {
                this.userLeft.setName(json_data.name);
                this.userLeft.setSex(json_data.sex);
                this.leftIndex = json_data.index;
            }
            else if (jsonData.direction == this.westSeat) {
                this.user.setName(json_data.name);
                this.user.setSex(json_data.sex);
                this.playerIndex = json_data.index;
            }
        }
        //?????????????????????
        this.showPortraits();
        this.LoadingButAction();
    };
    /**
 * ?????????????????????,???????????????????????????????????????,?????????this.init()????????????
 */
    MultiplayerOnline.prototype.LoadingButAction = function () {
        //????????????
        var setButton = new Button("gamesetting", 1830, 40, 50, 50);
        this.addChild(setButton);
        setButton.touchEnabled = true;
        setButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetButtonClick, this);
        //????????????action
        console.log("????????????");
        this.init();
    };
    /**
     * ??????this.playPokerCount???????????????
     * ???????????????????????????????????????????????????
     * ?????????????????????????????????????????????
     */
    MultiplayerOnline.prototype.init = function () {
        var _this = this;
        //egret.getTimer();
        console.log("?????????????????????????????????" + this.firstThrowPokerSeat + "," + this.firstOutPokerSeat);
        var startGameText;
        var setAlpha = 1;
        var show_time = 3;
        var gameCountShow = setInterval(function () {
            show_time--;
            if (_this.getChildByName("startGameText") != null) {
                _this.removeChild(_this.getChildByName("startGameText"));
            }
            startGameText = new ShowText("???" + _this.playPokerCount + "??????????????????", 600, 420, 130, setAlpha);
            startGameText.name = "startGameText";
            _this.addChild(startGameText);
            setAlpha -= 0.3;
            if (show_time == 0) {
                clearInterval(gameCountShow);
                if (_this.getChildByName("startGameText") != null) {
                    _this.removeChild(_this.getChildByName("startGameText"));
                }
                //?????????????????????????????????1????????????
                _this.drawPoker();
            }
        }, 1000);
    };
    /**
     * ??????108????????????????????????????????????
     * ??????????????????????????????????????????1??????????????????????????????1???????????????
     * ????????????????????????????????????1??????????????????????????????????????????1???????????????
     */
    MultiplayerOnline.prototype.drawPoker = function () {
        var _this = this;
        //???????????????????????????????????????
        this.showPortraits();
        var index = 108;
        var drawpokers = new Array();
        var i = 0;
        var selectPoker = setInterval(function () {
            drawpokers.push(_this.pokers[i]);
            _this.clearDrawPokers();
            _this.drawpoker = new PokerDrawContainer(_this, drawpokers, false, -1); //???true?????????????????????????????????
            _this.drawpoker.name = "drawpoker";
            _this.addChild(_this.drawpoker);
            i++;
            if (i >= 108) {
                clearInterval(selectPoker);
                //????????????????????????1????????????????????????1???????????????
                if (_this.playPokerCount == 1) {
                    _this.judgeDrawer();
                }
                else if (_this.playPokerCount > 1) {
                    console.log("?????????????????????????????????????????????");
                    //?????????????????????????????????????????????????????????1?????????????????????,??????1?????????????????????
                    _this.judgeSwitch();
                }
            }
        }, 80);
    };
    MultiplayerOnline.prototype.judgeSwitch = function () {
        if (this.firstThrowPokerSeat == 1) {
            if (GameData.gameUser.id == this.westSeat) {
                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
            }
        }
        else if (this.firstThrowPokerSeat == 2) {
            if (GameData.gameUser.id == this.southSeat) {
                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
            }
        }
        else if (this.firstThrowPokerSeat == 3) {
            if (GameData.gameUser.id == this.eastSeat) {
                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
            }
        }
        else if (this.firstThrowPokerSeat == 4) {
            if (GameData.gameUser.id == this.northSeat) {
                this.showButtons(RoomManager.ButtonsToSwitchAPoker);
            }
        }
    };
    MultiplayerOnline.prototype.judgeDrawer = function () {
        console.log("?????????????????????????????????????????????");
        //?????????????????????????????????????????????1?????????????????????,??????1?????????????????????
        if (this.drawPokerRandom == 1) {
            if (GameData.gameUser.id == this.southSeat) {
                this.showButtons(RoomManager.ButtonsToDrawAPoker);
            }
        }
        else if (this.drawPokerRandom == 2) {
            if (GameData.gameUser.id == this.eastSeat) {
                this.showButtons(RoomManager.ButtonsToDrawAPoker);
            }
        }
        else if (this.drawPokerRandom == 3) {
            if (GameData.gameUser.id == this.northSeat) {
                this.showButtons(RoomManager.ButtonsToDrawAPoker);
            }
        }
        else if (this.drawPokerRandom == 4) {
            if (GameData.gameUser.id == this.westSeat) {
                this.showButtons(RoomManager.ButtonsToDrawAPoker);
            }
        }
    };
    MultiplayerOnline.prototype.judgeMyDirection = function () {
        if (GameData.gameUser.id == this.southSeat) {
            return 1;
        }
        else if (GameData.gameUser.id == this.eastSeat) {
            return 2;
        }
        else if (GameData.gameUser.id == this.northSeat) {
            return 3;
        }
        else if (GameData.gameUser.id == this.westSeat) {
            return 4;
        }
    };
    /*    private playerDataexChange(id:number):void{
            let my_direction:string = "???";
            if(id === this.southSeat){//?????????????????????
                my_direction = "south";
            }else if(id === this.eastSeat){//?????????????????????
                my_direction = "east";
            }else if(id === this.northSeat){//?????????????????????
                my_direction = "north";
            }else if(id === this.westSeat){//?????????????????????
                my_direction = "west";
        }
    }*/
    /**
    * ????????????1????????????
    * ???????????????????????????????????????
    * ??????????????????
    *  1.??????????????????
    *  2.???????????????
    *  3.??????????????????
    *  4.?????????????????????
    *  5.??????????????????
    */
    MultiplayerOnline.prototype.buttonChouPai = function (evt) {
        //??????????????????
        this.clearButtons();
        console.log("?????????????????????BUG--this.pokerDrawArray.length:" + this.pokerDrawArray.length + ",id:" + this.pokerDrawArray[0].getId());
        //????????????id?????????
        for (var i = 0; i < this.pokers.length; i++) {
            if (this.pokers[i].getId() == this.pokerDrawArray[0].getId()) {
                this.drawPokerIndex = i;
                this.drawPokerId = this.pokerDrawArray[0].getId();
                this.drawPokerValue = this.pokerDrawArray[0].getOrderValue();
                console.log("index:" + this.drawPokerIndex + ",id:" + this.drawPokerId + ",value:" + this.drawPokerValue);
                //????????????????????????
                break;
            }
        }
        //console.log("????????????");
        //???i?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        //???????????????????????????????????????????????????????????????????????????????????????????????????????????????
        /*if(this.drawPokerValue == 14 || this.drawPokerValue == 15){
            this.showButtons(RoomManager.ButtonsToDrawAPoker);
        }else{
            this.showDealPokers();
        }
*/
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_SHOW_DRAWER_POKER,
            data: { index: this.drawPokerIndex, id: this.drawPokerId, value: this.drawPokerValue }
        }));
    };
    /**
     * ????????????1????????????
     * ???????????????????????????????????????
     * ??????????????????
     *  1.??????????????????
     *  4.?????????????????????????????????
     *  5.??????????????????
     */
    MultiplayerOnline.prototype.buttonQiePai = function (evt) {
        //??????????????????
        this.clearButtons();
        var switchPokerIndex = -1;
        //????????????id?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        for (var i = 0; i < this.pokers.length; i++) {
            if (this.pokers[i].getId() == this.pokerDrawArray[0].getId()) {
                switchPokerIndex = i;
                break;
            }
        }
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_SHOW_SWITCH_POKER,
            switchIndex: switchPokerIndex
        }));
    };
    /**
     * ???????????????????????????
     */
    MultiplayerOnline.prototype.showPortraits = function () {
        /** ?????????????????? */
        this.showPortrait(this.isFirst, this.playerCamp);
        /** ??????right?????? */
        this.showOtherPortrait(this.rightSeat, this.isFirst, this.rightCamp);
        /** ??????top?????? */
        this.showOtherPortrait(this.topSeat, this.isFirst, this.topCamp);
        /** ??????left?????? */
        this.showOtherPortrait(this.leftSeat, this.isFirst, this.leftCamp);
    };
    /**
     * ??????????????????
     */
    MultiplayerOnline.prototype.showPortrait = function (isFirst, isCamp) {
        this.clearPortrait();
        this.portraitPlayer = new PortraitContainer(this.user, this.playerIndex, isFirst, isCamp);
        this.portraitPlayer.name = "portraitPlayer";
        this.addChild(this.portraitPlayer);
    };
    /**
 * ??????????????????
 */
    MultiplayerOnline.prototype.clearDrawPokers = function () {
        if (this.getChildByName("drawpoker") != null) {
            this.removeChild(this.getChildByName("drawpoker"));
        }
    };
    /**
     * ??????????????????
     */
    MultiplayerOnline.prototype.clearPortrait = function () {
        if (this.getChildByName("portraitPlayer") != null) {
            this.removeChild(this.getChildByName("portraitPlayer"));
        }
    };
    /**
     * ????????????????????????
     * seat ???????????????
     * isCamp ?????????????????????
     */
    MultiplayerOnline.prototype.showOtherPortrait = function (seat, isFirst, isCamp) {
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
     * ????????????????????????
     * seat ???????????????
     */
    MultiplayerOnline.prototype.clearOtherPortrait = function (seat) {
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
* ?????????????????????????????????
*/
    MultiplayerOnline.prototype.drawPokerClickUp = function (evt) {
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
        //???????????????y????????????????????????
        var id = parseInt(draggedObject.name.split(",")[0]);
        var orderValue = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y) {
            draggedObject.y = 0;
            this.pokerDrawArray.push(new Poker(id, orderValue));
            console.log("???:??????????????????" + id + "," + orderValue + "," + this.pokerDrawArray.length);
        }
        else {
            draggedObject.y = y;
            var poker = new Poker(id, orderValue);
            console.log("???poker:" + poker.toString() + "|array:" + this.pokerDrawArray);
            this.pokerDrawArray = PokerUtils.removePokers(this.pokerDrawArray, [poker]);
            console.log("???removedArray:" + this.pokerDrawArray);
        }
    };
    /**
     * ?????????????????????????????????
     */
    MultiplayerOnline.prototype.drawPokerClickDown = function (evt) {
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
        //???????????????y????????????????????????
        var id = parseInt(draggedObject.name.split(",")[0]);
        var orderValue = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y + p.pokerDrawAddy) {
            draggedObject.y = p.pokerDrawAddy;
            this.pokerDrawArray.push(new Poker(id, orderValue));
            console.log("???:??????????????????" + id + "," + orderValue + "," + this.pokerDrawArray.length);
        }
        else {
            draggedObject.y = y + p.pokerDrawAddy;
            var poker = new Poker(id, orderValue);
            console.log("???poker:" + poker.toString() + "|array:" + this.pokerDrawArray);
            this.pokerDrawArray = PokerUtils.removePokers(this.pokerDrawArray, [poker]);
            console.log("???removedArray:" + this.pokerDrawArray);
        }
    };
    /**
     * ???????????????????????????
     */
    MultiplayerOnline.prototype.pokerClick = function (evt) {
        var p = RES.getRes("layout_json").poker;
        var y = p.pokerUpMove;
        var draggedObject = evt.currentTarget;
        console.log("???????????????draggedObject:" + draggedObject.name);
        //???????????????y????????????????????????
        var id = parseInt(draggedObject.name.split(",")[0]);
        var orderValue = parseInt(draggedObject.name.split(",")[1]);
        if (draggedObject.y == y) {
            draggedObject.y = 0;
            this.pokerSelectArray.push(new Poker(id, orderValue));
            console.log("this.pokerSelectArray?????????????????????????????????" + this.pokerSelectArray.length);
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
     * ????????????
     */
    MultiplayerOnline.prototype.buttonRestart = function () {
        this.clearGameResultShow();
        this.clearButtons();
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_READY,
            direction: GameData.gameUser.id
        }));
    };
    MultiplayerOnline.prototype.returnInit = function () {
        this.returnReady();
        //1.?????????????????????????????????
        this.pokersPlayer = new Array();
        //2.????????????????????????
        this.clearPokerVertical(this.mySeat);
        //3.??????????????????????????????????????????????????????
        this.clearPokerShow(1);
        this.clearPokerShow(2);
        this.clearPokerShow(3);
        this.clearPokerShow(4);
        this.pokerSelectArray = new Array();
        this.TopOutPokers = new Array();
        this.RightOutPokers = new Array();
        this.LeftOutPokers = new Array();
        //4.?????????????????????????????????????????????????????????
        this.PlayerThrowPoker = new Array();
        this.RightThrowPoker = new Array();
        this.TopThrowPoker = new Array();
        this.LeftThrowPoker = new Array();
        //5.?????????
        this.clearCount(1);
        this.clearCount(2);
        this.clearCount(3);
        this.clearCount(4);
        //7.??????????????????
        this.clearCamp();
        //8.????????????????????????
        this.cleatFirstTitle();
        //?????????+1????????????1
        this.playPokerCount++;
        //?????????????????????
        //this.pokers = PokerUtils.getRandomPokers();
        //??????????????????
        this.pokerDrawArray = new Array();
        //console.log("????????????????????????????????????????????????????????????"+this.firstThrowPokerSeat+",out:"+this.firstOutPokerSeat);
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
        this.sendGameServerEvents(JSON.stringify({
            action: OnlineEvent.OE_AGAINGAME
        }));
        //????????????action
        console.log("??????????????????");
        this.init();
    };
    /**
     * ???????????????????????????
     */
    MultiplayerOnline.prototype.buttonGameOver = function () {
        this.clearGameResultShow();
        console.log("????????????");
        var gameHall = new GameHall(this.user);
        gameHall.name = "gameHall";
        this.parent.addChild(gameHall);
        this.parent.removeChild(this);
    };
    /**
 * ????????????false
 */
    MultiplayerOnline.prototype.clearCamp = function () {
        this.isFirst = true;
        this.playerCamp = false;
        this.rightCamp = false;
        this.topCamp = false;
        this.leftCamp = false;
    };
    /**
     * ??????????????????????????????
     */
    MultiplayerOnline.prototype.showButtons = function (type) {
        this.clearButtons();
        this.buttons = new PlayerButtonContainer(this, type);
        this.buttons.name = "buttons";
        this.addChild(this.buttons);
    };
    /**
 * ?????????????????????,???showButtons()?????????
 */
    MultiplayerOnline.prototype.clearButtons = function () {
        if (this.getChildByName("buttons") != null) {
            this.removeChild(this.getChildByName("buttons"));
        }
    };
    /**
     * ?????? matchvs ??????????????????
     */
    MultiplayerOnline.prototype.addMsResponseListen = function () {
        //this.moveTimeer.addEventListener(egret.TimerEvent.TIMER,this.RoleMoveFun,this);
        //????????????????????????
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        //????????????
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        //????????????
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        //?????????????????????
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SETFRAMESYNC_RSP, this.setFrameSyncResponse, this);
        //?????????????????????
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_FRAMEUPDATE, this.frameUpdate, this);
        //gameserver??????
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GAMESERVER_NTFY, this.gameServerNotify, this);
    };
    MultiplayerOnline.prototype.release = function () {
        //this.moveTimeer.removeEventListener(egret.TimerEvent.TIMER,this.RoleMoveFun,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SETFRAMESYNC_RSP, this.setFrameSyncResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_FRAMEUPDATE, this.frameUpdate, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GAMESERVER_NTFY, this.frameUpdate, this);
    };
    MultiplayerOnline.prototype.onSetButtonClick = function (e) {
        console.log("tt");
        //console.log("this.getChildByName(gameSettingPannel):"+this.getChildByName("gameSettingPannel"));
        if (this.getChildByName("gameSettingPannel") != null) {
            this.removeChild(this.getChildByName("gameSettingPannel"));
        }
        //?????????????????????????????????????????????
        var gamesettingpannel = new GameSettingPannel();
        gamesettingpannel.setMyPokers(this.pokersPlayer);
        gamesettingpannel.x = 735;
        gamesettingpannel.y = 425;
        this.addChild(gamesettingpannel);
        //this.addChildAt(gamesetting,9);//????????????
        //console.log("?????????????????????"+gamesetting.getChildAt;
        //this.test();
    };
    return MultiplayerOnline;
}(egret.DisplayObjectContainer));
__reflect(MultiplayerOnline.prototype, "MultiplayerOnline");
