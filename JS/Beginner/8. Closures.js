// A closure is created when a function remembers and accesses variables from its lexical scope
// even after the outer function has finished execution.
//
// Closures allow:
// - data privacy
// - persistent state
// - callbacks
// - function factories
// - encapsulation

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// cannot access count directly
console.log(counter.count); // undefined

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
