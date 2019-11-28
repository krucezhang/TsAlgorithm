import { MinHeap } from "../MinHeap";
import { Comparator } from "../../../utils/Comparator";

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

    it('should be possible to remove items from heap with custom finding comparator', () => {
        const minHeap = new MinHeap();
        minHeap.add('dddd');
        minHeap.add('ccc');
        minHeap.add('bb');
        minHeap.add('a');

        expect(minHeap.toString()).toBe('a,bb,ccc,dddd');

        const comparator = new Comparator((a, b) => {
            if (a.length === b.length) {
                return 0;
            }

            return a.length < b.length ? -1 : 1;
        });

        minHeap.remove('hey', comparator);
        expect(minHeap.toString()).toBe('a,bb,dddd');
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

    it('should remove values from heap and correctly re-order the tree', () => {
        const minHeap = new MinHeap();

        minHeap.add(1);
        minHeap.add(2);
        minHeap.add(3);
        minHeap.add(4);
        minHeap.add(5);
        minHeap.add(6);
        minHeap.add(7);
        minHeap.add(8);
        minHeap.add(9);

        expect(minHeap.toString()).toBe('1,2,3,4,5,6,7,8,9');

        minHeap.remove(2);
        expect(minHeap.toString()).toBe('1,4,3,8,5,6,7,9');

        minHeap.remove(4);
        expect(minHeap.toString()).toBe('1,5,3,8,9,6,7');
    });
});