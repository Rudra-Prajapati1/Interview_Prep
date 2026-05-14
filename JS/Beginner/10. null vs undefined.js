// undefined means a value has not been assigned.
//
// null represents an intentional absence of value
// set explicitly by the developer.

// examples
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

function test(params) {
  console.log(params); // undefined if not provided
}

test(); // undefined

// Missing object property
const user = {};
console.log(user.name); // undefined

// Function without return
function demo() {}
console.log(demo()); // undefined

console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(null == null); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null === "object"); // false
console.log(undefined === "undefined"); // false
