import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo.svg';
import { loginWithGoogle, getLoggedUser } from '../actions/session';
import { TOKEN } from '../constants/session';

const mapStateToProps = ({session}) => ({
    user: session.user
});
const mapDispatchToProps = (dispatch) => ({dispatch});

class App extends Component {

    componentDidMount() {
        const {user} = this.props;
        const token = localStorage.getItem(TOKEN);
        if (token && !user) {
            this.props.dispatch(getLoggedUser());
        }
    }

    loginHandler = () => this.props.dispatch(loginWithGoogle('en'));

    renderLoginBtn() {
        const {user} = this.props;
        if (user) {
            return null;
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
        const {user} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title" > 
                        Welcome { user ? user.displayName + ' in ' : 'to '  } MyWallet <FontAwesomeIcon icon="wallet" />
                    </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code> src / App.js </code> and save to reload. 
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
