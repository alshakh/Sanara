
/// <reference path="../declareFiles/coreLib.d.ts" />

module Sanara.Std {
    export class Translate extends Sanara.Core.Fragment {
        static doc:Sanara.Core.FragmentClassDoc = {
            name : "translate",
            discription : "Translate a fragment",
            parameters : [
                {
                    name: "dx",
                    discription : "translate x"
                },
                {
                    name: "dy",
                    discription : "translate y"
                }
            ],
            children : [
                {
                    name: "translated",
                    discription : "fragment to be translated",
                }
            ]
        }

        private child : Sanara.Core.Fragment;
        private dx : Sanara.Core.Value;
        private dy : Sanara.Core.Value;

        constructor(children : Sanara.Core.Fragment[] , parameters : Sanara.Core.Value[]) {
            if(children.length < 1) {
                throw Sanara.Core.Exception.FEW_CHILDREN;
            }
            if(parameters.length < 2) {
                throw Sanara.Core.Exception.FEW_PARAMETERS;
            }
            this.dx = parameters[0];
            this.dy = parameters[1];
            this.child = children[0];

            super(null,null,[
                {name:"width",value:this.calcWidth()},
                {name:"height",value:this.calcHeight()}
            ]);
        }

        private calcWidth() : Sanara.Core.Value {
            return new Sanara.Core.Value(this.dx.toNumber() + this.child.width());
        }
        private calcHeight() : Sanara.Core.Value {
            return new Sanara.Core.Value(this.dy.toNumber() + this.child.height());
        }

        paintImplementation(context : Sanara.Core.SanaraContext) {
            context.translate(this.dx.toNumber(), this.dy.toNumber());
            this.child.paint(context);
        }
    }
}
