//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingProgress extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;
    private createView(): void {
        //加载动画
        /*let loading_show:egret.Bitmap = new egret.Bitmap();
        loading_show.texture = RES.getRes("loading_show_gif");
        loading_show.width = 1920/2;
        loading_show.height = 1080/2;
        this.addChild(loading_show);*/
        /*var data = RES.getRes("actionGame_json");
        var txtr = RES.getRes("actionGame_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
        var mc1:egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("actionGame")); 
        this.addChild(mc1);
        mc1.x = 720;
        mc1.y = 600;*/
        //mc1.gotoAndPlay(1,3);
        //mc1.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {this.removeChild(mc1)}, this);
        console.log("mc1");
        //遮罩图
        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.2);
        topMask.graphics.drawRect(0, 0,1920, 1080);
        topMask.graphics.endFill();
        this.addChild(topMask);

        //加载进度显示
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 490;
        this.textField.x = 720;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        //进度条
        this.initProgressBar();
    }
    private pBar:eui.ProgressBar;
    private initProgressBar():void{
        this.pBar = new eui.ProgressBar();
        this.pBar.maximum = 100;//设置进度条的最大值
        this.pBar.minimum = 0;//设置进度条的最小值
        this.pBar.width = 300;
        this.pBar.height = 28;
        this.addChild(this.pBar);
        this.pBar.x = 1620/2;
        this.pBar.y = 600;
        this.pBar.value = 0;//设置进度条的初始值
        //this.pBar.th
    }
    private progressCount: number = 0;
    public onProgress(current: number, total: number): void {
        console.log("current:"+current+",total:"+total);
        this.textField.text = `资源加载中...${(current/total*100).toFixed(2)}%`;//保留两位小数.toFixed(2)
        this.progressCount ++;
        this.pBar.value = this.progressCount/142*100;
        //this.pBar.value = this.pBar.value+1;
}
    /*public onProgress(current: number, total: number): void {
        this.textField.text = `资源加载中...${current}/${total}`;
    }*/
}
