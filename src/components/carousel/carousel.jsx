import React from "react";
import Carousel from 'react-bootstrap/carousel';


const ImgCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="carouselimg" src="images/lobby.jpeg" alt="First slide" />
          <Carousel.Caption>    
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselimg"
            src="images/room1.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselimg"
            src="images/salasedinte.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>  

        <Carousel.Item>
          <img
            className="carouselimg"
            src="images/outside.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
