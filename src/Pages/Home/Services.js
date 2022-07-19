import React from 'react';
import shape from "../../Asset/Service/Shape.png"
import "../../Styles/Services.css"
import ShareService from './ShareService';
const Services = () => {
  return (
    <div className="container service">
      <div className="col-lg-5 col-md-8">
        <div className='shape-content'>
          <h1 className="service-heading">Services
            <img src={shape} alt="" className='shape-satting' />
          </h1>
        </div>
        <p className="service-peragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem in, pariatur, deleniti reprehenderit expedita iure consequuntur eos reiciendis sapiente praesentium soluta, eveniet facilis quos fuga.</p>
      </div>
      <ShareService />
    </div>
  );
};

export default Services;