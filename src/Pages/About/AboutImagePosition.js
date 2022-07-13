import React from 'react';
import bannerImage from "../../Asset/About/About-page/aboutbanner1.png"
import about1 from "../../Asset/About/About-page/grid1.png"
import about2 from "../../Asset/About/About-page/grid2.png"
import shape1 from "../../Asset/About/About-page/shape1.png"
import shape2 from "../../Asset/About/About-page/shape2.png"
import "../../Styles/Aboutpages/AboutImagePosition.css"
import shape from "../../Asset/About/Core-Work-Map/allShape.png"
const AboutImagePosition = () => {
  return (
      <div className="container">
        <div className="banner-image-container">
          <div className="banner-image-position">
            <img src={bannerImage} alt="" />
          </div>
          <div className="about-content-container">
            <div className="row">
              <div className="col-lg-3">
                <div className="row">
                  <div className="banner-image-position1">
                    <img src={about1} alt="" className="banner-image-top" />
                    <img src={shape1} alt="" className="shape-position" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="banner-content">About Max Ganes ?
                      <img src={shape} alt="" className="banner-satting" />
                    </h1>
                    <div className="row-content">
                      <p className="banner-content-pera">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        <br />
                        <br />
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="row">
                  <div className="banner-image-position2">
                    <img src={about2} alt="" className="banner-image-bottom" />
                    <img src={shape2} alt="" className="shape-position2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutImagePosition;