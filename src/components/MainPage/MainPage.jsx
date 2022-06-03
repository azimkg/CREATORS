import React from "react";
import "./MainPage.css";
import facebookImg from "../MainPage/MainPage-img/facebook.svg";
import twitterImg from "../MainPage/MainPage-img/twitter.svg";
import instagramImg from "../MainPage/MainPage-img/instagram.svg";
import groupimg from "../MainPage/MainPage-img/Group1.png";
import LogoPixel from "../Navbar/navbarimg/pixel.svg";
import strelka from "../MainPage/MainPage-img/strelka.svg";
import Works from "../Works/Works";
import LandingPage from "../LandingPage/LandingPage";
import LandingCarousel from "../LandingCarousel/LandingCarousel";

const MainPage = () => {
  return (
    <>
      <div className="main-page-content container">
        <div className="main-page-wrapper">
          <div className="main-page-left-block">
            <h1 id="main-page-title">
              Современный сайт как залог успешного бизнеса
            </h1>
            <h5>
              Наша компания занимается разработкой и созданием web-сайтов любой
              сложности. Мы помогаем реализовать все Ваши идеи и пожелания.
            </h5>
            <button className="main-page-button btn-2">Заказать</button>
            <div className="main-page-icon">
              <img src={facebookImg} alt="" />
              <img src={instagramImg} alt="" />
              <img src={twitterImg} alt="" />
            </div>
          </div>
          <div className="main-page-rihgt-block">
            <img className="main-page-group-img" src={groupimg} alt="" />

            <div className="main-page-creators-block">
              <div className="main-page-creators">
                <img src={LogoPixel} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Works />
      <LandingPage />
      <LandingCarousel />
    </>
  );
};

export default MainPage;
