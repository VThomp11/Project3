import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsById } from '../apiService';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [isPopupVisible, setPopupVisibility] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await getDetailsById(id);
        console.log('Details:', details); // Add this line
        setItemDetails(details);
        setPopupVisibility(true);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
  
    fetchData();
  }, [id]);
  
  const hidePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <div>
      {isPopupVisible && (
        <div id="popup">
          <button onClick={hidePopup}>Close</button>
          <h1>Item Detail Page</h1>
          {itemDetails ? (
            <div>
              <p>Item ID: {itemDetails.id}</p>
              <p>Name: {itemDetails.item}</p>
              <p>Description: {itemDetails.description}</p>
              <p>Price: {itemDetails.price}</p>
              {/* Add other details as needed */}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;
