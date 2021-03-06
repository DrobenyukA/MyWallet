import { ACTIONS } from '../constants/session';

const defaultState = {
    user: null,
}

function setLoadingState(presState, target) {
    return {
        ...presState,
        [target]: {
            isLoading: true,
        },
    };
}

function storeUser(presState, user) {
    return {
        ...presState,
        user,
    };
}

const sessionReducer = (state = defaultState, {
    type,
    payload,
}) => {
    switch (type) {
    case ACTIONS.LOGIN: return setLoadingState(state, 'user');
    case ACTIONS.STORE_USER: return storeUser(state, payload);
    case ACTIONS.LOGOUT:
    case ACTIONS.AUTH_FAILED: return storeUser(state, null);
    default: return state;
    }
};

export default sessionReducer;
