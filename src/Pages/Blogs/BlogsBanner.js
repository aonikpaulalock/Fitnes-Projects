import React from 'react';
import serviceShape from "../../Asset/Service/ServicePage/ServicesBanner/serviceBanner.png";
import shape from "../../Asset/Banner/Shape.png"
const BlogsBanner = () => {
  return (
    <div className="container-fluid Services-Container">
      <img src={serviceShape} alt="" className="service-shape" />
      <div className="container">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="servicesPage-content">
            <h5 className="servicesPage-title">FITNESS INSIGHTS</h5>
            <div className="image-position">
              <h1 className="servicesPage-main-title">Latest Blogs<br />
                & News
                <img src={shape} alt="" className="servicesPage-shape-position" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;