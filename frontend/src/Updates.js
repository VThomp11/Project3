import React, { useState, useEffect } from "react";
var cors = require('cors'); 


export function Updates() {
  const [animalList, setAnimalList] = useState([]);
  // const [newListing, setNewListing] = useState({});

  let item;
  let price;
  let product_id;
  let description;
  let newListing;
  // let newListing = {}
  // let animalLength

  useEffect(()=> {
      fetch(`http://localhost:8080/animals`, {mode: "no-cors"})
        .then(res => res.json())
        .then(data => console.log(data))
      }, [])

  document.addEventListener("submit", (e) => {
    let id_length = animalList.length;
    item = document.getElementById("item").value;
    price = document.getElementById("price").value;
    product_id = document.getElementById("product_id").value;
    description = document.getElementById("description").value;
    e.preventDefault();
    newListing = {
      'id': id_length,
      'product_id': product_id,
      'item': item,
      'price': price,
      'description': description,
    };
    fetch("http://localhost:8080/animals", {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    });
    // console.log('animalList:' + animalList)
    // console.log('animalList:' + animalList.length)
    console.log(newListing);
  });
  return (
    <form id="form">
      <ul>
        <li>
          <label for="product_id">Product:</label>
          <select name="product" id="product_id">
            <option value="3">Animals</option>
            <option value="2">Drugs</option>
            <option value="1">Weapons</option>
            <option value="4">Organs</option>
          </select>
        </li>
        <li>
          <label for="item">Item:</label>
          <input type="text" id="item" />
        </li>
        <li>
          <label for="price">Price:</label>
          <input type="number" id="price" />
        </li>
        <li>
          <label for="description">Description:</label>
          <textarea id="description"></textarea>
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
}
//   const [animalArray, setAnimalArray] = useState([]);

//   useEffect(() => {
//     fetch(`localhost:8080/animals`)
//       .then((res) => res.json())
//       .then((data) => setAnimalArray(data));
//   }, []);

//   function handleUpdateAnimals(updatedAnimal) {
//     const updateAnimal = animalArray.map((animal) => {
//       animal.id === updatedAnimal.id ? updatedAnimal : animal;
//     });
//     setAnimalArray(updateAnimal);
//   }
// }
