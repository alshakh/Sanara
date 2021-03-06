/// <reference path="../declareFiles/coreLib.d.ts"/>


module Sanara.Std {
    export class Bitree extends Sanara.Core.Fragment {
        static doc:Sanara.Core.FragmentClassDoc = {
            name : "bitree",
            discription : "binary tree",
            properties : [
                {
                name:"node-pivot",
                discription:"place to hold"
                }
            ],
            children : [
                {
                    name: "main-node",
                    discription : "main node",
                }, {
                    name: "lefty",
                    discription : "left node",
                }, {
                    name: "righty",
                    discription : "right node",
                }
            ]
        }

        private content : Sanara.Core.Fragment;
        private lefty : Sanara.Core.Fragment;
        private righty : Sanara.Core.Fragment;

        constructor(children : Sanara.Core.Fragment[]) {
            if(children.length < 3) {
                throw Sanara.Core.Exception.FEW_CHILDREN;
            }
            this.content = children[0];
            this.lefty = children[1];
            this.righty = children[2];

            var properties = <Sanara.Core.Property[]>[];


            properties.push({name:"node-pivot",value:this.calcNodePivot()});
            properties.push({name:"width",value:this.calcWidth()});
            properties.push({name:"height",value:this.calcHeight()});

            super(null,null,properties);
        }

        private calcWidth() : Sanara.Core.Value {
            return new Sanara.Core.Value(Math.max(this.lefty.width()+this.righty.width(),this.content.width()))
        }
        private calcHeight() : Sanara.Core.Value {
            return new Sanara.Core.Value(this.content.height() + Math.max(this.lefty.height(), this.righty.height()));
        }
        private calcNodePivot() : Sanara.Core.Value {
            return new Sanara.Core.Value(this.lefty.width() + this.content.width()/2);
        }

        paintImplementation(context : Sanara.Core.SanaraContext) {
            context.save();
            {
                context.translate((this.width()-this.content.width())/2,0);
                this.content.paint(context);
            }
            context.restore();

            context.translate(0,this.content.height());
            this.lefty.paint(context);

            context.translate(this.lefty.width(),0);
            this.righty.paint(context);
        }
    }
    export class Circle extends Sanara.Core.Fragment {
        static doc:Sanara.Core.FragmentClassDoc = {
            name: "circle",
            discription: "circle of diameter 100"
        }

        private static CIRCLE : Circle = new Circle();

        constructor() {
            if(typeof Circle.CIRCLE === "undefined") {
                Circle.CIRCLE = this;
            } else {
                return Circle.CIRCLE;
            }

            var diameter = new Sanara.Core.Value(100);

            super(null,null,[
                {name:"width",value: diameter},
                {name:"height",value: diameter}
            ]);
        }


        paintImplementation(context: Sanara.Core.SanaraContext) {
            context.beginPath();
            context.arc(50, 50, 50, 0, 2 * Math.PI, false);
            context.fill();
        }
    }
}
