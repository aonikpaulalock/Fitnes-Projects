import React from 'react';
import shape from "../../Asset/Banner/Shape.png"
import image from "../../Asset/Waiting/victor.png"
import "../../Styles/Waiting.css"
const Waiting = () => {
  return (
    <div className="waiting container">
      <div className="row">
        <div className="col-lg-6">
          <div className="wating-content">
            <h1 className="waiting-heading">What are you waiting for?
              <img src={shape} alt="" className='waiting-satting' />
            </h1>
            <p className="waiting-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus. Varius eu dapibus donec amet. Mauris sit mi nullam tortor.</p>
            <button className="wating-button">Book A Class</button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="wating-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waiting;