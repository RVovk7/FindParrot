import * as React from 'react';
// top
import Header from 'screen/Header';
import Search from 'screen/MainPage/Search';
import BottomButton from 'screen/MainPage/BottomButton';
// product
import ProductData from 'assets/data/ProductData';
import ProductList from 'components/MainPage/ProductList';
import ProductTitle from 'screen/MainPage/ProductTitle';
import ProductLink from 'screen/MainPage/ProductLink';
// Bottom
import CommentTitle from 'screen/MainPage/CommentTitle';
import CommentSlider from 'components/MainPage/CommentSlider';
import CommentData from 'assets/data/CommentData';
import Footer from 'screen/Footer';

export default function mainPage() {
    return (
        <div>
            <div className='top'>
                <Header />
                <Search />
                <BottomButton />
            </div>
            <div className="productsDiv">
                <ProductTitle />
                <ProductList ProductData={ProductData} />
                <ProductLink />
            </div>
            <div className='bottomBar'>
                <CommentTitle />
                <CommentSlider commentData={CommentData} />
                <Footer />
            </div>
        </div>
    );
};