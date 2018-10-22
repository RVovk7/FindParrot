import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import sing from './auth/reducer';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['sign']
}

const logger = createLogger();
const rootReducer = combineReducers({
    sing,
    form: formReducer
});

const middleware = applyMiddleware(thunk, logger);
const persistedReducer = persistReducer(persistConfig, rootReducer);



export default () => {
    const store = createStore(persistedReducer, middleware);
    const persistor = persistStore(store);
    return { store, persistor };
};

