// Controlled components have form data controlled by React state. Value comes from props, changes via callbacks.
// Opposite: uncontrolled components (data managed by DOM). Best practice for forms - enables validation and
// dynamic behavior.

function ControlledForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    checked: false,
    select: "option1",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="checked"
        checked={formData.checked}
        onChange={handleChange}
      />
      <select name="select" value={formData.select} onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
