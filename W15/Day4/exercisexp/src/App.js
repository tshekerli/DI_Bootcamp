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