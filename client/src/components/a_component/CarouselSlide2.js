import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselSlide2(){

    const image1 = require('../../Assets/Carousel/trends1.jpg');
    const image2 = require('../../Assets/Carousel/trends2.jpg');
    const image3 = require('../../Assets/Carousel/trends3.jpg');
    
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
  </Carousel>

  );
}

export default CarouselSlide2;