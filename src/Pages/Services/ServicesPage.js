import React from 'react';
import ShareService from '../Home/ShareService';
import ServiceBanner from './ServiceBanner';
import Waiting from "../../Pages/Home/Waiting"
import Quesions from "../../Pages/Home/Quesions"
import Sliders from "../../Pages/Home/Sliders"
const ServicesPage = () => {
  return (
    <>
      <ServiceBanner/>
      <ShareService/>
      <Waiting/>
      <Quesions/>
      <Sliders/>
    </>
  );
};

export default ServicesPage;