import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';

import session from './session';

export default combineReducers({
    session,
    localize: localizeReducer,
});
