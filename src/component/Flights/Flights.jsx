import React from "react";
import Image from "../../assets/desti1.png";
import Carousel from 'react-elastic-carousel'

const Flights = () => {
  console.log("Flights");
  return (
    <div>
      Flights
      <div className="carousel w-80">
        <div id="slide1" className="carousel-item relative">
          <img src={Image} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative ">
          <img src={Image} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative">
          <img src={Image} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative">
          <img src={Image} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full">
          <img src={Image} />
        </div>
        <div className="carousel-item h-full">
          <img src={Image} />
        </div>
        <div className="carousel-item h-full">
          <img src={Image} />
        </div>
        <div className="carousel-item h-full">
          <img src={Image} />
        </div>
      </div>
      <Carousel verticalMode itemsToShow={1.5}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Carousel>
    </div>
  );
};

export default Flights;
