// async/await is syntactic sugar built on top of Promises.
//
// It makes asynchronous code easier to read and write like synchronous code.
//
// async functions always return a Promise.
//
// await pauses execution of the async function until the Promise settles.
async function test() {
  return 5;
}

console.log(test());

// Fetch users
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await res.json();

    return users;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Using async function
async function main() {
  const users = await getUsers();

  console.log(users);
}

main();

// Parallel execution
async function getMultiple() {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json(),
    ),

    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json(),
    ),
  ]);

  return [users, posts];
}

async function run() {
  const [users, posts] = await getMultiple();

  console.log(users, posts);
}

run();
