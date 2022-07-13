import React from 'react';

const AboutTrick = ({ trick }) => {
  const { img, skills, name, details, tainer } = trick;
  return (
    <div className="col-lg-4">
      <div className="position-container">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="tricks-card about-trick-card">
          <div className="tricks-card-body">
            <h6 className="tricks-name">{name}</h6>
            <h4 className="tainer-tricks">{tainer}</h4>
            <p className="details-tricks">{details}</p>
            <ul className="tricks-list">
              <li>{skills[0]}</li>
              <li>{skills[1]}</li>
              <li>{skills[2]}</li>
            </ul>
            <hr className="about-border-line" />
            <span className="learn-more d-flex align-items-center">Contact
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="#F58859" className="bi bi-arrow-right-short" viewBox="0 0 20 15">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrick;

{/*  */ }