import React from 'react';
import { useNavigate } from 'react-router-dom';
import shape from "../../Asset/Banner/Shape.png"
import image from "../../Asset/Waiting/victor.png"
import "../../Styles/Waiting.css"
const Waiting = () => {
  const navigate = useNavigate()
  return (
    <div className="waiting container"
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className="row">
        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
          <div className="wating-content">
            <h1 className="waiting-heading">What are you waiting for?
              <img src={shape} alt="" className='waiting-satting' />
            </h1>
            <p className="waiting-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus. Varius eu dapibus donec amet. Mauris sit mi nullam tortor.</p>
            <button className="wating-button" onClick={() => navigate("/contactPage")}>Book A Class</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
          <div className="wating-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waiting;