import { Comparator } from "../../utils/Comparator";

class Heap {

    public heapContainer: any[] = [];
    public compare: Comparator = null;

    constructor(comparatorFunction?: Function) {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly');
        }

        console.log(JSON.stringify(new.target));

        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);
    }

    public getLeftChildIndex(parentIndex: number) {
        return (2 * parentIndex) + 1;
    }

    public getRightChildIndex(parentIndex: number) {
        return (2 * parentIndex) + 2;
    }

    public getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }

    public hasParent(childIndex: number) {
        return this.getParentIndex(childIndex) >= 0;
    }

    public hasLeftChild(parentIndex: number) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    public hasRightChild(parentIndex: number) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    public leftChild(parentIndex: number) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    public rightChild(parentIndex: number) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    public parent(childIndex: number) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    public swap(indexOne: number, indexTwo: number) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    public isEmpty() {
        return !this.heapContainer.length;
    }

    public toString() {
        return this.heapContainer.toString();
    }

    public peek() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        return this.heapContainer[0];
    }

    public add(item: any) {
        this.heapContainer.push(item);
        this.heapifyUp();

        return this;
    }

    public poll() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }

        const item = this.heapContainer[0];

        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();

        return item;
    }

    public remove(item, comparator = this.compare){
        const numberOfItemsToRemove = this.find(item, comparator).length;

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration++) {
            const indexToRemove = this.find(item, comparator).pop();
        }
    }

    public find(item: any, comparator = this.compare) {
        const foundItemIndices: number[] = [];

        for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex++) {
            if (comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex);
            }
        }

        return foundItemIndices;
    }

    /***
     * 获取最后一个元素（数组中的最后一个或者树的左下角）
     * 在堆容器中，并将其向上交换直到正确的位置
     */
    public heapifyUp(customStartIndex: number = 0) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;

        while (
            this.hasParent(currentIndex)
            && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    /***
     * 将父元素与其子元素进行比较，并将父元素与对应子元素进行交换
     */
    public heapifyDown(customStartIndex: number = 0) {
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (this.hasRightChild(currentIndex)
                && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    /***
     * 
     * 检查堆元素对的顺序是否正确。
     * 对于MinHeap，第一个元素必须始终小于或等于。
     * 对于MaxHeap，第一个元素必须始终大于或等于。
     */
    public pairIsInCorrectOrder(firstElement, secondElement): boolean {
        throw new Error(`
            You have to implement heap pair comparision method
            for ${firstElement} and ${secondElement} values.
        `);
    }
}


export { Heap };