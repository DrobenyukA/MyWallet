import {ACTIONS} from '../constants/session';

const initialState = {
    user: null,
};
const sessionReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default: return state;
    }
};

export default sessionReducer;
