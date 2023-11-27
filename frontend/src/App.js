import  React, {useEffect, useState} from 'react'; 
import './App.css'; 
import {Routes, Route} from 'react-router-dom'
import { Updates } from './Updates.js'


function App() {

  // useEffect(() => {
  //   fetch(`localhost:8080`) 
  //   .then(res => res.json) 
  //   .then(data => console.log(data)) 
  // }) 


  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path= '/updates' element= {<Updates/>}/>
            </Routes> 
      </header>
    </div>
  );
}

export default App;
