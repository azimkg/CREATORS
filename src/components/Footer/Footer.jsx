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

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-left">
          <h3>
            PIXEL <span>Development</span>
          </h3>
          <p className="footer-left-links">
            <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contacts</a>
          </p>
          <p className="footer-left-copyright">
            Copyright © 2022 <strong>PIXEL </strong>All rights reserved
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
          <p>+996 555 555 555</p>
          <br />
          <br />
          <MailOutlined className="footer-center-icons" />
          <a href="#">pixeldevs@aol.com</a>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            <strong>PIXEL Development</strong> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque hic deserunt tempore odit totam
            suscipit labore aperiam id eum similique!
          </p>
          <div className="footer-right-icons">
            <ul>
              <li>
                <a href="#">
                  <FacebookOutlined />
                </a>
              </li>
              <li>
                <a href="#">
                  <GithubOutlined />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedinOutlined />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramOutlined />
                </a>
              </li>
              <li>
                <a href="#">
                  <YoutubeOutlined />
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
