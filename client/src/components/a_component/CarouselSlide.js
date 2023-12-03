import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselSlide(){

    const image1 = require('../../Assets/Carousel/Carousel1.png');
    const image2 = require('../../Assets/Carousel/Carousel3.png');
    const image3 = require('../../Assets/Carousel/CarouselX.png');
    // const image4 = require('../../Assets/Carousel/Carousel4.jpg');
    // const image5 = require('../../Assets/Carousel/Carousel5.jpg');
    // const image7 = require('../../Assets/Carousel/Carousel7.jpg');
    
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
      <img className="d-block w-100" src={image1} alt="Image 4" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image2} alt="Image 5" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image3} alt="Image 7" />
    </Carousel.Item>
  </Carousel>

  );
}

export default CarouselSlide;