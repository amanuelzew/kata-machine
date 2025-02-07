/* export default function mergeSort(): number[] {}
function merge(left: number[], right: number[]): number {} */
export default function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const m = Math.floor(arr.length / 2);
    const left = arr.slice(0, m);
    const right = arr.slice(m);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left: number[], right: number[]): number[] {
    const r: number[] = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            r.push(left[leftIdx]);
            leftIdx++;
        } else {
            r.push(right[rightIdx]);
            rightIdx++;
        }
    }
    while (leftIdx < left.length) {
        r.push(left[leftIdx]);
        leftIdx++;
    }
    while (rightIdx < right.length) {
        r.push(right[rightIdx]);
        rightIdx++;
    }
    return r;
}
