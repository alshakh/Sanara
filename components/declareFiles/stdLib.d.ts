declare module Sanara.Std {
    class Bitree extends Sanara.Core.Fragment {
        static doc: Sanara.Core.FragmentClassDoc;
        private content;
        private lefty;
        private righty;
        constructor(children: Sanara.Core.Fragment[]);
        private calcWidth();
        private calcHeight();
        private calcNodePivot();
        paintImplementation(context: Sanara.Core.SanaraContext): void;
    }
    class Circle extends Sanara.Core.Fragment {
        static doc: Sanara.Core.FragmentClassDoc;
        private static CIRCLE;
        constructor();
        paintImplementation(context: Sanara.Core.SanaraContext): void;
    }
    class FillColor extends Sanara.Core.Fragment {
        static doc: Sanara.Core.FragmentClassDoc;
        private color;
        private child;
        constructor(children: Sanara.Core.Fragment[], parameters: Sanara.Core.Value[]);
        private calcWidth();
        private calcHeight();
        paintImplementation(context: Sanara.Core.SanaraContext): void;
    }
}
declare module Sanara.Std {
    var dictionary: Sanara.Core.Dictionary;
}
