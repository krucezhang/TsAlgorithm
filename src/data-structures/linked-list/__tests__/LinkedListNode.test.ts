import { LinkListNode } from "../LinkListNode";

describe('LinkedListNode', () => {
    it('should create list node with value', () => {
        const node = new LinkListNode(1);

        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
    })
})