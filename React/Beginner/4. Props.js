// Props (properties) are read-only values passed from parent components to child components.
//
// Props enable:
// - component reusability
// - dynamic configuration
// - unidirectional data flow

function Greeting({ name, age }) {
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}

// Passing props
<Greeting name="John" age={30} />;

// Default props, with function props
function Button({ label = "Click me", onClick = () => {} }) {
  return <button onClick={onClick}>{label}</button>;
}

function Parent() {
  function handleClick() {
    console.log("Clicked");
  }

  return <Button onClick={handleClick} />;
}

// Rest props and spread attributes
function Card({ title, ...props }) {
  return (
    <div {...props}>
      <h2>{title}</h2>
    </div>
  );
}

<Card title="Profile" className="profile-card" id="card-1" />;

// children prop
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

// Props validation
import PropTypes from "prop-types";
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
