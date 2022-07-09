import React from 'react';
import image1 from "../../Asset/Service/Service.png"
import image2 from "../../Asset/Service/Service1.png"
import image3 from "../../Asset/Service/Service2.png"
import shape from "../../Asset/Service/Shape.png"
import "../../Styles/Services.css"
import Service from './Service';
const services = [
  { id: 1, name:"Piltaes Traning", img: image1, des: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
  { id: 2, name:"CorsFit Traning", img: image2, des: "Exercitationem commodi maiores quibusdam nemo." },
  { id: 3, name:"Fitness Traning", img: image3, des: "Dolor sit amet consectetur maiores eveniet consequuntur." },
]
const Services = () => {
  return (
    <div className="container service">
      <div className="col-md-5">
        <div className='shape-content'>
          <h1 className="service-heading">Services
            <img src={shape} alt="" className='shape-satting' />
          </h1>
        </div>
        <p className="service-peragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem in, pariatur, deleniti reprehenderit expedita iure consequuntur eos reiciendis sapiente praesentium soluta, eveniet facilis quos fuga.</p>
      </div>
      <div className="row">
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;