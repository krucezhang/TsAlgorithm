import { LinkListNode } from "./LinkListNode";
import { Comparator } from "../../utils/Comparator";

class LinkedList {

    public head: LinkListNode = null;
    public tail: LinkListNode = null;
    public compare: Comparator;

    constructor(comparatorFunction?: Function) {
        this.head = null;
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
    }

    public prepend(value: any) {
        const newNode = new LinkListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    public append(value: any) {
        const newNode = new LinkListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    public delete(value: any){
        if(!this.head){
            return null;
        }

        let deleteNode = null;

        while(this.head && this.compare.equal(this.head.value, value)){
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null){
            while(currentNode.next){
                if(this.compare.equal(currentNode.next.value, value)){
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }else{
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.compare.equal(this.tail.value, value)){
            this.tail = currentNode;
        }

        return deleteNode;
    }

    public deleteHead(){
        if(!this.head){
            return null;
        }

        const deleteHead = this.head;

        if(this.head.next){
            this.head = this.head.next;
        }else{
            this.head = null;
            this.tail = null;
        }

        return deleteHead;
    }

    public toArray(){
        const nodes: LinkListNode[] = [];

        let currentNode = this.head;
        while(currentNode){
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    public toString(callback?: Function){
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}

export { LinkedList };