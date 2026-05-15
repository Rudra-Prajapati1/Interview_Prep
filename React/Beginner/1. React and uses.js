// React is a JavaScript library for building user interfaces using reusable and component-based architecture.
//
// Key features:
// - Declarative UI
// - Component-based architecture
// - Virtual DOM for efficient updates
// - Unidirectional data flow
// - Large ecosystem
//
// Perfect for building dynamic, interactive applications
//
// React uses JSX, which allows writing HTML-like syntax inside JavaScript.

// example
import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render component
root.render(<Welcome />);
