import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.mdcomputers.in/image/catalog/2023/june/07-06-23/aerocool-brand-day-desktop.webp"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.mdcomputers.in/image/catalog/2023/june/03-06-23/ant-esports-chair-offer-desktop.webp"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.mdcomputers.in/image/catalog/2023/june/06-06-23/sony-ps5.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
