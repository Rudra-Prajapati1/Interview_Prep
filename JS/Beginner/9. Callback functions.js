// A callback is a function passed to another function to be executed later.
//
// Callbacks are commonly used for:
// - asynchronous operations
// - event handling
// - timers
// - array methods
//
// Callbacks can be synchronous or asynchronous.
//
// Callback hell is a situation where multiple asynchronous callbacks become deeply nested,
// making code difficult to read, debug, and maintain.
//
// It is also called the "Pyramid of Doom".
//
// Modern JavaScript solves callback hell using Promises and async/await.
//

// Array callback (synchronous)
const doubled = [1, 2, 3].map((num) => num * 2);
console.log(doubled);

// Event callback
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  console.log("Clicked");
});

// Async callback
setTimeout(() => {
  console.log("Completed");
}, 1000);

// Custom callback
function process(data, callback) {
  const result = data * 2;

  if (typeof callback === "function") {
    callback(result);
  }
}

process(5, (result) => {
  console.log(result);
});
