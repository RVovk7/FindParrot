import * as React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Products from './Products';

export default function mainPage() {
    return (
        <div>
            <TopBar />
            <Products />
            <BottomBar />
        </div>
    );
};