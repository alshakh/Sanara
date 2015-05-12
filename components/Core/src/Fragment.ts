/// <reference path="Paper.ts"/>
/// <reference path="Core.ts"/>
/// <reference path="Value.ts"/>


module Sanara.Core {
    export type Property = {name:string, value:Value};
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
                this.properties.push({name:"width",value: Value.ZERO});
            }
            if(! this.hasProperty("height")) {
                this.properties.push({name:"height", value: Value.ZERO})
            }
        }

        paint(context : SanaraContext) {
            context.save();
            this.paintImplementation(context);
            context.restore();
        }
        paintImplementation(context : SanaraContext) {}

        private getPropertyByName(name:string) : Property {
            for(var i = 0 ; i < this.properties.length ; i++) {
                if(this.properties[i].name === name) {
                    return this.properties[i];
                }
            }
            return null;
        }
        hasProperty(name:string) : boolean {
            return ( this.getPropertyByName(name) === null ? false : true);
        }
        getPropertyValue(name:string, onError?: (string?)=>Value) : Value {
            var p = this.getPropertyByName(name);
            if(p === null){
                if(onError) {
                    return onError(name);
                } else {
                    return Value.ZERO;
                }
            }
            return p.value;
        }
        setPropertyValue(name:string, value: Value) : void {
            //does not add if not exist
            var p = this.getPropertyByName(name);
            if(p !== null) {
                p.value = value;
            }
        }

        width() : number {
            return this.getPropertyValue("width", ()=>Value.ZERO).toNumber();
        }
        height() : number {
            return this.getPropertyValue("height", ()=>Value.ZERO).toNumber();
        }
    }
}
