import categoriesAPI from '../requests/categories';

export const getCategories = () => (dispatch) => {
    dispatch({type: 'LOAD_CATEGORIES'});
    return categoriesAPI.get()
        .then( response => console.log('RESPONSE: ', response))
        .catch( error => console.log('ERROR: ', error));
};
