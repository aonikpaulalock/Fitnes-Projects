import React from 'react';
import "../../Styles/ContactPage/ContactMap.css"
import map from "../../Asset/Contact/contact.png"
const ContactMap = () => {
  return (
    <div className="contact-map-cotainer"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className="container mb-5">
        <div className="contact-map-information">
          <div className="contact-flex">
            <h6>+44 (050)22222</h6>
            <h6>Contact@mail.com</h6>
            <h6>+44 (050)22222</h6>
          </div>
        </div>
        <div className="contact-map-image-container">
          <img src={map} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ContactMap;