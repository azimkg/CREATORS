import React from "react";
import "./About.css";
import circle from "../Images/circle.svg";
import eldiyar from "./eldiyar1.png";
import photo1 from "../Images/photo1.png";
import photo2 from "./eradil.jpg";
import photo3 from "./Beka.jpg";
import photo4 from "./daniar.png";
import photo5 from "./azim.png";
import photo6 from "./absa.png";

const About = () => {
  return (
    <>
      <div>
        <div className="container">
          <h2 className="about__title">О нас</h2>
          <p className="about__text">
            Мы амбициозная группа творческих людей, которые просто хотят внести
            свой вклад в развитие IT индустрии. Мы выражаем себя через наши
            работы, мы не просто пишем код мы создаем культуру, которая всегда
            преследует оптимальные решения. Простота, функциональность и
            элегантность — это то, к чему мы стремимся в нашей работе.
          </p>
          <h2 className="about__title about__title-block">Наша команда</h2>
          <div className="about__block">
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo4} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h2 style={{ fontFamily: "Poppins", color: "white" }}>
                  Данияр
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  Генеральный директор
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo2} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h2 style={{ fontFamily: "Poppins", color: "white" }}>
                  Эрадил
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  Project - менеджер
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={eldiyar} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h2 style={{ fontFamily: "Poppins", color: "white" }}>
                  Эльдияр
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  Frontend - разработчик
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo5} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h2 style={{ fontFamily: "Poppins", color: "white" }}>Азим</h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  Fullstack - разработчик
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo3} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h2 style={{ fontFamily: "Poppins", color: "white" }}>
                  Бекболсун
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  Backend - разработчик
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo6} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h2 style={{ fontFamily: "Poppins", color: "white" }}>
                  Абсамат
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  UI-UX дизайнер
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Связь */}
    </>
  );
};

export default About;
