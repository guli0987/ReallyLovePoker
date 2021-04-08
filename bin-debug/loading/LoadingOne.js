/**
 * @copyright www.egret.com
 * @author yjtx
 * @desc 帧动画示例。
 *      触摸舞台会重新播放。
 *      播放过程中如果有帧事件，会触发egret.MovieClipEvent
 *      .FRAME_LABEL事件。
 *      在播放结束一次后会触发egret.Event.LOOP_COMPLETE
 *      事件。全部播放完全后，会触发egret.Event.COMPLETE事件
 *      。
 */
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
var LoadingOne = (function (_super) {
    __extends(LoadingOne, _super);
    function LoadingOne() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    LoadingOne.prototype.onAddToStage = function (event) {
        this.initMovieClip();
    };
    LoadingOne.prototype.initMovieClip = function () {
        var mcData = RES.getRes("Action_json");
        var mcTexture = RES.getRes("Action_png");
        var mcDataFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
        var role = new egret.MovieClip(mcDataFactory.generateMovieClipData("action"));
        this.addChild(role);
        role.gotoAndPlay(1, 4);
        role.x = 300;
        role.y = 600;
    };
    return LoadingOne;
}(egret.DisplayObjectContainer));
__reflect(LoadingOne.prototype, "LoadingOne");
