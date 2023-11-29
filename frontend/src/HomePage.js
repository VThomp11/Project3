// HomePage.js
import React, { useEffect, useState } from 'react';
import { getOrgans, getAnimals, getWeapons, getDrugs, getDetailsById, categoryUrl } from  './apiService';
import { Link } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { itemContext } from './App';
// export const itemContext = createContext();


const HomePage = () => {
  const [organs, setOrgans] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [drugs, setDrugs] = useState([]);

  const { category, productId, setCategory, setProductId} = useContext(itemContext);
  // const [category, setCategory] = useState('');
  // const [productId, setProductId] = useState('');

  // const value = { category, productId }

  useEffect(() => {
    // Fetch data for organs
    getOrgans()
      .then(data => setOrgans(data))
      .catch(error => console.error('Error fetching organs:', error));

    // Fetch data for animals
    getAnimals()
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching animals:', error));

    // Fetch data for weapons
    getWeapons()
      .then(data => setWeapons(data))
      .catch(error => console.error('Error fetching weapons:', error));

    // Fetch data for drugs
    getDrugs()
      .then(data => setDrugs(data))
      .catch(error => console.error('Error fetching drugs:', error));
  }, []);

  const fetchDetails = async (itemId, categoryId) => {
    try {
      const details = await getDetailsById(itemId, categoryId);
      console.log('Details:', details);
      // Do something with the details (e.g., display in a modal)
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  const renderItemsWithLink = (items, itemNameKey, itemImgKey, category) => (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to={`/${category}/${item.id}`}
            onClick={() => {
              setCategory(category);
              setProductId(item.id);
              fetchDetails(item.id, category)
            
            }}
          >
            <img src={item[itemImgKey]} alt={item[itemNameKey]} />
            <p>{item[itemNameKey]}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (

    <div>
        {/* <itemContext.Provider value={value}> */}
      <h1>Data Store</h1>

      <section>
        <h2>Organs</h2>
        {renderItemsWithLink(organs, 'item', 'img', 'organs')}
      </section>

      <section>
        <h2>Animals</h2>
        {renderItemsWithLink(animals, 'item', 'img', 'animals')}
      </section>

      <section>
        <h2>Weapons</h2>
        {renderItemsWithLink(weapons, 'item', 'img', 'weapons')}
      </section>

      <section>
        <h2>Drugs</h2>
        {renderItemsWithLink(drugs, 'item', 'img', 'drugs')}
      </section>
      {/* </itemContext.Provider> */}
    </div>
    
  );
};

export default HomePage;