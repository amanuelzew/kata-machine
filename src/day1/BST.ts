type BSTNode<T> = {
    value: T;
    left?: BSTNode<T>;
    right?: BSTNode<T>;
};

export default class BST<T> {
    public height: number;
    private root?: BSTNode<number>;
    constructor() {
        this.root=undefined
        this.height = 0;
    }

    search(needle: number): boolean {
        function look(curr: BSTNode<number>|undefined,value:number):boolean{
            if(!curr) return false
            if(curr.value==needle) return true

            if(curr.value<value) return look(curr.right,value)
            return look(curr.left, value);
        }
        return look(this.root,needle)
    }
    insert(item: number): void {
        const newNode = {value:item} as BSTNode<number>
        this.height++
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let curr=this.root
       while(true){
        if(item<=curr.value){
            if(!curr.left){
                curr.left=newNode
                break
            }
            curr=curr.left
        }
        if(item>curr.value){
            if(!curr.right){
                curr.right=newNode;
                break
            }
            curr=curr.right
        }
       }

    }   
   
}