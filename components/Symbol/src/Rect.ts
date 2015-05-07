/// <reference path="../declareFiles/coreLib.d.ts" />

module Sanara.Symbol {
    export class Rect extends Sanara.Core.BaseFragment {
        w : number;
        h : number;
        constructor(w: number=100, h: number=100){
            super();
            this.w = w;
            this.h = h;
        }
        paintMe (paper : Sanara.Core.Paper) {
            paper.context.fillRect(0,0,this.w,this.h);
        }
    }
}
