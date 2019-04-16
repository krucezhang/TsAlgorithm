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

    it("should delete node to linkedlist", () => {
        const linkList = new LinkedList();
        linkList.append(1);
        linkList.append(2);
        linkList.append(3);
        linkList.append(4);
        linkList.append(5);
        linkList.append(6);
        linkList.append(7);
        linkList.prepend(9);

        linkList.delete(5);

        expect(linkList.toString()).toBe('9,1,2,3,4,6,7')
    });

    it("should reverse linked list", () => {
        const linkList = new LinkedList();

        linkList.append(1);
        linkList.append(2);
        linkList.append(3);
        linkList.append(4);
        linkList.append(5);
        linkList.append(6);
        linkList.append(7);
        linkList.prepend(9);

        expect(linkList.toString()).toBe('9,1,2,3,4,5,6,7');
        linkList.reverse();
        expect(linkList.toString()).toBe('7,6,5,4,3,2,1,9')
    });

    it("should deleteTail method", () => {
        const linkList = new LinkedList();

        linkList.append(5);
        let tailNode = linkList.deleteTail();
        expect(tailNode.toString()).toBe('5');

        linkList.deleteTail();
        expect(linkList.tail).toBeNull();

        linkList.append(1);
        linkList.append(2);
        linkList.append(3);
        linkList.append(4);
        linkList.append(5);
        linkList.append(6);
        linkList.append(7);
        linkList.prepend(9);

        linkList.deleteTail();

        expect(linkList.tail.toString()).toBe('6');
    });

    it("should delete head method", () =>{
        const linkList = new LinkedList();

        linkList.append(1);
        let headNode = linkList.deleteHead();

        expect(headNode.toString()).toBe('1');
        expect(linkList.toString()).toBe('');
    })
});