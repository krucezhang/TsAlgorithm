import { LinkedList } from "../linked-list/LinkedList";

const defaultHashTableSize = 32;

class HashTable {

    private buckets: any = null;
    private keys: any = null;

    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
        this.keys = {};
    }
}

export { HashTable };