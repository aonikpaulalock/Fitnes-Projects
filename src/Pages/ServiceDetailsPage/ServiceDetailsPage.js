import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quesions from '../Home/Quesions';
import Sliders from '../Home/Sliders';
import ServiceDetailsText from './ServiceDetailsText';
import ServiceImageDetails from './ServiceImageDetails';
import ServicesDetailsBanner from './ServicesDetailsBanner';
const ServiceDetailsPage = () => {
  const { id } = useParams()
  const [detailsServices,setDetailsServices] = useState({})
  const url = `http://localhost:5000/services/${id}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDetailsServices(data)
        console.log(data)
      })
  }, [url])
  return (
    <>
     <ServicesDetailsBanner detailsServices={detailsServices} />
     <ServiceImageDetails detailsServices={detailsServices}/>
     <ServiceDetailsText detailsServices={detailsServices}/>
     <Quesions/>
     <Sliders/>
    </>
  );
};

export default ServiceDetailsPage;