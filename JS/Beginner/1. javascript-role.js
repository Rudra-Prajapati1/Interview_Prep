// JavaScript is a dynamically-typed, single-threaded programming language that runs in web browsers and
// servers (Node.js). It enables interactivity, DOM manipulation, async operations, and state management. In MERN,
// JavaScript powers both frontend (React) and backend (Node.js), making it essential for full-stack development.

//Frontend : React uses JavaScript
function Greeting() {
  const [name, setName] = React.useState("World");
  return (
    <>
      <h1>Hello {name}!</h1>
      <button onClick={() => setName("Rudra")}>Change Name</button>
    </>
  );
}

//Backend : Node.js uses JavaScript
const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  res.json({ users: [] });
});

//Examples

//Interactivity and DOM manipulation
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  button.innerText = "Clicked";
});

//Async operations and state management
const [users, setUsers] = React.useState([]);

const fetchUsers = async () => {
  try {
    const data = await fetch("/api/users").then((res) => res.json());

    setUsers(data.users);
  } catch (error) {
    console.log("Error-[fetchUsers]: ", error);
  }
};
