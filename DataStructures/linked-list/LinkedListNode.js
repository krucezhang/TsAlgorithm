var DATASTRUCTURE;
(function (DATASTRUCTURE) {
    "use strict";
    var LinkedListNode = /** @class */ (function () {
        function LinkedListNode(value, next) {
            if (next === void 0) { next = null; }
            this.next = null;
            this.value = value;
            this.next = next;
        }
        LinkedListNode.prototype.toString = function (callback) {
            return callback ? callback(this.value) : "" + this.value;
        };
        return LinkedListNode;
    }());
    DATASTRUCTURE.LinkedListNode = LinkedListNode;
})(DATASTRUCTURE || (DATASTRUCTURE = {}));
//# sourceMappingURL=LinkedListNode.js.map