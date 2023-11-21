import './MainPage.css';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';

export const MainPage = () => {
  
  const { forceUpdate, example, setExample } = useContext(userContext);




  return (

    <div className='main-page-container'>
            This is Main Page
    </div>

  )
}
