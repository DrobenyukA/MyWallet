import React, { Component } from 'react';
import {Button} from 'reactstrap';

import logo from '../assets/logo.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title" > Welcome to React </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code> src / App.js </code> and save to reload.
                </p>
                <div className="text-center">
                    <Button color="primary">Test</Button>
                    <Button color="danger">Test</Button>
                </div>
            </div>
        );
    }
}

export default App;