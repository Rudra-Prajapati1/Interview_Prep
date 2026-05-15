// Props are read-only data passed from parent to child.
// State is component-managed data that can change over time.
//
// Props configure components, while state stores dynamic component data.
//
// Both props and state should be treated as immutable.

// Props example
function User(props) {
  // ❌ Never mutate props
  // props.name = "Jane";

  return (
    <div>
      {props.name} ({props.email})
    </div>
  );
}

// State - can change
function UserForm() {
  const [user, setUser] = useState({ name: "", email: "" });
  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <User name={user.name} email={user.email} />
      <input onChange={(e) => handleChange("name", e.target.value)} />
    </>
  );
}

// Props to state anti-pattern
function BadComponent({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  // Problem:
  // state won't update automatically
  // when prop changes
}

// Syncing prop to state
function GoodComponent({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <div>{value}</div>;
}
