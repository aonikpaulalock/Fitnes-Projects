import React from 'react';
import image from "../../Asset/About/Core-Work-Map/map.png";
import "../../Styles/Aboutpages/CoreWork.css"
import shape from "../../Asset/About/Core-Work-Map/core1.png"
import { useNavigate } from 'react-router-dom';
const tainers = [
  { id: 1, name: "Certified trainer", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/b561rtS/tainning1.png" },
  { id: 2, name: "Nutrition & diet", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/rwC791V/taining2.png" },
  { id: 3, name: "Years of experience", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/1TttFXJ/taining3.png" }
]
const CoreWork = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container">
        <div className="core-work-image-container"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
        >
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-delay="300">
          <div className="core-heading-content row">
            <div className="col-md-6">
              <h1 className="core-work-heading">My core work values
                <img src={shape} alt="" className="core-satting" />
              </h1>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-2 mb-3 mt-md-0 mb-md-0">
              <button className="About-button about-page-button ms-0" onClick={() => navigate("/contactPage")}>Book A Class</button>
            </div>
          </div>
          <div className="row core-service-gap">
            {
              tainers.map(tainer => <div
                key={tainer.id}
                className="col-lg-4 col-md-6 col-12"
              >
                <div className="core-background">
                  <img className="img-fluid" src={tainer.img} alt="" height={48} width={48} />
                  <div className="card-body">
                    <h5 className="core-heading mb-3">{tainer.name}</h5>
                    <p className="core-sub-heading">{tainer.des}</p>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreWork;