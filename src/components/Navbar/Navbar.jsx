import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoPixel from "../Navbar/navbarimg/pixel.svg";
import burgerLine from "../Navbar/navbarimg/menu1.png";
import close from "../Navbar/navbarimg/cancel.png";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <>
      <div className="navbar container">
        <div className="navbar_container">
          <div className="navbar_inner">
            <div className="navbar_block1">
              <span className="navbar_h1">
                <Link to="/">
                  <img src={logoPixel} alt="" style={{ width: "150px" }} />
                </Link>
              </span>
            </div>

            <div className="navbar_block2">
              <Link to="/about" className="navbar_a">
                О НАС
              </Link>
              <Link to="/works" className="navbar_a">
                НАШИ РАБОТЫ
              </Link>
              <a href="#contact" className="navbar_a">
                КОНТАКТЫ
              </a>
              <img
                onClick={() => setBurger(true)}
                className="burger"
                src={burgerLine}
                alt=""
              />
            </div>
          </div>
          {burger ? (
            <div className="main_burger">
              <img
                onClick={() => setBurger(false)}
                className="close_burger"
                src={close}
                alt=""
              />
              <div className="burger2">
                <Link
                  onClick={() => setBurger(false)}
                  to="/"
                  className="navbar_a1"
                >
                  ГЛАВНАЯ
                </Link>

                <Link
                  to="/about"
                  className="navbar_a1"
                  onClick={() => setBurger(false)}
                >
                  О НАС
                </Link>
                <Link
                  to="/works"
                  className="navbar_a1"
                  onClick={() => setBurger(false)}
                >
                  НАШИ РАБОТЫ
                </Link>
                <a
                  href="#contact"
                  className="navbar_a1"
                  onClick={() => setBurger(false)}
                >
                  КОНТАКТЫ
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
