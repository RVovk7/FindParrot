import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import sing from './auth/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    sing,
    form: formReducer
});
const middleware = applyMiddleware(thunk);
const Store = createStore(rootReducer, middleware);

export default Store;