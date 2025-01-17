type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length - 1) return;
        if (idx == 0) this.prepend(item);
        else {
            let node = { value: item } as Node<T>;
            let curr = this.head;
            let prev = undefined;
            for (let i = 0; i < idx && curr; i++) {
                prev = curr;
                curr = curr?.next;
            }
            prev!.next = node;
            node.next = curr;
            if (idx == this.length - 1) this.tail = curr;
        }
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    remove(item: T): T | undefined {
        this.length = Math.max(0, this.length - 1);
        const node = { value: item } as Node<T>;
        let curr = this.head;
        let prev = undefined
        while (curr) {
            if (curr.value === node.value) {
                if(!prev)
                    this.head=curr.next
                else{
                    if (curr.next == undefined) this.tail = prev;
                     prev.next = curr?.next;
                     curr!.next = undefined;
                     return curr?.value;
                }
                return curr.value;
            }
            prev=curr
            curr = curr.next;
        }
        return undefined
    }
    removeAt(idx: number): T | undefined {
        this.length = Math.max(0, this.length - 1);
        let curr = this.head;
        let prev = undefined;
        for (let i = 0; i < idx && curr; i++) {
            prev = curr;
            curr = curr.next;
        }
        
        if (!prev) {
            this.head = curr?.next;
            return curr?.value;
        } else {
            prev.next = curr?.next;
            curr!.next = undefined;
            if (idx == this.length) this.tail = prev;
            return curr?.value;
        }
    }
    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) curr = curr?.next;

        return curr?.value;
    }
}

/*
export default class SinglyLinkedList<T> {
    public length: number;
    

    constructor() {
    }

    prepend(item: T): void {

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}
*/
