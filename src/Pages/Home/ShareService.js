import React, { useEffect, useState } from 'react';
import Service from './Service';

const ShareService = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch("https://fitness-server-tau.vercel.app/services")
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [])
  return (
    <div className="container"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <div className="row">
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default ShareService;