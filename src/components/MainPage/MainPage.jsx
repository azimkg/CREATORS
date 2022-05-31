import React from "react";
import "./MainPage.css";
import facebookImg from "../MainPage/MainPage-img/facebook.svg";
import twitterImg from "../MainPage/MainPage-img/twitter.svg";
import instagramImg from "../MainPage/MainPage-img/instagram.svg";
import groupimg from "../MainPage/MainPage-img/Group1.png";
import creators from "../MainPage/MainPage-img/CREATORS.png";
import strelka from "../MainPage/MainPage-img/strelka.svg";

const MainPage = () => {
  return (
    <div className="main-page-content">
      <div className="main-page-wrapper">
        <div className="main-page-left-block">
          <h1>
            Awesome tools for Designer & Developer <span>.</span>{" "}
          </h1>
          <h5>
            Antool is a web collection of information on paid or free Design and
            Development tools
          </h5>
          <button className="main-page-button">
            Order <img src={strelka} alt="" />{" "}
          </button>
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
              <img src={creators} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
