import React, { useEffect } from "react";
import "./OurWorks.css";
import AOS from "aos";

import { Carousel } from "antd";
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

const OurWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="container__works">
      <h2 className="container__title">Our works</h2>
      <div className="container__block">
        <div className="container__left" data-aos="zoom-out-right">
          <Carousel
            className="container__carousel"
            style={{
              borderRadius: "14px",
              backgroundColor: "rgba(27, 141, 239, 1)",
            }}
            afterChange={onChange}
          >
            <div style={{ display: "inline-block", overflow: "hidden" }}>
              <img className="img__steam" src={steam} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam2} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam3} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="container__right" data-aos="fade-up-left">
          <h2 className="container__right_titlet">STEAM</h2>
          <p className="container__right_desc">
            Создание сайта для стартапа. Сервис цифрового распространения
            компьютерных игр и программ, разработанный и поддерживаемый
            компанией Valve. Steam выполняет роль средства технической защиты
            авторских прав, платформы для многопользовательских игр и потокового
            вещания, а также социальной сети для игроков.
          </p>
          <a target="_blank" href="https://deploy-steam.web.app/">
            <button className="btn-23">Перейти</button>
          </a>
        </div>
      </div>
      <div className="container__block">
        <div className="container__left" data-aos="zoom-out-right">
          <Carousel
            className="container__carousel"
            style={{
              borderRadius: "14px",
              backgroundColor: "rgba(27, 141, 239, 1)",
            }}
            afterChange={onChange}
          >
            <div>
              <img className="img__steam" src={steam4} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam5} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam6} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="container__right" data-aos="fade-up-left">
          <h2 className="container__right_title">HBO MAX</h2>
          <p className="container__right_desc">
            Разработка интерактивного сайта для компании "HBO MAX" - Сервиса по
            просмотру фильмов в высоком качестве.
          </p>
          <a target="_blank" href="http://u129831.test-handyhost.ru/?q=">
            <button className="btn-23">Перейти</button>
          </a>
        </div>
      </div>
      <div className="container__block">
        <div className="container__left" data-aos="zoom-out-right">
          <Carousel
            className="container__carousel"
            style={{
              borderRadius: "14px",
              backgroundColor: "rgba(27, 141, 239, 1)",
            }}
            afterChange={onChange}
          >
            <div style={{ backgroundColor: "rgba(27, 141, 239, 1)" }}>
              <img className="img__steam" src={steam7} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam8} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam9} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="container__right" data-aos="fade-up-left">
          <h2 className="container__right_titler">ROLEX</h2>
          <p className="container__right_desc">
            Разработка корпоративного сайта одного из крупнейших дистрибьюторов
            представителей часов - компании Rolex
          </p>
          <a target="_blank" href="https://chat-380f1.web.app/">
            <button className="btn-23">Перейти</button>
          </a>
        </div>
      </div>
      <div className="container__block">
        <div className="container__left" data-aos="zoom-out-right">
          <Carousel
            className="container__carousel"
            style={{
              borderRadius: "14px",
              backgroundColor: "rgba(27, 141, 239, 1)",
            }}
            afterChange={onChange}
          >
            <div>
              <img className="img__steam" src={steam10} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam11} alt="" />
            </div>
            <div>
              <img className="img__steam" src={steam12} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="container__right" data-aos="fade-up-left">
          <h2 className="container__right_titles">
            <span className="container__right_title-text">KYRGYZ</span>BUY
          </h2>
          <p className="container__right_desc">
            Интернет магазин для единственного представителя национальной
            достопремичательности в Кыргызстане.
          </p>
          <a target="_blank" href="https://final-v2.vercel.app/">
            <button className="btn-23">Перейти</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
