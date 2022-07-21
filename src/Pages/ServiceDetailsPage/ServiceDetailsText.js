import React from 'react';
import "../../Styles/ServicesDetails/ServiceDetailsText.css"
const ServiceDetailsText = ({ detailsServices }) => {
  const { detailsName, detailsDescription, DetailsImg, detailsDescription2, classDetails } = detailsServices;
  return (
    <div className="container">
      <div className="col-lg-6">
        <h1 className="details-text-main-heading">{detailsName}</h1>
      </div>
      <div className="row">
        <div className="col-lg-7 me-lg-5 me-2 col-md-12">
          <div className="details-text-content">
            <p className="details-text-pera">{detailsDescription}</p>
            <img src={DetailsImg} alt="" className="details-image img-fluid" />
            <p className="details-text-pera">{detailsDescription2}</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="class-details-content">
            {classDetails?.map((classDetail,index) =>
              <div key={index}>
                <h1 className="class-details">{classDetail?.name}</h1>
                <p className="class-details-pera">{classDetail?.classDes}</p>
                <div className="class-details-summary">

                  {/* ============= Duration-Container =============  */}

                  <div className="details-duration-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BCB8D0" className="bi bi-alarm-fill me-3" viewBox="0 0 18 18">
                      <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                    </svg>
                    <span className="class-details-duration-flex">Duration :
                      <span className="class-details-duration">  {classDetail.Duration}</span>
                    </span>
                  </div>
                  {/* ============= Intensity-Container =============  */}

                  <div className="details-duration-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BCB8D0" className="bi bi-dash-circle-fill me-3" viewBox="0 0 18 18">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                    </svg>
                    <span className="class-details-duration-flex">Intensity :
                      <span className="class-details-duration">  {classDetail.Intensity}</span>
                    </span>
                  </div>

                  {/* ============= Equipment-Container =============  */}

                  <div className="details-duration-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BCB8D0" className="bi bi-tools me-3" viewBox="0 0 18 18">
                      <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                    </svg>
                    <span className="class-details-duration-flex">Equipment :
                      <span className="class-details-duration">  {classDetail.Equipment}</span>
                    </span>
                  </div>

                  {/* ============= Days / Time-Container =============  */}

                  <div className="details-duration-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BCB8D0" className="bi bi-calendar-fill me-3" viewBox="0 0 18 18">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="class-details-duration-flex">Days / Time  :
                      <span className="class-details-duration">  {classDetail.DaysTime}</span>
                    </span>
                  </div>
                  <button className="details-book-button">Book</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsText;