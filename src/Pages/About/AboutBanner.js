import React from 'react';
import { useNavigate } from 'react-router-dom';
import shape from "../../Asset/Banner/Shape.png"
import "../../Styles/Aboutpages/AboutBanner.css"
const AboutBanner = () => {
  const navigate = useNavigate()
  return (
    <div className="container-fluid About-page">
      <div className="container">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="aboutpage-content">
            <h5 className="aboutpage-title">EVEREST TEAM</h5>
            <div className="image-position">
              <h1 className="aboutpage-main-title">Discover the team behind our legendary gyms and fitness classes
                <img src={shape} alt="" className="about-shape-position" />
              </h1>
            </div>
            <div className="d-flex button-gap justify-content-center align-items-center">
              <button className="Book-button" onClick={()=>navigate("/contactPage")}>Book A Class</button>
              <button className="About-button about-page-button">Our Services</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;