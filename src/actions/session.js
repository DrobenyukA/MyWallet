import auth, {withGoogle} from '../firebase/auth';

import {ACTIONS as SESSION} from '../constants/session';
import { defaultLanguage } from '../constants/languages';

const appAuth = auth();

export const login = () => ({type: SESSION.LOGIN});
export const logout = () => ({type: SESSION.LOGOUT})

export const signOut = () => (dispatch) => {
    dispatch(logout());
    return appAuth.signOut();
}

export const storeUser = (user) => ({
    type: SESSION.STORE_USER, payload: user
});

export const authenticationFailed = (error) => ({
    type: SESSION.AUTH_FAILED,
    payload: error
});

export const signInWithGoogle = (language = defaultLanguage) => (dispatch) => {
    appAuth.languageCode = language;
    dispatch(login());
    return withGoogle(auth).then((result) => {
        localStorage.setItem(SESSION.TOKEN, result.credential.accessToken);
        dispatch(storeUser(result.user));
        // TODO: store user profile
        // dispatch(storeProfile(result.credential.profile))
      }).catch((error) => {
          dispatch(authenticationFailed(error));
      });
}

export const getLoggedUser = () => (dispatch) => {
    dispatch(login());
    return appAuth.onAuthStateChanged(user => {
        if (user) {
            return dispatch(storeUser(user));
        } else {
            return dispatch(logout());
        }
    });
};
