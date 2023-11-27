import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
=======
// import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom' ;

>>>>>>> c84e95897e06cbd277c560c1c0a51bd29f13fc55
import './index.css';
import App from './App.js';
import NavBar from './NavBar.js';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD

    <Router>
      <NavBar/>
      <App />
    </Router>

);

reportWebVitals();
=======
<>
  <Router>
    <App />
  </Router>
</>
);



reportWebVitals();
>>>>>>> c84e95897e06cbd277c560c1c0a51bd29f13fc55
