import * as React from 'react';
import Header from 'components/Header';
import Search from 'components/Search';
import BottomButton from 'components/BottomButton';

export default function QuickSearch(){ 
    return (
      <div className='quickSearch'>
        <Header />
        <Search />
        <BottomButton />
      </div>
    );
};