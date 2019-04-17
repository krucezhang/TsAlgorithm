import { MinHeap } from "../MinHeap";

describe('MinHeap', () => {
    it('should create an empty min heap', () => {
        const minHeap = new MinHeap();

        expect(minHeap).toBeDefined();
        expect(minHeap.peek()).toBeNull();
        expect(minHeap.isEmpty()).toBe(true);
    });

    it('should add items to the heap and heapify it up', () => {
        const minHeap = new MinHeap();

        minHeap.add(5);
        expect(minHeap.isEmpty()).toBe(false);
        expect(minHeap.peek()).toBe(5);
        expect(minHeap.toString()).toBe('5');

        minHeap.add(9);
        expect(minHeap.peek()).toBe(5);
        expect(minHeap.toString()).toBe('5,9');

        minHeap.add(1);
        expect(minHeap.peek()).toBe(1);
        expect(minHeap.toString()).toBe('1,9,5');

        minHeap.add(3);
        expect(minHeap.peek()).toBe(1);
        expect(minHeap.toString()).toBe('1,3,5,9');

        minHeap.add(6);
        expect(minHeap.peek()).toBe(1);
        expect(minHeap.toString()).toBe('1,3,5,9,6');

        minHeap.add(2);
        expect(minHeap.peek()).toBe(1);
        expect(minHeap.toString()).toBe('1,3,2,9,6,5');
    })

    it("should poll items from the heap and heapify it down", () => {
        const minHeap = new MinHeap();

        minHeap.add(5);
        minHeap.add(9);
        minHeap.add(1);
        minHeap.add(3);
        minHeap.add(6);
        minHeap.add(2);

        expect(minHeap.toString()).toBe('1,3,2,9,6,5');

        expect(minHeap.poll()).toBe(1);
        expect(minHeap.toString()).toBe('2,3,5,9,6');

        expect(minHeap.poll()).toBe(2);
        expect(minHeap.toString()).toBe('3,6,5,9');

        expect(minHeap.poll()).toBe(3);
        expect(minHeap.toString()).toBe('5,6,9');

        expect(minHeap.poll()).toBe(5);
        expect(minHeap.toString()).toBe('6,9');

        expect(minHeap.poll()).toBe(6);
        expect(minHeap.toString()).toBe('9');

        expect(minHeap.poll()).toBe(9);
        expect(minHeap.toString()).toBe('');

        expect(minHeap.poll()).toBeNull();
        expect(minHeap.toString()).toBe('');
    });

    it('should be possible to find item indices in heap', () => {
        const minHeap = new MinHeap();

        minHeap.add(3);
        minHeap.add(12);
        minHeap.add(10);
        minHeap.add(11);
        minHeap.add(11);

        expect(minHeap.find(5)).toEqual([]);
        expect(minHeap.find(3)).toEqual([0]);
        expect(minHeap.find(11)).toEqual([1, 4]);
    })
});