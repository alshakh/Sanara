/// <reference path="./src/justAnExample"/>

module Sanara.Std {
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
