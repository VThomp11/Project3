import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsById } from '../apiService';
import {handleDelete} from '../DeletePost';
import { useContext } from 'react';
import { EditPost } from '../EditPost';
import { Link } from 'react-router-dom';
import { itemContext } from '../App';
import './itemDetailsPage.css'; 
// export default ItemDetailsPage;
export const ItemDetailsPage = () => {

  const { category, productId} = useContext(itemContext);

  const [price, setPrice] = useState(0);
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  console.log(category)
  console.log(productId)


  useEffect(()=> {
    fetch(`http://localhost:8080/${category}/${productId}`)
    .then((res) => res.json())
      .then((displayData) => {
        setItem(displayData[0].item);
        setPrice(displayData[0].price);
        setDesc(displayData[0].description);
        setImg(displayData[0].img);
      });
  }, []);

  return (
    <container id='detailContainer'>
      <img src={img} width="250px" alt="desc" id="detailImage"/>
      <body id='stuff'>
        <ul id="attributeList">
      <li>ITEM: {item}</li>
      <li>PRICE: ${price}</li>
      <li>DESCRIPTION: {desc}</li>
      </ul>
      </body>
      <Link to={`http://localhost:3000/${category}/${productId}/edit`}>Edit</Link>
      <Link to={`http://localhost:3000/deleted`} onClick= {()=> {handleDelete(`http://localhost:8080/${category}/${productId}`) }} >Delete</Link>
      <Link to={`http://localhost:3000/`}>Return</Link>
    </>
  );
};

