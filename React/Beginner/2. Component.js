// Components are reusable, independent pieces of UI in React.
//
// React supports:
// - class components
// - functional components
//
// Modern React primarily uses functional components with hooks.
//
// Benefits:
// - reusability
// - maintainability
// - easier testing
// - separation of concerns
// - component composition

// Reusable component
function UserCard({ name, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// Parent component
function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;
