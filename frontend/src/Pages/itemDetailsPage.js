import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsById } from '../apiService';
import {handleDelete} from '../DeletePost';

import { EditPost } from '../EditPost';
import { Link } from 'react-router-dom';
import { itemContext } from '../App';
<<<<<<< HEAD



// export default ItemDetailsPage;
export const ItemDetailsPage = () => {

  const { category, productId, itemsInCart, setItemsInCart} = useContext(itemContext);
=======
import './itemDetailsPage.css'; 
// export default ItemDetailsPage;
export const ItemDetailsPage = () => {
  const { category, productId } = useContext(itemContext);
>>>>>>> 69459598190bb44fbf0d1b2bfdbb023790d21025

  const [price, setPrice] = useState(0);
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
<<<<<<< HEAD
  const [id, setId] = useState("");

  console.log(category)
  console.log(productId)
=======
  console.log(category);
  console.log(productId);
>>>>>>> 69459598190bb44fbf0d1b2bfdbb023790d21025

  useEffect(() => {
    fetch(`http://localhost:8080/${category}/${productId}`)
      .then((res) => res.json())
      .then((displayData) => {
        setItem(displayData[0].item);
        setPrice(displayData[0].price);
        setDesc(displayData[0].description);
        setImg(displayData[0].img);
        setId(displayData[0].id)
      });
  }, []);

  return (
<<<<<<< HEAD
    <>
      <img src={img} width="250px" alt="desc"/>
      <div>ITEM: {item}</div>
      <div>PRICE: ${price}</div>
      <div>DESCRIPTION: {desc}</div>
      <button type='button' onClick={() => {
        let oldArray = itemsInCart
        oldArray.push(`${category}/${productId}`)
        console.log('ARRAY', oldArray)
        setItemsInCart(oldArray)}}>ADD TO CART</button>
      <Link to={`http://localhost:3000/${category}/${productId}/edit`}>Edit</Link>
      <Link to={`http://localhost:3000/deleted`} onClick= {()=> {handleDelete(`http://localhost:8080/${category}/${productId}`) }} >Delete</Link>
    </>
=======
    <container id="detailContainer">
      <img src={img} width="250px" alt="desc" id="detailImage" />
      <body id="stuff">
        <div id="attributeList">
          <div>
            <p id="item">ITEM: {item}</p>
          </div>
          <div>
            <p id="price">PRICE: ${price}</p>
          </div>
          <div>
            <p id="description">DESCRIPTION: {desc}</p>
          </div>
        </div>
      </body>
      <span id="links">
        <Link
          to={`http://localhost:3000/${category}/${productId}/edit`}
          id="editLink"
        >Edit</Link>
        <Link to={`http://localhost:3000/deleted`}
          onClick={() => {
            handleDelete(`http://localhost:8080/${category}/${productId}`);
          }}
          id="deleteLink">
          Delete
        </Link>
        <Link to={`http://localhost:3000/`} id='returnLink'>Return</Link>
      </span>
    </container>
>>>>>>> 69459598190bb44fbf0d1b2bfdbb023790d21025
  );
};

