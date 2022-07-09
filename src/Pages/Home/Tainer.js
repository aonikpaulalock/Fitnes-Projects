import React from 'react';
import "../../Styles/Tainer.css"
const Tainer = ({ tainer }) => {
  const { img, des, name } = tainer;
  return (
    <div className="col-lg-4 g-4">
      <div className="">
        <div className="card-background">
          <img className="ms-3 mt-4" src={img} alt="" height={48} width={48}  />
          <div className="card-body">
            <h5 className="tainer-heading">{name}</h5>
            <p className="tainer-sub-heading">{des}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Tainer;