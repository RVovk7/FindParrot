import * as React from "react";
import { hot } from 'react-hot-loader';
import Main from 'containers/Main';
import './style/main.scss';

export const App = hot(module)(() => (
    <React.Fragment> <Main /> </React.Fragment>
));
