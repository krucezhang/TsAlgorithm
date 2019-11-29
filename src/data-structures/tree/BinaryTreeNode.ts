import { HashTable } from "../hash-table/HashTable";
import { Comparator } from "../../utils/Comparator";

class BinaryTreeNode {

    public left: BinaryTreeNode = null;
    public right: BinaryTreeNode = null;
    public parent: BinaryTreeNode = null;
    public value: any = null;

    public meta: HashTable = null;
    public nodeComparator: Comparator;

    constructor(value = null) {
        this.value = value;
        this.nodeComparator = new Comparator();
    }

    public get leftHeight(): number {
        if (!this.left) {
            return 0;
        }

        return this.left.height + 1;
    }

    public get rightHeight(): number {
        if (!this.right) {
            return 0;
        }

        return this.right.height + 1;
    }

    public get height(): number {
        return Math.max(this.leftHeight, this.rightHeight);
    }

    public get balanceFactor() {
        return this.leftHeight - this.rightHeight;
    }

    public setValue(value: any) {
        this.value = value;

        return this;
    }

    public get uncle() {
        // Check if current node has parent.
        if (!this.parent) {
            return undefined;
        }

        // Check if current node has grand-parent.
        if (!this.parent.parent) {
            return undefined;
        }

        // Check if grand-parent has two children
        if (!this.parent.parent.left || !this.parent.parent.right) {
            return undefined;
        }

        if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
            return this.parent.parent.right;
        }

        return this.parent.parent.left;
    }

    public setLeft(node: BinaryTreeNode) {
        if (this.left) {
            this.left.parent = null;
        }

        this.left = node;

        if (this.left) {
            this.left.parent = this;
        }

        return this;
    }

    public setRight(node: BinaryTreeNode){
        if(this.right){
            this.right.parent = null;
        }

        this.right = node;

        if(node){
            this.right.parent = this;
        }

        return this;
    }
}

export { BinaryTreeNode };