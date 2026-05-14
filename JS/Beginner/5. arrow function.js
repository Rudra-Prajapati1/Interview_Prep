// Arrow functions provide shorter syntax for writing function expressions.
//
// Key differences from regular functions:
// - They do not have their own `this`
// - They inherit `this` from the surrounding lexical scope
// - They cannot be used as constructors
// - They do not have their own `arguments` object
// - They support implicit return for single expressions

// regular function
const regularSum = function (a, b) {
  return a + b;
};

// arrow function
const arrowSum = (a, b) => a + b;

console.log(regularSum(5, 10)); // 15
console.log(arrowSum(5, 10)); // 15

// this binding
const obj = {
  value: 42,
  regular: function () {
    console.log(this.value); // 42
  },
  arrow: () => {
    console.log(this.value); // undefined
  },
};

obj.regular(); // regular function depends on the caller
obj.arrow();
// Arrow functions inherit `this`
// from their surrounding lexical scope.
//
// Their `this` is NOT determined
// by how the function is called.
