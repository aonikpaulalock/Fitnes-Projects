import React from 'react';
import shape from "../../Asset/Banner/Shape.png"
import "../../Styles/ServicePages/ServiceBanner.css"
import serviceShape from "../../Asset/Service/ServicePage/ServicesBanner/serviceBanner.png"
const ServiceBanner = () => {
  return (
    <div className="container-fluid Services-Container">
      <img src={serviceShape} alt="" className="service-shape" />
      <div className="container">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="servicesPage-content">
            <h5 className="servicesPage-title">GET ACTIVE WITH EVEREST</h5>
            <div className="image-position">
              <h1 className="servicesPage-main-title">Discover our <br/> services
                <img src={shape} alt="" className="servicesPage-shape-position" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;