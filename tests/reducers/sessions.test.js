import reducer from '../../src/reducers/session';
import { ACTIONS } from '../../src/constants/session';

describe('Session reducer:', () => {
    const testUser = {
        name: 'TEST',
        email: 'test@test.com'
    };
    const initialState = {
        user: null
    };
    const previosuState = {
        user: testUser,
    }

    describe('@@INIT action:', () => {
        const action = {type: '@@INIT'};
        const state = reducer(undefined, action);

        it('Should have correct initial stste.', () => {
            expect(state).toEqual(initialState);
        });
    });

    describe(ACTIONS.LOGIN + ' action:', () => {
        const action = {type: ACTIONS.LOGIN};
        const state = reducer(initialState, action);
        
        it('Should indicate loading state for user', () => {
            expect(state.user).toEqual({isLoading: true});
        });
    });


    describe(ACTIONS.STORE_USER + ' action:', () => {
        const action = {
            type: ACTIONS.STORE_USER,
            payload: testUser,
        };
        const state = reducer(initialState, action);
        
        it('Should have correct user:', () => {
            expect(state.user).toEqual(testUser);
        })
    });

    describe(ACTIONS.AUTH_FAILED + ' action:', () => {
        const action = {type: ACTIONS.AUTH_FAILED};
        const state = reducer(previosuState, action);
        
        it('Should not have user', () => {
            expect(state.user).toBeNull();
        });
    });

    describe(ACTIONS.LOGOUT + ' action:', () => {
        const action = {type: ACTIONS.LOGOUT};
        const state = reducer(previosuState, action);
        
        it('Should not have user', () => {
            expect(state.user).toBeNull();
        });
    })

});
