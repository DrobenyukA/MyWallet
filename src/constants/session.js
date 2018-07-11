const BASE = 'SESSION';

export const TOKEN = 'token';

export const GET_USER = `${BASE}_GET_USER`;
export const STORE_USER = `${BASE}_STORE_USER`;
export const AUTH_FAILED = `${BASE}_AUTH_FAILED`;

export const ACTIONS = {
    GET_USER,
    STORE_USER,
    AUTH_FAILED,
};

export default {
    ACTIONS,
    TOKEN,
};
