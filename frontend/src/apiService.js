const baseUrl = 'http://localhost:8080';

export const getOrgans = async () => {
  await fetch(`${baseUrl}/organs`)
  .then(response => (response.json()))
};

export const getAnimals = async () => {
    await fetch(`${baseUrl}/animals`)
    .then(response => (response.json()))
  };

  export const getWeapons = async () => {
    const response = await fetch(`${baseUrl}/weapons`);
    const data = await response.json();
    return data;
  };

  export const getDrugs = async () => {
    const response = await fetch(`${baseUrl}/drugs`);
    const data = await response.json();
    return data;
  };