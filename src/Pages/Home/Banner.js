import React from 'react';
import "../../Styles/ShareButton.css";
import banner from "../../Asset/Banner/Baner-image.png"
import "../../Styles/Banner.css"
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="banner-bg">
      <div className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div>
              <div className="home-banner-content">
                <h4 className="banner-sub-heading">EVEREST</h4>
                <h1 className="banner-main-heading">The ultimate online personal training plans!</h1>
                <div className='button-gap button-rexponsive'>
                  <button className="Book-button" onClick={() => navigate("/contactPage")}>Book A Class</button>
                  <button className="About-button">About us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-md-12 order-1 order-lg-2">
            <div className="banner-image">
              <img src={banner} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;