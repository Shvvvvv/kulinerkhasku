import {combineReducers} from 'redux';

import userReducer from './userReducers';
import productReducer from './productReducers';
import storeReducers from './storeReducers';

const reducers = combineReducers({userReducer, productReducer, storeReducers});

export default reducers;
