export class RecursionNode<I, R> {
    children: RecursionNode<I, R>[];
    input: I;
    result: R;

    constructor(input: I, result: R) {
        this.children = [];
        this.input = input;
        this.result = result;
    }

    addChild(node: RecursionNode<I, R>) {
        this.children.push(node);
    }
}


// Just an alias for better naming
export type RecursionObserver<I, R> = RecursionNode<I, R>;
