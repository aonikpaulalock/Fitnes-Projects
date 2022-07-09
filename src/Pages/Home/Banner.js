import React from 'react';
import "../../Styles/ShareButton.css";
import banner from "../../Asset/Banner/Baner-image.png"
import "../../Styles/Banner.css"
const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <div>
                <h4 className="banner-sub-heading">EVEREST</h4>
                <h1 className="banner-main-heading">The ultimate online personal training plans!</h1>
                <div className='d-flex button-gap'>
                  <button className="Book-button">Book A Class</button>
                  <button className="About-button">About us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div>
              <img src={banner} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;