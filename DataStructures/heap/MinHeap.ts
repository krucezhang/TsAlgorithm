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

        public Peek() {
            if (this.HeapContainer.length === 0) {
                return null;
            }

            return this.HeapContainer[0];
        }

        public Swap(indexOne: number, indexTwo: number) {
            const tmp = this.HeapContainer[indexOne];
            this.HeapContainer[indexOne] = this.HeapContainer[indexTwo];
            this.HeapContainer[indexTwo] = tmp;
        }

        public GetParentIndex(childIndex: number) {
            return Math.floor((childIndex - 1) / 2);
        }

        public GetRightChildIndex(parentIndex: number) {
            return (parentIndex * 2) + 2;
        }

        public GetLeftChildIndex(parentIndex: number) {
            return (parentIndex * 2) + 1;
        }

        public HasParent(childIndex: number) {
            return this.GetParentIndex(childIndex) >= 0;
        }

        public HasRightChild(parentIndex: number) {
            return this.GetRightChildIndex(parentIndex) < this.HeapContainer.length;
        }

        public HasLeftChild(parentIndex: number) {
            return this.GetLeftChildIndex(parentIndex) < this.HeapContainer.length;
        }

        public LeftChild(parentIndex: number) {
            return this.HeapContainer[this.GetLeftChildIndex(parentIndex)];
        }

        public RightChild(parentIndex: number) {
            return this.HeapContainer[this.GetRightChildIndex(parentIndex)];
        }

        public Parent(childIndex: number) {
            return this.HeapContainer[this.GetParentIndex(childIndex)];
        }

        public Add(item: any) {
            this.HeapContainer.push(item);
            this.HeapifyUp();
            return this;
        }

        public HeapifyUp(customStartIndex?: number) {
            let currentIndex = customStartIndex || this.HeapContainer.length - 1;

            while (this.HasParent(currentIndex)
                && this.compare.LessThan(this.HeapContainer[currentIndex], this.Parent(currentIndex))) {

                this.Swap(currentIndex, this.GetParentIndex(currentIndex));
                currentIndex = this.GetParentIndex(currentIndex);
            }
        }

        public Find(item: any, customComparator?: Comparator) {
            const foundItemIndices = [];
            const comparator: Comparator = customComparator || this.compare;

            for (let itemIndex = 0; itemIndex < this.HeapContainer.length; itemIndex++) {
                if (comparator.Equal(item, this.HeapContainer[itemIndex])) {
                    foundItemIndices.push(itemIndex);
                }
            }

            return foundItemIndices;
        }
    }

}