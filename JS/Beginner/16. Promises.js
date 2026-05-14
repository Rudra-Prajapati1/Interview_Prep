// A Promise represents the eventual completion
// or failure of an asynchronous operation.
//
// Promise states:
// - pending
// - fulfilled
// - rejected
//
// Promises help avoid callback hell and improve async code readability.
// A promise settle only once, fullfilled or rejected, never both, cannot change again.
// Promise uses microtask queue, higher priority than setTimeout callbacks

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed successfully");
    // reject("Something went wrong");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Promise finished");
  });

// Promise chaining
fetch("/api/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
// fetch() and each .then() returns a new promise
