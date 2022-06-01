import React from "react";
import { Carousel } from "antd";
import "./Works.css";
import image1 from "../Images/logos_wordpress.png";

const Works = () => {
  return (
    <div className="works container">
      <h2 className="works__title">Most Popular Tools</h2>
      <h4 className="works__title-text">
        Tools for the best Designers and Developers most popularly used in the
        world
      </h4>
      <Carousel autoplay>
        <div className="carousel-block">
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="carousel-block">
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-block__slide">
            <img
              src="https://bipbap.ru/wp-content/uploads/2017/06/1369597116_krasivye-fotografii-2-1.jpeg"
              alt=""
            />
          </div>
        </div>
      </Carousel>
      <div className="carousel__down">
        <h4>Trusted more than 150+ brand</h4>
        <div className="carousel__down-block">
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Works;
