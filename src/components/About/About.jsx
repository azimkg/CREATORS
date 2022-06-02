import React from "react";
import "./About.css";
import circle from "../Images/circle.svg";
import photo1 from "../Images/photo1.png";

const About = () => {
  return (
    <>
      {/* О нас */}
      <div>
        <div className="container">
          <h1 className="about__title">О нас</h1>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet
            reprehenderit quae unde id architecto eligendi. Omnis reprehenderit
            tempora eius perspiciatis quis sed illum et voluptates recusandae.
            Et, excepturi nihil!
          </p>
          <h1 className="about__title about__title-block">Наши сотрудники</h1>
          <div className="about__block">
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo1} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h1>SAM</h1>
                <p>
                  jhdbfsjdbj sdf vkd fskv jd ksj fvk ds fv ksd fvk sdf vsdkf
                  vkds fvjh sdj fv vjksdf vksdfvkjdsfviodfsvnadv
                  ldsfkvjnsdfnvndsfvnjksdfvndf djskfbvjbsdfjvnsfdjv
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo1} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h1>SAM</h1>
                <p>
                  jhdbfsjdbj sdf vkd fskv jd ksj fvk ds fv ksd fvk sdf vsdkf
                  vkds fvjh sdj fv vjksdf vksdfvkjdsfviodfsvnadv
                  ldsfkvjnsdfnvndsfvnjksdfvndf djskfbvjbsdfjvnsfdjv
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo1} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h1>SAM</h1>
                <p>
                  jhdbfsjdbj sdf vkd fskv jd ksj fvk ds fv ksd fvk sdf vsdkf
                  vkds fvjh sdj fv vjksdf vksdfvkjdsfviodfsvnadv
                  ldsfkvjnsdfnvndsfvnjksdfvndf djskfbvjbsdfjvnsfdjv
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo1} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h1>SAM</h1>
                <p>
                  jhdbfsjdbj sdf vkd fskv jd ksj fvk ds fv ksd fvk sdf vsdkf
                  vkds fvjh sdj fv vjksdf vksdfvkjdsfviodfsvnadv
                  ldsfkvjnsdfnvndsfvnjksdfvndf djskfbvjbsdfjvnsfdjv
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo1} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h1>SAM</h1>
                <p>
                  jhdbfsjdbj sdf vkd fskv jd ksj fvk ds fv ksd fvk sdf vsdkf
                  vkds fvjh sdj fv vjksdf vksdfvkjdsfviodfsvnadv
                  ldsfkvjnsdfnvndsfvnjksdfvndf djskfbvjbsdfjvnsfdjv
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo1} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h1>SAM</h1>
                <p>
                  jhdbfsjdbj sdf vkd fskv jd ksj fvk ds fv ksd fvk sdf vsdkf
                  vkds fvjh sdj fv vjksdf vksdfvkjdsfviodfsvnadv
                  ldsfkvjnsdfnvndsfvnjksdfvndf djskfbvjbsdfjvnsfdjv
                </p>
              </div>
            </div>
            <div className="about__block-item">
              <div className="about__block-image">
                <img src={circle} alt="" className="about__block-circle" />
                <img src={photo1} alt="" className="about__block-photo" />
              </div>
              <div className="about__block-name">
                <h1>SAM</h1>
                <p>
                  jhdbfsjdbj sdf vkd fskv jd ksj fvk ds fv ksd fvk sdf vsdkf
                  vkds fvjh sdj fv vjksdf vksdfvkjdsfviodfsvnadv
                  ldsfkvjnsdfnvndsfvnjksdfvndf djskfbvjbsdfjvnsfdjv
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
