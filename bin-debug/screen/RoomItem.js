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
var RoomItem = (function (_super) {
    __extends(RoomItem, _super);
    function RoomItem(pt) {
        var _this = _super.call(this) || this;
        _this._parent = null;
        _this.isme = false;
        _this._parent = pt;
        _this.skinName = "RoomItemSkin";
        return _this;
    }
    RoomItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RoomItem.prototype.showInfo = function (roomID, state, num, maxNum, map) {
        this.lab_roomID.text = "房间号：" + roomID;
        var stateStr = state == 1 ? "待加入" : "已关闭";
        this.lab_state.text = "房间状态：" + stateStr;
        var mapValue = map === GameData.roomPropertyType.mapA ? "彩图" : "灰图";
        this.lab_map.text = "地图：" + mapValue;
        this.lab_roomNum.text = "房间人数：" + num + "/" + maxNum;
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, this.getRoomDetailResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, this.getRoomDetailResponse, this);
    };
    RoomItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonEnterRoom, this);
    };
    RoomItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this._parent = this.data._parent;
        this.layContents(this.data._roomID, this.data._state, this.data._num, this.data._max, this.data._map);
        this.showInfo(this._roomID, this._state, this._num, this._max, this._map);
    };
    /**
     * 创建内容
     */
    RoomItem.prototype.layContents = function (roomID, state, num, max, map) {
        this._roomID = roomID;
        this._state = state;
        this._num = num;
        this._max = max;
        this._map = map;
    };
    RoomItem.prototype.getRoomDetail = function (roomID) {
        mvs.MsEngine.getInstance.getRoomDetail(roomID);
    };
    RoomItem.prototype.getRoomDetailResponse = function (ev) {
        var rsp = ev.data;
        if (rsp.status !== 200) {
            console.log("getRoomDetailResponse error status:" + rsp.status);
            return;
        }
        if (rsp.state === 1) {
            console.log("检查房间状态为：开放状态可以进入");
            this.Release();
            if (this.isme) {
                GameSceneView._gameScene.match(MatchUI.JOINFLAG.WITHROOMID, this._roomID);
            }
        }
        else {
            console.log("检查房间状态为：关闭状态不可以进入，请刷新房间列表");
        }
    };
    RoomItem.prototype.mbuttonEnterRoom = function (event) {
        console.log("点击按钮加入房间号：", this._roomID);
        this.isme = true;
        this.getRoomDetail(this._roomID);
    };
    RoomItem.prototype.removeEventListe = function () {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, this.getRoomDetailResponse, this);
        this.btn_enter.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonEnterRoom, this);
    };
    RoomItem.prototype.Release = function () {
        this._parent.Release();
        this.removeEventListe();
    };
    return RoomItem;
}(eui.ItemRenderer));
__reflect(RoomItem.prototype, "RoomItem");
