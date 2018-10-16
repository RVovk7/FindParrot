import * as React from "react";
import { Provider } from "react-redux";
import Store from './modules';
import MainPage from 'app/containers/MainPage';
import Sign from 'containers/Sign';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './style/main.scss';


const App = hot(module)(() => (
    <Provider store={Store}>
        <Router>
            <React.Fragment>
                <Route exact path="/m" component={MainPage} />
                <Route exact path="/" component={Sign} />
            </React.Fragment>
        </Router>
    </Provider>
));

export default App;