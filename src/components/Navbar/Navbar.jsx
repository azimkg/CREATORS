import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_inner">
          <div className="navbar_block1">
            <span className="navbar_h1">
              <span className="navbar_title2">CREAT</span>ORS
            </span>
          </div>

          <div className="navbar_block2">
            <a href="" className="navbar_a">
              Home
            </a>
            <a href="" className="navbar_a">
              About
            </a>
            <a href="" className="navbar_a">
              Our works
            </a>
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
              <a href="" className="navbar_a1">
                Home
              </a>
              <a href="" className="navbar_a1">
                About
              </a>
              <a href="" className="navbar_a1">
                Our works
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
