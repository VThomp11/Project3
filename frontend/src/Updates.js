import React, { useState, useEffect } from "react";
var cors = require("cors");

export function Updates() {
  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/animals")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setAnimalList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(animalList);

  document.addEventListener("submit", async (e) => {
    e.preventDefault();
    let newListing = await {
      id: animalList.length,
      product_id: document.getElementById("product_id").value,
      item: document.getElementById("item").value,
      price: document.getElementById("price").value,
      description: document.getElementById("description").value,
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
    // console.log('animalList:' + animalList)
    // console.log('animalList:' + animalList.length)
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


  // const [newListing, setNewListing] = useState({});

  // let item;
  // let price;
  // let product_id;
  // let description;
  // let newListing;
  // let newListing = {}
  // let animalLength

  // useEffect(()=> {
  //     fetch(`http://localhost:8080/animals`, {mode: "no-cors"})
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //     }, [])
