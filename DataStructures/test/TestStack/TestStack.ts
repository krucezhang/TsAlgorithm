namespace DATASTRUCTURE {
    "use strict";
    describe("Stack", () => {

        it("should create empty stack", () => {
            const stack = new Stack();
            expect(stack).not.toBeNull();
            expect(stack.LinkedList).not.toBeNull();
        });

        it("should stack data to stack", () => {
            const stack = new Stack();

            stack.Push(1);
            stack.Push(2);

            let stringPre = (value: string) => {
                return value + "--KK";
            }

            expect(stack.ToString(stringPre)).toEqual(['1--KK', '2--KK']);
        });

        it("should peek data from stack", () => {
            const stack = new Stack();

            expect(stack.Peek()).toBeNull();

            stack.Push(1);
            stack.Push(2);
            stack.Push(3);

            expect(stack.Peek()).toBe(3);
            expect(stack.Peek()).toBe(3);
        });

        it("should check if stack is empty", () => {
            const stack = new Stack();

            expect(stack.IsEmpty()).toBeTruthy();

            stack.Push(1);
            expect(stack.IsEmpty()).toBeFalsy();
        });

        it("should pop data from stack", () => {
            const stack = new Stack();

            stack.Push(1);
            stack.Push(2);

            expect(stack.Pop()).toBe(2);
            expect(stack.Pop()).toBe(1);
            expect(stack.Pop()).toBeNull();
            expect(stack.IsEmpty()).toBeTruthy();
        });

        it("should be possible to push/pop objects", () => {
            const stack = new Stack();

            class obj {
                constructor(public name: string, public age: number) { }
            }
            let obj1 = new obj("test1", 11);
            let obj2 = new obj("test2", 22);

            stack.Push(obj1);
            stack.Push(obj2);

            expect((stack.Pop() as obj).name).toBe("test2");
            expect((stack.Pop() as obj).age).toBe(11);
        });

        it("should be possible to convert stack to array", () => {
            const stack = new Stack();

            expect(stack.Peek()).toBeNull();

            stack.Push(1);
            stack.Push(2);
            stack.Push(3);

            expect(stack.ToArray()).toEqual([1, 2, 3]);
        })

    });
}

