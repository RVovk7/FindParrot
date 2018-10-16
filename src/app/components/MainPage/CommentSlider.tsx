import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselItem from 'components/MainPage/CarouselItem';
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
    this.initialSlide();
  }

  initialSlide = () => {
    carouselItemClass[carouselItemClass.length - 1].classList.toggle('prevItem');
    carouselItemClass[1].classList.toggle('nextItem');
  }

  lastSlide = () => {
    carouselItemClass[carouselItemClass.length - 2].classList.toggle('prevItem');
    carouselItemClass[0].classList.toggle('nextItem');
  }

  handleSelect = (sIndex?: any, e?: any) => {
    const animateFix = document.querySelectorAll('.prevItem,.nextItem');
    Array.from(animateFix).forEach(el => el.classList.remove('prevItem', 'nextItem'))

    this.setState({
      index: sIndex,
      direction: e.direction
    })
  }

  classSwitch = () => {
    const { index } = this.state;
    const StartI = index === 0;
    const EndI = index === carouselItemClass.length - 1;

    Array.from(carouselItemClass).forEach(el => el.classList.remove('prevItem', 'nextItem'));

    if (!StartI && !EndI) {
      carouselItemClass[index - 1].classList.toggle('prevItem');
      carouselItemClass[index + 1].classList.toggle('nextItem');
    }

    StartI && this.initialSlide();
    EndI && this.lastSlide();
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
          onSlideEnd={this.classSwitch}
        >
          {commentData.map(e => <Carousel.Item key={e.text}>
            <CarouselItem text={e.text} image={e.image} author={e.author} />
          </Carousel.Item>)}
        </Carousel>
      </div>

    );
  }
}