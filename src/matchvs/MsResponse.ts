/**
 * 对 MatchvsResponse 回调接口 进行封装，使用 事件触发的机制 对消息进行处理，调用者只需要在使用的时候接受该事件消息，然后释放即可
 */
module mvs {
	export class MsResponse extends egret.EventDispatcher{
		
		private static _instance:MsResponse = null;
		private _response:MatchvsResponse = null; //Matchvs 引擎
		public constructor() {
			super();
			this.registResponseCall();
		}
		/**
		 * 获取实例
		 */
		public static get getInstance():MsResponse{
			if(MsResponse._instance == null){
				MsResponse._instance = new MsResponse();
			}
			return MsResponse._instance;
		}

		public static release(){
			MsResponse._instance._response = null;
			MsResponse._instance = null;
		}

		/**
		 * 获取引擎回调
		 */
		public getResponse():MatchvsResponse{
			if(this._response == null){
				this.registResponseCall();
			}
			return this._response;
		}

		/**
		 * MatchvsResponse 接口回调的重新注册
		 */
		private registResponseCall(){
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
            this._response.sendFrameEventResponse =this.sendFrameEventResponse.bind(this);
            /**帧数据更新回调 */
            this._response.frameUpdate = this.frameUpdate.bind(this);
			/**断线重连接口回调 */
            this._response.reconnectResponse = this.reconnectResponse.bind(this);//200成功，201失败
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
            
    }

