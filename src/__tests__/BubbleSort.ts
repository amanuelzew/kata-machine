import bubble_sort from "@code/BubbleSort";
import selection_sort from "@code/SelectionSort";
import insertion_sort from "@code/InsertionSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("selection-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    selection_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("insertion-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    insertion_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});