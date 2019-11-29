import { MinHeap } from "../heap/MinHeap";
import { Comparator } from "../../utils/Comparator";


export class PriorityQueue extends MinHeap {

    private _priorities: Map<any, number>;

    constructor() {
        super();

        this._priorities = new Map();
        this.compare = new Comparator(this._comparePriority.bind(this));
    }

    /**
     * Add item to priority queue.
     * @param item 
     * @param priority 
     */
    public add(item: any, priority: number = 0) {
        this._priorities.set(item, priority);
        super.add(item);

        return this;
    }

    /**
     * Remove item from priority queue
     * @param item 
     * @param customFindingComparator 
     */
    public remove(item: any, customFindingComparator: Comparator = new Comparator(this._comparePriority)) {
        super.remove(item, customFindingComparator);
        this._priorities.delete(item);

        return this;
    }

    /**
     * Change priority of the item in a queue.
     * @param item 
     * @param priority 
     */
    public changePriority(item: any, priority: number) {
        this.remove(item, new Comparator(this._compareValue));
        this.add(item, priority);

        return this;
    }

    /**
     * find item by its value
     * @param item 
     */
    public findByValue(item: any) {
        return this.find(item, new Comparator(this._compareValue));
    }

    /**
     * Check if item already exists in a queue
     * @param item 
     */
    public hasValue(item: any) {
        return this.findByValue(item).length > 0;
    }

    /**
     * Compare priority of the two items.
     * @param a 
     * @param b 
     */
    private _comparePriority(a: any, b: any) {
        if (this._priorities.get(a) === this._priorities.get(b)) {
            return 0;
        }

        return this._priorities.get(a) < this._priorities.get(b) ? -1 : 1;
    }

    /**
     * compare values of two items
     * @param a 
     * @param b 
     */
    private _compareValue(a: any, b: any) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }
}
