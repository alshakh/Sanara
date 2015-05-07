declare module Sanara.Core {
    type SanaraContext = CanvasRenderingContext2D;
}
declare module Sanara.Core {
    interface Paper {
        domElement: HTMLCanvasElement;
        context: SanaraContext;
        w: number;
        h: number;
        root: Fragment;
        repaint(time: number): void;
    }
    class BasicPaper implements Paper {
        domElement: HTMLCanvasElement;
        context: SanaraContext;
        w: number;
        h: number;
        root: Fragment;
        constructor(w?: number, h?: number);
        repaint(time?: number): void;
    }
}
declare module Sanara.Core {
    interface Fragment {
        paint(paper: Paper): void;
        paintMe(paper: Paper): void;
    }
    class BaseFragment implements Fragment {
        children: [Fragment];
        constructor(children?: [Fragment]);
        paint(paper: Paper): void;
        paintMe(paper: Paper): void;
    }
}
