import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselItem from 'components/CarouselItem';

const carouselItemClass = document.getElementsByClassName('item');
export interface CommentSliderProps {
  commentData: {
    text: string;
    image: string;
    author: {
      name: string;
      position: string;
    }
  }[];
};

export default class CommentSlider extends React.Component<CommentSliderProps, any> {
  constructor(props?: any) {
    super(props);
    this.state = {
      index: 0,
      direction: null,

    };
  }

  componentDidMount() {
    this.initialSlideS();
  }

  initialSlideS = () => {
    carouselItemClass[1].classList.toggle('prevItem');
    carouselItemClass[carouselItemClass.length - 1].classList.toggle('nextItem');
  }

  initialSlideE = () => {
    carouselItemClass[carouselItemClass.length - 1].classList.toggle('nextItem');
    carouselItemClass[1].classList.toggle('prevItem');

  }

  handleSelect = (sIndex?: any, e?: any) => {
    this.setState({
      index: sIndex,
      direction: e.direction
    }, this.classSwitch)

  }

  classSwitch = () => {

    const { index } = this.state;
    Array.from(carouselItemClass).forEach((el: any, i: any) => {
      el.classList.remove('prevItem', 'nextItem');
    });

    const StartI = index === 0;
    const EndI = index === carouselItemClass.length - 1;

    if (!StartI && !EndI) {
      carouselItemClass[index - 1].classList.toggle('prevItem');
      carouselItemClass[index + 1].classList.toggle('nextItem');
    }

    StartI && this.initialSlideS();
    EndI && this.initialSlideE();


  }

  public render() {
    const { state: { index, direction }, props: { commentData } } = this;

    return (
      <div className="carouselDiv">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          indicators={false}
        >
          {commentData.map(e => <Carousel.Item key={e.text}>
            <CarouselItem text={e.text} image={e.image} author={e.author} />
          </Carousel.Item>)}
        </Carousel>
      </div>

    );
  }
}