
export class TreeNode<T> {
    public data: T;
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(data: T, left: TreeNode<T> | undefined = undefined, right: TreeNode<T> | undefined = undefined) {
        this.data = data;
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
    }

    copy(): TreeNode<T> {
        return new TreeNode<T>(this.data, this.left?.copy(), this.right?.copy());
    }

    equals(other: TreeNode<T>): boolean {
        let res = this.data === other.data;
        if ((!this.left !== !other.left) || (other.left && !this.left?.equals(other.left))) {
            res = false;
        }
        if ((!this.right !== !other.right) || (other.right && !this.right?.equals(other.right))) {
            res = false;
        }
        return res;
    }

    preOrderTraversal(): T[] {
        return [
            this.data,
            ...(this.left?.preOrderTraversal() || []),
            ...(this.right?.preOrderTraversal() || []),
        ];
    }

    inOrderTraversal(): T[] {
        return [
            ...(this.left?.inOrderTraversal() || []),
            this.data,
            ...(this.right?.inOrderTraversal() || []),
        ];
    }

    postOrderTraversal(): T[] {
        return [
            ...(this.left?.postOrderTraversal() || []),
            ...(this.right?.postOrderTraversal() || []),
            this.data,
        ];
    }
}


export function buildTreePreIn<T>(preOrder: T[], inOrder: T[]): TreeNode<T>[] {
    if (inOrder.length === 0 || preOrder.length === 0) {
        return [];
    }

    const value = preOrder[0];

    const inIndexes = allIndexesOf(inOrder, value);

    if (inIndexes.length === 0) {
        throw new TreeConstructionError(
            "Malformed or mismatching traversals – cannot find \"" + value + "\" in " +
            "the appropriate sequence of the inorder traversal: " + inOrder);
    }

    if (inOrder.length === 1 || preOrder.length === 1) {
        return [new TreeNode<T>(value)];
    }

    const res: TreeNode<T>[] = [];

    for (let index of inIndexes) {
        let leftOptions = buildTreePreIn(preOrder.slice(1, index + 1), inOrder.slice(0, index))
        let rightOptions = buildTreePreIn(preOrder.slice(index + 1), inOrder.slice(index + 1));

        for (let leftOpt of (leftOptions.length > 0 ? leftOptions : [null])) {
            for (let rightOpt of (rightOptions.length > 0 ? rightOptions : [null])) {
                res.push(new TreeNode<T>(value, leftOpt, rightOpt));
            }
        }
    }

    return res;
}


export function buildTreeInPost<T>(inOrder: T[], postOrder: T[]): TreeNode<T>[] {
    if (inOrder.length === 0 || postOrder.length === 0) {
        return [];
    }

    const value = postOrder.at(-1);

    const inIndexes = allIndexesOf(inOrder, value);

    if (inIndexes.length === 0) {
        throw new TreeConstructionError(
            "Malformed or mismatching traversals – cannot find \"" + value + "\" in " +
            "the appropriate sequence of the inorder traversal: " + inOrder);
    }

    if (inOrder.length === 1 || postOrder.length === 1) {
        return [new TreeNode<T>(value)];
    }

    const res = [];

    for (let index of inIndexes) {
        const leftOptions = buildTreeInPost(inOrder.slice(0, index), postOrder.slice(0, index));
        const rightOptions = buildTreeInPost(inOrder.slice(index + 1), postOrder.slice(index, -1));

        for (let leftOpt of (leftOptions.length > 0 ? leftOptions : [null])) {
            for (let rightOpt of (rightOptions.length > 0 ? rightOptions : [null])) {
                res.push(new TreeNode<T>(value, leftOpt, rightOpt));
            }
        }
    }

    return res;
}


function allIndexesOf<T>(array: T[], value: T): number[] {
    const res: number[] = [];
    for(let i=0; i<array.length; i++) {
        if (array[i] === value) {
            res.push(i);
        }
    }
    return res;
}


export class TreeConstructionError extends Error {
    constructor(message: string, options: Record<string, any> = undefined) {
        super(message, options);
    }
}
