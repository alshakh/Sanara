/// <reference path="Fragment.ts" />


module Sanara.Core {
    export interface Paper {
        domElement : HTMLCanvasElement;
        context : SanaraContext;
        repaint(time:number) : void;
    }
    export class BasicPaper implements Paper {
        domElement : HTMLCanvasElement;
        context : SanaraContext;
        private width : number;
        private height : number;
        root : Fragment;
        constructor (w:number = 100, h:number = 100) {
            this.width = w;
            this.height = h;

            this.domElement = <HTMLCanvasElement>document.createElement("canvas");
            this.domElement.width = this.width;
            this.domElement.height = this.height;

            this.context = <SanaraContext>this.domElement.getContext("2d");
        }
        repaint(time:number = 0) : void {
            this.root.paint(this.context);
        }
    }
}
