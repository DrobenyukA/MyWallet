import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase/app';

import auth, {loginWithGoogle} from '../firebase/auth';
import logo from '../assets/logo.svg';

// 1. INITIALIZE APP
// firebase.initializeApp(appConfig[getConfigName()]);

// INSTALL language behavior
auth().languageCode = 'ua';

class App extends Component {

    loginHandler = () => {
        loginWithGoogle(auth).then(function(result) {
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
                    <button onClick={this.loginHandler}>Login with <i className="fab fa-google"></i></button>
                </div>
            </div>
        );
    }
}

export default App;
