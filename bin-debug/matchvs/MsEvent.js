var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * matchvs 事件类型定义
 */
var mvs;
(function (mvs) {
    var MsEvent = (function () {
        function MsEvent() {
        }
        //初始化
        MsEvent.EVENT_INIT_RSP = "MATCHVS_INIT_EVENT";
        //注册
        MsEvent.EVENT_REGISTERUSER_RSP = "MATCHVS_REGISTERUSER_EVENT";
        //登录事件
        MsEvent.EVENT_LOGIN_RSP = "MATCHVS_LOGIN_EVENT";
        //加入房间事件(自己进和别人进)
        MsEvent.EVENT_JOINROOM_RSP = "MATCHVS_JOINROOM_EVENT";
        MsEvent.EVENT_JOINROOM_NTFY = "MATCHVS_JOINROOM_NOTIFY_EVENT";
        //创建房间事件
        MsEvent.EVENT_CREATEROOM_RSP = "MATCHVS_CREATEROOM_RSP_EVENT";
        //发送消息事件
        MsEvent.EVENT_SENDEVENT_RSP = "MATCHVS_SENDEVENT_RSP_EVENT";
        MsEvent.EVENT_SENDEVENT_NTFY = "MATCHVS_SENDEVENT_NOTIFY_EVENT";
        //gameServer 消息事件
        MsEvent.EVENT_GAMESERVER_NTFY = "MATCHVS_GAMESERVER_NOTIFY_EVENT";
        //离开房间事件
        MsEvent.EVENT_LEAVEROOM_RSP = "MATCHVS_LEAVEROOM_RSP_EVENT";
        MsEvent.EVENT_LEAVEROOM_NTFY = "MATCHVS_LEAVEROOM_NTFY_EVENT";
        //关闭房间事件
        MsEvent.EVENT_JOINOVER_RSP = "MATCHVS_JOINOVER_RSP_EVENT";
        MsEvent.EVENT_JOINOVER_NTFY = "MATCHVS_LEAVEROOM_EVENT";
        //打开房间事件
        MsEvent.EVENT_JOINOPEN_RSP = "MATCHVS_JOINOPEN_RSP_EVENT";
        MsEvent.EVENT_JOINOPEN_NTFY = "MATCHVS_JOINOPEN_NTFY_EVENT";
        //网络状态事件
        MsEvent.EVENT_NETWORKSTATE_NTFY = "MATCHVS_NETWORKSTATE_NTFY";
        //发送帧事件
        MsEvent.EVENT_SENDFRAME_RSP = "MATCHVS_SENDFRAME_RSP_EVENT";
        //设置帧同步事件
        MsEvent.EVENT_SETFRAMESYNC_RSP = "MATCHVS_SETFRAMESYNC_RSP_EVENT";
        MsEvent.EVENT_SETFRAMESYNC_NTFY = "MATCHVS_SETFRAMESYNC_NTFY_EVENT";
        //更新帧同步事件
        MsEvent.EVENT_FRAMEUPDATE = "MATCHVS_FRAMEUPDATE_EVENT";
        //错误发生事件
        MsEvent.EVENT_ERROR_RSP = "MATCHVS_ERROR_RSP_EVENT";
        //登出事件
        MsEvent.EVENT_LOGOUT_RSP = "MATCHVS_LOGOUT_RSP_EVENT";
        //设置房间属性
        MsEvent.EVENT_SETROOMPROPERTY_RSP = "MATCHVS_SETROOMPROPERTY_RSP_EVENT";
        MsEvent.EVENT_SETROOMPROPERTY_NTFY = "MATCHVS_SETROOMPROPERTY_NTFY_EVENT";
        //踢人
        MsEvent.EVENT_KICKPLAYER_RSP = "MATCHVS_KICKPLAYER_RSP_EVENT";
        MsEvent.EVENT_KICKPLAYER_NTFY = "MATCHVS_KICKPLAYER_NTFY_EVENT";
        // 获取房间类别 简单信息 接口
        MsEvent.EVENT_GETROOMLIST_RSP = "MATCHVS_GETROOMLIST_RSP_EVENT";
        // 获取房间列表 扩展信息 接口
        MsEvent.EVENT_GETROOMLIST_EX_RSP = "MATCHVS_GETROOMLIST_EX_RSP_EVENT";
        //获取房间详细信息
        MsEvent.EVENT_GETROOMDETAIL_RSP = "MATCHVS_GETROOMDETAIL_RSP_EVENT";
        //断线重新连接
        MsEvent.EVENT_RECONNECT_RSP = "MATCHVS_RECONNECT_RSP_EVENT";
        //断线重连时间
        MsEvent.EVENT_SETRECONNECTTIMEOUT_RSP = "MATCHVS_SETRECONNECTTIMEOUT_RSP_EVENT";
        //断线期间帧数据
        MsEvent.EVENT_GETOFFLINEDATA_RSP = "MATCHVS_GETOFFLINEDATA_RSP_EVENT";
        return MsEvent;
    }());
    mvs.MsEvent = MsEvent;
    __reflect(MsEvent.prototype, "mvs.MsEvent");
})(mvs || (mvs = {}));
