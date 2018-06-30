import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo.svg';
import { getCategories } from '../actions/categories';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({dispatch});

class App extends Component {
    componentDidMount() {
        this.props.dispatch(getCategories());
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
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
