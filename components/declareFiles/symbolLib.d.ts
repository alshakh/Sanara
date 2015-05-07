declare module Sanara.Symbol {
    class Rect extends Sanara.Core.BaseFragment {
        w: number;
        h: number;
        constructor(w?: number, h?: number);
        paintMe(paper: Sanara.Core.Paper): void;
    }
}
