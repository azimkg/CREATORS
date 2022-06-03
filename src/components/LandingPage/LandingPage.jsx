import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main_landing">
      <div className="container">
        <div className="top_landing">
          <div className="landing_left">
            <div className="for_bg_1">
              <p className="left__top-txt">Сайт</p>
            </div>
            <div className="for_bg_2">
              <p className="left__bottom-txt">Визитки</p>
            </div>
          </div>
          <div className="landing_rigth">
            <p className="rigth__title">
              Мы делаем проекты успешными, бизнес — прибыльным, а людей —
              счастливыми!
            </p>
            <p className="rigth__descr">
              Полный список наших работ Вы найдёте на странице
            </p>
            <Link to="/works">
              <button className=" btn-22 ">Портфолио</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
