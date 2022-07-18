import React from 'react';
import Quesions from '../Home/Quesions';
import Sliders from '../Home/Sliders';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactForm />
      <ContactMap />
      <Quesions />
      <Sliders />
    </>
  );
};

export default Contact;