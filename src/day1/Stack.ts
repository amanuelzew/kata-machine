type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head=undefined
        this.length=0
    }

    push(item: T): void {
        const node={value:item} as Node<T>
        this.length++
        if(!this.head){
            this.head=node
            return
        }
        node.prev=this.head
        this.head=node
    }
    pop(): T | undefined {
        if(!this.head) return
        this.length--
        const node=this.head
        this.head=node.prev
        node.prev=undefined
        return node.value
    }
    peek(): T | undefined {
        return this.head?.value
    }
}

/*
export default class Stack<T> {
    public length: number;

    constructor() {}

    push(item: T): void {}
    pop(): T | undefined {}
    peek(): T | undefined {}
}
*/
