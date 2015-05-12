
module Sanara.Core {
  export type SanaraContext = CanvasRenderingContext2D;
  export class Exception {
      static FEW_CHILDREN = new Exception("Few children");
      static FEW_PARAMETERS = new Exception("Few parameters");

      constructor(public message:string) {};
      toString() : string {
          return this.message;
      }
  }
}
