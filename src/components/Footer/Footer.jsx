import {
  EnvironmentOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Footer.css";
import logoPixel from "../Navbar/navbarimg/pixel.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div id="contact" className="footer-main">
        <div className="footer-left">
          <h3>
            <img src={logoPixel} alt="" style={{ width: "90px" }} />{" "}
          </h3>
          <p className="footer-left-links">
            <Link to="/">Главная</Link>|<Link to="/about">О нас</Link>|
            <Link to="/works">Наши работы</Link>
          </p>
          <p className="footer-left-copyright">
            Copyright © 2022 <strong>PIXEL </strong>Все права защищены
          </p>
        </div>

        <div className="footer-center">
          <EnvironmentOutlined className="footer-center-icons" />
          <p>
            <span>Bishkek</span>Kyrgyzstan
          </p>
          <br />
          <br />
          <PhoneOutlined className="footer-center-icons" />
          <a href="tel:+996708082173">+996708082173</a>
          <br />
          <br />
          <MailOutlined className="footer-center-icons" />
          <a href="mailto:pixeldevs@aol.com">pixeldevs@aol.com</a>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <p>
              Our company is engaged in the development and creation of websites
              of any complexity. We help to realize all your ideas and wishes.
            </p>

            <span style={{ color: "white", fontSize: "14px" }}>
              Мы в социальных сетях:
            </span>
          </p>
          <div className="footer-right-icons">
            <ul>
              <li>
                <a href="#">
                  <GithubOutlined />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pixel-dev-5b3174241/">
                  <LinkedinOutlined />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
