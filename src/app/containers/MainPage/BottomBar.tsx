import * as React from 'react';
import CommentTitle from 'screen/MainPage/CommentTitle';
import CommentSlider from 'components/CommentSlider';
import CommentData from 'assets/data/CommentData';
import Footer from 'screen/Footer';

export default function BottomBar() {
    return (
        <div className='bottomBar'>
            <CommentTitle />
            <CommentSlider commentData={CommentData} />
            <Footer />
        </div>
    );
};