import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase/app';

import auth, {loginWithGoogle} from '../firebase/auth';
import logo from '../assets/logo.svg';

// 1. INITIALIZE APP
// firebase.initializeApp(appConfig[getConfigName()]);

// INSTALL language behavior
auth().languageCode = 'ua';

// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
 
const provider = new firebase.auth.GoogleAuthProvider();

// Additional adjustments https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider#setCustomParameters
provider.setCustomParameters({
    'login_hint': 'some-address@example.com'
});

class App extends Component {

    loginHandler = () => {
        loginWithGoogle(auth, provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('RESPONSE: ', result);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log('ERROR: ', error);
          });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title" > Welcome to MyWallet <FontAwesomeIcon icon="wallet" /> </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code> src / App.js </code> and save to reload. 
                </p>
                <div className="text-center">
                    <button onClick={this.loginHandler}>Login with Google</button>
                </div>
            </div>
        );
    }
}

export default App;
