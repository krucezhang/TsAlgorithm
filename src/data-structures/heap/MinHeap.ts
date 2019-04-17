import { Heap } from "./Heap";

class MinHeap extends Heap {

    /***
     * For MinHeap the first element must be always smaller or equal
     */
    public pairIsInCorrectOrder(firstElement: any, secondElement: any) {
        return this.compare.lessThanOrEqual(firstElement, secondElement);
    }
}

export { MinHeap };