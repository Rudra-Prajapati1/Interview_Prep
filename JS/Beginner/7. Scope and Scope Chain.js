// Scope determines where variables and functions can be accessed in a program.
//
// Types of scope:
// - Global scope
// - Function scope
// - Block scope
//
// Scope chain allows inner scopes
// to access variables from outer scopes,
// but outer scopes cannot access inner variables.

// JavaScript uses lexical scope, meaning scope is determined
// by where functions are written, not where they are called.

const globalVar = "Global";

function outer() {
  const outerVar = "Outer";

  function inner() {
    const innerVar = "Inner";

    // The inner function has access to global, outer, and inner scope variables
    console.log(globalVar);
    console.log(outerVar);
    console.log(innerVar);
  }

  inner();
  // console.log(innerVar); // ReferenceError: inner variable is not accessible outside its scope
}

outer();

for (let i = 0; i < 3; i++) {
  // i is block-scoped
}
// console.log(i); // ReferenceError

for (var j = 0; j < 3; j++) {
  // j is function scope
}
console.log(j); // var is not block-scoped, so it remains accessible outside the loop block

// Variable shadowing
const name = "Global";
function test() {
  const name = "Local"; // inner variable shadows outer variables
  console.log(name);
}
test();

const value = 100;
{
  const value = 200;
  console.log(value); // 200
}
console.log(value); // 100

// illegal shadowing
let a = 1;
{
  var a = 2; // Error
}
