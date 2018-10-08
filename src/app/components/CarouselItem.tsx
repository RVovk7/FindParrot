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
                    <div className="carouselTxt">
                       <p>{text}</p>
                </div>
                </div>
            </div>
        );
    }
}
