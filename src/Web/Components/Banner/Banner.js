import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgone from '../../../images/jbg.png'
import bgtwo from '../../../images/jbg1.png'
import bgthree from '../../../images/jbg2.png'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade className="my-0">
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-light display-3 fw-bold">Post Your Jobs</h3>
      <p className="text-light">people feel they are appreciated as a person at work</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgtwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-light display-3 fw-bold">Find Your Preferred Job</h3>
      <p className="text-light">people feel they are achieving most of their goals at work</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgthree}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-light display-3 fw-bold">Build Your Carrear</h3>
      <p className="text-light">people feel happy at work most of the time.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;