import React, { useEffect, useState } from 'react';
import Service from './Service';

const ShareService = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch("https://infinite-ocean-81703.herokuapp.com/services")
      .then(res => res.json())
      .then(data =>{
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