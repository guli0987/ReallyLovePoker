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
var MatchUI = (function (_super) {
    __extends(MatchUI, _super);
    function MatchUI() {
        var _this = _super.call(this) || this;
        _this.joinFlag = 1;
        _this._isInRoom = false;
        _this.isOwner = false;
        _this.canStartGame = false;
        _this._playerList = [];
        _this._roomID = "";
        _this.default_name = "待加入";
        _this.default_rect_color = 0x555555;
        _this.skinName = "MatchUISkin";
        _this.initView();
        return _this;
    }
    MatchUI.prototype.initView = function () {
        this.addMsResponseListen();
        GameData.roomPropertyValue = GameData.roomPropertyType.mapA;
    };
    MatchUI.prototype.getChilds = function (partName, instance) {
        var _this = this;
        switch (partName) {
            case "lab_roomID":
                this.lab_roomID = instance;
                break;
            case "group_map":
                this.group_map = instance;
                this.group_map.visible = false;
                break;
            case "lab_userID":
                this.lab_userID = instance;
                this.lab_userID.text = "用户：" + GameData.gameUser.id + "\n" + GameData.gameUser.name;
                break;
            case "lab_lobby":
                this.lab_lobby = instance;
                break;
            case "lab_matchmode":
                this.lab_matchmode = instance;
                break;
            case "lab_player1":
                this.lab_player1 = instance;
                break;
            case "lab_player2":
                this.lab_player2 = instance;
                break;
            case "lab_player3":
                this.lab_player3 = instance;
                break;
            case "lab_player4":
                this.lab_player4 = instance;
                break;
            case "lab_userID1":
                this.lab_userID1 = instance;
                break;
            case "lab_userID2":
                this.lab_userID2 = instance;
                break;
            case "lab_userID3":
                this.lab_userID3 = instance;
                break;
            case "lab_userID4":
                this.lab_userID4 = instance;
                break;
            case "rect_player1":
                this.rect_player1 = instance;
                break;
            case "rect_player2":
                this.rect_player2 = instance;
                break;
            case "rect_player3":
                this.rect_player3 = instance;
                break;
            case "rect_player4":
                this.rect_player4 = instance;
                break;
            case "img_owner":
                this.img_owner = instance;
                this.img_owner.visible = false;
                break;
            case "btn_start":
                this.btn_start = instance;
                this.btn_start.enabled = false;
                this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonStartGameBtn, this);
                break;
            case "btn_return":
                this.btn_return = instance;
                this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonLeaveRoom, this);
                break;
            case "rad_mapA":
                this.rad_mapA = instance;
                this.rad_mapA.enabled = false;
                this.rad_mapA.addEventListener(egret.TouchEvent.TOUCH_TAP, this.radioChangeHandler, this);
                break;
            case "rad_mapB":
                this.rad_mapB = instance;
                this.rad_mapB.enabled = false;
                this.rad_mapB.addEventListener(egret.TouchEvent.TOUCH_TAP, this.radioChangeHandler, this);
                break;
            case "btn_kick2":
                this.btn_kick2 = instance;
                this.btn_kick2.visible = false;
                this.btn_kick2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnKickPlayerClick, this);
                break;
            case "btn_kick3":
                this.btn_kick3 = instance;
                this.btn_kick3.visible = false;
                this.btn_kick3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnKickPlayerClick, this);
                break;
            case "btn_kick4":
                this.btn_kick4 = instance;
                this.btn_kick4.visible = false;
                this.btn_kick4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnKickPlayerClick, this);
                break;
            case "check_closeRoom":
                this.check_closeRoom = instance;
                this.check_closeRoom.addEventListener(egret.Event.CHANGE, function () {
                    _this.check_closeRoom.label = _this.check_closeRoom.selected ? "允许加入" : "禁止加入";
                    _this.check_closeRoom.selected ? mvs.MsEngine.getInstance.joinOpen("x") : mvs.MsEngine.getInstance.joinOver("x");
                }, this);
                break;
            default:
                break;
        }
    };
    MatchUI.prototype.partAdded = function (partName, instance) {
        this.getChilds(partName, instance);
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MatchUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.joinRoom(this.joinFlag, this.joinInfo);
    };
    /**
 * 注册监听
 */
    MatchUI.prototype.addMsResponseListen = function () {
        //加入房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify, this);
        //关闭房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse, this);
        //打开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOPEN_RSP, this.joinOpenResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOPEN_NTFY, this.joinOpenNotify, this);
        //发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_RSP, this.sendEventResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        //创建房间事件
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_CREATEROOM_RSP, this.createRoomResponse, this);
        //踢人事件
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
        //设置帧同步
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        //设置房间属性
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SETROOMPROPERTY_RSP, this.setRoomPropertyResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SETROOMPROPERTY_NTFY, this.setRoomPropertynotify, this);
    };
    /**
     * 取消监听
     */
    MatchUI.prototype.release = function () {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_RSP, this.sendEventResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOPEN_RSP, this.joinOpenResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOPEN_NTFY, this.joinOpenNotify, this);
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        //创建房间事件
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_CREATEROOM_RSP, this.createRoomResponse, this);
        //踢人事件
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
        //设置帧同步
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        //设置房间属性
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SETROOMPROPERTY_RSP, this.setRoomPropertyResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SETROOMPROPERTY_NTFY, this.setRoomPropertynotify, this);
    };
    MatchUI.prototype.setJoinParame = function (flag, info) {
        this.joinFlag = flag;
        this.joinInfo = info;
    };
    /**
     * 加入房间的统一入口
     */
    MatchUI.prototype.joinRoom = function (flag, info) {
        this.joinFlag = flag;
        if (flag == 1) {
            this.lab_matchmode.text = "[随机匹配]";
            this.joinRandRoom();
        }
        else if (flag == 2) {
            this.createRoom();
        }
        else if (flag == 3) {
            this.joinWithRoomID(info);
            this.lab_matchmode.text = "";
        }
        else if (flag == 4) {
            if (GameData.syncFrame) {
                this.lab_matchmode.text = "[帧同步匹配]";
                info = { "match": "frameSync" };
            }
            else {
                this.lab_matchmode.text = "[自定义属性匹配]";
            }
            this.joinRoomWithPro(info);
        }
    };
    /**
     * 随机加入房间
     */
    MatchUI.prototype.joinRandRoom = function () {
        var userPro = JSON.stringify({ name: GameData.gameUser.name, avatar: GameData.gameUser.avatar });
        mvs.MsEngine.getInstance.joinRandomRoom(GameData.maxPlayerNum, userPro);
    };
    /**
     * 主动创建房间
     */
    MatchUI.prototype.createRoom = function () {
        var userPro = JSON.stringify({ name: GameData.gameUser.name, avatar: GameData.gameUser.avatar });
        mvs.MsEngine.getInstance.createRoom(GameData.createRoomInfo, userPro);
    };
    /**
     * 加入指定房间
     * @param roomID
     */
    MatchUI.prototype.joinWithRoomID = function (roomID) {
        var userPro = JSON.stringify({ name: GameData.gameUser.name, avatar: GameData.gameUser.avatar });
        mvs.MsEngine.getInstance.joinRoom(roomID, userPro);
    };
    /**
     * 属性匹配
     * @param tags
     */
    MatchUI.prototype.joinRoomWithPro = function (tags) {
        var userPro = JSON.stringify({ name: GameData.gameUser.name, avatar: GameData.gameUser.avatar });
        var matchinfo = new MsMatchInfo(GameData.maxPlayerNum, 0, 0, tags);
        mvs.MsEngine.getInstance.joinRoomWithProperties(matchinfo, userPro);
    };
    /**
     *
     * @param id
     * @param name
     * @param avator
     * @param tableID
     */
    MatchUI.prototype.addPlayerList = function (id, name, avatar, tableID, isowner) {
        if (isowner === void 0) { isowner = false; }
        var play = new GameUser();
        play.id = id;
        play.name = name;
        play.avatar = avatar;
        play.tableID = tableID;
        play.isOwner = isowner;
        this._playerList.push(play);
        this.showPlayer(play);
        return play;
    };
    /**
     * 删除用户列表
     * @param id
     */
    MatchUI.prototype.delPlayerList = function (id) {
        var player = new GameUser();
        var arr = [];
        for (var i = 0; i < this._playerList.length; i++) {
            if (this._playerList[i].id == id) {
                player.id = this._playerList[i].id;
                player.avatar = this._playerList[i].avatar;
                player.name = this._playerList[i].name;
                player.tableID = this._playerList[i].tableID;
                this._playerList.splice(i, 1);
                this.wipePlayer(player);
            }
        }
    };
    /**
     * 显示用户信息
     * @param player
     */
    MatchUI.prototype.showPlayer = function (player) {
        var tableID = player.tableID;
        if (this.joinFlag == MatchUI.JOINFLAG.CREATEROOM || this.joinFlag == MatchUI.JOINFLAG.WITHROOMID) {
            this.group_map.visible = true; //地图组可见但根据是否房主决定能否点击
            this.rad_mapA.enabled = this.isOwner;
            this.rad_mapB.enabled = this.isOwner;
            console.log("mapValue:", this.rad_mapA.value);
            console.log("mapValue:", this.rad_mapB.value);
            this.btn_start.visible = this.isOwner;
            this.img_owner.visible = this.isOwner;
            if (tableID == 2 || tableID == 3 || tableID == 4) {
                this["btn_kick" + tableID].visible = this.isOwner; //如果座位号为2/3/4，则不显示踢人权利标识
            }
        }
        else {
            this.btn_start.visible = false;
            this.group_map.visible = false;
        }
        this.check_closeRoom.visible = !this.canStartGame; //如果可以开始游戏就不可见，如果人未满就可见
        this.check_closeRoom.enabled = this.isOwner; //权利给房主
        this["lab_player" + tableID].text = tableID.toString();
        this["lab_player" + tableID].textColor = 0xffffff;
        if (player.id == GameData.gameUser.id) {
            this["lab_player" + tableID].text = "我"; /**tableid都是1，这点可以优化 */
        }
        if (tableID == 1) {
            this.rect_player1.fillColor = 0x8BD7E0;
            this.lab_userID1.text = player.name;
        }
        else if (tableID == 2) {
            this.rect_player2.fillColor = 0x96E8B5;
            this.lab_userID2.text = player.name;
        }
        else if (tableID == 3) {
            this.rect_player3.fillColor = 0xE8CE90;
            this.lab_userID3.text = player.name;
        }
        else if (tableID == 4) {
            this.rect_player4.fillColor = 0x027EE0;
            this.lab_userID4.text = player.name;
        }
    };
    /**
     * 擦除用户信息
     * @param player
     */
    MatchUI.prototype.wipePlayer = function (player) {
        var tableID = player.tableID;
        if (tableID == 1) {
            this.lab_userID1.text = this.default_name;
            this.rect_player1.fillColor = this.default_rect_color;
            this.lab_player1.text = "1";
            this.lab_player1.textColor = 0x757575;
            this.lab_userID2.text = this.default_name;
            this.rect_player2.fillColor = this.default_rect_color;
            this.lab_player2.text = "2";
            this.lab_player2.textColor = 0x757575;
            this.lab_userID3.text = this.default_name;
            this.rect_player3.fillColor = this.default_rect_color;
            this.lab_player3.text = "3";
            this.lab_player3.textColor = 0x757575;
            this.lab_userID4.text = this.default_name;
            this.rect_player4.fillColor = this.default_rect_color;
            this.lab_player4.text = "4";
            this.lab_player4.textColor = 0x757575;
            // this.btn_kick1.visible = false;
            this.btn_kick2.visible = false;
            this.btn_kick3.visible = false;
            this.btn_kick4.visible = false;
        }
        else if (tableID == 2) {
            this.lab_userID2.text = this.default_name;
            this.rect_player2.fillColor = this.default_rect_color;
            this.lab_player2.text = "2";
            this.lab_player2.textColor = 0x757575;
            this.lab_userID3.text = this.default_name;
            this.rect_player3.fillColor = this.default_rect_color;
            this.lab_player3.text = "3";
            this.lab_player3.textColor = 0x757575;
            this.lab_userID4.text = this.default_name;
            this.rect_player4.fillColor = this.default_rect_color;
            this.lab_player4.text = "4";
            this.lab_player4.textColor = 0x757575;
            this.btn_kick2.visible = false;
            this.btn_kick3.visible = false;
            this.btn_kick4.visible = false;
        }
        else if (tableID == 3) {
            this.lab_userID3.text = this.default_name;
            this.rect_player3.fillColor = this.default_rect_color;
            this.lab_player3.text = "3";
            this.lab_player3.textColor = 0x757575;
            this.lab_userID4.text = this.default_name;
            this.rect_player4.fillColor = this.default_rect_color;
            this.lab_player4.text = "4";
            this.lab_player4.textColor = 0x757575;
            this.btn_kick3.visible = false;
            this.btn_kick4.visible = false;
        }
        else if (tableID == 4) {
            this.lab_userID4.text = this.default_name;
            this.rect_player4.fillColor = this.default_rect_color;
            this.lab_player4.text = "4";
            this.lab_player4.textColor = 0x757575;
            this.btn_kick4.visible = false;
        }
        this.img_owner.visible = false;
    };
    /**
     * 擦除用户，再次显示用户
     * @param userID
     * @param owner
     */
    MatchUI.prototype.wipePlayerLocation = function (userID, owner) {
        this.isOwner = owner == GameData.gameUser.id;
        this.delPlayerList(userID);
        for (var i = 0; i < this._playerList.length; i++) {
            this._playerList[i].isOwner = owner == this._playerList[i].id;
            //重置用户位置并重新显示
            this._playerList[i].tableID = i + 1;
            this.showPlayer(this._playerList[i]);
        }
    };
    /**
     * 地图改变事件
     */
    MatchUI.prototype.radioChangeHandler = function (evt) {
        if (evt.target.value == 0) {
            //地图A
            GameData.roomPropertyValue = GameData.roomPropertyType.mapA;
            mvs.MsEngine.getInstance.setRoomProperty(this._roomID, GameData.roomPropertyType.mapA);
        }
        else {
            //地图B
            GameData.roomPropertyValue = GameData.roomPropertyType.mapB;
            mvs.MsEngine.getInstance.setRoomProperty(this._roomID, GameData.roomPropertyType.mapB);
        }
        console.log("日志选择：", GameData.roomPropertyValue);
    };
    /**
     * 开始游戏
     */
    MatchUI.prototype.mbuttonStartGameBtn = function (event) {
        if (this._playerList.length >= GameData.maxPlayerNum) {
            GameData.playerUserIds = this._playerList;
            //停止加入房间
            mvs.MsEngine.getInstance.joinOver("joinOver");
        }
        else {
            console.log("人不够，或者还有人没有准备！");
        }
    };
    /**
     * 退出房间
     */
    MatchUI.prototype.mbuttonLeaveRoom = function (event) {
        //如果没有进入房间成功就直接返回游戏大厅界面
        if (this._isInRoom) {
            mvs.MsEngine.getInstance.leaveRoom("累了困了离开一下");
        }
        else {
            this.release();
            //退出房间成功进入游戏大厅
            GameSceneView._gameScene.lobby();
        }
    };
    MatchUI.prototype.btnKickPlayerClick = function (e) {
        var tableid = 0;
        if (e.target.name == "btn_kick2") {
            tableid = 2;
        }
        else if (e.target.name == "btn_kick3") {
            tableid = 3;
        }
        else if (e.target.name == "btn_kick4") {
            tableid = 4;
        }
        var user = this.getUserForTableID(tableid);
        if (user == null) {
            console.info("用户不存在");
            return;
        }
        mvs.MsEngine.getInstance.kickPlayer(user.id, "我们不能一起好好的玩游戏");
    };
    MatchUI.prototype.getUserForTableID = function (tableid) {
        var user = null;
        this._playerList.forEach(function (p) {
            if (p.tableID == tableid) {
                user = p;
            }
        });
        return user;
    };
    /**
     * 他人离开房间回调
     */
    MatchUI.prototype.leaveRoomNotify = function (ev) {
        var data = ev.data;
        console.info("玩家离开", data);
        var userID = data.userId;
        /**
         * 是否房主有变动，有变动的话就转移房主
         */
        if (data.owner == GameData.gameUser.id) {
            this.isOwner = true;
        }
        else {
            this.isOwner = false;
        }
        //删除该用户
        this.delPlayerList(userID);
        this.canStartGame = false;
        for (var i = 0; i < this._playerList.length; i++) {
            if (data.owner == this._playerList[i].id) {
                this._playerList[i].isOwner = true;
            }
            else {
                this._playerList[i].isOwner = false;
            }
            //重置用户位置并重新显示
            this._playerList[i].tableID = i + 1;
            this.showPlayer(this._playerList[i]);
        }
    };
    /**
     * 自己离开房间回调
     */
    MatchUI.prototype.leaveRoomResponse = function (ev) {
        var rsp = ev.data;
        if (rsp.status !== 200) {
            console.log("退出房间失败！status=" + rsp.status);
        }
        else {
            this.release();
            //退出房间成功进入游戏大厅
            GameSceneView._gameScene.lobby();
        }
    };
    /**
     * 创建房间回调
     */
    MatchUI.prototype.createRoomResponse = function (e) {
        var data = e.data;
        if (data.status == 200) {
            var tableID = 1;
            //房主
            if (data.owner == GameData.gameUser.id) {
                this.isOwner = true;
            }
            else {
                this.isOwner = false;
            }
            //显示我自己的信息
            this.addPlayerList(GameData.gameUser.id, GameData.gameUser.name, GameData.gameUser.avatar, tableID, this.isOwner);
            this.lab_roomID.text = "房间号:" + data.roomID;
            this._roomID = data.roomID;
            GameData.roomID = data.roomID;
            this._isInRoom = true;
        }
        else {
            console.info("加入房间失败", data);
        }
    };
    /**
     * 加入房间回调
     * @param {egret.Event} event
     */
    MatchUI.prototype.joinRoomResponse = function (event) {
        var data = event.data;
        if (data.status == 200) {
            this.lab_roomID.text = "房间号:" + data.roomInfo.roomID;
            this._roomID = data.roomInfo.roomID;
            GameData.roomID = data.roomInfo.roomID;
            this._isInRoom = true;
            GameData.gameUser.isOwner = false;
            //房主
            if (data.roomInfo.ownerId == GameData.gameUser.id) {
                this.isOwner = true;
            }
            else {
                this.isOwner = false;
            }
            //地图
            if (data.roomInfo.roomProperty === GameData.roomPropertyType.mapB) {
                GameData.roomPropertyValue = GameData.roomPropertyType.mapB;
                this.rad_mapB.selected = true;
            }
            else {
                GameData.roomPropertyValue = GameData.roomPropertyType.mapA;
                this.rad_mapA.selected = true;
            }
            var tableID = 1;
            //显示我自己的信息
            this.addPlayerList(GameData.gameUser.id, GameData.gameUser.name, GameData.gameUser.avatar, tableID, this.isOwner);
            //如果房间有其他人就显示别人信息
            var userList = data.userList;
            for (var i = 0; i < userList.length; i++) {
                tableID++;
                this.otherJoinShowInfo(userList[i].userId, tableID, userList[i].userProfile, data.roomInfo.ownerId == userList[i].userId);
            }
            this.checkStart();
        }
        else {
            console.info("加入房间失败", data);
        }
    };
    MatchUI.prototype.checkStart = function () {
        console.info("房间人数：" + this._playerList.length);
        if (this._playerList.length == GameData.maxPlayerNum) {
            console.info("可以开始游戏");
            this.canStartGame = true;
            this.check_closeRoom.visible = false;
            if (this.joinFlag == MatchUI.JOINFLAG.CREATEROOM || this.joinFlag == MatchUI.JOINFLAG.WITHROOMID) {
                this.btn_start.visible = this.isOwner;
                this.btn_start.enabled = this.isOwner;
            }
            else {
                if (this.isOwner) {
                    mvs.MsEngine.getInstance.joinOver("人满开始游戏");
                }
                this.btn_start.visible = false;
                this.btn_start.enabled = false;
            }
        }
        else {
            this.canStartGame = false;
            this.btn_start.enabled = false;
            this.check_closeRoom.visible = true;
        }
    };
    /**
     * 显示其他玩家 加入房间 信息
     * @param userID
     * @param tableID
     * @param userProfile
     */
    MatchUI.prototype.otherJoinShowInfo = function (userID, tableID, userProfile, owner) {
        if (owner === void 0) { owner = false; }
        if (userProfile && userProfile !== "") {
            var name_1 = "";
            var avatar = "";
            var userInfo = JSON.parse(userProfile);
            if (userInfo.name) {
                name_1 = userInfo.name;
            }
            if (userInfo.avatar) {
                avatar = userInfo.avatar;
            }
            this.addPlayerList(userID, name_1, avatar, tableID, owner);
        }
    };
    /**
     * 加入房间异步回调事件
     */
    MatchUI.prototype.joinRoomNotify = function (ev) {
        var data = ev.data;
        var userID = data.userId;
        var tableID = this._playerList.length + 1;
        this.otherJoinShowInfo(data.userId, tableID, data.userProfile, data.userId == data.owner);
        this.checkStart();
    };
    /**
     * 开始游戏
     */
    MatchUI.prototype.notifyGameStart = function () {
        GameData.isRoomOwner = true;
        var arrs = [];
        this._playerList.forEach(function (element) {
            arrs.push({ id: element.id, name: element.name, avatar: element.avatar });
        });
        var event = {
            action: GameData.gameStartEvent,
            userIds: arrs
        };
        /**
         * 发送开始游戏消息
         */
        var result = mvs.MsEngine.getInstance.sendEvent(JSON.stringify(event));
        if (result.result !== 0) {
            return console.log('发送游戏开始通知失败，错误码' + result.result);
        }
        // 发送的事件要缓存起来，收到异步回调时用于判断是哪个事件发送成功
        GameData.events[result.sequence] = event;
        console.log("发起游戏开始的通知，等待回复");
    };
    MatchUI.prototype.sendEventResponse = function (ev) {
        var rsp = ev.data;
        if (rsp.status !== 200) {
            return console.log('事件发送失败,status:' + status);
        }
        GameData.gameUser.isOwner = this.isOwner; //测试房主
        var event = GameData.events[rsp.sequence];
        if (event && event.action === GameData.gameStartEvent) {
            delete GameData.events[rsp.sequence];
            this.release();
            GameSceneView._gameScene.play();
        }
    };
    MatchUI.prototype.sendEventNotify = function (ev) {
        console.log("收到消息", ev.data);
        GameData.gameUser.isOwner = this.isOwner; //测试房主
        var sdnotify = ev.data;
        if (sdnotify
            && sdnotify.cpProto
            && sdnotify.cpProto.indexOf(GameData.gameStartEvent) >= 0) {
            GameData.playerUserIds = this._playerList;
            this.release();
            GameSceneView._gameScene.play();
        }
    };
    /**
     * 关闭房间回调事件
     */
    MatchUI.prototype.joinOverResponse = function (ev) {
        var rsp = ev.data;
        if (rsp.status === 200) {
            console.log("关闭房间成功");
            if (this.canStartGame) {
                //开始游戏
                this.notifyGameStart();
                GameData.playerUserIds = this._playerList;
                return;
            }
        }
        else {
            console.log("关闭房间失败，回调通知错误码：", rsp.status);
        }
        //Toast.show(" 设置不允许房间加人 " + (rsp.status == 200 ? "success" : "fail"));
        this.check_closeRoom.selected = ((rsp.status == 200) ? false : this.check_closeRoom.selected);
    };
    /**
     * 关闭房间异步回调
     */
    MatchUI.prototype.joinOverNotify = function (ev) {
        var notifyInfo = ev.data;
        console.log("userID:" + notifyInfo.userID + " 关闭房间：" + notifyInfo.roomID + " cpProto:" + notifyInfo.cpProto);
        //Toast.show(notifyInfo.userID + " 设置了不允许房间加人");
        this.check_closeRoom.selected = false;
        this.check_closeRoom.label = "禁止加入";
    };
    /**
     * 自己重新打开房间回调
     */
    MatchUI.prototype.joinOpenResponse = function (ev) {
        var d = ev.data;
        //Toast.show(" 设置允许房间加人 " + (d.status == 200 ? "success" : "fail"));
        this.check_closeRoom.selected = ((d.status == 200) ? true : this.check_closeRoom.selected);
    };
    /**
     * 他人重新打开房间异步
     */
    MatchUI.prototype.joinOpenNotify = function (ev) {
        var d = ev.data;
        //Toast.show(d.userID + " 设置了允许房间加人");
        this.check_closeRoom.selected = true;
        this.check_closeRoom.label = "允许加入";
    };
    MatchUI.prototype.cancelStart = function (userID, roomID) {
        this.btn_start.enabled = false;
        this.btn_start.visible = this.isOwner;
        this.canStartGame = false;
        this.check_closeRoom.visible = true;
    };
    /**
     * 剔除指定房间成功
     * @param e
     */
    MatchUI.prototype.kickPlayerResponse = function (ev) {
        var data = ev.data;
        this.cancelStart(data.userID, this._roomID);
        this.wipePlayerLocation(data.userID, data.owner);
    };
    /**
     * 有玩家被剔除
     * @param e
     */
    MatchUI.prototype.kickPlayerNotify = function (e) {
        var data = e.data;
        console.info("玩家离开", data);
        if (data.userID == GameData.gameUser.id) {
            this.release();
            GameSceneView._gameScene.lobby();
        }
        else {
            this.cancelStart(data.userID, this._roomID);
            this.wipePlayerLocation(data.userID, data.owner);
        }
    };
    /**
     * 有人断开
     */
    MatchUI.prototype.networkStateNotify = function (e) {
        var data = e.data;
        var userID = data.userID;
        this.cancelStart(userID, data.roomID);
        if (data.state = 1) {
            console.info("玩家断开:" + userID);
            mvs.MsEngine.getInstance.kickPlayer(userID, "玩家断线踢掉");
        }
        else if (data.state == 2) {
            console.info("玩家正在从新连接..." + userID);
        }
        else {
            console.info("玩家离开" + userID);
            this.wipePlayerLocation(data.userID, data.owner);
        }
    };
    /**
     * 他人设置房间属性回调事件
     */
    MatchUI.prototype.setRoomPropertynotify = function (ev) {
        var notify = ev.data;
        console.log("roomProperty = " + notify.roomProperty);
        if (notify.roomProperty === GameData.roomPropertyType.mapB) {
            GameData.roomPropertyValue = GameData.roomPropertyType.mapB;
            this.rad_mapB.selected = true;
        }
        else {
            GameData.roomPropertyValue = GameData.roomPropertyType.mapA;
            this.rad_mapA.selected = true;
        }
    };
    /**
     * 自己设置房间数据回调事件
     */
    MatchUI.prototype.setRoomPropertyResponse = function (ev) {
        console.log("roomProperty = " + ev.data.roomProperty);
    };
    MatchUI.JOINFLAG = {
        RANDROOM: 1,
        CREATEROOM: 2,
        WITHROOMID: 3,
        WITHPROPERTY: 4
    };
    return MatchUI;
}(eui.Component));
__reflect(MatchUI.prototype, "MatchUI", ["eui.UIComponent", "egret.DisplayObject"]);