		/**
		 * 初始化回调
		 */
		private initResponse(status:number){
			console.info("initResponse status：",status);
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_INIT_RSP,false,false,{status:status}));
		}

		/**
		 * 注册回调
		 */
		private registerUserResponse(userInfo:MsRegistRsp){
			console.info("registerUserResponse userInfo ",JSON.stringify(userInfo));
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_REGISTERUSER_RSP,false,false,userInfo));
		}

		/**
		 * 登录回调
		 */
		private loginResponse(login:MsLoginRsp){
			console.info("[loginResponse] "+JSON.stringify(login));
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_LOGIN_RSP,false,false, login));
		}

		/**
		 * 加入房间回调
		 */
		private joinRoomResponse(status:number, roomUserInfoList:Array<MsRoomUserInfo>, roomInfo:MsRoomInfo){
			console.info("[joinRoomResponse] ");
            if(status == 200){
				let data = {
					status:status,
					userList:roomUserInfoList,
					roomInfo:roomInfo
				}
				this.dispatchEvent(new egret.Event(MsEvent.EVENT_JOINROOM_RSP, false, false, data));
				return ;
			}
			console.error("[joinRoomResponse error:]", status);
			return;
		}

		/**
		 * 加入房间异步回调 发送 event 事件
		 */
		private joinRoomNotify(roomUserInfo:MsRoomUserInfo){
			console.info("[joinRoomNotify] "+roomUserInfo.userProfile);
			let data = {
				userId : roomUserInfo.userId, 
				userProfile : roomUserInfo.userProfile};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_JOINROOM_NTFY, false, false, data));
		}

		/**
		 * 创建房间回调
		 */
		private createRoomResponse(rsp:MsCreateRoomRsp){
			console.info("[sendEventResponse]"+JSON.stringify(rsp));
			let data = {
				status:rsp.status,
				roomID:rsp.roomID,
				owner:rsp.owner,
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_CREATEROOM_RSP, false, false, data));
		}

		/**
		 * 发送消息回调
		 */
		private sendEventResponse(rsp:MsSendEventRsp){
			console.info("[sendEventResponse]"+JSON.stringify(rsp));
			let data = {
				status:rsp.status,
				sequence:rsp.sequence
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SENDEVENT_RSP, false, false, data));
		}
		/**
		 * gameServerNotify回调
		 */
		private gameServerNotify(eventInfo:MsGameServerNotifyInfo){
			console.info("[gameServerNotify] "+JSON.stringify(eventInfo));
			let data = {
				srcUserId:eventInfo.srcUserId,
				cpProto:eventInfo.cpProto
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_GAMESERVER_NTFY, false, false, data));
		}
		/**
		 * 发送消息异步回调
		 */
		private sendEventNotify(eventInfo:MsSendEventNotify){
			console.info("[sendEventNotify] "+JSON.stringify(eventInfo));
			let data = {
				srcUserId:eventInfo.srcUserId,
				cpProto:eventInfo.cpProto
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SENDEVENT_NTFY, false, false, data));
		}


		/**
		 * 关闭房间回调 并发送 Event 事件
		 */
		private joinOverResponse(rsp:MsJoinOverRsp){
			console.info("[joinOverResponse] "+ JSON.stringify(rsp));
			let data = {status:rsp.status,cpProto:rsp.cpProto};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_JOINOVER_RSP, false, false,data));
		}

		/**
		 * 关闭房间异步回调 并发送 Event 事件
		 */
		private joinOverNotify(Info:MsJoinOverNotifyInfo){
			console.info("[joinOverNotify] ");
			let data = {roomID:Info.roomID,userID:Info.srcUserID,cpProto:Info.cpProto};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_JOINOVER_NTFY, false, false,data));
		}

		/**
		 * 自己离开房间回调
		 */
		private leaveRoomResponse(rsp:MsLeaveRoomRsp){
			console.info("[leaveRoomResponse] status: "+rsp.status);
			let data = {
				roomID:rsp.roomID,
				status:rsp.status,
				userId:rsp.userId,
				cpProto:rsp.cpProto
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_LEAVEROOM_RSP, false, false,data));
		}

		/**
		 * 他人离开房间回调
		 */
		private leaveRoomNotify(leaveRoomInfo:MsLeaveRoomNotify){
			console.info("[leaveRoomNotify] "+leaveRoomInfo.userId);
			let data = {
				roomID:leaveRoomInfo.roomID,
				userId:leaveRoomInfo.userId,
				owner:leaveRoomInfo.owner,
				cpProto:leaveRoomInfo.cpProto
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_LEAVEROOM_NTFY, false, false,data));
		}

		/**
		 * 其他玩家网络状态回调
		 */
		private networkStateNotify(netnotify:MsNetworkStateNotify){
			console.info("[networkStateNotify] state: "+netnotify.state);
			let data = {
				roomID:netnotify.roomID,
				userID:netnotify.userID,
				owner:netnotify.owner,
				state:netnotify.state
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_NETWORKSTATE_NTFY, false, false,data));
		}


		/**
		 * 设置帧同步回调
		 */
		private setFrameSyncResponse(rsp:MsSetChannelFrameSyncRsp){
			console.info("[setFrameSyncResponse] "+JSON.stringify(rsp));
			let data = {
				mStatus:rsp.status
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SETFRAMESYNC_RSP, false, false,data));
		}

        /**
		 * 设置帧同步异步回调
		 */
		private setFrameSyncNotify(notify:MVS.MsSetFrameSyncNotify){
			console.info("[setFrameSyncNotify] "+JSON.stringify(notify));
			let data = {
				frameRate:notify.frameRate,
                startIndex:notify.startIndex,
                timestamp:notify.timestamp,
                enableGS:notify.enableGS,
                cacheFrameMS:notify.cacheFrameMS
                
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SETFRAMESYNC_NTFY, false, false,data));
		}

        /**
		 * 帧消息发送回调，用来检测帧消息是否发送成功。
		 */
		private sendFrameEventResponse(rsp:MsSendFrameEventRsp){
			console.info("[sendFrameEventResponse] "+JSON.stringify(rsp));
			let data = {
				status:rsp.mStatus  
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SENDFRAME_RSP, false, false,data));
		}

		/**
		 * 更新帧数据
		 */
		private frameUpdate(fd:MsFrameData){
            console.info("[frameUpdate] ");
			let data = {
				frameIndex:fd.frameIndex,
				frameItems:fd.frameItems,
				frameWaitCount:fd.frameWaitCount,
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_FRAMEUPDATE, false, false, data));
		}

		/**
		 * 有错误发生的时候 错误回调
		 */
		private errorResponse(errCode:number, errMsg:string){
			console.info("[errorResponse] errCode:"+errCode+" errMsg:"+errMsg);
			let data = {
				errCode:errCode,
				errMsg:errMsg
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_ERROR_RSP, false, false, data));
		}

		/**
		 * 登出回调
		 */
		private logOutResponse(status:number){
			console.info("[logOutResponse] status:", status);
			let data = {
				status:status
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_LOGOUT_RSP, false, false, data));
		}

		/**
		 * 自己打开房间回调
		 */
		private joinOpenResponse(info:MsReopenRoomResponse){
			console.info("[joinOpenResponse] info:", info.status);
			let data = {
				status:info.status,
				cpProto:info.cpProto,
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_JOINOPEN_RSP, false, false, data));
		}

		/**
		 * 他人打开房间回调
		 */
		private joinOpenNotify(info:MsReopenRoomNotify){
			console.info("[joinOpenResponse] info:");
			let data = {
				roomID:info.roomID,
				userID:info.userID,
				cpProto:info.cpProto,
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_JOINOPEN_NTFY, false, false, data));
		}

		private kickPlayerNotify(knotify:MsKickPlayerNotify){
			console.info("[kickPlayerNotify] info:");
			let data = {
				cpProto:knotify.cpProto,
				owner:knotify.owner,
				srcUserId:knotify.srcUserId,
				userID:knotify.userID
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_KICKPLAYER_NTFY, false, false, data));
		}

		private kickPlayerResponse(rsp:MsKickPlayerRsp){
			console.info("[kickPlayerResponse] info:"+rsp.status);
			let data = {
				owner:rsp.owner,
				userID:rsp.userID,
				status:rsp.status
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_KICKPLAYER_RSP, false, false, data));

		}

		/**
		 * 设置房间属性 异步 回调
		 */
		private setRoomPropertyNotify(notify:MsRoomPropertyNotifyInfo){
			console.info("[setRoomPropertyNotify] info:");
			let data = {
				roomID:notify.roomID,
				userID:notify.userID,
				roomProperty:notify.roomProperty
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SETROOMPROPERTY_NTFY, false, false, data));

		}

		/**
		 * 设置房间属性回调
		 */
		private setRoomPropertyResponse(rsp:MsSetRoomPropertyRspInfo){
			console.info("[setRoomPropertyResponse] info:", rsp.status);
			let data = {
				roomID:rsp.roomID,
				userID:rsp.userID,
				roomProperty:rsp.roomProperty,
				status:rsp.status
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SETROOMPROPERTY_RSP, false, false, data));

		}
		/**
		 * 获取房间详细信息回调
		 */
		private getRoomDetailResponse(rsp:MsGetRoomDetailRsp){
			console.info("[getRoomDetailResponse] info:", rsp.status);
			let data = {
				canWatch : rsp.canWatch,
				createFlag : rsp.createFlag,
				maxPlayer : rsp.maxPlayer,
				mode : rsp.mode,
				owner : rsp.owner,
				roomProperty : rsp.roomProperty,
				state : rsp.state,
				status : rsp.status,
				userInfos : rsp.userInfos
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_GETROOMDETAIL_RSP, false, false, data));

		}

		/**
		 * 获取房间列表 扩展接口 回调 
		 */
		private getRoomListExResponse(rsp:MsGetRoomListExRsp){
			console.info("[getRoomListExResponse] info:",rsp.status);
			let data = {
				roomAttrs : rsp.roomAttrs,
				status : rsp.status,
				total : rsp.total
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_GETROOMLIST_EX_RSP, false, false, data));

		}

		/**
		 * 获取房间列表接口回调(信息较少推进使用 getRoomListEx)
		 */
		private getRoomListResponse(status:number, roomInfos:Array<MsRoomInfoEx>){
			console.info("[getRoomListResponse] info:", status );
			let data = {
				status : status,
				roomInfos : roomInfos
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_GETROOMLIST_RSP, false, false, data));

		}

		/**
		 * 断线重新连接回调
		 */
		private reconnectResponse(status:number, roomUserInfoList:Array<MsRoomUserInfo>, roomInfo:MsRoomInfo){
			console.info("[reconnectResponse] info:", status);
			let data = {
				status : status,
				roomUserInfoList : roomUserInfoList,
				roomInfo : roomInfo
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_RECONNECT_RSP, false, false, data));
		}

        /**
		 * 设置重连时间回调
		 */
		private setReconnectTimeoutResponse(status:number){
			console.info("[setReconnectTimeoutResponse] info:", status);
			let data = {
				status : status
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_SETRECONNECTTIMEOUT_RSP, false, false, data));
		}

        /**
		 * 获取断线期间的帧数据
		 */
		private getOffLineDataResponse(rsp:any){
			console.info("[getOffLineDataResponse] info:", rsp.status);
			let data = {
				status : rsp.status,
                frameCount: rsp.frameCount,
                msgCount: rsp.msgCount
			};
			this.dispatchEvent(new egret.Event(MsEvent.EVENT_GETOFFLINEDATA_RSP, false, false, data));
		}


        /**
         * 断开连接回调
         */
        private disConnectResponse(status:number){
            console.info("[disConnectResponse] info:", status);
        }

        /**
         * 网关心跳回调
         */
        private heartBeatResponse(rsp:MsHeartBeatResponse){
            console.info("[heartBeatResponse] info:",rsp.gameID+","+rsp.gsExist);
        }

        /**
         * 房间心跳回调
         */
        private hotelHeartBeatRsp(data:number){
            console.info("[hotelHeartBeatRsp] info:", data);
        }


	}
}