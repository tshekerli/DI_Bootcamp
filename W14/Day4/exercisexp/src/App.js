// Exercise 1: Error Boundaries
import React from 'react';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Simulation 1:</h1>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <h1>Simulation 2:</h1>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <h1>Simulation 3:</h1>
        <BuggyCounter />
      </div>
    );
  }
}

export default App;



// // Exercise 2: Lifecycle
// import React from 'react';

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoriteColor: "red" };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" })
//     }, 1000)
//   }

//   shouldComponentUpdate() {
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("in getSnapshotBeforeUpdate");
//     return null;
//   }

//   componentDidUpdate() {
//     console.log("after update");
//   }

//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//     );
//   }
// }

// export default MyComponent;


// // // Exercise 3: Lifecycle #2
// // import React from 'react';

// // class Child extends React.Component {
// //   componentWillUnmount() {
// //     alert('Component is about to be removed from the DOM.');
// //   }

// //   render() {
// //     return <h1>Hello World!</h1>;
// //   }
// // }

// // class MyComponent extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { show: true };
// //   }

// //   deleteComponent = () => {
// //     this.setState({ show: false });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         {this.state.show ? <Child /> : null}
// //         <button onClick={this.deleteComponent}>Delete</button>
// //       </div>
// //     );
// //   }
// // }

// // export default MyComponent;