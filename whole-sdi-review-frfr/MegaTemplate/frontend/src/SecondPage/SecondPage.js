import './SecondPage.css';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';


export const SecondPage = () => {

  const { forceUpdate, example, setExample } = useContext(userContext);


  return (

    <div className='main-page-container'>
            This is Second Page
    </div>

  )
}
