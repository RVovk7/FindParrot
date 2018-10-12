import * as React from 'react';
import Header from 'screen/Header';
import Search from 'app/screen/MainPage/Search';
import BottomButton from 'app/screen/MainPage/BottomButton';

export default function TopBar(){ 
    return (
      <div className='quickSearch'>
        <Header />
        <Search />
        <BottomButton />
      </div>
    );
};