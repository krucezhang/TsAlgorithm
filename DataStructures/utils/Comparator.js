var DATASTRUCTURE;
(function (DATASTRUCTURE) {
    "use strict";
    var Comparator = /** @class */ (function () {
        function Comparator(compareFunction) {
            this.compare = compareFunction || Comparator.DefaultCompareFunction;
        }
        Comparator.DefaultCompareFunction = function (a, b) {
            if (a === b) {
                return 0;
            }
            return a < b ? -1 : 1;
        };
        Comparator.prototype.Equal = function (a, b) {
            return this.compare(a, b) === 0;
        };
        Comparator.prototype.LessThan = function (a, b) {
            return this.compare(a, b) < 0;
        };
        Comparator.prototype.GreaterThan = function (a, b) {
            return this.compare(a, b) > 0;
        };
        Comparator.prototype.LessThanOrEqual = function (a, b) {
            return this.Equal(a, b) || this.LessThan(a, b);
        };
        Comparator.prototype.GreaterThanOrEqual = function (a, b) {
            return this.GreaterThan(a, b) || this.Equal(a, b);
        };
        Comparator.prototype.Reverse = function () {
            var compareOriginal = this.compare;
            this.compare = function (a, b) { return compareOriginal(b, a); };
        };
        return Comparator;
    }());
    DATASTRUCTURE.Comparator = Comparator;
})(DATASTRUCTURE || (DATASTRUCTURE = {}));
//# sourceMappingURL=Comparator.js.map