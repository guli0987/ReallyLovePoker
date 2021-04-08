var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var OnlineEvent = (function () {
    function OnlineEvent() {
    }
    OnlineEvent.OE_LOADFINISH = "OE_LOADFINISH"; //房主点击开始后各自进入房间并加载资源，加载完成
    OnlineEvent.OE_GAMESTART = "OE_GAMESTART"; //各成员资源加载完成后提醒房主可以开始游戏
    OnlineEvent.OE_GAMECOUNT = "OE_GAMECOUNT";
    OnlineEvent.OE_SELECT_ORDER = "OE_SELECT_ORDER";
    OnlineEvent.OE_SHOW_DATA = "OE_SHOW_DATA"; //返回每个玩家的头像、资料
    OnlineEvent.OE_CHANGE_TABLE = "OE_CHANGE_TABLE"; //修改保存的座位号
    OnlineEvent.OE_SEND_POKERS = "OE_SEND_POKERS"; //接收gameserver发送过来的扑克id
    OnlineEvent.OE_SEND_AGAIN_POKERS = "OE_SEND_AGAIN_POKERS"; //只 接收gameserver发送过来的扑克id
    OnlineEvent.OE_SHOW_DRAWER_POKER = "OE_SHOW_DRAWER_POKER"; //展示所抽的牌
    OnlineEvent.OE_SHOW_SWITCH_POKER = "OE_SHOW_SWITCH_POKER"; //展示所切的牌
    OnlineEvent.OE_SHOW_THROW_POKER = "OE_SHOW_THROW_POKER"; //展示所丢的牌
    OnlineEvent.OE_SEARCH_CAMP = "OE_SEARCH_CAMP"; //查找同阵营玩家
    OnlineEvent.OE_SHOW_CAMP = "OE_SHOW_CAMP"; //显示阵营玩家
    OnlineEvent.OE_EXCHANGE_POKER = "OE_EXCHANGE_POKER"; //交换扑克
    OnlineEvent.OE_FIRST_OUT_POKER = "OE_FIRST_OUT_POKER"; //优先出牌人
    OnlineEvent.OE_OUT_POKERS = "OE_OUT_POKERS"; //出牌
    OnlineEvent.OE_IS_GAMEOVER = "OE_IS_GAMEOVER"; //判断游戏是否结束
    OnlineEvent.OE_GAMEOVER = "OE_GAMEOVER"; //游戏结束
    OnlineEvent.OE_AGAINGAME = "OE_AGAINGAME"; //再来一局
    OnlineEvent.OE_READY = "OE_READY"; //准备
    OnlineEvent.OE_GIVE_OUTPOKERS = "OE_GIVE_OUTPOKERS"; //给予队友出牌权
    return OnlineEvent;
}());
__reflect(OnlineEvent.prototype, "OnlineEvent");
