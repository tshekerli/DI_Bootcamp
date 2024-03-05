import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element = {<Home/>} />
    </Routes>
    </>
  );
}

export default App;
