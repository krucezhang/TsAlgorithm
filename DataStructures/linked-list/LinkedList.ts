namespace DATASTRUCTURE {
    "use strict";
    export class LinkedList {

        private head: LinkedListNode = null;
        private tail: LinkedListNode = null;
        private compare: Comparator = null;

        constructor(comparatorFunction: Function) {
            this.head = null;
            this.tail = null;
            this.compare = new Comparator(comparatorFunction);
        }

        public Prepend(value: any) {
            this.head = new LinkedListNode(value, this.head);

            return this;
        }

        public Append(value) {
            const newNode = new LinkedListNode(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;

                return this;
            }

            this.tail.next = newNode;
            this.tail = newNode;

            return this;
        }

        public Delete(value) {
            if (!this.head) {
                return null;
            }

            let deleteNode: LinkedListNode = null;

            if (this.compare.Equal(this.head.value, value)) {
                deleteNode = this.head;
                this.head = this.head.next;
            }

            let currentNode: LinkedListNode = this.head;

            if (currentNode !== null) {
                while (currentNode.next) {
                    if (this.compare.Equal(currentNode.next.value, value)) {
                        deleteNode = currentNode.next;
                        currentNode.next = currentNode.next.next;
                    } else {
                        currentNode = currentNode.next;
                    }
                }
            }

            if (this.compare.Equal(this.tail.value, value)) {
                this.tail = currentNode;
            }

            return deleteNode;
        }

        public Find(value = undefined, callback: Function = undefined) {
            if (!this.head) {
                return null;
            }

            let currentNode = this.head;
            while (currentNode) {
                if (callback && callback(currentNode.value)) {
                    return currentNode;
                }

                if (value !== undefined && this.compare.Equal(currentNode.value, value)) {
                    return currentNode;
                }

                currentNode = currentNode.next;
            }

            return null;
        }

        public DeleteTail() {
            if (this.head === this.tail) {
                const deletedTail = this.tail;
                this.head = null;
                this.tail = null;

                return deletedTail;
            }

            const deleteTail = this.tail;

            let currentNode = this.head;
            while (currentNode.next) {
                if (!currentNode.next.next) {
                    currentNode.next = null;
                } else {
                    currentNode = currentNode.next;
                }
            }

            this.tail = currentNode;

            return deleteTail;
        }

        public DeleteHead() {
            if (!this.head) {
                return null;
            }

            const deleteHead = this.head;

            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = null;
                this.tail = null;
            }

            return deleteHead;
        }

        public ToArray() {
            const nodes = [];
            let currentNode = this.head;
            while (currentNode) {
                nodes.push(currentNode);
                currentNode = currentNode.next;
            }

            return nodes;
        }

        public ToString(callback: Function) {
            return this.ToArray().map((node: LinkedListNode) => node.toString(callback));
        }
    }
}

