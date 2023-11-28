const baseUrl = 'http://localhost:8080';

export const getOrgans = async () => {
    try {
        const response = await fetch(`${baseUrl}/organs`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching organs:', error);
        throw error; // Rethrow the error to propagate it further
    }
};

export const getAnimals = async () => {
    try {
        const response = await fetch(`${baseUrl}/animals`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching animals:', error);
        throw error; // Rethrow the error to propagate it further
    }
};

export const getWeapons = async () => {
    try {
        const response = await fetch(`${baseUrl}/weapons`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching weapons:', error);
        throw error; // Rethrow the error to propagate it further
    }
};

export const getDrugs = async () => {
    try {
        const response = await fetch(`${baseUrl}/drugs`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching drugs:', error);
        throw error; // Rethrow the error to propagate it further
    }
};

export const getDetailsById = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching details by ID:', error);
            throw error;
        });
};

// const getDetailsById = async (id) => {
//     try {
//         const details = await knex('organs_table').where({ id }).first();
//         return details;
//     } catch (error) {
//         console.error('Error fetching details by ID:', error);
//         throw error; // Rethrow the error to propagate it further
//     }
// };

// module.exports = { getDetailsById };




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