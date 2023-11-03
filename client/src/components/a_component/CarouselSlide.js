import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselSlide(){

    const image1 = require('../../Assets/Carousel/carousel1.jpg');
    const image2 = require('../../Assets/Carousel/carousel2.jpg');
    const image3 = require('../../Assets/Carousel/carousel3.jpg');
    const image4 = require('../../Assets/Carousel/carousel4.jpg');
    const image5 = require('../../Assets/Carousel/carousel5.jpg');
    const image7 = require('../../Assets/Carousel/carousel7.jpg');
    
  return (
    <Carousel fade>
    <Carousel.Item>
      <img className="d-block w-100" src={image1} alt="Image 1" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image2} alt="Image 2" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image3} alt="Image 3" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image4} alt="Image 4" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image5} alt="Image 5" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image7} alt="Image 7" />
    </Carousel.Item>
  </Carousel>

  );
}

export default CarouselSlide;