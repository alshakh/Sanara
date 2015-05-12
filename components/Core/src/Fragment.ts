/// <reference path="Paper.ts"/>
/// <reference path="Core.ts"/>
/// <reference path="Value.ts"/>


module Sanara.Core {
    /**
    valueGetter because properties will change over time!.
    */
    export type Property = {name:string, getter:ValueGetter};
    /**
    Type of Fragment classes. FragmentTemplate is a class that extends Fragment
    */
    export type FragmentClass = typeof Fragment;
    export interface FragmentClassDoc {
        name : string,
        discription : string,
        parameters? : {name:string, discription:string}[],
        properties? : {name:string, discription:string}[],
        children? : {name:string, discription:string, propertiesRequired?:string[]}[]
    }
    export class Fragment {
        static doc:FragmentClassDoc = {
            name : "fragment-base-class",
            discription : "SHOULD NOT BE INSTANTIATED: base class for all fragment classes"
        }

        private static ZERO_GETTER = ()=>Value.ZERO;

        private properties : Property[];

        constructor (children:Fragment[], parameters:Value[], properties? : Property[]) {
            // children and parameters are ignored in baseclass but should be
            //  implemented in classes that extends fragment class
            if(properties) {
                this.properties = properties;
            } else {
                this.properties = <Property[]>[];
            }

            if(! this.hasProperty("width")) {
                this.properties.push({name:"width", getter:Fragment.ZERO_GETTER});
            }
            if(! this.hasProperty("height")) {
                this.properties.push({name:"height", getter:Fragment.ZERO_GETTER})
            }
        }

        paint(context : SanaraContext) {
            context.save();
            this.paintImplementation(context);
            context.restore();
        }
        paintImplementation(context : SanaraContext) {}

        hasProperty(name:string) : boolean{
            for(var i = 0 ; i < this.properties.length ; i++) {
                if(this.properties[i].name === name) {
                    return true;
                }
            }
            return false;
        }
        /**
        fragment must have the property Or unexpected results
        */
        getPropertyValue(name:string) : Value {
            for(var i = 0 ; i < this.properties.length ; i++) {
                if(this.properties[i].name === name) {
                    return this.properties[i].getter();
                }
            }
            return Value.ZERO;
        }

        width() : number {
            return this.getPropertyValue("width").toNumber();
        }
        height() : number {
            return this.getPropertyValue("height").toNumber();
        }
    }
}
