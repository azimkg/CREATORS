import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoPixel from "../Navbar/navbarimg/pixel.svg";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <>
      <div className="navbar container">
        <div className="navbar_container">
          <div className="navbar_inner">
            <div className="navbar_block1">
              <span className="navbar_h1">
                <img src={logoPixel} alt="" style={{ width: "150px" }} />
              </span>
            </div>

            <div className="navbar_block2">
              <Link to="/" className="navbar_a">
                Home
              </Link>
              <Link to="/about" className="navbar_a">
                About
              </Link>
              <Link to="/works" className="navbar_a">
                Our works
              </Link>
              <img
                onClick={() => setBurger(true)}
                className="burger"
                src="https://cdn1.iconfinder.com/data/icons/cool-cirlce/503/menu.png"
                alt=""
              />
            </div>
          </div>
          {burger ? (
            <div className="main_burger">
              <span onClick={() => setBurger(false)} className="close_burger">
                x
              </span>
              <div className="burger2">
                <Link to="/" className="navbar_a1">
                  Home
                </Link>
                <Link to="/about" className="navbar_a1">
                  About
                </Link>
                <Link to="/works" className="navbar_a1">
                  Our works
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
