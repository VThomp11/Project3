import ReactDOM from 'react-dom/client';
// import React, {useContext } from "react";
import { BrowserRouter as Router, } from 'react-router-dom' ;
import './index.css';
import App from './App.js';
// import ShopPage from './Pages/shopPage.js';
import reportWebVitals from './reportWebVitals.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Router>
    <App />
  </Router>
</>
);
reportWebVitals();