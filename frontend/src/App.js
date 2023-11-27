import './App.css';
import HomePage from './HomePage.js';
import Newproduct from './Pages/Newproduct.js';
import Location from './Pages/Location.js';
import Cart from './Pages/Cart.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path='/newproduct' element={<Newproduct />} />
        <Route path="/location" element={<Location />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes here */}
      </Routes>
    
  );
}

export default App;