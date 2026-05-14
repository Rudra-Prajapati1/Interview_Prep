// var has function scope and gets hoisted (avoid in modern code). let has block scope and is preferred for
// variables that change. const has block scope and should be your default choice - use it for values that shouldn't be
// reassigned. In modern JavaScript, use const by default, let when necessary, and never use var.

// var - function Scope (Always Avoided)
function varExample() {
  if (true) {
    var count = 1;
  }

  console.log(count); // Var can be accessed here
}

// let - block scope, can be reassigned but not redeclared
function letExample() {
  if (true) {
    let count = 1;
  }

  console.log(count); // ReferenceError

  let x = 1;
  x = 2; // reassignment allowed
  let x = 2; // redeclaration not allowed
}

// const - block scope, cannot be reassigned or redeclared
function constExample() {
  if (true) {
    const count = 1;
  }

  console.log(count); // Same ReferenceError as let

  const x = 1; // has to be initialized at the time of declaration
  x = 4; // reassignment not allowed
  const x = 2; // redeclaration is also not allowed

  // const prevents reassignment of the variable, but object and array contents can still be modified
  const users = { name: "Rudra", age: 20 };
  users.age = 21;
  console.log(users);

  const numbers = [10, 20, 30, 40];
  numbers.push(50);
  console.log(numbers);
}

// Another difference - hoisting

//var is hoisted and initialized with undefined
console.log(x); // Undefined
var x = 10;

// let and const are hoisted but they stay in Temporal Dead Zone(TDZ), until initialization, so cannot access them
console.log(y); // ReferenceError - cannot access before initialization
console.log(z); // ReferenceError - cannot access before initialization
let y = 20;
const z = 30;
