// JavaScript has 7 primitive data types:
// number, string, boolean, null, undefined, symbol, and bigint.
// All other values are non-primitive types (objects), including arrays and functions.
// Primitive values are immutable and compared by value.
// Objects are mutable and compared by reference, meaning two different objects
// with identical contents are still not equal because they reference different memory locations.

console.log(typeof "Rudra"); // string
console.log(typeof 20); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof 1234567898763n); // bigint

// Primitives are compared by values
console.log("Rudra" === "Rudra");
console.log(40 === 40);

let x = 10;
let y = x;
y = 20;
console.log(x); // unchanged

console.log(typeof [10, 20, 30, 40, 50]); // Object
console.log(typeof { name: "Rudra", age: 20 }); // Object
console.log(typeof (() => {})); // function

// Non-primitives (reference) are compared by the reference point, it is stored in heap memory
console.log([1, 2, 3] === [1, 2, 3]); // false - difference references

// reference are copied by reference, means shallow copy, (both share the same reference)
const user = { name: "Rudra", age: 20 };
const user2 = user;
user2.age = 21;
console.log(user.age); // original object is also changed
