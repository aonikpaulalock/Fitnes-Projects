import React from 'react';
import Sliders from '../Home/Sliders';
import AboutBanner from './AboutBanner';
import AboutImagePosition from './AboutImagePosition';
import AboutTricks from './AboutTricks';
import CoreWork from './CoreWork';
import HappyClient from './HappyClient';

const AboutPage = () => {
  return (
    <div className="core-work-back">
      <AboutBanner/>
      <AboutImagePosition/>
      <HappyClient/>
      <CoreWork/>
      <AboutTricks/>
      <Sliders/>
    </div>
  );
};

export default AboutPage;