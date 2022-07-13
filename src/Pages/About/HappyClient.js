import React from 'react';
import shape from "../../Asset/About/About-page/HappyClient/client.png"
import shape1 from "../../Asset/Banner/Shape.png"
import "../../Styles/Aboutpages/HappyClient.css"
const happys = [
  { id: 1, skills: "10+", des: "YEARS OF EXPERIENCE" },
  { id: 2, skills: "1,000", des: "HAPPY CLIENT" },
  { id: 3, skills: "1,250", des: "CLASSES TAUGHT" },
  { id: 4, skills: "8,000", des: "INSTAGRAM FOLLOWERS" },
]
const HappyClient = () => {
  return (
    <div className="container-fluid happy-client">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="col-lg-6">
            <div className="client-position">
              <h1 className="client-heading">Why choosing me as your personal trainer
                <img src={shape1} alt="" className="Client-image-position" />
              </h1>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-3">
            <img src={shape} alt="" className="client-image-top" />
          </div>
        </div>
        <div className="happy-client-padding">
          <div className="row">
            {
              happys.map(happy => <div
                className="col-lg-3"
                key={happy.id}
              >
                <div className="client-details">
                  <h3 className="tainer-skills">{happy.skills}</h3>
                  <h6 className="tainer-details">{happy.des}</h6>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;