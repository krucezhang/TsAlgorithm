import { LinkedList } from "../linked-list/LinkedList";

class Stack {

    public linkedList: LinkedList = null;

    constructor() {
        this.linkedList = new LinkedList();
    }

    public isEmpty() {
        return !this.linkedList.head;
    }

    public peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.linkedList.head.value;
    }

    public push(value: any) {
        this.linkedList.prepend(value);
    }

    public pop() {
        const removeHead = this.linkedList.deleteHead();

        return removeHead ? removeHead.value : null;
    }

    public toArray() {
        return this.linkedList.toArray().map(node => node.value);
    }

    public toString(callback?) {
        return this.linkedList.toString(callback);
    }
}

export { Stack };