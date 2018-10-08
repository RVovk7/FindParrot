import * as React from 'react';
import Header from 'screen/Header';
import Search from 'screen/Search';
import BottomButton from 'screen/BottomButton';

export default function TopBar(){ 
    return (
      <div className='quickSearch'>
        <Header />
        <Search />
        <BottomButton />
      </div>
    );
};