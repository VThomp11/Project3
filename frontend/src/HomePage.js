// HomePage.js
import React, { useEffect, useState } from 'react';
import { getOrgans, getAnimals, getWeapons, getDrugs } from './apiService';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [organs, setOrgans] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [drugs, setDrugs] = useState([]);

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

  // Generic function to render items
  const renderItems = (items, itemNameKey, itemImgKey) => (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {itemImgKey && <img src={item[itemImgKey]} alt={item[itemNameKey]} />}
          {item[itemNameKey]}
        </li>
      ))}
    </ul>
  );


  const renderItemsWithLink = (items, itemNameKey, itemImgKey) => (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <img src={item[itemImgKey]} alt={item[itemNameKey]} />
            <p>{item[itemNameKey]}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>Data Store</h1>

      <section>
        <h2>Organs</h2>
        {renderItemsWithLink(organs, 'item', 'img')}
      </section>

      <section>
        <h2>Animals</h2>
        {renderItems(animals, 'item', 'img')}
      </section>

      <section>
        <h2>Weapons</h2>
        {renderItems(weapons, 'item', 'img')}
      </section>

      <section>
        <h2>Drugs</h2>
        {renderItems(drugs, 'item', 'img')}
      </section>
    </div>
  );
};

export default HomePage;
