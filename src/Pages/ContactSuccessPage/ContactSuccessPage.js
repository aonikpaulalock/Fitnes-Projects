import React from 'react';
import ContactMap from '../Contactpage/ContactMap';
import Quesions from '../Home/Quesions';
import Sliders from '../Home/Sliders';
import MarginSuccess from './MarginSuccess';
import SuccessBanner from './SuccessBanner';

const ContactSuccessPage = () => {
  return (
    <div>
      <SuccessBanner />
      <MarginSuccess/>
      <ContactMap />
      <Quesions />
      <Sliders />
    </div>
  );
};

export default ContactSuccessPage;