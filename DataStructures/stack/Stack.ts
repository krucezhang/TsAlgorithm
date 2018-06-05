namespace DATASTRUCTURE {
    "use strict";

    export class Stack {

        public LinkedList: LinkedList;

        constructor() {
            this.LinkedList = new LinkedList();
        }

        public IsEmpty() {
            return !this.LinkedList.tail;
        }

        public Push(value: any) {
            this.LinkedList.Append(value);
        }

        public Pop() {
            const removeTail = this.LinkedList.DeleteTail();
            return removeTail ? removeTail.value : null;
        }

        public Peek() {
            if (this.IsEmpty()) {
                return null;
            }

            return this.LinkedList.tail.value;
        }

        public ToArray() {
            return this.LinkedList
                .ToArray()
                .map((linkedListNode: LinkedListNode) => linkedListNode.value);
        }

        public ToString(callback?: Function) {
            return this.LinkedList.ToString(callback);
        }
    }
}