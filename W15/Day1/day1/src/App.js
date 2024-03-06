import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import { Routes, Route, Link } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <>
    <div>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/shop'>Shop</Link>
      </nav>
    </div>
    <Routes>
      <Route path='/home' element = {<Home/>} />
      <Route path='/product/:id' element = {<Product/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/shop' element = {<Shop/>} />
    </Routes>
    </>
  );
}

export default App;
