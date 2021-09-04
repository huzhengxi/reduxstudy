import {createStore, applyMiddleware, compose} from 'redux';
import reducer, {defaultState} from '../reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
    reducer,
    defaultState,
    enhancer
);

export default store;



