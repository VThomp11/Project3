<<<<<<< HEAD
import './App.css';
import HomePage from './HomePage.js';
import Newproduct from './Pages/Newproduct.js';
import Location from './Pages/Location.js';
import Cart from './Pages/Cart.js';
import { Routes, Route } from 'react-router-dom';
=======
import  React, {useEffect, useState} from 'react'; 
import './App.css'; 
import {Routes, Route} from 'react-router-dom'
import { Updates } from './Updates.js'

>>>>>>> c84e95897e06cbd277c560c1c0a51bd29f13fc55

function App() {

  // useEffect(() => {
  //   fetch(`localhost:8080`) 
  //   .then(res => res.json) 
  //   .then(data => console.log(data)) 
  // }) 


  return (
<<<<<<< HEAD
    
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path='/newproduct' element={<Newproduct />} />
        <Route path="/location" element={<Location />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes here */}
      </Routes>
    
=======
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path= '/updates' element= {<Updates/>}/>
            </Routes> 
      </header>
    </div>
>>>>>>> c84e95897e06cbd277c560c1c0a51bd29f13fc55
  );
}

export default App;