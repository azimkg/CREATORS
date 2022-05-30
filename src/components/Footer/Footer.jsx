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
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          CREATORS <span>Development</span>
        </h3>
        <p className="footer-links">
          <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contacts</a>|
          <a href="#">Blog</a>
        </p>
        <p className="footer-company-name">
          Copyright © 2022 <strong>CREATORS </strong>All rights reserved
        </p>
      </div>
      <div className="footer-center">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <EnvironmentOutlined className="footer-icons-one" />
          <p>
            <span>Bishkek</span>Kyrgyzstan
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <PhoneOutlined className="footer-icons-one" />
          <p>+996 555 555 555</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <MailOutlined className="footer-icons-one" />
          <p>
            <a href="#">creators@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>CREATORS Development</strong> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque hic deserunt tempore odit totam
          suscipit labore aperiam id eum similique!
        </p>
        <div className="footer-icons">
          <a href="#">
            <FacebookOutlined />
          </a>
          <a href="#">
            <GithubOutlined />
          </a>
          <a href="#">
            <LinkedinOutlined />
          </a>
          <a href="#">
            <InstagramOutlined />
          </a>
          <a href="#">
            <YoutubeOutlined />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
