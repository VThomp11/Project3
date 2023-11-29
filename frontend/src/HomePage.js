// HomePage.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getOrgans, getAnimals, getWeapons, getDrugs, getDetailsById } from './apiService';
import { itemContext } from './App';

const HomePage = () => {
  const [organs, setOrgans] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [drugs, setDrugs] = useState([]);

  const { setCategory, setProductId } = useContext(itemContext);

  useEffect(() => {
    // Fetch data for organs
    getOrgans()
      .then((data) => setOrgans(data))
      .catch((error) => console.error('Error fetching organs:', error));

    // Fetch data for animals
    getAnimals()
      .then((data) => setAnimals(data))
      .catch((error) => console.error('Error fetching animals:', error));

    // Fetch data for weapons
    getWeapons()
      .then((data) => setWeapons(data))
      .catch((error) => console.error('Error fetching weapons:', error));

    // Fetch data for drugs
    getDrugs()
      .then((data) => setDrugs(data))
      .catch((error) => console.error('Error fetching drugs:', error));
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
              fetchDetails(item.id, category);
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://i.imgur.com/uE7c11K.gif" alt="Left Image" />
        <span id="T">T</span>
        <span id="H">H</span>
        <span id="E">E</span>
        <span id="space">&nbsp;</span>
        <span id="B">B</span>
        <span id="L">L</span>
        <span id="A">A</span>
        <span id="C">C</span>
        <span id="K">K</span>
        <span id="space">&nbsp;</span>
        <span id="M">M</span>
        <span id="A2">A</span>
        <span id="R">R</span>
        <span id="K2">K</span>
        <span id="E2">E</span>
        <span id="T2">T</span>
        <img src="https://i.imgur.com/uE7c11K.gif" alt="Right Image" />
      </div>

      <section>
        <h2>Organs</h2>
        <h4>
          Elevate your musical journey with the enchanting sounds of the organ. Crafted with precision and designed for both novices and virtuosos alike,
          the organ stands as a testament to the artistry of sound.
        </h4>
        {renderItemsWithLink(organs, 'item', 'img', 'organs')}
      </section>

      <section>
        <h2>Animals</h2>
        <h4>
          Open your heart and home to a world of joy by adopting a loving animal companion. Each adoption is a beautiful story of hope, friendship, and the
          transformative power of unconditional love.
        </h4>
        {renderItemsWithLink(animals, 'item', 'img', 'animals')}
      </section>

      <section>
        <h2>Weapons</h2>
        <h4>
          Gear up for thrilling adventures and exhilarating battles with Nerf guns, the ultimate choice for action-packed play. Immerse yourself in a world of
          excitement, strategy, and non-stop fun as you wield the power of Nerf weaponry.
        </h4>
        {renderItemsWithLink(weapons, 'item', 'img', 'weapons')}
      </section>

      <section>
        <h2>Drugs</h2>
        <h4>
          Discover the relief you've been searching for with Tylenol and over-the-counter pain medication – your reliable companions on the journey to wellness.
          Embrace a life of comfort and vitality as you bid farewell to aches, pains, and discomfort.
        </h4>
        {renderItemsWithLink(drugs, 'item', 'img', 'drugs')}
      </section>
        
        
              <div id="foglayer_01" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="foglayer_02" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="foglayer_03" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>

    </div>
  );
};

export default HomePage;
