import {resverseString,palindrome,decimalToBinary,sum,generateAllBinaryStrings,checkNumberIsPowofTwo,generateAllParentheses} from "@code/Recursion";
import SinglyLinkedList from "@code/SinglyLinkedList";

test("resverse-string", function () {
    const s = "hello"

    const r=resverseString(s);
    expect(r).toEqual(s.split("").reverse().join(""));
});

test("palindrome", function () {
    expect(palindrome("kayak")).toEqual(true);
    expect(palindrome("racecar")).toEqual(true);
    expect(palindrome("dvd")).toEqual(true);
    expect(palindrome("that")).toEqual(false);
});

test("decimal-binary", function () {
   expect(decimalToBinary(10)).toEqual("1010");
   expect(decimalToBinary(1)).toEqual("1");
});
test("sum", function () {
   expect(sum(10)).toEqual(55)
});
test("reverse-linkedlist", function () {
    const l=new SinglyLinkedList<number>()
    l.append(1)
    l.append(2)
    l.append(3)
    l.append(4)
    l.append(5)
    console.log(l);
    console.log(l)
});
test("generate-binary", function () {
    expect(generateAllBinaryStrings(2)).toEqual(["00","01","10","11"]);
});
test("checkNumberIsPowofTwo", function () {
   
    expect(checkNumberIsPowofTwo(2)).toBe(true);
    expect(checkNumberIsPowofTwo(4)).toBe(true);
    expect(checkNumberIsPowofTwo(8)).toBe(true);
    expect(checkNumberIsPowofTwo(16)).toBe(true);
    expect(checkNumberIsPowofTwo(32)).toBe(true);
    
       
    expect(checkNumberIsPowofTwo(3)).toBe(false);
    expect(checkNumberIsPowofTwo(5)).toBe(false);
    expect(checkNumberIsPowofTwo(7)).toBe(false);
    expect(checkNumberIsPowofTwo(10)).toBe(false);
    expect(checkNumberIsPowofTwo(15)).toBe(false);
});


test("generateall-parentheses", function () {
    expect(generateAllParentheses(2)).toEqual(["(())","()()"]);
});