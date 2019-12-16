import API from '../constants/api';

export function getCategories() {
    return fetch(API.CATEGORIES).then(response => response.json());
};

export default {
    get: getCategories,
};
