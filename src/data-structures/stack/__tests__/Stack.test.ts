import { Stack } from "../Stack";

describe('Stack', () => {
    it('should create empty stack', () => {
        const stack = new Stack();
        expect(stack).not.toBeNull();
        expect(stack.linkedList).not.toBeNull();
    });

    it("should stack data to stack", () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.toString()).toBe('3,2,1');
        expect(stack.peek()).toBe(3);
        expect(stack.peek()).toBe(3);
    });

    it("should check if stack is empty", () => {
        const stack = new Stack();

        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });

    it("should pop data from stack", () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);

        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeNull();
        expect(stack.isEmpty()).toBe(true);
    });

    it("should be possible to convert stack to array", () => {
        const stack = new Stack();

        expect(stack.peek()).toBeNull();

        stack.push(1);
        stack.push(2);

        expect(stack.toArray()).toEqual([2, 1]);
    })
});