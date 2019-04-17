import { Heap } from "./Heap";

class MaxHeap extends Heap {

    /**
     * For MaxHeap the first element must be always bigger or equal
     */
    public pairIsInCorrectOrder(firstElement: any, secondElement: any) {
        return this.compare.greaterThanOrEqual(firstElement, secondElement);
    }
}

export { MaxHeap };