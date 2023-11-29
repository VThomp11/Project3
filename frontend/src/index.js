import ReactDOM from 'react-dom/client';
// import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom' ;

import './index.css';
import App from './App.js';
import NavBar from './NavBar.js';
import reportWebVitals from './reportWebVitals.js';
import { itemContext } from './HomePage.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <NavBar/>
      <App />
    </Router>

);

reportWebVitals();
