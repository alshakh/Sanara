/**
*/
module Sanara.Core {
    export type ValueInput = number|boolean|string;
    export class Value {
        //numbers
        static ZERO : Value = new Value(0);
        static ONE : Value = new Value(1);
        //boolean
        static FALSE : Value = new Value(false);
        static TRUE : Value = new Value(true);
        //colors
        static WHITE : Value = new Value("#ffffff");
        static BLACK : Value = new Value("#000000");

        private value:ValueInput;

        constructor(value:ValueInput) {
            this.value = value;

            if(typeof value === "boolean") {
                if(value) {
                    if(typeof Value.TRUE !== "undefined") {
                        return Value.TRUE;
                    } else {
                        Value.TRUE = this;
                    }
                } else {
                    if(typeof Value.FALSE !== "undefined") {
                        return Value.FALSE;
                    } else {
                        Value.FALSE = this;
                    }
                }
            }
        }
        toString() : string {
            var v = this.value;
            if(typeof v === "string") {
                return v;
            } else {
                return v.toString();
            }
        }
        toNumber() : number {
            var v = this.value;
            if(typeof v === "number") {
                return v;
            } else if(typeof v === "string") {
                return 0;
            } else if(typeof v === "boolean") {
                return (v?1:0);
            }
        }
        toBoolean() : boolean {
            var v = this.value;
            if(typeof v === "number") {
                return (v===0 ? false : true);
            } else if(typeof v === "string") {
                return false;
            } else if(typeof v === "boolean") {
                return v;
            }
        }
        toColor() : string {
            var v = this.value;
            if(typeof v === "number") {
                return "#ffffff";
            } else if(typeof v === "string") {
                if(v.length !== 0 && v.charAt(0)==='#') {
                    return v;
                } else {
                    return "#000000";
                }
            } else if(typeof v === "boolean") {
                return (v?"#ffffff": "#000000")
            }
        }
    }
}
