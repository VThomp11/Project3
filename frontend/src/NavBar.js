import './App.css';
import './NavBar.css'

import { Link } from 'react-router-dom';

function NavBar() {
  return (
   <div id='linkings'> 
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/post'>Add Listing</Link>
            </li>
            <li>
                <Link to='/location'>Pickup Locations</Link>
            </li>
            <li>
                <Link to='/cart'>CHANGE TO ICON</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar;