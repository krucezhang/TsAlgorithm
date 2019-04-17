import { Heap } from "../Heap";

describe('Heap', () => {
    it('should not allow to create instance of the Heap directly', () => {
      const instantiateHeap = () => {
        const heap = new Heap();
        heap.add(5);
        heap.add(4);
        heap.add(1);
        heap.add(3);
        heap.add(6);
        heap.add(2);
      };
  
      expect(instantiateHeap).toThrow();
    });
  });