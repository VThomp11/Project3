import ReactDOM from 'react-dom/client';
// import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom' ;

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Router>
    <App />
  </Router>
</>
);



reportWebVitals();
