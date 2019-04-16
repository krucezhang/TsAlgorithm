import { LinkedList } from "../linked-list/LinkedList";

class Queue {

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

    /**
     * 进队列
     * @param value 
     */
    public enqueue(value: any) {
        this.linkedList.append(value);
    }

    public dequeue() {
        const removeHead = this.linkedList.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    public toString(callback?: Function) {
        return this.linkedList.toString(callback);
    }
}

export { Queue };