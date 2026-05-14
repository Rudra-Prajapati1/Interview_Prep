// Destructuring extracts values from arrays/objects into variables.
// For arrays use [], for objects use {}.
// Supports renaming, defaults, and nested destructuring.

// Array destructing
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

const user = { name: "john", age: 20 };
// Object destructing
const { name, age } = user;
console.log(name, age);

// Renaming
const { name: Username } = user;
console.log(Username);

// Defaults
const { role = "user" } = user;
console.log(role);

// Nested
const {
  address: { city, state },
} = { name: "john", age: 20, address: { city: "Amreli", state: "Gujarat" } };
console.log(city, state);

// Function parameters
function greet({ name, age }) {
  console.log(`${name} is ${age}`);
}

greet(user);
