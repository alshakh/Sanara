/// <reference path="../declareFiles/coreLib.d.ts" />



module Sanara.Std {
    export class Background extends Sanara.Core.Fragment {
        static doc:Sanara.Core.FragmentClassDoc = {
            name: "background",
            discription: "Adds background to child",
            children : [
                {
                    name : "frontground",
                    discription : "fragment that will have background"
                }
            ],
            parameters : [
                {
                    name: "color",
                    discription : "Background color. e.g. \"#f3422e\""
                }
            ]
        }

        private color : Sanara.Core.Value;
        private child : Sanara.Core.Fragment;

        constructor(children:Sanara.Core.Fragment[], parameters: Sanara.Core.Value[]) {
            if(children.length < 1) {
                throw Sanara.Core.Exception.FEW_CHILDREN;
            }
            if(parameters.length < 1) {
                throw Sanara.Core.Exception.FEW_PARAMETERS;
            }
            this.color = parameters[0];
            this.child = children[0];

            super(null,null,[
                {name:"width",value:this.calcWidth()},
                {name:"height",value:this.calcHeight()}
            ]);
        }

        private calcWidth() {
            return this.child.getPropertyValue("width");
        }

        private calcHeight() {
            return this.child.getPropertyValue("height");
        }

        paintImplementation(context: Sanara.Core.SanaraContext) {
            context.save(); {
                context.fillStyle = this.color.toColor();
                context.fillRect(0,0,this.child.width(), this.child.height());
            }; context.restore();
            this.child.paint(context);
        }
    }
    export class FillColor extends Sanara.Core.Fragment {
        static doc:Sanara.Core.FragmentClassDoc = {
            name: "fill-color",
            discription: "Changes fill color for child environment",
            children : [
                {
                    name : "colored",
                    discription : "fragment that will recieve new fill color"
                }
            ],
            parameters : [
                {
                    name: "color",
                    discription : "New color. e.g. \"#f3422e\""
                }
            ]
        }

        private color : Sanara.Core.Value;
        private child : Sanara.Core.Fragment;

        constructor(children:Sanara.Core.Fragment[], parameters: Sanara.Core.Value[]) {
            if(children.length < 1) {
                throw Sanara.Core.Exception.FEW_CHILDREN;
            }
            if(parameters.length < 1) {
                throw Sanara.Core.Exception.FEW_PARAMETERS;
            }
            this.color = parameters[0];
            this.child = children[0];

            super(null,null,[
                {name:"width",value:this.calcWidth()},
                {name:"height",value:this.calcHeight()}
            ]);
        }

        private calcWidth() {
            return this.child.getPropertyValue("width");
        }

        private calcHeight() {
            return this.child.getPropertyValue("height");
        }

        paintImplementation(context: Sanara.Core.SanaraContext) {
            context.fillStyle = this.color.toColor();
            this.child.paint(context);
        }
    }
}
