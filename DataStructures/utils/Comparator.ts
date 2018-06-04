namespace DATASTRUCTURE {
    "use strict";

    export class Comparator {

        private compare: Function;

        constructor(compareFunction: Function) {
            this.compare = compareFunction || Comparator.DefaultCompareFunction;
        }

        public static DefaultCompareFunction(a, b) {
            if (a === b) {
                return 0;
            }

            return a < b ? -1 : 1;
        }

        public Equal(a, b) {
            return this.compare(a, b) === 0;
        }

        public LessThan(a, b) {
            return this.compare(a, b) < 0;
        }

        public GreaterThan(a, b) {
            return this.compare(a, b) > 0;
        }

        public LessThanOrEqual(a, b) {
            return this.Equal(a, b) || this.LessThan(a, b);
        }

        public GreaterThanOrEqual(a, b) {
            return this.GreaterThan(a, b) || this.Equal(a, b);
        }

        public Reverse() {
            const compareOriginal = this.compare;
            this.compare = (a, b) => compareOriginal(b, a);
        }
    }
}

