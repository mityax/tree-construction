// Not yet fully functioning begin of an AVL tree implementation

import {TreeNode} from "./tree";

export class AVLTreeNode<T> extends TreeNode<T> {
    public left: AVLTreeNode<T> | null;
    public right: AVLTreeNode<T> | null;

    constructor(data: T, left: AVLTreeNode<T> | undefined = undefined, right: AVLTreeNode<T> | undefined = undefined) {
        super(data, left, right);
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
    }

    static fromTree<T>(tree: TreeNode<T>): AVLTreeNode<T> {
        const left = tree.left ? AVLTreeNode.fromTree<T>(tree.left) : undefined;
        const right = tree.right ? AVLTreeNode.fromTree<T>(tree.right) : undefined;
        return new AVLTreeNode<T>(tree.data, left, right)
    }

    copy(): AVLTreeNode<T> {
        return new AVLTreeNode<T>(this.data, this.left?.copy(), this.right?.copy());
    }

    height(): number {
        return Math.max(this.left?.height() || -1, this.right?.height() || -1) + 1
    }

    balanceFactor(): number {
        return (this.left?.height() || -1) - (this.right?.height() || -1);
    }

    isBalanced(): boolean {
        const f = this.balanceFactor();
        return -1 <= f && f <= 1;
    }

    every(test: (node: AVLTreeNode<T>) => boolean): boolean {
        if (!test(this)) return false;
        if (this.left && !this.left.every(test)) return false;
        if (this.right && !this.right.every(test)) return false;
        return true;
    }

    rotateL(): AVLTreeNode<T> {
        const node = this.copy();

        let tmp = node.left!;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    rotateR(): AVLTreeNode<T> {
        const node = this.copy();

        let tmp = node.right!;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    rotateLR(): AVLTreeNode<T> {
        const node = this.copy();

        node.left = node.rotateR();
        return node.rotateL();
    }

    rotateRL(): AVLTreeNode<T> {
        const node = this.copy();

        node.right = node.rotateL();
        return node.rotateR();
    }
}
