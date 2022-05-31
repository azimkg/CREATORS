import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cartCarousel } from "./carouselData";
import "./LandingCarousel.css";

const LandingCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="main_carousel">
      <div className="inner_carousel">
        <Slider {...settings}>
          {cartCarousel.map((item) => (
            <div key={item.id} className="card">
              <div className="card_top">
                <img className="card-img" src={item.img} alt="card_img" />
                <h2 className="card-title">{item.name}</h2>
              </div>
              <div>
                <p className="card-title">{item.category}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingCarousel;
