import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { cartCarousel } from "./carouselData";
import "./LandingCarousel.css";

import steam4 from "../Images/4.png";
import steam5 from "../Images/5.png";
import steam6 from "../Images/6.png";
import steam10 from "../Images/10.png";
import steam11 from "../Images/11.png";
import steam12 from "../Images/12.png";

export const cartCarousel = [
  {
    id: 0,
    img: steam5,
  },
  {
    id: 12,
    name: "HBO MAX",
    img: steam4,
  },
  {
    id: 13,
    img: steam6,
  },
  {
    id: 2,
    img: steam11,
  },
  {
    id: 3,
    name: "KyrgyzBuy",
    img: steam10,
  },
  {
    id: 4,
    img: steam12,
  },
];

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
                {/* <h2 className="card-title">{item.name}</h2> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingCarousel;
