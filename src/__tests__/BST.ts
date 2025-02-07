import BST from "@code/BST";

test("bst", function () {
    const bst = new BST<number>();
//[15,7,51,4,X,25,100,X,X,X,37,X,X] in BFS
    bst.insert(15);
    bst.insert(7);
    bst.insert(51);
    bst.insert(4);
    bst.insert(25);
    bst.insert(100);
    bst.insert(37);

    expect(bst.height).toEqual(7); //6
    expect(bst.search(4)).toEqual(true); //6
    //expect(list.deque()).toEqual(5);

    
    //list.enqueue(11);
    
    //expect(list.deque()).toEqual(7);
    //expect(list.deque()).toEqual(9);
    //expect(list.peek()).toEqual(11);
    //expect(list.deque()).toEqual(11);
    //expect(list.deque()).toEqual(undefined);
    //expect(list.length).toEqual(0);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    //list.enqueue(69);
    //expect(list.peek()).toEqual(69);
    //expect(list.length).toEqual(1);
});
