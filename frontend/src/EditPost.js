import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { itemContext } from "./App";
import { Link } from "react-router-dom";
import './EditPost.css'; 
var cors = require("cors");

export function EditPost() {
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [product, setProduct] = useState([]);
  const [updateListing, setUpdateListing] = useState({});

  const { category, productId} = useContext(itemContext);

  useEffect(() => {
    fetch(`http://localhost:8080/${category}/${productId}`)
      // fetch(`http://localhost:8080/${pathState}/${idState}`)
      .then((res) => res.json())
      .then((displayData) => {
        setItem(displayData[0].item);
        setPrice(displayData[0].price);
        setDesc(displayData[0].description);
        setImg(displayData[0].img)
        setUpdateListing({
          item: displayData[0].item,
          description: displayData[0].description,
          price: displayData[0].price,
        });
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateListing({
      item: item,
      description: desc,
      price: price,
    });
  };
  const handlePatch = (e) => {
    fetch(`http://localhost:8080/${category}/${productId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(updateListing),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };
  const handleItem = (e) => {
    setItem(e.target.value);
  };
  const handleDescription = (e) => {
    setDesc(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div id="container">
      <div id="display">
      <h3 class="title">{updateListing.item} -  ${updateListing.price}</h3>
        <img src={img} width="500px" alt="desc" id="detailImage"/>
       <span class="details"> {updateListing.description}</span> 
      </div>
      <div id="form">
      <form onSubmit={handleSubmit}>
        <ul>
          <div class="edits">
            <label for="item">Item:</label>
            <input type="text" id="item" onChange={handleItem} value={item} />
          </div>
          <div class="edits">
            <label for="price" >Price:</label>
            <input
              type="number"
              id="price"
              onChange={handlePrice}
              value={price}
            />
          </div>
          <div class="edits">
            <label for="description" >Description:</label>
            <textarea
              id="description"
              onChange={handleDescription}
              value={desc}
            ></textarea>
          </div>
          </ul>
        <button type="submit">Submit</button>
      </form>
      </div>
      <Link to={`http://localhost:3000/${category}/${productId}/`} onClick={handlePatch} id="return">Return</Link>
        {/* <button type="button" id="patch" onClick={handlePatch}>Update</button> */}
    </div>
  );
}
