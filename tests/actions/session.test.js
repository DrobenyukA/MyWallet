import { Thunk } from 'redux-testkit';

import {
    login,
    storeUser,
    authenticationFailed,
    signInWithGoogle,
    getLoggedUser,
    logout,
    signOut
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

describe('login action creator', () => {
    beforeAll(() => action = login());
    it('Should have correct type', () => {
        expect(action.type).toBe(TYPES.LOGIN);
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

describe('signInWithGoogle action creator', () => {
    beforeAll(async () => {
        dispatches = await Thunk(signInWithGoogle).execute()
    });

    it('Should dispatch two actions', () => {
        expect(dispatches.length).toBe(2);
    });

    it('Fist action should be ' + TYPES.LOGIN, () => {
        expect(dispatches[0].getType()).toBe(TYPES.LOGIN);
    });

    it('Second action should be ' + TYPES.AUTH_FAILED, () => {
        expect(dispatches[1].getType()).toBe(TYPES.AUTH_FAILED);
    });

});

describe('getLoggedUser action creator', () => {
    beforeAll( async () => {
        dispatches = await Thunk(getLoggedUser).execute()
    });

    it('Should dispatch one actions', () => {
        expect(dispatches.length).toBe(1);
    });

    it('Fist action should be ' + TYPES.LOGIN, () => {
        expect(dispatches[0].getType()).toBe(TYPES.LOGIN);
    });

});

describe('logout action creator', () => {
    beforeAll(() => action = logout());
    it('Should have correct type', () => {
        expect(action.type).toBe(TYPES.LOGOUT);
    });
    it('Should not have payload', () => {
        expect(action.payload).toBeUndefined();
    });
});

describe('signOut action creator', () => {
    beforeAll(() => {
        dispatches = Thunk(signOut).execute()
    });

    it('Should dispatch one action', () => {
        expect(dispatches.length).toBe(1);
    });

    it('First action shoudl be ' + TYPES.LOGOUT, () => {
        expect(dispatches[0].getType()).toBe(TYPES.LOGOUT);
    });
});
