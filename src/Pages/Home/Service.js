import React from 'react';
import "../../Styles/Service.css";
import { useNavigate } from "react-router-dom"
const Service = ({ service }) => {
  const navigate = useNavigate()
  const { _id, img, des, name } = service;
  return (
    <div className="col-lg-4 mt-5">
      <div className="card border-0">
        <img className="card-img-top" src={img} alt="" />
        <div className="card-body p-0">
          <h5 className="title">{name}</h5>
          <p className="text">{des.slice(0,40)}</p>
          <span className="learn-more d-flex align-items-center" onClick={() => navigate(`/serviceDetails/${_id}`)}>Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="#F58859" className="bi bi-arrow-right-short" viewBox="0 0 20 15">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
          </span>
        </div>
      </div>
    </div >
  );
};

export default Service;