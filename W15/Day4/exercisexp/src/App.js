// //exercise1
// // import React from "react";
// // import { ThemeProvider, useTheme } from "./ThemeContext";

// // function ThemeSwitcher() {
// //   const { theme, toggleTheme } = useTheme();

// //   const themeStyles = {
// //     light: {
// //       backgroundColor: "#fff",
// //       color: "#000",
// //     },
// //     dark: {
// //       backgroundColor: "#000",
// //       color: "#fff",
// //     },
// //   };

// //   return (
// //     <div style={themeStyles[theme]}>
// //       <button onClick={toggleTheme}>Toggle Theme</button>
// //       <p>Current Theme: {theme}</p>
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <ThemeProvider>
// //       <div className="App">
// //         <h1>Theme Switcher Example</h1>
// //         <ThemeSwitcher />
        
// //       </div>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;

// //exercise 2

// import React, { useRef, useState } from "react";
// import "./App.css";

// function CharacterCounter() {
//   const inputRef = useRef(null);
//   const [charCount, setCharCount] = useState(0);

//   const handleInputChange = () => {
//     const textLength = inputRef.current.value.length;
//     setCharCount(textLength); 
//   };

//   return (
//     <div>
//       <h1>Character Counter</h1>
//       <textarea
//         ref={inputRef}
//         onChange={handleInputChange}
//         placeholder="Type something..."></textarea>
//       <p>Character Count: {charCount}</p> 
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <CharacterCounter />
//     </div>
//   );
// }

// export default App;

// //exercise 3
import React, { useState, useReducer } from "react";
import "./App.css";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;