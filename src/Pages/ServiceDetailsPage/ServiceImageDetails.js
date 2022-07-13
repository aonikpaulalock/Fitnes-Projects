import React from 'react';
import video from "../../Asset/Service/video2.png"
import shape from "../../Asset/Service/shape2.png"
import "../../Styles/ServicesDetails/ServiceImageDetails.css"
const ServiceImageDetails = ({ detailsServices }) => {
  const { img } = detailsServices;
  return (
    <div className="container">
      <div className="seviceDetails-image-container">
        <div className="seviceDetails-image-position">
          <img src={img} alt="" className="image-middle" />
          <img src={video} alt="" className="video-middle-position" />
        </div>
        <img src={shape} alt="" className="shape-right-position" />
      </div>
    </div>
  );
};

export default ServiceImageDetails;