// JSX (JavaScript XML) is a syntax extension for JavaScript
// that allows writing HTML-like UI code inside JavaScript.
//
// JSX is not valid JavaScript directly.
// It gets transpiled by Babel into React.createElement() calls.
//
// JSX makes UI code more readable and declarative.

// JSX
const element = <h1 className="greeting">Hello, {name}!</h1>;

// compiles to
const element = React.createElement(
  "h1",
  { className: "greeting" },
  `Hello, ${name}`,
);

// with components
const user = { name: "John", age: 30 };
const component = <UserProfile user={user} />;

// Conditional rendering
const greeting = <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;

// List rendering
const items = ["Apple", "Banana", "Orange"];
const list = (
  <ul>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);
