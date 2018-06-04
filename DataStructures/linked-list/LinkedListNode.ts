namespace DATASTRUCTURE {
    "use strict";

    export class LinkedListNode {

        public value: any;
        public next: LinkedListNode = null;

        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }

        public toString(callback?: Function) {
            return callback ? callback(this.value) : `${this.value}`;
        }
    }
}
