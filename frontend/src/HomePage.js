import React, { useEffect, useState } from 'react';
import { getOrgans } from './apiService.js';

const HomePage = () => {
  const [organs, setOrgans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const organsData = await getOrgans();
      setOrgans(organsData);
    };

    fetchData();
  }, []);
  console.log(organs)
  return (
    <div>
      <h1>Organ Store</h1>
    
      <ul>
        {organs.map((organ) => (
          <li key={organ.id}>{organ.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;