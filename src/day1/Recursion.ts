import SinglyLinkedList from "@code/SinglyLinkedList";
//EASY
// Given a string, reverse the string.
// Check a given string is Palindrome or not
// Given decimal number return it's binary reprsentation
// Given an array of numbers, return the sum of all the numbers in the array.
// Given a number n, return the nth fibonacci number.
// Given a number n, find the factorial of n.

//MEDIUM
// Given an array of numbers, return the maximum number in the array.
// Given a sorted array of numbers, find the index of a given number.
// Given a number n, return the sum of the digits of n.
// Given a string, return the number of vowels in the string.
// Given an array of numbers, return the product of all the numbers in the array.


export function resverseString(s: string): string {
    if(s.length<=1) return s
    return resverseString(s.slice(1))+s[0];
}
export function palindrome(s: string): boolean {
    if (s.length <= 1) return true;

    if (s[0] === s[s.length - 1]) return palindrome(s.slice(1, s.length - 1));
    return false;
}

export function decimalToBinary(num: number): string {
    if (num == 0) return "";

    return decimalToBinary(Math.floor(num / 2)) + (num % 2);
}
export function sum(num: number): number {
    if (num <= 1) return 1;

    return sum(num - 1) + num;
}

export function fibo(num: number): number {
    let a = 0;
    let b = 1;
    let r = a + b;
    for (let i = 0; i < num; i++) {
        r = a + b;
        a = b;
        b = r;
    }
    return r;
}
export function checkNumberIsPowofTwo(num:number):boolean{
    if(num==2)
        return true
    if(num%2==0)
    return checkNumberIsPowofTwo(num/2)
    return false
}

//MEDIUM
type Node<T> = {
    value: T;
    next?: Node<T>;
};
export function reverseLinkedlist(node: Node<number>): Node<number> {
    if(node==null || node.next==null)
        return node
    const p:Node<number>=reverseLinkedlist(node.next)
    node.next.next=node
    node.next=undefined
    return p
}
export function generateAllBinaryStrings (num:number):string[]{
    const result:string[]=[]
    function backtrack(char:string){
        if(char.length==2){
            result.push(char)
            return
        }
        backtrack(char+"0")
        backtrack(char + "1");
    }
    backtrack("")
    return result
}
generateAllBinaryStrings(2)

export function generateAllParentheses(num:number):string[]{
    const result:string[]=[]
        function backtrack(open:number,close:number,path:string){
            if(path.length==num*2){
                result.push(path)
                return
            }
            if(open<num)
            backtrack(open+1,close,path+"(")
            if(close<open)
            backtrack(open,close+1,path+")")
        }
    backtrack(0,0,"")    
    return result
}
export function permutationsString(s:string):string[]{
    const result:string[]=[]
     const chars = s.split(""); 
    function backtrack(start:number){
        if (start === chars.length - 1) {
            result.push(chars.join(""));
            return;
        }
        for (let i = start; i < chars.length; i++) {
            [chars[start], chars[i]] = [chars[i], chars[start]];
            backtrack(start + 1);
            [chars[start], chars[i]] = [chars[i], chars[start]];
            
        }
    }
     backtrack(0)
     return result
}
export function subset(set:number[]): number[][] {
    const result: number[][] = [[]];
    
     function backtrack(index: number, currentSubset: number[]): void {
         // Base case: If the current index is equal to the length of the set,
         // add the current subset to the result.
         if (index === set.length) {
             result.push([...currentSubset]);
             return;
         }

         // Include the current element in the subset.
         currentSubset.push(set[index]);
         backtrack(index + 1, currentSubset);

         // Exclude the current element from the subset.
         currentSubset.pop();
         backtrack(index + 1, currentSubset);
     }
    backtrack(0,[]);
    return result;
}
//HARD
//merge two sorted LL
