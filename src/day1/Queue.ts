type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    deque(): T | undefined {
        if (!this.head) return undefined;
        this.length--
        const node = this.head;
        this.head = node?.next;
        node.next=undefined
        if(this.length==0)
            this.tail=undefined
        return node?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

/*
export default class Queue<T> {
    public length: number;

    

    constructor() {
    }

    enqueue(item: T): void {

}
    deque(): T | undefined {

}
    peek(): T | undefined {

}
}
*/
