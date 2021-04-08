var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mvs;
(function (mvs) {
    /**
     * 这个是 matchvs 引擎 接口封装模块，对引擎的所有请求接口进行了二次封装，一些接口调用的参数可以在这里组合
     */
    var MsEngine = (function () {
        function MsEngine() {
            this._engine = null; //Matchvs 引擎
            this._response = null;
            this._engine = new MatchvsEngine();
        }
        Object.defineProperty(MsEngine, "getInstance", {
            /**
             * 获取类实例
             */
            get: function () {
                if (MsEngine._instance == null) {
                    MsEngine._instance = new MsEngine();
                }
                return MsEngine._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         * @param {string} channel
         * @param {string} platform
         * @param {number} gameID
         */
        MsEngine.prototype.init = function (channel, platform, gameID, appkey) {
            this._response = mvs.MsResponse.getInstance.getResponse();
            var res = this._engine.init(this._response, channel, platform, gameID, appkey, 1);
            if (res !== 0) {
                console.info("[MsEngine init failed] resCode:", res); //-1失败
                return res;
            }
            console.info("[MsEngine init seccess] resCode:", res);
            return res;
        };
        /**
         * 注册用户
         * @returns {number} 0-接口调用成功
         */
        MsEngine.prototype.registerUser = function () {
            var res = this._engine.registerUser();
            if (res !== 0) {
                console.error("[MsEngine registerUser failed] resCode:", res);
                return res;
            }
            console.info("[MsEngine registerUser seccess] resCode:", res);
            return res;
        };
        /**
         * 清除缓存的用户信息
         */
        MsEngine.prototype.LocalStoreClear = function () {
            LocalStore_Clear();
            console.log("LocalStore_Clear");
        };
        /**
         * 用户登录
         * @param {number} userID 		用户ID
         * @param {string} token 		用户token 注册时生成的
         * @param {number} gameID 		游戏ID
         * @param {string} appkey 		游戏 appkey
         * @param {string} secretkey 	游戏 secretkey
         */
        MsEngine.prototype.login = function (userID, token) {
            var res = this._engine.login(userID, token, "1"); //用于区分 用户在不同设备登录情况，用户只能在一个设备登录，默认填1，如果允许一个设备登录就要开发者自定义唯一值，或者获取 设备ID值
            console.info("[MsEngine login ] resCode:", res);
            return res;
        };
        /**
         * 退出登录
         * @param {number} cpProto
         * @returns {number}
         */
        MsEngine.prototype.logOut = function () {
            var res = this._engine.logout("");
            console.info("[MsEngine logout ] resCode:", res);
            return res;
        };
        /**
         * 随机加入房间
         * @param {number} maxPlayer 最大人数
         * @param {string} userProfile 附带数据，默认指定 ""
         * @returns {number}
         */
        MsEngine.prototype.joinRandomRoom = function (maxPlayer, userProfile) {
            var res = this._engine.joinRandomRoom(maxPlayer, userProfile);
            console.info("[MsEngine joinRandomRoom ] resCode:", res);
            return res;
        };
        /**
         * 自定义属性加入房间
         * @param {MsMatchInfo} matchinfo
         * @param {string} userProfile 附带数据，默认指定 ""
         * @returns {number}
         */
        MsEngine.prototype.joinRoomWithProperties = function (matchinfo, userProfile) {
            var res = this._engine.joinRoomWithProperties(matchinfo, userProfile);
            console.info("[MsEngine joinRoomWithProperties ] resCode:", res);
            return res;
        };
        /**
         * 指定房间号加入房间
         */
        MsEngine.prototype.joinRoom = function (roomID, userProfile) {
            var res = this._engine.joinRoom(roomID, userProfile);
            console.info("[MsEngine joinRoom ByRoomId ] resCode:", res);
            return res;
        };
        /**
         * 创建房间
         * @param {MsCreateRoomInfo} createRoomInfo 房间信息
         * @param {string} userProfile 附带数据，默认指定
         * @returns {number}
         */
        MsEngine.prototype.createRoom = function (createRoomInfo, userProfile) {
            var res = this._engine.createRoom(createRoomInfo, userProfile);
            console.info("[MsEngine createRoom ] resCode:", res, JSON.stringify(createRoomInfo), userProfile);
            return res;
        };
        /**
         * 禁止加入房间
         * @param {string} cpProto 禁止加入房间附带的数据
         * @returns {number}
         */
        MsEngine.prototype.joinOver = function (cpProto) {
            var res = this._engine.joinOver(cpProto);
            console.info("[MsEngine joinOver ] resCode:", res);
            return res;
        };
        /**
         * 设置允许房间加人
         * @param {number} cpProto
         * @returns {number}
         */
        MsEngine.prototype.joinOpen = function (cpProto) {
            var res = this._engine.joinOpen(cpProto);
            console.info("[MsEngine joinOpen ] resCode:", res);
            return res;
        };
        /**
         * 离开房间
         * @param {string} cpProto 离开房间附带的数据
         * @returns {number}
         */
        MsEngine.prototype.leaveRoom = function (cpProto) {
            var res = this._engine.leaveRoom(cpProto);
            console.info("[MsEngine leaveRoom ] resCode:", res);
            return res;
        };
        /**
         * 踢人
         * @param {number} userID 被踢者用户ID
         * @param {string} cpProto 踢人附带的消息
         * @returns {number}
         */
        MsEngine.prototype.kickPlayer = function (userID, cpProto) {
            var res = this._engine.kickPlayer(userID, cpProto);
            console.info("[MsEngine kickPlayer ] resCode:", res);
            return res;
        };
        /**
         * 获取房间列表信息 [废弃]
         * @param {MsRoomFilter} filter
         * @returns {number}
         */
        /*public getRoomList(filter:MsRoomFilter):number{
            let res = this._engine.getRoomList(filter);
            console.info("[MsEngine getRoomList ] resCode:", res);
            return res;
        }*/
        /**
         * 获取房间列表扩展接口
         * @param {MsRoomFilterEx} filter
         * @returns {number}
         */
        MsEngine.prototype.getRoomListEx = function (filter) {
            var res = this._engine.getRoomListEx(filter);
            console.info("[MsEngine getRoomListEx ] resCode:", res);
            return res;
        };
        /**
         * 获取房间详细信息
         * @param {string} roomID
         * @returns {number}
         */
        MsEngine.prototype.getRoomDetail = function (roomID) {
            var res = this._engine.getRoomDetail(roomID);
            console.info("[MsEngine getRoomDetail ] resCode:", res);
            return res;
        };
        /**
         * 设置房间属性
         * @param {string} roomID
         * @param {string} roomProperty
         * @returns {number}
         */
        MsEngine.prototype.setRoomProperty = function (roomID, roomProperty) {
            var res = this._engine.setRoomProperty(roomID, roomProperty);
            console.info("[MsEngine setRoomProperty ] resCode:", res);
            return res;
        };
        /**
         * 发送消息
         * @param {string} data 		发送的数据
         */
        MsEngine.prototype.sendEvent = function (data) {
            var res = this._engine.sendEvent(data);
            console.info("[MsEngine sendEvent ] resCode:", JSON.stringify(res));
            return res;
        };
        /**
         * 发送消息的扩展，
         * @param {number} msgType          消息发送类型：0表示转发给其他玩家；1表示转发给game server；2表示转发给其他玩家及game server
         * @param {string} data             要发送的数据
         * @param {number} desttype         发送目标类型：0表示发送目标为userIDs；1表示发送目标为除userIDs以外的房间其他人
         * @param {Array<number>} userids   发送目标：玩家ID集合 [1,2,3,4,5]
         * @returns {{sequence: number, result: number}}
        */
        MsEngine.prototype.sendEventEx = function (msgType, data, desttype, userids) {
            var res = this._engine.sendEventEx(msgType, data, desttype, userids);
            console.info("[MsEngine sendEventEx ] resCode:", JSON.stringify(res));
            return res;
        };
        /**
         * [暂不用]
         * 订阅组，玩家可以使用此接口 进行组队，多个玩家订阅相同的组就可以相互发送消息，
         * @param {Array<string>} confirms  要创建的订阅组(加入组队)
         * @param {Array<string>} cancles   要取消的订阅组(退出组队)
         * @returns {number} 1-失败 0-成功
         */
        /*public subscribeEventGroup(confirms:Array<string>,cancles:Array<string>):any{
            let res = this._engine.subscribeEventGroup(confirms,cancles);
            console.info("[MsEngine subscribeEventGroup ] resCode:",JSON.stringify(res));
            return res;
        }*/
        /**
         * [暂不用]
         * 指定订阅的分组发送消息，玩家调用subscribeEventGroup组队成功后可以使用此接口相互发送消息，
         * 同一组队的玩家可以收到消息
         * @param {Array<string>} groups 要发送数据的分组
         * @param {string} data 要发送的数据
         * @returns {number} 1-失败 0-成功
         */
        /*public sendEventGroup(groups:Array<string>, data:string):number{
            let res = this._engine.sendEventGroup(groups,data);
            console.info("[MsEngine sendEventGroup ] resCode:",res);
            return res;
        }*/
        /**
         * 请求设置帧同步
         * frameRate ex:10/s . = 0 is off,>0 is on.
         * @param {number} frameRate
         * @returns {number}
         */
        MsEngine.prototype.setFrameSync = function (frameRate) {
            var res = this._engine.setFrameSync(frameRate);
            console.info("[MsEngine setFrameSync ] resCode:", res);
            return res;
        };
        /**
         * 发送帧同步请求
         * @param {string} cpProto
         * @returns {number}
         */
        MsEngine.prototype.sendFrameEvent = function (cpProto) {
            var res = this._engine.sendFrameEvent(cpProto, 0);
            console.info("[MsEngine sendFrameEvent ] resCode:", res);
            return res;
        };
        /**
         * 断线请求重连,errorResponse返回1001
         * @returns {number}
         */
        MsEngine.prototype.reconnect = function () {
            var res = this._engine.reconnect();
            console.info("[MsEngine reconnect ]", res);
            return res;
        };
        /**
         * 设置房间重连超时,-1~600,如果设置的值为-1, 则在用户断开就马上被踢出房间;设置为0则20秒后踢出。
         * @returns {number}
         */
        MsEngine.prototype.setReconnectTimeout = function () {
            var res = this._engine.setReconnectTimeout(59); //59秒
            console.info("[MsEngine setReconnectTimeout ]", res);
            return res;
        };
        /**
         * 获取断线期间的帧数据，只有在开启了帧同步的时候使用，调用这个接口后，在断线期间游戏的数据会通过 frameUpdate 接口返回指定时间内的数据。
         * @returns {number}
         */
        MsEngine.prototype.getOffLineData = function (cacheFrameMS) {
            var res = this._engine.getOffLineData(cacheFrameMS);
            console.info("[MsEngine getOffLineData ]", res);
            return res;
        };
        MsEngine._instance = null;
        return MsEngine;
    }());
    mvs.MsEngine = MsEngine;
    __reflect(MsEngine.prototype, "mvs.MsEngine");
})(mvs || (mvs = {}));
