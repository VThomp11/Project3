import ReactDOM from 'react-dom/client';
import React, { useEffect, useState, useContext, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom' ;
import './App.css';
import { MainPage } from './MainPage/MainPage';
import { SecondPage } from './SecondPage/SecondPage';


export const userContext = React.createContext();



function App() {
  const [example, setExample] = useState("")
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  


  return (
<> 
        <div className="nav">
          <div className='links'>
            <Link to='/' className='NavBar'>Home</Link>
            <Link to='/SecondPage' className='NavBar'>Second Page</Link>
          </div>
        </div>


      <userContext.Provider value={{example, setExample, forceUpdate}}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/SecondPage' element={<SecondPage />} />
        </Routes>
      </userContext.Provider>

</>   
  );
}

export default App;
