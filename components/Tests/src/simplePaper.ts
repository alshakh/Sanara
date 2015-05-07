/// <reference path="../declareFiles/coreLib.d.ts" />
/// <reference path="../declareFiles/symbolLib.d.ts" />

module Sanara.Tests {
    export var simplePaper = (function () {
        var paper = new Sanara.Core.BasicPaper(1000,1000);
        paper.root = new Sanara.Symbol.Rect(122,500);
        return paper;
    })();
}
