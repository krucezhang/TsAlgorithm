import { Queue } from "../Queue";
import { exec } from "child_process";

describe('Queue', () => {
    it('should create empty queue', () => {
        const queue = new Queue();

        expect(queue).not.toBeNull();
        expect(queue.linkedList).not.toBeNull();
    });

    it("should enqueue data to queue", () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.toString()).toBe('1,2');
    });

    it("should be possible to enqueue/dequeue objects", ()=>{
        const queue = new Queue();

        queue.enqueue({name: "zhang", age: 18});
        queue.enqueue({name: "wang", age: 19});
        queue.enqueue({name: "li", age: 20});

        const stringifer = value => `${value.name}:${value.age}`;

        expect(queue.toString(stringifer)).toBe('zhang:18,wang:19,li:20');
        expect(queue.peek().name).toBe('zhang');
        expect(queue.dequeue().age).toBe(18);
    });

    it("should check if queue is empty", () => {
        const queue = new Queue();

        expect(queue.isEmpty()).toBe(true);

        queue.enqueue(1);

        expect(queue.isEmpty()).toBe(false);
    });

    it("should dequeue from queue in FIFO order", () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBeNull();
        expect(queue.peek()).toBeNull();
        expect(queue.isEmpty()).toBe(true);
    })
});