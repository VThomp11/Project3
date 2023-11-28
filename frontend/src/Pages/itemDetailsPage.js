import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsById } from '../apiService';
import {handleDelete} from '../DeletePost';

// export default ItemDetailsPage;
export const ItemDetailsPage = () => {
  const { category, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetailsById(id, category);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchData();
  }, [category, id]);

  // if (!details) {
  //   return <div>Loading...</div>; // You can replace this with a loading spinner or other UI.
  // }

  return (
    <div>
      {/* <h1>{details.item}</h1>
      <p>{details.description}</p>
      <h2>Hello world!</h2>
      <img src={details.img} alt={details.item} /> */}
      <button type = 'button' onClick= {()=> {handleDelete('http://localhost:8080/animals/5') }}> Submit</button>
      {/* Display other details as needed */}
    </div>
  );
};

