import firebase from 'firebase/app';
import 'firebase/auth';

import config from '../config';
import { getConfigName } from '../services/environment';

if (!firebase.apps.length) {
    firebase.initializeApp(config[getConfigName()]);
}

const defaultAuth = firebase.auth()
// To apply the default browser preference instead of explicitly setting it.
defaultAuth.useDeviceLanguage();
 
const defaultProvider = new firebase.auth.GoogleAuthProvider();
// Additional adjustments https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider#setCustomParameters
defaultProvider.setCustomParameters({
    'login_hint': 'some-address@example.com'
});

export function withGoogle(auth = defaultAuth, provider = defaultProvider) {
    return auth.signInWithPopup(provider)
}

export default firebase.auth;
