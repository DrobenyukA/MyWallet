const BASE = 'SESSION';

export const TOKEN = 'token';

export const LOGIN = `${BASE}_LOGIN`;
export const LOGOUT = `${BASE}_LOGOUT`;
export const STORE_USER = `${BASE}_STORE_USER`;
export const AUTH_FAILED = `${BASE}_AUTH_FAILED`;

export const ACTIONS = {
    LOGIN,
    LOGOUT,
    STORE_USER,
    AUTH_FAILED,
};

export default {
    ACTIONS,
    TOKEN,
};
