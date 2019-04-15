import { Comparator } from "../Comparator";


describe('Comparator', () => {

    it("should compare with default comparator function", () => {
        const comparator = new Comparator();

        expect(comparator.equal(0, 0)).toBe(true);
        expect(comparator.greaterThan(1, 0)).toBe(true);
        expect(comparator.greaterThanOrEqual(2, 0)).toBe(true);
        expect(comparator.greaterThanOrEqual(2, 2)).toBe(true);
        expect(comparator.lessThan(0, 2)).toBe(true);
        expect(comparator.lessThanOrEqual(1, 3)).toBe(true);
    });

    it("should compare with custom comparator function", () => {
        const comparator = new Comparator((a, b) => {
            if(a.length === b.length){
                return 0;
            }

            return a.length < b.length ? -1 : 1;
        });

        expect(comparator.equal('a', '')).toBe(false);
        expect(comparator.greaterThan('a', 'aa')).toBe(false);
        expect(comparator.lessThanOrEqual('aa', 'bbb')).toBe(true);

        comparator.reverse();

        expect(comparator.equal('a', '')).toBe(false);
        expect(comparator.greaterThan('a', 'aa')).toBe(true);
        expect(comparator.lessThanOrEqual('aa', 'bbb')).toBe(false);

    });
});