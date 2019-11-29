import { LinkedList } from "../linked-list/LinkedList";

const defaultHashTableSize = 32;

class HashTable {

    public buckets: any[] = [];
    public keys: any = null;

    constructor(hashTableSize = defaultHashTableSize) {
        // 创建一个默认大小的hashtable，并且给每一个bucket填充一个空的链表
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
        this.keys = {};
    }

    /***
     * converts key string to hash number
     */
    public hash(key: string) {
        /****
         * 
         */
        const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => {
            return hashAccumulator + keySymbol.charCodeAt(0);
        }, 0);

        return hash % this.buckets.length;
    }

    public set(key: string, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash] as LinkedList;
        const node = bucketLinkedList.find({ value: void 0, callback: nodeValue => nodeValue.key === key });

        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }

    public delete(key: string) {
        const keyHash = this.hash(key);
        delete this.keys[key];

        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ value: void 0, callback: nodeValue => nodeValue.key === key });

        if (node) {
            return bucketLinkedList.delete(node.value);
        }

        return null;
    }

    public get(key: string) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ value: void 0, callback: nodeValue => nodeValue.key === key });

        return node ? node.value.value : void 0;
    }

    public has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    public getKeys() {
        return Object.keys(this.keys);
    }
}

export { HashTable };