import { Thunk } from 'redux-testkit';

import {
    getUser,
    storeUser,
    authenticationFailed,
    loginWithGoogle,
    getLoggedUser,
} from '../../src/actions/session';
import {
    ACTIONS as TYPES
} from '../../src/constants/session';

let action;
let dispatches;

const testUser = {
    name: 'test'
};
const testError = {
    type: 'testError'
};

describe('getUser action creator', () => {
    beforeAll(() => action = getUser());
    it('Should have correct type', () => {
        expect(action.type).toBe(TYPES.GET_USER);
    });
    it('Should not have payload', () => {
        expect(action.payload).toBeUndefined();
    });
});

describe('storeUser action creator', () => {
    beforeAll(() => action = storeUser(testUser));
    it('Should have correct type', () => {
        expect(action.type).toBe(TYPES.STORE_USER);
    });
    it('Should have correct payload', () => {
        expect(action.payload).toEqual(testUser);
    });
});

describe('authenticationFailed action creator', () => {
    beforeAll(() => action = authenticationFailed(testError));
    it('Should have correct type', () => {
        expect(action.type).toBe(TYPES.AUTH_FAILED);
    });
    it('Should have correct payload', () => {
        expect(action.payload).toEqual(testError);
    });
});

describe('loginWithGoogle action creator', () => {
    beforeAll(() => {
        dispatches = Thunk(loginWithGoogle).execute()
    });

    it('Should dispatch 2 actions', () => {
        expect(dispatches.length).toBe(2);
    });

    it('Fist action should be ' + TYPES.GET_USER, () => {
        expect(dispatches[0].getType()).toBe(TYPES.GET_USER);
    });

    it('Second action should be ' + TYPES.AUTH_FAILED, () => {
        expect(dispatches[1].getType()).toBe(TYPES.AUTH_FAILED);
    });

});

describe('getLoggedUser action creator', () => {
    beforeAll(() => {
        dispatches = Thunk(getLoggedUser).execute()
    });

    it('Should dispatch 1 actions', () => {
        expect(dispatches.length).toBe(1);
    });

    it('Fist action should be ' + TYPES.GET_USER, () => {
        expect(dispatches[0].getType()).toBe(TYPES.GET_USER);
    });
});
