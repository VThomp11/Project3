import React, { useState, useEffect } from "react";
var cors = require("cors");

export function NewPost() {
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState('');
  const [desc, setDesc] = useState('');
  const [productID, setproductID] = useState(0);
  const [path, setPath] = useState('');

  const handleElementPath = (e) => {
    let path = (e.target.options[parseInt(e.target.value)].text).toLowerCase()
    setproductID(e.target.value)
    handleFetch(path); 
  }

  const handleFetch = (path) => {
    fetch(`http://localhost:8080/${path}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {console.log(data); setList(data)})
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    handleFetch('animals');
  }, []);
  
  const handleChange = (e) => { 
    setPrice(e.target.value)
  }
  const handleChange2 = (e) => {
    setItem(e.target.value)
  }

  const handleChange3 = (e) => {
    setDesc(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newListing = await {
      id: list.length,
      product_id: productID,
      item: item,
      price: price,
      description: desc,
    };
    console.log(newListing);
    fetch("http://localhost:8080/animals",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newListing),
      }
    );

  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <ul>
        <li>
          <label for="product_id">Product:</label>
          <select name="product" id="product_id" onChange={handleElementPath}>
            <option value="0">Animals</option>
            <option value="1">Drugs</option>
            <option value="2">Weapons</option>
            <option value="3">Organs</option>
          </select>
        </li>
        <li>
          <label for="item">Item:</label>
          <input type="text" id="item" onChange={handleChange2} value={item} />
        </li>
        <li>
          <label for="price">Price:</label>
          <input type="number" id="price" onChange={handleChange} value={price} />
        </li>
        <li>
          <label for="description">Description:</label>
          <textarea id="description" onChange={handleChange3}></textarea>
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
}
