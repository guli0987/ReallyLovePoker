var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUser = (function () {
    function GameUser() {
        this.id = 0; //用户ID
        this.name = ""; //名称
        this.avatar = "http://www.wetes.cn/SY/upload/tom.jpg"; //头像
        this.sex = "未知"; //性别
        this.token = ""; //校验值
        this.pValue = 0; //积分
        this.tableID = 0; //座位ID
        this.isOwner = false; //房主标记
        this.loadFinish = false; //资源是否加载完成
    }
    return GameUser;
}());
__reflect(GameUser.prototype, "GameUser");
