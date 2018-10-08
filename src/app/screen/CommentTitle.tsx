import * as React from 'react';

export interface CommentTitleProps {
}

export default class CommentTitle extends React.Component<CommentTitleProps, any> {
    public render() {
        return (
            <div className="commentTitle">
            <div className="cText">
            <h3>Testimonials</h3>
                    <h5>What our costumers told about as</h5>
            </div>
                  
            </div>
        );
    }
}
