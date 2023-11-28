// import React, { useEffect, useState } from 'react';
// import { getOrgans } from './apiService.js';

const HomePage = () => {
  // const [organs, setOrgans] = useState([]);

  // useEffect(() => {
  //   fetch(getOrgans())
  //    .then(data => setOrgans(data))
      
  //   }, []);
  // console.log('Organs', organs)
  return (
    <div>
      <h1>Organ Store</h1>
      <section>
        {/* <ul>
          // Needs Link to access details page
          {organs.map((organ) => (
            <li key={organ.id}>{organ.item}</li>
          ))}
        </ul> */}
      </section>
      
    </div>
  );
};

export default HomePage;