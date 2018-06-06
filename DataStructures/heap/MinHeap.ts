namespace DATASTRUCTURE {
    "use strict";

    export class MinHeap {

        public HeapContainer = [];
        private compare: Comparator;

        constructor(comparatorFunction: Function) {
            this.HeapContainer = [];
            this.compare = new Comparator(comparatorFunction);
        }

        public IsEmpty(): boolean {
            return this.HeapContainer.length === 0;
        }

        public ToString() {
            return this.HeapContainer.toString();
        }

        public Add(item: any) {
            this.HeapContainer.push(item);

            return this;
        }
    }

}