import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import ErrorBoundary from './ErrorBoundary'; 
import PostList from './PostList';

const HomeScreen = () => <h1>home</h1>;
const ProfileScreen = () => <h1>profile</h1>;
const ShopScreen = () => { throw new Error('shop'); };

function App() {
  return (
    //Exercise 1
    // <BrowserRouter>
    //   <Navbar bg="light" expand="lg">
    //     <Nav className="mr-auto">
    //       <NavLink className="nav-link" to="/">Home</NavLink>
    //       <NavLink className="nav-link" to="/profile">Profile</NavLink>
    //       <NavLink className="nav-link" to="/shop">Shop</NavLink>
    //     </Nav>
    //   </Navbar>
    //   <Routes>
    //     <Route path="/" element={
    //       <ErrorBoundary>
    //         <HomeScreen />
    //       </ErrorBoundary>
    //     }/>
    //     <Route path="/profile" element={
    //       <ErrorBoundary>
    //         <ProfileScreen />
    //       </ErrorBoundary>
    //     }/>
    //     <Route path="/shop" element={
    //       <ErrorBoundary>
    //         <ShopScreen />
    //       </ErrorBoundary>
    //     }/>
    //   </Routes>
    // </BrowserRouter>

    //Exercise 2

    <PostList />

  );
}

export default App;