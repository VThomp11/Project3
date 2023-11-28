import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { NewPost } from './NewPost.js'
import { EditPost } from './EditPost.js'
import HomePage from './HomePage.js';
import Newproduct from './Pages/Newproduct.js';
import Location from './Pages/Location.js';
import Cart from './Pages/Cart.js';
import {ItemDetailsPage} from './Pages/itemDetailsPage.js'
import { Deleted } from './Pages/Deleted.js';

export const itemContext = createContext();

function App() {
  
const [category, setCategory] = useState('');
const [productId, setProductId] = useState('');

const value = { category, productId, setCategory, setProductId }


  return (
    <div className="App">
      <header className="App-header">
      <itemContext.Provider value={value}>
        <Routes>
      
          <Route path='/post' element={<NewPost />} />
          <Route path='/:category/:id/edit' element={<EditPost />} />
          <Route path='/edit' element={<EditPost />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/newproduct" element={<Newproduct />} />
          <Route path="/location" element={<Location />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:category/:id" element={<ItemDetailsPage />} />
          <Route path="/deleted" element={<Deleted />} />
    
        </Routes>
        </itemContext.Provider>
      </header>
    </div>
  );
}

export default App;