import React, { useEffect, useState } from 'react';
import Service from './Service';

const ShareService = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        setServices(data)
      })
  }, [])
  return (
    <div className="container">
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