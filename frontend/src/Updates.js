import React, { useState, useEffect } from "react";
var cors = require("cors");

export function Updates() {
  const [animalList, setAnimalList] = useState([]);
  const [price, setPrice] = useState(0); 
  const [item, setItem] = useState(''); 

  const handleElementPath = (e) => {
    let path = (e.target.options[parseInt(e.target.value)].text).toLowerCase()
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
      .then((data) => {console.log(data); setAnimalList(data)})
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    handleFetch('animals');
  }, []);
  
  const handleChange = (e) => { 
    setPrice(e.target.value)
    setItem(e.target.value) 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newListing = await {
      id: animalList.length,
      product_id: document.getElementById("product_id").value,
      item: document.getElementById("item").value,
      price: price,
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
          <input type="text" id="item" onChange={handleChange} value={item} />
        </li>
        <li>
          <label for="price">Price:</label>
          <input type="number" id="price" onChange={handleChange} value={price} />
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
