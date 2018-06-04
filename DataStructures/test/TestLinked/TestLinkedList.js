var DATASTRUCTURE;
(function (DATASTRUCTURE) {
    describe('LinkedListNode', function () {
        it('should create list node with value', function () {
            var node = new DATASTRUCTURE.LinkedListNode(1);
            expect(node.value).toBe(1);
            expect(node.next).toBeNull();
        });
        it('should create list node with object as a value', function () {
            var nodeValue = { value: 1, key: 'test' };
            var node = new DATASTRUCTURE.LinkedListNode(nodeValue);
            expect(node.value.value).toBe(1);
            expect(node.value.key).toBe('test');
            expect(node.next).toBeNull();
        });
        it('should link nodes together', function () {
            var node2 = new DATASTRUCTURE.LinkedListNode(2);
            var node1 = new DATASTRUCTURE.LinkedListNode(1, node2);
            expect(node1.next).toBeDefined();
            expect(node2.next).toBeNull();
            expect(node1.value).toBe(1);
            expect(node1.next.value).toBe(2);
        });
        it('should convert node to string', function () {
            var node = new DATASTRUCTURE.LinkedListNode(1);
            expect(node.toString()).toBe('1');
            node.value = 'string value';
            expect(node.toString()).toBe('string value');
        });
        it('should convert node to string with custom stringifier', function () {
            var nodeValue = { value: 1, key: 'test' };
            var node = new DATASTRUCTURE.LinkedListNode(nodeValue);
            var toStringCallback = function (value) { return "value: " + value.value + ", key: " + value.key; };
            expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
        });
    });
})(DATASTRUCTURE || (DATASTRUCTURE = {}));
//# sourceMappingURL=TestLinkedList.js.map