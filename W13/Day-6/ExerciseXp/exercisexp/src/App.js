import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';
import './App.css';



function App() {
  // Exercise 1
  // const myelement = <h1>I Love JSX!</h1>;
  // const sum = 5+5;

  // Exercise 2

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // Exercise 1

    // <p>Hello World</p>

    // myelement

    // <p>React is {sum} times better with JSX</p>


    // Exercise 2
    // <div> 
    // <h3>User name is: {user.firstName}</h3>
    // <h3>User lastname is: {user.lastName}</h3>
    // <UserFavoriteAnimals favAnimals={user.favAnimals} />
    // </div>

    // Exercise 3
    <div className='Exercise'>
    <Exercise/>
    </div>
  );
}

export default App;
