import auth, {withGoogle} from '../firebase/auth';

import {ACTIONS as SESSION} from '../constants/session';
import { defaultLanguage } from '../constants/languages';

const appAuth = auth();

export const getUser = () => ({type: SESSION.GET_USER});

export const storeUser = (user) => ({
    type: SESSION.STORE_USER, payload: user
});

export const authenticationFailed = (error) => ({
    type: SESSION.AUTH_FAILED,
    payload: error
});

export const loginWithGoogle = (language = defaultLanguage) => (dispatch) => {
    appAuth.languageCode = language;
    dispatch(getUser());
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
    dispatch(getUser());
    return appAuth.onAuthStateChanged(user => {
        if (user) {
            return dispatch(storeUser(user));
        }
    });
};
