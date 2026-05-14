// Hoisting moves declarations to the top of their scope before execution. For var, both declaration and
// undefined initialization are hoisted. For let/const, only declaration is hoisted, creating a temporal dead zone until
// the line is executed. Function declarations are fully hoisted.

// var - returns undefined (hoisted with undefined)
console.log(x); // undefined
var x = 5;

// let, const - throws ReferenceError (temporal dead zone)
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError
let y = 10;
const z = 15;

// function declaration - fully hoisted
console.log(greet("rudra"));
function greet(name) {
  return `Hello ${name}`;
}

// Function expression variables are hoisted, but remain uninitialized until assignment
// console.log(add(5, 10)); // ReferenceError
const add = (a, b) => a + b;

console.log(sayHello);
var sayHello = () => console.log("Hello");
