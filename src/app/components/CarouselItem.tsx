import * as React from 'react';

export interface CarouselItemProps {
    text: string,
    image: string
}

export default class CarouselItem extends React.Component<CarouselItemProps, any> {
    public render() {
        const { text, image } = this.props;
        return (
            <div className="carouselDiv">
                <div className="carouselItem">
                    <img src={image} />
                    <p>{text}</p>
                    <div className="commentAutor">
                        <h5>Some People</h5>
                        <h6>His job</h6>
                    </div>


                </div>
            </div>
        );
    }
}
