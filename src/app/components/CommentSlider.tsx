import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselItem from 'components/CarouselItem';

export interface CommentSliderProps {
  commentData: {
    text: string;
    image: string;
  }[];
};

export default class CommentSlider extends React.Component<CommentSliderProps, any> {
  constructor(props?: any) {
    super(props);
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
    const { state: { index, direction }, props: { commentData } } = this;

    return (
      <div className="carouselDiv">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >

          {commentData.map(e => <Carousel.Item key={e.text}>
            <CarouselItem text={e.text} image={e.image} />
          </Carousel.Item>)}

        </Carousel>
      </div>

    );
  }
}