import React from 'react';
import "../../Styles/ServicesDetails/ServicesDetailsBanner.css"
import shape from "../../Asset/Banner/Shape.png"
const ServicesDetailsBanner = ({ detailsServices }) => {
  const { Degi, name, des } = detailsServices;
  return (
    <div className="container-fluid servicesDetails-Container">
      <div className="container">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="servicesDetails-content">
            <h5 className="servicesDetails-title">{Degi}</h5>
            <div className="servicesDetails-image-position">
              <h1 className="servicesDetails-main-title">{name}
                <img src={shape} alt="" className="servicesDetails-shape-position" />
              </h1>
              <p className="servicesDetails-main-peragraph">{des}</p>
              <div className="d-flex button-gap justify-content-center align-items-center">
                <button className="Book-button">Book A Class</button>
                <button className="About-button about-page-button">Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsBanner;