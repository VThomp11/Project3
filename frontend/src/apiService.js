const baseUrl = 'http://localhost:8080';

export const getOrgans = () => {
    return fetch(`${baseUrl}/organs`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching organs:', error);
            throw error;
        });
};

export const getAnimals = () => {
    return fetch(`${baseUrl}/animals`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching animals:', error);
            throw error;
        });
};

export const getWeapons = () => {
    return fetch(`${baseUrl}/weapons`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching weapons:', error);
            throw error;
        });
};

export const getDrugs = () => {
    return fetch(`${baseUrl}/drugs`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching drugs:', error);
            throw error;
        });
};

export const getDetailsById = (id, productId) => {
    let categoryUrl;

    switch (productId) {
        case 4:
            categoryUrl = 'organs';
            break;
        case 3:
            categoryUrl = 'animals';
            break;
        case 2:
            categoryUrl = 'drugs';
            break;
        case 1:
            categoryUrl = 'weapons';
            break;
        default:
            categoryUrl = '';
    }

    const url = `${baseUrl}/${categoryUrl}/${id}`;

    return fetch(url)
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
export const categoryUrl = (productId) => {
    let categoryUrl;

    switch (productId) {
        case 4:
            categoryUrl = 'organs';
            break;
        case 3:
            categoryUrl = 'animals';
            break;
        case 2:
            categoryUrl = 'drugs';
            break;
        case 1:
            categoryUrl = 'weapons';
            break;
        default:
            categoryUrl = '';
    }

    return categoryUrl;
};