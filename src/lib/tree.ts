
export class TreeNode<T> {
    public data: T;
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}


export function buildTreePreIn<T>(preOrder: T[], inOrder: T[]): TreeNode<T>[] | null {
    if (inOrder.length === 0 || preOrder.length === 0) {
        return null;
    }

    const node = new TreeNode<T>(preOrder[0]);

    const inIndex = inOrder.indexOf(node.data);

    if (inOrder.length === 1 || preOrder.length === 1) {
        return node;
    }

    node.left = buildTreePreIn(preOrder.slice(1, inIndex + 1), inOrder.slice(0, inIndex))
    node.right = buildTreePreIn(preOrder.slice(inIndex + 1), inOrder.slice(inIndex + 1));

    return node;
}


export function buildTreeInPost<T>(inOrder: T[], postOrder: T[]): TreeNode<T>[] | null {
    if (inOrder.length === 0 || postOrder.length === 0) {
        return null;
    }

    const node = new TreeNode<T>(postOrder.at(-1));

    const inIndex = inOrder.indexOf(node.data);

    if (inOrder.length === 1 || postOrder.length === 1) {
        return node;
    }

    node.left = buildTreeInPost(inOrder.slice(0, inIndex), postOrder.slice(0, inIndex));
    node.right = buildTreeInPost(inOrder.slice(inIndex + 1), postOrder.slice(inIndex, -1));

    return node;
}


// Function to find index of value
// in arr[start...end]. The function
// assumes that value is present in in[]
function search<T>(arr: T[], strt: number, end: number, value: T): number  {
    let i;
    for(i = strt; i <= end; i++) {
        if (arr[i] == value)
            return i;
    }
    return res;
}
