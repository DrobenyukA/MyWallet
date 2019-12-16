import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers';
import initLocalization from './services/localization';

const middleware = [
    ReduxThunk,
];

const composeEnhancers = composeWithDevTools({
    name: 'MyWallet',
});

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware),
));

initLocalization(store);

export default store;
