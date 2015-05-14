/// <reference path="./declareFiles/coreLib.d.ts"/>

/// <reference path="./src/justAnExample"/>
/// <reference path="./src/Text.ts"/>
/// <reference path="./src/colors.ts"/>
/// <reference path="./src/position.ts"/>
 
module Sanara.Std {
    export var dictionary : Core.Dictionary = new Sanara.Core.Dictionary([
        Circle,
        Bitree,
        Text,
        Background,
        FillColor
    ]);
}
