import React from 'react';
import "../../Styles/About.css"
import about from "../../Asset/About/Group 37.png"
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate()
  return (
    <div className="about-bg">
      <div className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="row">
          <div className="col-lg-5">
            <div className="about-image"
            >
              <img src={about} alt="" className="nagative-image" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="about-heading"
            >
              <h1 className="about-main">About Max Ganes?</h1>
              <p className="about-peragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eum doloribus quis rem, voluptates nulla consequuntur consectetur suscipit mollitia inventore ratione exercitationem in deserunt eaque architecto repellendus quaerat veritatis accusantium.</p>
              <button className="About-button ms-0" onClick={() => navigate("/aboutpage")}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;