// The spread operator (...) expands iterables or object properties into individual elements.
//
// Common uses:
// - copy arrays
// - merge arrays
// - pass function arguments
// - copy objects
// - convert strings to arrays

// Copy Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3], different reference
console.log(arr2);
console.log(arr1 === arr2);

// merge array
const arr3 = [...arr1, ...arr2, 4, 5];
console.log(arr3);

// function arguments
const maxNum = Math.max(...arr3);
console.log(maxNum);

// copy object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, b: 4, c: 3 }; // duplicate key value will be replaced by new value
console.log(obj2);

// converting string to array
console.log([..."This is a string converted to array"]);

const original = [{ name: "Rudra" }];

const copy = [...original];
copy[0].name = "Changed";
console.log(original[0].name); // spread copies only first level, nested object reference is same
console.log(copy[0].name);

// Rest - collects values into an array, any number of parameters can be passed
function print(...nums) {
  console.log(nums);
}

print(1, 2, 3, 4, 5);
