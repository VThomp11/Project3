const baseUrl = 'http://localhost:8080';

export const getOrgans = () => {
    return fetch('http://localhost:8080/organs')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching organs:', error);
            throw error; // Rethrow the error to propagate it further
        });
};


export const getAnimals = () => {
    return fetch('http://localhost:8080/animals')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching animals:', error);
            throw error; // Rethrow the error to propagate it further
        });
};


export const getWeapons = () => {
    return fetch('http://localhost:8080/weapons')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching weapons:', error);
            throw error; // Rethrow the error to propagate it further
        });
};

export const getDrugs = () => {
    return fetch('http://localhost:8080/drugs')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching drugs:', error);
            throw error; // Rethrow the error to propagate it further
        });
};


export const getDetailsById = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:8080/details/${itemId}`);
      if (!response.ok) {
        throw new Error(`Error fetching details for ID ${itemId}: ${response.statusText}`);
      }
  
      const details = await response.json();
      return details;
    } catch (error) {
      console.error('Error fetching details:', error);
      throw error; // Rethrow the error to propagate it further
    }
  };
  




// export const getAnimals = async () => {
//     await fetch(`${baseUrl}/animals`)
//         .then(response => (response.json()))
// };

// export const getWeapons = async () => {
//     const response = await fetch(`${baseUrl}/weapons`);
//     const data = await response.json();
//     return data;
// };

// export const getDrugs = async () => {
//     const response = await fetch(`${baseUrl}/drugs`);
//     const data = await response.json();
//     return data;
// };