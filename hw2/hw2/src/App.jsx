import UserCard from "./Usercard.jsx";
import Button from "./Button.jsx";
import "./App.css";

function App() {
  const users = [
    { name: "Damir", email: "damir@mail.com" },
    { name: "Alina", email: "alina@mail.com" },
    { name: "Madi", email: "madi@mail.com" },
  ];

  return (
    <div className="app">
      <h1>Список пользователей</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email} />
        ))}
      </div>
      <Button text="Добавить пользователя" />
    </div>
  );
}

export default App;