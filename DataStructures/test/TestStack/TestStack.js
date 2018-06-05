var DATASTRUCTURE;
(function (DATASTRUCTURE) {
    "use strict";
    describe("Stack", function () {
        it("should create empty stack", function () {
            var stack = new DATASTRUCTURE.Stack();
            expect(stack).not.toBeNull();
            expect(stack.LinkedList).not.toBeNull();
        });
        it("should stack data to stack", function () {
            var stack = new DATASTRUCTURE.Stack();
            stack.Push(1);
            stack.Push(2);
            var stringPre = function (value) {
                return value + "--KK";
            };
            expect(stack.ToString(stringPre)).toEqual(['1--KK', '2--KK']);
        });
        it("should peek data from stack", function () {
            var stack = new DATASTRUCTURE.Stack();
            expect(stack.Peek()).toBeNull();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            expect(stack.Peek()).toBe(3);
            expect(stack.Peek()).toBe(3);
        });
        it("should check if stack is empty", function () {
            var stack = new DATASTRUCTURE.Stack();
            expect(stack.IsEmpty()).toBeTruthy();
            stack.Push(1);
            expect(stack.IsEmpty()).toBeFalsy();
        });
        it("should pop data from stack", function () {
            var stack = new DATASTRUCTURE.Stack();
            stack.Push(1);
            stack.Push(2);
            expect(stack.Pop()).toBe(2);
            expect(stack.Pop()).toBe(1);
            expect(stack.Pop()).toBeNull();
            expect(stack.IsEmpty()).toBeTruthy();
        });
        it("should be possible to push/pop objects", function () {
            var stack = new DATASTRUCTURE.Stack();
            var obj = /** @class */ (function () {
                function obj(name, age) {
                    this.name = name;
                    this.age = age;
                }
                return obj;
            }());
            var obj1 = new obj("test1", 11);
            var obj2 = new obj("test2", 22);
            stack.Push(obj1);
            stack.Push(obj2);
            expect(stack.Pop().name).toBe("test2");
            expect(stack.Pop().age).toBe(11);
        });
        it("should be possible to convert stack to array", function () {
            var stack = new DATASTRUCTURE.Stack();
            expect(stack.Peek()).toBeNull();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            expect(stack.ToArray()).toEqual([1, 2, 3]);
        });
    });
})(DATASTRUCTURE || (DATASTRUCTURE = {}));
//# sourceMappingURL=TestStack.js.map