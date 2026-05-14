// forEach -> iterates over array elements
// map -> transforms elements and returns a new array
// filter -> returns elements that satisfy a condition
// reduce -> accumulates array into a single value
// find -> returns the first matching element
// some -> checks if at least one element matches
// every -> checks if all elements match

const arr = [1, 2, 3, 4, 5];

// forEach
// You CANNOT:
// break
// continue
// return early
//
// inside forEach
arr.forEach((num) => console.log(num * 2));

// always returns undefined
const result = arr.forEach(() => {});
console.log(result);

// map, returns new array
console.log(arr.map((num) => num * 2));

// returns elements where condition evaluates to true
console.log(arr.filter((num) => num > 2));

// reduce, returns new single value
const total = arr.reduce((sum, num) => sum + num, 0);
console.log(total);

// returns the first element that satisfies the condition
console.log(arr.find((num) => num > 2));

// some -> true if at least one element matches
// every -> true if all elements match
console.log(arr.some((num) => num === 2)); // true
console.log(arr.every((num) => num === 2)); // false
