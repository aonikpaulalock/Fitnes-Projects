import React from 'react';
import shape1 from "../../Asset/Banner/Shape.png"
import "../../Styles/ContactPage/Success.css"
const SuccessBanner = () => {
  return (
      <div className="contact-banner-container success-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="contact-banner">
                <h6 className="contact-sub-title mb-0">CONTACT ME</h6>
                <div className="contact-position-content">
                  <h1 className="contact-main-heading">Get in touch today to schedule your call</h1>
                  <img src={shape1} alt="" className="contact-position-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SuccessBanner;