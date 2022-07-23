import React, { useEffect, useState } from 'react';
import emailjs from "emailjs-com"
import "../../Styles/ContactPage/ContactForm.css"
import { useNavigate } from "react-router-dom"
import shape from "../../Asset/Blogs/shape.png"

const ContactForm = () => {
  const navigate = useNavigate()
  const [success, setSuccess] = useState({})
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      "service_2gvvlph",
      "template_hlu9q4i",
      e.target,
      "HJfOjeb-zdU-nbl5y")
      .then(res => {
        setSuccess(res)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <div className="col-lg-10 mx-auto">
        {
          success.status === 200 ?
            // True 
              navigate("/contactSuccessPage")
            :
            // False 
            <div className="contact-form">
              <form className="form-container" onSubmit={sendEmail}>
                <h4 className="form-heading">Let's get in touch!</h4>
                <div className="row">
                  <div className="form-group col-lg-5 col-md-12">
                    <label htmlFor="inputEmail1">First Name</label>
                    <input type="text" className="form-control " id="inputEmail1" name="fristName" placeholder="What is your name?" required />
                  </div>
                  <div className="form-group col-lg-5 col-md-12">
                    <label htmlFor="inputPassword2">Last Name</label>
                    <input type="text" className="form-control" id="inputPassword2" name="lastName" placeholder="What is your last name?" required />
                  </div>
                  <div className="form-group col-lg-5 col-md-12">
                    <label htmlFor="inputEmail3">Email Adress</label>
                    <input type="email" className="form-control " id="inputEmail3" name="email" placeholder="What is your email adress?" required />
                  </div>
                  <div className="form-group col-lg-5 col-md-12">
                    <label htmlFor="inputPassword4">Phone Number</label>
                    <input type="text" className="form-control" id="inputPassword4" name="phoneNumber" placeholder="What is your phone number?" required />
                  </div>
                  <div className="form-group col-lg-10 col-md-12">
                    <label htmlFor="inputPassword5" className="lavel-vai">Message</label>
                    <textarea type="text" className="form-control" id="inputPassword5" name="message" placeholder="Enter Your Message" required />
                  </div>
                  <button className="form-button" type='submit' data-toggle="modal" data-target=".bd-example-modal-lg">Send Message</button>
                </div>
              </form>
              <img src={shape} alt="" className="contact-shape-position" />
            </div>
        }
      </div>
    </div>
  );
};

export default ContactForm;