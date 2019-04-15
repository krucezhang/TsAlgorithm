import { LinkedList } from "../LinkedList";

describe('LinkedList', () => {
    it('should create empty linked list', () => {

        const linkedList = new LinkedList();

        expect(linkedList.toString()).toBe('')
    });

    it("should append node to linked list", () => {
        const linkList = new LinkedList();

        expect(linkList.head).toBeNull();
        expect(linkList.tail).toBeNull();

        linkList.append(1);
        linkList.append(2);

        expect(linkList.toString()).toBe('1,2');
        expect(linkList.tail.next).toBeNull();
    });

    it("should prepend node to linked list", () => {
        const linkList = new LinkedList();

        linkList.prepend(2);
        expect(linkList.head.toString()).toBe('2');
        expect(linkList.tail.next).toBeNull();

        linkList.prepend(1);
        linkList.prepend(0);

        expect(linkList.toString()).toBe('0,1,2');
    });
});