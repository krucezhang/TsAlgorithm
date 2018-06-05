namespace DATASTRUCTURE {
    "use strict";

    export class Queue {
        public linkedList: LinkedList;

        constructor() {
            this.linkedList = new LinkedList();
        }

        public IsEmpty() {
            return !this.linkedList.tail;
        }

        public Enqueue(value: any) {
            this.linkedList.Append(value);
        }

        public Dequeue() {
            if (this.IsEmpty()) {
                return null;
            }
            const headNode = this.linkedList.DeleteHead();
            return headNode ? headNode : null;
        }

        public Peek() {
            if (this.IsEmpty()) {
                return null;
            }

            return this.linkedList.head.value;
        }

        public ToArray() {
            let array = this.linkedList.ToArray();

            return array.map((linkedNode: LinkedListNode) => linkedNode.value);
        }

        public ToString(callback?: Function) {
            return this.linkedList.ToString(callback);
        }
    }
}