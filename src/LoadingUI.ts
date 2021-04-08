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

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        //this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
    }

    private textField: egret.TextField;
    //private pBar:IndexProgress;
    private loading_green:egret.Bitmap;
    private async createView(){

        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        
        //加载背景图
        let loading_bg:egret.Bitmap = new egret.Bitmap();
        loading_bg.texture = RES.getRes("loading_bg_jpg");
        loading_bg.width = this.width;
        loading_bg.height = this.height;
        this.addChild(loading_bg);

        //遮罩图
        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.4);
        topMask.graphics.drawRect(0, 0,this.width, this.height);
        topMask.graphics.endFill();
        this.addChild(topMask);

        //进度条测试
        let loading_grey:egret.Bitmap = new egret.Bitmap();
        loading_grey.texture = RES.getRes("index_track_png");
        loading_grey.scale9Grid = new egret.Rectangle(23,13,20,0);
        loading_grey.width = 1400;
        //loading_grey.height = this.height;
        this.addChild(loading_grey);
        loading_grey.x = 260;
        loading_grey.y = 960;

        this.loading_green = new egret.Bitmap();
        this.loading_green.texture = RES.getRes("index_thumb_png");
        this.loading_green.scale9Grid = new egret.Rectangle(23,13,20,0);
        this.loading_green.width = 0;
        //loading_grey.height = this.height;
        this.addChild(this.loading_green);
        this.loading_green.x = 260;
        this.loading_green.y = 960;

        //加载进度文本显示
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 700;
        this.textField.x = 720;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;

        //this.addEventListener(egret.Event.ENTER_FRAME,this.onFrame,this);
    }

    public onProgress(current: number, total: number): void {
        console.log("current"+current+",total:"+total);
        this.loading_green.width = 1400*current/total;
        this.textField.text = `资源加载中...${(current/total*100).toFixed(2)}%`;//保留两位小数.toFixed(2)
    }
    /*public onProgress(current: number, total: number): void {
        this.textField.text = `资源加载中...${current}/${total}`;
    }*/
}
