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
        <div className="core-work-image-container">
          <img src={image} alt="" className="core-work-image" />
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="w-50">
              <h1 className="core-work-heading">My core work values
                <img src={shape} alt="" className='Taining-satting' />
              </h1>
            </div>
            <div className="w-50 d-flex align-items-end justify-content-end">
              <button className="About-button about-page-button ms-0" onClick={() => navigate("/contactPage")}>Book A Class</button>
            </div>
          </div>
          <div className="row core-service-gap">
            {
              tainers.map(tainer => <div
                key={tainer.id}
                className="col-lg-4"
              >
                <div className="core-background">
                  <img className="ms-3 mt-4" src={tainer.img} alt="" height={48} width={48} />
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