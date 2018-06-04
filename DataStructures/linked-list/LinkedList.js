var DATASTRUCTURE;
(function (DATASTRUCTURE) {
    "use strict";
    var LinkedList = /** @class */ (function () {
        function LinkedList(comparatorFunction) {
            this.head = null;
            this.tail = null;
            this.compare = null;
            this.head = null;
            this.tail = null;
            this.compare = new DATASTRUCTURE.Comparator(comparatorFunction);
        }
        LinkedList.prototype.Prepend = function (value) {
            this.head = new DATASTRUCTURE.LinkedListNode(value, this.head);
            return this;
        };
        LinkedList.prototype.Append = function (value) {
            var newNode = new DATASTRUCTURE.LinkedListNode(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
                return this;
            }
            this.tail.next = newNode;
            this.tail = newNode;
            return this;
        };
        LinkedList.prototype.Delete = function (value) {
            if (!this.head) {
                return null;
            }
            var deleteNode = null;
            if (this.compare.Equal(this.head.value, value)) {
                deleteNode = this.head;
                this.head = this.head.next;
            }
            var currentNode = this.head;
            if (currentNode !== null) {
                while (currentNode.next) {
                    if (this.compare.Equal(currentNode.next.value, value)) {
                        deleteNode = currentNode.next;
                        currentNode.next = currentNode.next.next;
                    }
                    else {
                        currentNode = currentNode.next;
                    }
                }
            }
            if (this.compare.Equal(this.tail.value, value)) {
                this.tail = currentNode;
            }
            return deleteNode;
        };
        LinkedList.prototype.Find = function (value, callback) {
            if (value === void 0) { value = undefined; }
            if (callback === void 0) { callback = undefined; }
            if (!this.head) {
                return null;
            }
            var currentNode = this.head;
            while (currentNode) {
                if (callback && callback(currentNode.value)) {
                    return currentNode;
                }
                if (value !== undefined && this.compare.Equal(currentNode.value, value)) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
            return null;
        };
        LinkedList.prototype.DeleteTail = function () {
            if (this.head === this.tail) {
                var deletedTail = this.tail;
                this.head = null;
                this.tail = null;
                return deletedTail;
            }
            var deleteTail = this.tail;
            var currentNode = this.head;
            while (currentNode.next) {
                if (!currentNode.next.next) {
                    currentNode.next = null;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            this.tail = currentNode;
            return deleteTail;
        };
        LinkedList.prototype.DeleteHead = function () {
            if (!this.head) {
                return null;
            }
            var deleteHead = this.head;
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
                this.tail = null;
            }
            return deleteHead;
        };
        LinkedList.prototype.ToArray = function () {
            var nodes = [];
            var currentNode = this.head;
            while (currentNode) {
                nodes.push(currentNode);
                currentNode = currentNode.next;
            }
            return nodes;
        };
        LinkedList.prototype.ToString = function (callback) {
            return this.ToArray().map(function (node) { return node.toString(callback); });
        };
        return LinkedList;
    }());
    DATASTRUCTURE.LinkedList = LinkedList;
})(DATASTRUCTURE || (DATASTRUCTURE = {}));
//# sourceMappingURL=LinkedList.js.map