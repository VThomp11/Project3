import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // useEffect(() => {
  //   fetch(`localhost:8080`) 
  //   .then(res => res.json) 
  //   .then(data => console.log(data)) 
  // }) 


  return (
    
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
    
  );
}

export default App;