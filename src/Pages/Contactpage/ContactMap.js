import React from 'react';
import "../../Styles/ContactPage/ContactMap.css"
import map from "../../Asset/Contact/contact.png"
const ContactMap = () => {
  return (
    <div className="contact-map-cotainer">
      <div className="container mb-5">
        <div className="contact-map-information">
          <div className="d-flex justify-content-between align-items-center">
              <h6>+44 (050)22222</h6>
              <h6>Contact@mail.com</h6>
              <h6>+44 (050)22222</h6>
          </div>
        </div>
        <div className="contact-map-image-container">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMap;