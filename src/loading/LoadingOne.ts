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

class LoadingOne extends egret.DisplayObjectContainer {
    
    constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.initMovieClip();
    }
    
    private initMovieClip():void {
        var mcData = RES.getRes("Action_json");
        var mcTexture = RES.getRes("Action_png");
        var mcDataFactory = new egret.MovieClipDataFactory(mcData,mcTexture);
        var role:egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("action"));
        this.addChild(role);
        role.gotoAndPlay(1,4);
        role.x = 300;
        role.y = 600;
    }

}