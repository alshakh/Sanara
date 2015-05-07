/// <reference path="Fragment.ts" />


module Sanara.Core {
    export interface Paper {
        domElement : HTMLCanvasElement;
        context : SanaraContext;
        w : number;
        h : number;
        root : Fragment;
        repaint(time:number) : void;
    }
    export class BasicPaper implements Paper {
        domElement : HTMLCanvasElement;
        context : SanaraContext;
        w : number;
        h : number;
        root : Fragment;
        constructor (w:number = 100, h:number = 100) {
            this.w = w;
            this.h = h;

            this.domElement = <HTMLCanvasElement>document.createElement("canvas");
            this.context = <SanaraContext>this.domElement.getContext("2d");
        }
        repaint(time:number = 0) : void {
            this.root.paint(this);
        }
    }
}
