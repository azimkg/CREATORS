import { Button } from "antd";
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main_landing">
      <div className="container">
        <div className="top_landing">
          <div className="landing_left">
            <div className="for_bg_1">
              <p className="left__top-txt">Landing</p>
            </div>
            <div className="for_bg_2">
              <p className="left__bottom-txt">Page</p>
            </div>
          </div>
          <div className="landing_rigth">
            <p className="rigth__title">Newcomer Tools</p>
            <p className="rigth__descr">
              Wow! see the latest update of the most recommended tools from
              reliable designers and developers
            </p>
            <Button className="rigth__btn">Explore more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
