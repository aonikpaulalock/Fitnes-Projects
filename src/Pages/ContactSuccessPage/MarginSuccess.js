import React from 'react';
import shape from "../../Asset/Blogs/shape.png"
import submitshape from "../../Asset/About/About-page/submit.png"
const MarginSuccess = () => {
  return (
    <div className="successfull-container container">
      <h4 className="form-heading mb-3">Let's get in touch!</h4>
      <img src={shape} alt="" className="success-form-shape" />
      <div className="message-container">
        <h6 className="succes-tittle d-flex justify-content-center align-items-center">Thank you! Your submission has been received!</h6>
        <img src={submitshape} alt="" className="image-sucees" />
      </div>
    </div>
  );
};

export default MarginSuccess;