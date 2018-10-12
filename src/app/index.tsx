import * as React from "react";
import MainPage from 'containers/MainPage';
import SingUpIN from 'app/containers/SignInUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './style/main.scss';

const App = hot(module)(() => (
    <Router>
        <React.Fragment>
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/" component={SingUpIN} />
        </React.Fragment>
    </Router>
));

export default App;