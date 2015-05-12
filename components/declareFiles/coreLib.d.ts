declare module Sanara.Core {
    type SanaraContext = CanvasRenderingContext2D;
    class Exception {
        message: string;
        static FEW_CHILDREN: Exception;
        static FEW_PARAMETERS: Exception;
        constructor(message: string);
        toString(): string;
    }
}
declare module Sanara.Core {
    interface Paper {
        domElement: HTMLCanvasElement;
        context: SanaraContext;
        root: Fragment;
        repaint(time: number): void;
    }
    class BasicPaper implements Paper {
        domElement: HTMLCanvasElement;
        context: SanaraContext;
        private width;
        private height;
        root: Fragment;
        constructor(w?: number, h?: number);
        repaint(time?: number): void;
    }
}
/**
*/
declare module Sanara.Core {
    type ValueInput = number | boolean | string;
    class Value {
        static ZERO: Value;
        static ONE: Value;
        static FALSE: Value;
        static TRUE: Value;
        static WHITE: Value;
        static BLACK: Value;
        private value;
        constructor(value: ValueInput);
        toString(): string;
        toNumber(): number;
        toBoolean(): boolean;
        toColor(): string;
    }
}
declare module Sanara.Core {
    type Property = {
        name: string;
        value: Value;
    };
    /**
    Type of Fragment classes. FragmentTemplate is a class that extends Fragment
    */
    type FragmentClass = typeof Fragment;
    interface FragmentClassDoc {
        name: string;
        discription: string;
        parameters?: {
            name: string;
            discription: string;
        }[];
        properties?: {
            name: string;
            discription: string;
        }[];
        children?: {
            name: string;
            discription: string;
            propertiesRequired?: string[];
        }[];
    }
    class Fragment {
        static doc: FragmentClassDoc;
        private static ZERO_GETTER;
        private properties;
        constructor(children: Fragment[], parameters: Value[], properties?: Property[]);
        paint(context: SanaraContext): void;
        paintImplementation(context: SanaraContext): void;
        private getPropertyByName(name);
        hasProperty(name: string): boolean;
        getPropertyValue(name: string, onError?: (string?) => Value): Value;
        setPropertyValue(name: string, value: Value): void;
        width(): number;
        height(): number;
    }
}
declare module Sanara.Core {
    type DictionaryEntry = Sanara.Core.FragmentClass;
    class Dictionary {
        private entries;
        constructor(entries: DictionaryEntry[]);
        hasEntry(name: string): boolean;
        getEntry(name: string): Sanara.Core.DictionaryEntry;
        listNames(): string[];
    }
}
