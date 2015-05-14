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
}
declare module Sanara.Std {
    class Text extends Sanara.Core.Fragment {
        private static TEST_CONTEXT;
        private font;
        private myText;
        constructor(children: any, parameters: Sanara.Core.Value[]);
        text: string;
        private calcHeight();
        private calcWidth();
        paintImplementation(context: Sanara.Core.SanaraContext): void;
    }
}
declare module Sanara.Std {
    class Background extends Sanara.Core.Fragment {
        static doc: Sanara.Core.FragmentClassDoc;
        private color;
        private child;
        constructor(children: Sanara.Core.Fragment[], parameters: Sanara.Core.Value[]);
        private calcWidth();
        private calcHeight();
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
    class Translate extends Sanara.Core.Fragment {
        static doc: Sanara.Core.FragmentClassDoc;
        private child;
        private dx;
        private dy;
        constructor(children: Sanara.Core.Fragment[], parameters: Sanara.Core.Value[]);
        private calcWidth();
        private calcHeight();
        paintImplementation(context: Sanara.Core.SanaraContext): void;
    }
}
declare module Sanara.Std {
    var dictionary: Core.Dictionary;
}
