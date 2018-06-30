import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as FontAwesome from './services/fontAwesome';
import 'whatwg-fetch';

import appStore from './store'
import './styles/index.scss';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

FontAwesome.initialize();

const appContainer = document.getElementById('root');

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>
, appContainer);

registerServiceWorker();
