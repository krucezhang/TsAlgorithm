class Comparator {

    private compare: Function;

    constructor(comparaFunction?: Function) {
        this.compare = comparaFunction || Comparator.defaultComparatorFunction;
    }

    static defaultComparatorFunction(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    /***
     * Checks if variable "a" is less than "b"
     */
    public equal(a, b) {
        return this.compare(a, b) === 0;
    }

    public lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    public greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    public lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    public greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    public reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}

export { Comparator };