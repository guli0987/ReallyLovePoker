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
var MatchProperty = (function (_super) {
    __extends(MatchProperty, _super);
    function MatchProperty() {
        var _this = _super.call(this) || this;
        _this._tagsType = { "match": "tagsA" };
        _this.skinName = "MatchPropertySkin";
        return _this;
    }
    MatchProperty.prototype.getChild = function (partName, instance) {
        var _this = this;
        if ("rad_A" == partName) {
            this.rad_A = instance;
            this.rad_A.addEventListener(egret.Event.CHANGE, this.radioChangeHandler, this);
        }
        else if ("rad_B" == partName) {
            this.rad_B = instance;
            this.rad_B.addEventListener(egret.Event.CHANGE, this.radioChangeHandler, this);
        }
        else if ("btn_start" == partName) {
            this.btn_start = instance;
            this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mButtonMatchTouch, this);
        }
        else if ("lab_userID" == partName) {
            this.lab_userID = instance;
            this.lab_userID.text = "用户：" + GameData.gameUser.id + "\n" + GameData.gameUser.name;
        }
        else if ("img_header" == partName) {
            this.img_header = instance;
            this.img_header.source = GameData.gameUser.avatar;
        }
        else if ("btn_return" == partName) {
            this.btn_return = instance;
            this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonExitRoom, this);
        }
        else if ("rect_proA" == partName) {
            this.rect_proA = instance;
            this.rect_proA.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) { _this.rad_A.selected = true; _this.changeInfo(0); }, this);
        }
        else if ("rect_proB" == partName) {
            this.rect_proB = instance;
            this.rect_proB.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) { _this.rad_B.selected = true; _this.changeInfo(1); }, this);
        }
    };
    MatchProperty.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        this.getChild(partName, instance);
    };
    MatchProperty.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    MatchProperty.prototype.mbuttonExitRoom = function (event) {
        //退出房间成功进入游戏大厅
        GameSceneView._gameScene.lobby();
    };
    MatchProperty.prototype.changeInfo = function (value) {
        if (value == 0) {
            this.rect_proA.fillColor = 0x354244;
            this.rect_proA.strokeWeight = 2;
            this.rect_proB.fillColor = 0x555555;
            this.rect_proB.strokeWeight = 0;
            this.lab_A.textColor = 0x00C1E0;
            this.lab_B.textColor = 0xCFCFCF;
            //属性A
            this._tagsType = { "match": "tagsA" };
        }
        else {
            this.rect_proB.fillColor = 0x354244;
            this.rect_proB.strokeWeight = 2;
            this.rect_proA.fillColor = 0x555555;
            this.rect_proA.strokeWeight = 0;
            this.lab_B.textColor = 0x00C1E0;
            this.lab_A.textColor = 0xCFCFCF;
            //属性B
            this._tagsType = { "match": "tagsB" };
        }
        console.log("tags =" + this._tagsType["match"]);
    };
    MatchProperty.prototype.radioChangeHandler = function (evt) {
        this.changeInfo(evt.target.value);
    };
    MatchProperty.prototype.mButtonMatchTouch = function (evt) {
        GameData.matchType = GameData.tagsMatch;
        GameData.syncFrame = false;
        GameSceneView._gameScene.match(MatchUI.JOINFLAG.WITHPROPERTY, this._tagsType);
    };
    return MatchProperty;
}(eui.Component));
__reflect(MatchProperty.prototype, "MatchProperty", ["eui.UIComponent", "egret.DisplayObject"]);
