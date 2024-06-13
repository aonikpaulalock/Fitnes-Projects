import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import "../../Styles/ContactPage/ContactForm.css";
import { useNavigate } from "react-router-dom";
import shape from "../../Asset/Blogs/shape.png";

const ContactForm = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_apb1mk7",
      "template_hlu9q4i",
      e.target,
      "HJfOjeb-zdU-nbl5y"
    )
      .then(res => {
        setSuccess(true);
      })
      .catch(err => {
        console.log(err);
        setSuccess(false);
      });
  };

  useEffect(() => {
    if (success) {
      navigate("/contactSuccessPage");
    }
  }, [success, navigate]);

  return (
    <div className="container"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="col-lg-10 mx-auto">
        <div className="contact-form">
          <form className="form-container" onSubmit={sendEmail}>
            <h4 className="form-heading">Let's get in touch!</h4>
            <div className="row">
              <div className="form-group col-lg-5 col-md-12">
                <label htmlFor="inputFirstName">First Name</label>
                <input type="text" className="form-control" id="inputFirstName" name="firstName" placeholder="What is your name?" required />
              </div>
              <div className="form-group col-lg-5 col-md-12">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text" className="form-control" id="inputLastName" name="lastName" placeholder="What is your last name?" required />
              </div>
              <div className="form-group col-lg-5 col-md-12">
                <label htmlFor="inputEmail">Email Address</label>
                <input type="email" className="form-control" id="inputEmail" name="email" placeholder="What is your email address?" required />
              </div>
              <div className="form-group col-lg-5 col-md-12">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input type="text" className="form-control" id="inputPhoneNumber" name="phoneNumber" placeholder="What is your phone number?" required />
              </div>
              <div className="form-group col-lg-10 col-md-12">
                <label htmlFor="inputMessage" className="label-vai">Message</label>
                <textarea className="form-control" id="inputMessage" name="message" placeholder="Enter Your Message" required />
              </div>
              <button className="form-button" type='submit'>Send Message</button>
            </div>
          </form>
          <img src={shape} alt="" className="contact-shape-position" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;