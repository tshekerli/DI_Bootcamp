import logo from './logo.svg';
import './App.css';
import users from './users.json';
import User from './User';

console.log(users);

function App() {
  return (
   users.map((user) => {
      return (
        <User name={user.name} username={user.username}
          email={user.email} id = {user.id} />
      );
    })
  );
}

export default App;
