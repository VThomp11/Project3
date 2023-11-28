import React, { useState, useEffect } from "react";
var cors = require("cors");

export function EditPost() {
  // const [list, setList] = useState([]);
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [product, setProduct] = useState([]);
  const [updateListing, setUpdateListing] = useState({});
  // const [productID, setproductID] = useState(0);
  // const [path, setPath] = useState('');
  useEffect(() => {
    fetch(`http://localhost:8080/animals/5`)
      // fetch(`http://localhost:8080/${pathState}/${idState}`)
      .then((res) => res.json())
      .then((displayData) => {
        setItem(displayData[0].item);
        setPrice(displayData[0].price);
        setDesc(displayData[0].description);
        setUpdateListing({
          item: displayData[0].item,
          description: displayData[0].description,
          price: displayData[0].price,
        });
        // setProduct(displayData)
      });
    console.log(updateListing);
  }, []);
  // let title = product[0]
  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateListing({
      item: item,
      description: desc,
      price: price,
    });
  };
  const handlePatch = (e) => {
    fetch(`http://localhost:8080/animals/5`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(updateListing),
    })
      .then(function (response) {
        // console.log(response);
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
    <>
      <ul>
        <li>{updateListing.item}</li>
        <li>{updateListing.price}</li>
        <li>{updateListing.description}</li>
      </ul>
      <form id="form" onSubmit={handleSubmit}>
        <ul>
          <li>
            <label for="product_id">Product:</label>
          </li>
          <li>
            <label for="item">Item:</label>
            <input type="text" id="item" onChange={handleItem} value={item} />
          </li>
          <li>
            <label for="price">Price:</label>
            <input
              type="number"
              id="price"
              onChange={handlePrice}
              value={price}
            />
          </li>
          <li>
            <label for="description">Description:</label>
            <textarea
              id="description"
              onChange={handleDescription}
              value={desc}
            ></textarea>
          </li>
        </ul>
        <button type="submit">Submit</button>
        <button type="button" id="patch" onClick={handlePatch}>
          Final
        </button>
      </form>
    </>
  );
}
