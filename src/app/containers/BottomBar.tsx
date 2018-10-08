import * as React from 'react';
import CommentTitle from 'screen/CommentTitle';
import CommentSlider from 'components/CommentSlider';

export default function BottomBar() {
    return (
        <div className='bottomBar'>
            <CommentTitle />
            <CommentSlider />
        </div>
    );
};