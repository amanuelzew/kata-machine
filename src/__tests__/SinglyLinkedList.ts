import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./ListTest";
import DoublyLinkedList from "@code/DoublyLinkedList";

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});
test("doubly-linked-list", function () {
    const list1 = new DoublyLinkedList<number>();
    test_list(list1);
});
