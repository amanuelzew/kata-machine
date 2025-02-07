function qs(arr:number[],l:number,h:number){
    if(l>=h) return 
    const p=partition(arr,l,h)
    qs(arr,l,p-1)
    qs(arr, p+1, h);
}
function partition(arr:number[],l:number,h:number){
    const pivot=arr[h]
    let idx=l-1
    for (let i = l; i < h; i++) {
        if(arr[i]<pivot){
            idx++
            [arr[idx],arr[i]]=[arr[i],arr[idx]]
        }
    }
    idx++
    [arr[idx],arr[h]]=[arr[h],arr[idx]]
    return idx
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
