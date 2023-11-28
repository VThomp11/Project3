// ItemDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsById } from '../apiService';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await getDetailsById(id);
        console.log('Details:', details);
        setItemDetails(details);
      } catch (error) {
        // Handle error (e.g., display an error message)
        console.error('Error fetching details:', error);
      }
    };
  
    fetchData();
  }, [id]);


  return (
    <div>
      <h1>Item Detail Page</h1>
      <p>Item ID: {itemDetails.id}</p>
      <p>Name: {itemDetails.name}</p>
      <p>Description: {itemDetails.description}</p>
      <p>Price: {itemDetails.price}</p>
      <p>Other details: {itemDetails.otherDetails}</p>
    </div>
  );
};

export default ItemDetailPage;