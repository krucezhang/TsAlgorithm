class LinkListNode {

    constructor(public value: any, public next: LinkListNode = null) {
    }

    public toString(callback?: Function) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

export { LinkListNode };