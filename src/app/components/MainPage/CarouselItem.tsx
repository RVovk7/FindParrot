import * as React from 'react';

export interface CarouselItemProps {
    text: string;
    image: string;
    author: {
        name: string;
        position: string;
    }
}

export default class CarouselItem extends React.Component<CarouselItemProps, any> {
    public render() {
        const { text, image, author } = this.props;
        return (
            <div className="carouselDiv">
                <div className="carouselItem">
                    <img src={image} />
                    <p>{text}</p>
                    <div className="commentAutor">
                        <h5><strong>{author.name}</strong></h5>
                        <h6>{author.position}</h6>
                    </div>
                </div>
            </div>
        );
    }
}
