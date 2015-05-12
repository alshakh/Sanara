/// <reference path="Fragment.ts"/>
/// <reference path="Dictionary.ts"/>


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

            var widthGetter = () => {
                return new Sanara.Core.Value(Math.max(this.lefty.width()+this.righty.width(),this.content.width()))
            }
            properties.push({name:"width",getter:widthGetter});

            var heightGetter = () => {
                return new Sanara.Core.Value(this.content.height() + Math.max(this.lefty.height(), this.righty.height()));
            }
            properties.push({name:"height",getter:heightGetter});

            var nodePivotGetter = () => {
                return new Sanara.Core.Value(this.lefty.width() + this.content.width()/2);
            }
            properties.push({name:"node-pivot",getter:nodePivotGetter});

            super(null,null,properties);
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

            var diameterGetter =function(){return new Sanara.Core.Value(100)};

            super(null,null,[
                {name:"width",getter: diameterGetter},
                {name:"height",getter: diameterGetter}
            ]);
        }


        paintImplementation(context: Sanara.Core.SanaraContext) {
            context.beginPath();
            context.arc(50, 50, 50, 0, 2 * Math.PI, false);
            context.fill();
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
                {name:"width",getter: ()=>this.child.getPropertyValue("width")},
                {name:"height",getter: ()=>this.child.getPropertyValue("height")},
            ]);
        }

        paintImplementation(context: Sanara.Core.SanaraContext) {
            context.fillStyle = this.color.toColor();
            this.child.paint(context);
        }
    }

    export var dictionary : Sanara.Core.Dictionary = (function() {
        var entries = <Sanara.Core.DictionaryEntry[]>[];
        //
        entries.push(Sanara.Std.Circle);
        entries.push(Sanara.Std.Bitree);
        entries.push(Sanara.Std.FillColor);
        //
        return new Sanara.Core.Dictionary(entries);
    })();
}
