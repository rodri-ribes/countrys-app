import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index.js';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);