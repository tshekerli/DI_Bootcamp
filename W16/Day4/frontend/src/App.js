import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedPage from './ProtectedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/" element={<Home />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to our website!</h1>
      <p>To get started, please <a href="/login">login</a> or <a href="/register">register</a>.</p>
    </div>
  );
}

export default App;