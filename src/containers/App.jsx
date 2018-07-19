import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setActiveLanguage } from 'react-localize-redux';

import {getTranslations} from '../services/localization';
import logo from '../assets/logo.svg';
import { signInWithGoogle, getLoggedUser, signOut } from '../actions/session';
import { TOKEN } from '../constants/session';

const mapStateToProps = ({session, localize}) => ({
    languages: localize.languages,
    translate: getTranslations(localize),
    user: session.user,
});
const mapDispatchToProps = (dispatch) => ({dispatch});

class App extends Component {

    componentDidMount() {
        const {user} = this.props;
        const token = localStorage.getItem(TOKEN);
        if (token && !user) {
            this.props.dispatch(getLoggedUser(user));
        }
    }

    // TODO: add locale for authentication
    loginHandler = () => this.props.dispatch(signInWithGoogle('en'));

    looutHandler = () => this.props.dispatch(signOut());

    languageChangeHandler = (event) => this.props.dispatch(setActiveLanguage(event.target.value));

    renderLoginBtn() {
        const {user} = this.props;
        if (user && !user.isLoading) {
            return <button onClick={this.looutHandler}>Logout</button>;
        }
        return (
            <div className="text-center">
                <button onClick={this.loginHandler}>
                    Login with <i className="fab fa-google"></i>
                </button>
            </div>
        )
    }

    render() {
        const {user, translate, languages} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title" > 
                        { translate('common.welcome')} &nbsp;
                        { user && !user.isLoading ? user.displayName + ' in ' : 'to '  } MyWallet
                        <FontAwesomeIcon icon="wallet" />
                    </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code> src / App.js </code> and save to reload.
                </p>
                <p>
                    Shoose langueage: &nbsp;
                    <select name="language" onChange={this.languageChangeHandler}>
                        {languages.map( language => (
                            <option key={language.code} value={language.code}>
                                {language.code}
                            </option>
                        ))}
                    </select>
                </p>
                {this.renderLoginBtn()}
            </div>
        );
    }
}

App.propTypes = {
    user: PropTypes.object,
    languages: PropTypes.arrayOf(PropTypes.object),
    translate: PropTypes.func,
    dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
