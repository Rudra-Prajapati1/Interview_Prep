// typeof is an operator that returns a string representing the type of a value.
//
// Common return values:
// "number"
// "string"
// "boolean"
// "undefined"
// "object"
// "function"
// "symbol"
// "bigint"

console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof 10n); // "bigint";

console.log(typeof {}); // "object"

console.log(typeof []); // "object", arrays are specialized objects internally
// Proper method to check Array
console.log(Array.isArray([])); // true

console.log(typeof null); // typeof null returns "object" due to a historical JavaScript bug
console.log(typeof function () {}); // "function", callable objects

// NaN is still a number
console.log(typeof NaN); // "number"

// typeof undeclared variable
console.log(typeof unknownVariable); // "undefined"
