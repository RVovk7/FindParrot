import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductData from 'assets/ProductData';

export interface CommentSliderProps {
}

export default class CommentSlider extends React.Component<CommentSliderProps, any> {
  constructor(props?: any, context?: any) {
    super(props, context);
    
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex?: any, e?: any) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  public render() {
    const { index, direction } = this.state;

    return (
      <div className="carouselDiv">
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={400} height={400} alt="900x500" src={ProductData[0].image} />
        </Carousel.Item>
        <Carousel.Item>
        <img width={400} height={400} alt="900x500" src={ProductData[0].image} />
        </Carousel.Item>
        <Carousel.Item>
        <img width={400} height={400} alt="900x500" src={ProductData[0].image} />
        </Carousel.Item>
      </Carousel>
      </div>
      
    );
  }
}