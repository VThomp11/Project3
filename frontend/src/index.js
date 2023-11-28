import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom' ;

import './index.css';
import App from './App.js';
import NavBar from './NavBar.js';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <NavBar/>
      <App />
    </Router>

);

<>
  <Router>
    <App />
  </Router>
</>
);



reportWebVitals();
