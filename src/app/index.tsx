import * as React from "react";
import { hot } from 'react-hot-loader';
import TopBar from 'containers/TopBar';
import Products from 'containers/Products';
import BottomBar from 'containers/BottomBar';
import './style/main.scss';

export const App = hot(module)(() => (
    <React.Fragment>
        <TopBar />
        <Products />
        <BottomBar />
    </React.Fragment>
));
