import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk'

import reducer from './reducers';

const middleware = [
    ReduxThunk,
];

const composeEnhancers = composeWithDevTools({
    name: 'MyWallet',
});

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware),
));

export default store;
