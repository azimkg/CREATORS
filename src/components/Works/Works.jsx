import React from "react";
import { Carousel } from "antd";
import "./Works.css";
import image1 from "../Images/logos_wordpress.png";
import steam from "../Images/1.png";
import steam2 from "../Images/2.png";
import steam3 from "../Images/3.png";
import steam4 from "../Images/4.png";
import steam5 from "../Images/5.png";
import steam6 from "../Images/6.png";
import steam7 from "../Images/7.png";
import steam8 from "../Images/8.png";
import steam9 from "../Images/9.png";
import steam10 from "../Images/10.png";
import steam11 from "../Images/11.png";
import steam12 from "../Images/12.png";

const Works = () => {
  return (
    <div className="works container">
      <h2 className="works__title">Наше Портфолио</h2>
      <h4 className="works__title-text">
        Здесь представлены наши последние работы. Полный список наших работ Вы
        найдёте на странице
      </h4>
      <Carousel autoplay>
        <div className="carousel-block">
          <div className="carousel-block__slide">
            <img src={steam} alt="" />
          </div>
          <div className="carousel-block__slide">
            <img src={steam4} alt="" />
          </div>
          <div className="carousel-block__slide">
            <img src={steam6} alt="" />
          </div>
        </div>
        <div className="carousel-block">
          <div className="carousel-block__slide">
            <img src={steam7} alt="" />
          </div>
          <div className="carousel-block__slide">
            <img src={steam8} alt="" />
          </div>
          <div className="carousel-block__slide">
            <img src={steam9} alt="" />
          </div>
        </div>
      </Carousel>
      <div className="carousel__down">
        <h4>Наши партнеры</h4>
        <div className="carousel__down-block">
          <img
            src="https://elitka.kg/images/builder/61890e864fc80_61890e864e5d1.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Logotip_OPTIMA-BANK.jpg"
            alt=""
          />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Works;
