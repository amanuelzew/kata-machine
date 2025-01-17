type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};
export default class DoublyLinkedList<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head=this.tail=undefined
        this.length=0
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
         node.next = this.head;
         this.head.prev = node;
         this.head = node;
    }
    append(item: T): void {
        const node={value:item} as Node<T>
        this.length++
        if(!this.tail){
            this.head=this.tail=node
            return
        }
        node.prev=this.tail
        this.tail.next=node
        this.tail=node
        
       
    }
    insertAt(item: T, idx: number): void {
       
        if(idx<0 || idx>this.length) return 
        if(idx==0) this.prepend(item)
        const node = { value: item } as Node<T>;
     this.length++
     let curr=this.head
     for(let i=0; i<idx; i++){
        curr=curr?.next
     }
     node.prev=curr?.prev
     node.next=curr
     curr!.prev=node
     curr!.prev.next=node
    }
    remove(item: T): T | undefined {
        const node = { value: item } as Node<T>;
        let curr=this.head

        this.length=Math.max(0,this.length-1)
        while(curr){
            if(curr.value==node.value){
                if(this.head?.value==curr.value){
                    this.head=curr.next
                    return curr.value
                }
                if (this.tail?.value == curr.value) {
                    this.tail = curr.prev;
                     return curr.value;
                }
                curr.prev!.next=curr.next
                curr.next!.prev=curr.prev
                curr.prev=curr.next=undefined
                 return curr.value;
            }
            curr=curr.next
        }
         
        return undefined
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        curr=curr as Node<T>
        
         this.length = Math.max(0, this.length-1);
        
        if (this.head?.value == curr.value) {
            this.head = curr.next;
            curr.prev = curr.next = undefined;
            return curr?.value;
        }
        if (this.tail?.value == curr.value) {
            this.tail = curr.prev;
            curr.prev = curr.next = undefined;
            return curr?.value;
        }
        curr.prev!.next = curr.next;
        curr.next!.prev = curr.prev;
        curr.prev = curr.next = undefined;
        return curr?.value
    }
    get(idx: number): T | undefined {
        let curr=this.head
        for (let i = 0; i < idx && curr; i++) {
           curr=curr.next       
        }
        return curr?.value
    }
}

/*
export default class DoublyLinkedList<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {}

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
 */