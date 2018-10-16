import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import singInUp from './auth/reducer';

const rootReducer = combineReducers({ singInUp });
const middleware = applyMiddleware(thunk);
const Store = createStore(rootReducer, middleware);

export default Store;