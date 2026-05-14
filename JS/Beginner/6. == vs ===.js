// == performs loose equality and allows type coercion.
//
// === performs strict equality and compares
// both value and type without coercion.
//
// In modern JavaScript, prefer ===
// to avoid unexpected behavior.

// Examples
console.log("5" == 5); // true, '5' is converted to number
console.log("5" === 5); // false, strict equality does not convert types

console.log(true == 1); // true
console.log(false == 0); // true
console.log(true === 1); // false

console.log(null == undefined); // true, in loose equality null is equal to undefined
console.log(null == null); // true, null is also equal to null
console.log(null === undefined); // false
console.log(null == 0); // false

console.log([] == 0); // true,  [] => "" => 0
console.log([] === 0); // false

console.log({} == 0); // false
console.log({} == {}); // false, different object references
console.log({} === {}); // false, different object references

const obj1 = { name: "Rudra" };
const obj2 = { name: "Rudra" };
console.log(obj1 === obj2); // false

const obj3 = obj1;
console.log(obj1 === obj3); // true

console.log(NaN == NaN); // NaN is never equal to anything, including itself
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
console.log(isNaN("NaN")); // true
