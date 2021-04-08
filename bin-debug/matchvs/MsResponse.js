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
 * 对 MatchvsResponse 回调接口 进行封装，使用 事件触发的机制 对消息进行处理，调用者只需要在使用的时候接受该事件消息，然后释放即可
 */
var mvs;
(function (mvs) {
    var MsResponse = (function (_super) {
        __extends(MsResponse, _super);
        function MsResponse() {
            var _this = _super.call(this) || this;
            _this._response = null; //Matchvs 引擎
            _this.registResponseCall();
            return _this;
        }
        Object.defineProperty(MsResponse, "getInstance", {
            /**
             * 获取实例
             */
            get: function () {
                if (MsResponse._instance == null) {
                    MsResponse._instance = new MsResponse();
                }
                return MsResponse._instance;
            },
            enumerable: true,
            configurable: true
        });
        MsResponse.release = function () {
            MsResponse._instance._response = null;
            MsResponse._instance = null;
        };
        /**
         * 获取引擎回调
         */
        MsResponse.prototype.getResponse = function () {
            if (this._response == null) {
                this.registResponseCall();
            }
            return this._response;
        };
        /**
         * MatchvsResponse 接口回调的重新注册
         */
        MsResponse.prototype.registResponseCall = function () {
            this._response = new MatchvsResponse();
            /**初始化回调*/
            this._response.initResponse = this.initResponse.bind(this);
            /**注册回调 */
            this._response.registerUserResponse = this.registerUserResponse.bind(this);
            /**登录回调 */
            this._response.loginResponse = this.loginResponse.bind(this);
            /**登出回调 */
            this._response.logoutResponse = this.logOutResponse.bind(this);
            /**自己加入房间回调 */
            this._response.joinRoomResponse = this.joinRoomResponse.bind(this);
            /**其他人加入房间回调 */
            this._response.joinRoomNotify = this.joinRoomNotify.bind(this);
            /**自己创造房间回调 */
            this._response.createRoomResponse = this.createRoomResponse.bind(this);
            /**自己关闭房间回调 */
            this._response.joinOverResponse = this.joinOverResponse.bind(this);
            /**收到别人关闭房间回调 */
            this._response.joinOverNotify = this.joinOverNotify.bind(this);
            /**自己离开房间回调 */
            this._response.leaveRoomResponse = this.leaveRoomResponse.bind(this);
            /**别人离开房间回调 */
            this._response.leaveRoomNotify = this.leaveRoomNotify.bind(this);
            /**自己踢人回调 */
            this._response.kickPlayerResponse = this.kickPlayerResponse.bind(this);
            /**收到别人踢人消息回调 */
            this._response.kickPlayerNotify = this.kickPlayerNotify.bind(this);
            /**获取房间列表接口回调 [被弃用] */
            //this._response.getRoomListResponse = this.getRoomListResponse.bind(this);
            /**获取房间列表扩展接口回调 */
            this._response.getRoomListExResponse = this.getRoomListExResponse.bind(this);
            /**获取房间详细信息回调 */
            this._response.getRoomDetailResponse = this.getRoomDetailResponse.bind(this);
            /**自己设置房间属性回调 */
            this._response.setRoomPropertyResponse = this.setRoomPropertyResponse.bind(this);
            /**收到别人设置房间属性回调 */
            this._response.setRoomPropertyNotify = this.setRoomPropertyNotify.bind(this);
            /**自己发送消息回调 */
            this._response.sendEventResponse = this.sendEventResponse.bind(this);
            /**收到其他玩家发送的消息回调 */
            this._response.sendEventNotify = this.sendEventNotify.bind(this);
            /**收到 来自gameServer的消息回调 */
            this._response.gameServerNotify = this.gameServerNotify.bind(this);
            /**错误回调 自己1001断线 */
            this._response.errorResponse = this.errorResponse.bind(this);
            /**其他玩家网络异常 其他玩家掉线 */
            this._response.networkStateNotify = this.networkStateNotify.bind(this);
            /**消息订阅回调 */
            //this._response.subscribeEventGroupResponse = this.subscribeEventGroupResponse.bind(this);
            /**分组发送消息回调 */
            //this._response.sendEventGroupResponse = this.sendEventGroupResponse.bind(this);
            /**分组发送消息异步回调 */
            //this._response.sendEventGroupNotify = this.sendEventGroupNotify.bind(this);
            /**帧同步设置回调 */
            this._response.setFrameSyncResponse = this.setFrameSyncResponse.bind(this);
            /**设置帧同步异步回调 */
            this._response.setFrameSyncNotify = this.setFrameSyncNotify.bind(this);
            /**发送帧同步回调 */
            this._response.sendFrameEventResponse = this.sendFrameEventResponse.bind(this);
            /**帧数据更新回调 */
            this._response.frameUpdate = this.frameUpdate.bind(this);
            /**断线重连接口回调 */
            this._response.reconnectResponse = this.reconnectResponse.bind(this); //200成功，201失败
            /**超时时间设置回调函数 */
            this._response.setReconnectTimeoutResponse = this.setReconnectTimeoutResponse.bind(this);
            /**获取断线期间帧数据回调 */
            this._response.getOffLineDataResponse = this.getOffLineDataResponse.bind(this);
            /**设置允许房间加人回调 */
            this._response.joinOpenResponse = this.joinOpenResponse.bind(this);
            /**设置允许房间加人异步回调 */
            this._response.joinOpenNotify = this.joinOpenNotify.bind(this);
            /**获取可以观战房间列表回调 */
            //this._response.getWatchRoomsResponse = this.getWatchRoomsResponse.bind(this);
            /**加入观战房间回调函数 */
            //this._response.joinWatchRoomResponse=this.joinWatchRoomResponse.bind(this);
            /**加入观战房间异步回调函数 */
            //this._response.joinWatchRoomNotify=this.joinWatchRoomNotify.bind(this);
            /**离开观战房间回调函数 */
            //this._response.leaveWatchRoomResponse=this.leaveWatchRoomResponse.bind(this);
            /**离开观战房间异步回调函数 其他观战者可收到这个回调 */
            //this._response.leaveWatchRoomNotify=this.leaveWatchRoomNotify.bind(this);
            /**设置观战数据偏移位置接口请求回调函数 设置观战开始位置 */
            //this._response.setLiveOffsetResponse=this.setLiveOffsetResponse.bind(this);
            /**设置观战数据偏移值后，在游戏中对战的数据就会通过这个接口根据游戏的帧率返回数据 */
            //this._response.liveFrameUpdate=this.liveFrameUpdate.bind(this);
            /**切换角色游戏模式与观战模式请求接口回调 */
            //this._response.changeRoleResponse=this.changeRoleResponse.bind(this);
            //关闭Matchvs日志输出
            //MatchvsLog.closeLog()
            //打开Matchvs日志输出
            //MatchvsLog.openLog()
            /**断开连接回调 */
            this._response.disConnectResponse = this.disConnectResponse.bind(this);
            /**网关心跳回调 */
            //this._response.heartBeatResponse = this.heartBeatResponse.bind(this);
            /**房间心跳回调 */
            this._response.hotelHeartBeatRsp = this.hotelHeartBeatRsp.bind(this);
            /**房间检测异步回调 */
            //this._response.roomCheckInNotify = this.roomCheckInNotify.bind(this);
        };
        /**
         * 初始化回调
         */
        MsResponse.prototype.initResponse = function (status) {
            console.info("initResponse status：", status);
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_INIT_RSP, false, false, { status: status }));
        };
        /**
         * 注册回调
         */
        MsResponse.prototype.registerUserResponse = function (userInfo) {
            console.info("registerUserResponse userInfo ", JSON.stringify(userInfo));
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_REGISTERUSER_RSP, false, false, userInfo));
        };
        /**
         * 登录回调
         */
        MsResponse.prototype.loginResponse = function (login) {
            console.info("[loginResponse] " + JSON.stringify(login));
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LOGIN_RSP, false, false, login));
        };
        /**
         * 加入房间回调
         */
        MsResponse.prototype.joinRoomResponse = function (status, roomUserInfoList, roomInfo) {
            console.info("[joinRoomResponse] ");
            if (status == 200) {
                var data = {
                    status: status,
                    userList: roomUserInfoList,
                    roomInfo: roomInfo
                };
                this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINROOM_RSP, false, false, data));
                return;
            }
            console.error("[joinRoomResponse error:]", status);
            return;
        };
        /**
         * 加入房间异步回调 发送 event 事件
         */
        MsResponse.prototype.joinRoomNotify = function (roomUserInfo) {
            console.info("[joinRoomNotify] " + roomUserInfo.userProfile);
            var data = {
                userId: roomUserInfo.userId,
                userProfile: roomUserInfo.userProfile
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINROOM_NTFY, false, false, data));
        };
        /**
         * 创建房间回调
         */
        MsResponse.prototype.createRoomResponse = function (rsp) {
            console.info("[sendEventResponse]" + JSON.stringify(rsp));
            var data = {
                status: rsp.status,
                roomID: rsp.roomID,
                owner: rsp.owner,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_CREATEROOM_RSP, false, false, data));
        };
        /**
         * 发送消息回调
         */
        MsResponse.prototype.sendEventResponse = function (rsp) {
            console.info("[sendEventResponse]" + JSON.stringify(rsp));
            var data = {
                status: rsp.status,
                sequence: rsp.sequence
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SENDEVENT_RSP, false, false, data));
        };
        /**
         * gameServerNotify回调
         */
        MsResponse.prototype.gameServerNotify = function (eventInfo) {
            console.info("[gameServerNotify] " + JSON.stringify(eventInfo));
            var data = {
                srcUserId: eventInfo.srcUserId,
                cpProto: eventInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GAMESERVER_NTFY, false, false, data));
        };
        /**
         * 发送消息异步回调
         */
        MsResponse.prototype.sendEventNotify = function (eventInfo) {
            console.info("[sendEventNotify] " + JSON.stringify(eventInfo));
            var data = {
                srcUserId: eventInfo.srcUserId,
                cpProto: eventInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SENDEVENT_NTFY, false, false, data));
        };
        /**
         * 关闭房间回调 并发送 Event 事件
         */
        MsResponse.prototype.joinOverResponse = function (rsp) {
            console.info("[joinOverResponse] " + JSON.stringify(rsp));
            var data = { status: rsp.status, cpProto: rsp.cpProto };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOVER_RSP, false, false, data));
        };
        /**
         * 关闭房间异步回调 并发送 Event 事件
         */
        MsResponse.prototype.joinOverNotify = function (Info) {
            console.info("[joinOverNotify] ");
            var data = { roomID: Info.roomID, userID: Info.srcUserID, cpProto: Info.cpProto };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOVER_NTFY, false, false, data));
        };
        /**
         * 自己离开房间回调
         */
        MsResponse.prototype.leaveRoomResponse = function (rsp) {
            console.info("[leaveRoomResponse] status: " + rsp.status);
            var data = {
                roomID: rsp.roomID,
                status: rsp.status,
                userId: rsp.userId,
                cpProto: rsp.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LEAVEROOM_RSP, false, false, data));
        };
        /**
         * 他人离开房间回调
         */
        MsResponse.prototype.leaveRoomNotify = function (leaveRoomInfo) {
            console.info("[leaveRoomNotify] " + leaveRoomInfo.userId);
            var data = {
                roomID: leaveRoomInfo.roomID,
                userId: leaveRoomInfo.userId,
                owner: leaveRoomInfo.owner,
                cpProto: leaveRoomInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, false, false, data));
        };
        /**
         * 其他玩家网络状态回调
         */
        MsResponse.prototype.networkStateNotify = function (netnotify) {
            console.info("[networkStateNotify] state: " + netnotify.state);
            var data = {
                roomID: netnotify.roomID,
                userID: netnotify.userID,
                owner: netnotify.owner,
                state: netnotify.state
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, false, false, data));
        };
        /**
         * 设置帧同步回调
         */
        MsResponse.prototype.setFrameSyncResponse = function (rsp) {
            console.info("[setFrameSyncResponse] " + JSON.stringify(rsp));
            var data = {
                mStatus: rsp.status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETFRAMESYNC_RSP, false, false, data));
        };
        /**
         * 设置帧同步异步回调
         */
        MsResponse.prototype.setFrameSyncNotify = function (notify) {
            console.info("[setFrameSyncNotify] " + JSON.stringify(notify));
            var data = {
                frameRate: notify.frameRate,
                startIndex: notify.startIndex,
                timestamp: notify.timestamp,
                enableGS: notify.enableGS,
                cacheFrameMS: notify.cacheFrameMS
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETFRAMESYNC_NTFY, false, false, data));
        };
        /**
         * 帧消息发送回调，用来检测帧消息是否发送成功。
         */
        MsResponse.prototype.sendFrameEventResponse = function (rsp) {
            console.info("[sendFrameEventResponse] " + JSON.stringify(rsp));
            var data = {
                status: rsp.mStatus
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SENDFRAME_RSP, false, false, data));
        };
        /**
         * 更新帧数据
         */
        MsResponse.prototype.frameUpdate = function (fd) {
            console.info("[frameUpdate] ");
            var data = {
                frameIndex: fd.frameIndex,
                frameItems: fd.frameItems,
                frameWaitCount: fd.frameWaitCount,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_FRAMEUPDATE, false, false, data));
        };
        /**
         * 有错误发生的时候 错误回调
         */
        MsResponse.prototype.errorResponse = function (errCode, errMsg) {
            console.info("[errorResponse] errCode:" + errCode + " errMsg:" + errMsg);
            var data = {
                errCode: errCode,
                errMsg: errMsg
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_ERROR_RSP, false, false, data));
        };
        /**
         * 登出回调
         */
        MsResponse.prototype.logOutResponse = function (status) {
            console.info("[logOutResponse] status:", status);
            var data = {
                status: status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LOGOUT_RSP, false, false, data));
        };
        /**
         * 自己打开房间回调
         */
        MsResponse.prototype.joinOpenResponse = function (info) {
            console.info("[joinOpenResponse] info:", info.status);
            var data = {
                status: info.status,
                cpProto: info.cpProto,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOPEN_RSP, false, false, data));
        };
        /**
         * 他人打开房间回调
         */
        MsResponse.prototype.joinOpenNotify = function (info) {
            console.info("[joinOpenResponse] info:");
            var data = {
                roomID: info.roomID,
                userID: info.userID,
                cpProto: info.cpProto,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOPEN_NTFY, false, false, data));
        };
        MsResponse.prototype.kickPlayerNotify = function (knotify) {
            console.info("[kickPlayerNotify] info:");
            var data = {
                cpProto: knotify.cpProto,
                owner: knotify.owner,
                srcUserId: knotify.srcUserId,
                userID: knotify.userID
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, false, false, data));
        };
        MsResponse.prototype.kickPlayerResponse = function (rsp) {
            console.info("[kickPlayerResponse] info:" + rsp.status);
            var data = {
                owner: rsp.owner,
                userID: rsp.userID,
                status: rsp.status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_KICKPLAYER_RSP, false, false, data));
        };
        /**
         * 设置房间属性 异步 回调
         */
        MsResponse.prototype.setRoomPropertyNotify = function (notify) {
            console.info("[setRoomPropertyNotify] info:");
            var data = {
                roomID: notify.roomID,
                userID: notify.userID,
                roomProperty: notify.roomProperty
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETROOMPROPERTY_NTFY, false, false, data));
        };
        /**
         * 设置房间属性回调
         */
        MsResponse.prototype.setRoomPropertyResponse = function (rsp) {
            console.info("[setRoomPropertyResponse] info:", rsp.status);
            var data = {
                roomID: rsp.roomID,
                userID: rsp.userID,
                roomProperty: rsp.roomProperty,
                status: rsp.status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETROOMPROPERTY_RSP, false, false, data));
        };
        /**
         * 获取房间详细信息回调
         */
        MsResponse.prototype.getRoomDetailResponse = function (rsp) {
            console.info("[getRoomDetailResponse] info:", rsp.status);
            var data = {
                canWatch: rsp.canWatch,
                createFlag: rsp.createFlag,
                maxPlayer: rsp.maxPlayer,
                mode: rsp.mode,
                owner: rsp.owner,
                roomProperty: rsp.roomProperty,
                state: rsp.state,
                status: rsp.status,
                userInfos: rsp.userInfos
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, false, false, data));
        };
        /**
         * 获取房间列表 扩展接口 回调
         */
        MsResponse.prototype.getRoomListExResponse = function (rsp) {
            console.info("[getRoomListExResponse] info:", rsp.status);
            var data = {
                roomAttrs: rsp.roomAttrs,
                status: rsp.status,
                total: rsp.total
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, false, false, data));
        };
        /**
         * 获取房间列表接口回调(信息较少推进使用 getRoomListEx)
         */
        MsResponse.prototype.getRoomListResponse = function (status, roomInfos) {
            console.info("[getRoomListResponse] info:", status);
            var data = {
                status: status,
                roomInfos: roomInfos
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMLIST_RSP, false, false, data));
        };
        /**
         * 断线重新连接回调
         */
        MsResponse.prototype.reconnectResponse = function (status, roomUserInfoList, roomInfo) {
            console.info("[reconnectResponse] info:", status);
            var data = {
                status: status,
                roomUserInfoList: roomUserInfoList,
                roomInfo: roomInfo
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_RECONNECT_RSP, false, false, data));
        };
        /**
         * 设置重连时间回调
         */
        MsResponse.prototype.setReconnectTimeoutResponse = function (status) {
            console.info("[setReconnectTimeoutResponse] info:", status);
            var data = {
                status: status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETRECONNECTTIMEOUT_RSP, false, false, data));
        };
        /**
         * 获取断线期间的帧数据
         */
        MsResponse.prototype.getOffLineDataResponse = function (rsp) {
            console.info("[getOffLineDataResponse] info:", rsp.status);
            var data = {
                status: rsp.status,
                frameCount: rsp.frameCount,
                msgCount: rsp.msgCount
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETOFFLINEDATA_RSP, false, false, data));
        };
        /**
         * 断开连接回调
         */
        MsResponse.prototype.disConnectResponse = function (status) {
            console.info("[disConnectResponse] info:", status);
        };
        /**
         * 网关心跳回调
         */
        MsResponse.prototype.heartBeatResponse = function (rsp) {
            console.info("[heartBeatResponse] info:", rsp.gameID + "," + rsp.gsExist);
        };
        /**
         * 房间心跳回调
         */
        MsResponse.prototype.hotelHeartBeatRsp = function (data) {
            console.info("[hotelHeartBeatRsp] info:", data);
        };
        MsResponse._instance = null;
        return MsResponse;
    }(egret.EventDispatcher));
    mvs.MsResponse = MsResponse;
    __reflect(MsResponse.prototype, "mvs.MsResponse");
})(mvs || (mvs = {}));
