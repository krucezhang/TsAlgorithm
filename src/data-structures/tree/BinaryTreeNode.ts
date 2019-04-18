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

    public setValue(value: any){
        this.value = value;

        return this;
    }

    public setLeft(node: BinaryTreeNode){
        if(this.left){
            this.left.parent = null;
        }

        this.left = node;

        if(this.left){
            this.left.parent = this;
        }

        return this;
    }
}

export { BinaryTreeNode };