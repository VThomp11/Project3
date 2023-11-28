import  React, {useEffect, useState} from 'react'; 
import './App.css'; 
import {Routes, Route} from 'react-router-dom'
import { NewPost } from './NewPost.js'
import { EditPost } from './EditPost.js'
import './App.css';
import HomePage from './HomePage.js';
import Newproduct from './Pages/Newproduct.js';
import Location from './Pages/Location.js';
import Cart from './Pages/Cart.js';
import ItemDetailPage from './Pages/itemDetailsPage.js'
import { Routes, Route } from 'react-router-dom';
import React from 'react'; 

import { Updates } from './Updates.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path= '/post' element= {<NewPost/>}/>
          <Route path= '/:path/:id/edit' element = {<EditPost/>}/> 
          <Route path= '/edit' element = {<EditPost/>}/> 

            
    
    
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/newproduct" element={<Newproduct />} />
      <Route path="/location" element={<Location />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/detail/:id" element={<ItemDetailPage />} />
      {/* Add other routes here */}
    </Routes>
    </header>
    </div>
  );
}

export default App;