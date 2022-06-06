import React from "react";
import { Carousel } from "antd";
import "./Works.css";
import steam from "../Images/1.png";
import steam2 from "../Images/2.png";
import steam3 from "../Images/3.png";
import steam4 from "../Images/4.png";
import steam5 from "../Images/5.png";
import steam6 from "../Images/6.png";
import steam7 from "../Images/7.png";
import steam8 from "../Images/8.png";
import steam9 from "../Images/9.png";
import logo from "../Images/Creators.png";
import logo2 from "../Images/Frame 2.png";
import logo3 from "../Images/Group 1449.png";
import logo4 from "../Images/Group.png";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="works container">
      <h2 className="works__title">Наше Портфолио</h2>
      <h4 className="works__title-text">
        Здесь представлены наши последние работы. Полный список наших работ вы
        найдёте по{" "}
        <Link style={{ color: "white" }} to="/works">
          ссылке
        </Link>
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
          <img className="carousel_img11" src={logo4} alt="logo" />
          <img className="carousel_img112" src={logo} alt="logo" />
          <img className="carousel_img11" src={logo2} alt="logo" />
          <img className="carousel_img11" src={logo3} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Works;
