import * as React from "react";
import { Provider } from "react-redux";
import configureStore from './modules';
import { PersistGate } from 'redux-persist/integration/react';
import MainPage from 'app/containers/MainPage';
import Sign from 'containers/Sign';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './style/main.scss';

const { persistor, store } = configureStore();
const App = hot(module)(() => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <React.Fragment>
                    <Route exact path="/m" component={MainPage} />
                    <Route exact path="/" component={Sign} />
                </React.Fragment>
            </Router>
        </PersistGate>

    </Provider>
));

export default App;