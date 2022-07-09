import React from 'react';
import About from './About';
import Banner from './Banner';
import Quesions from './Quesions';
import Reviews from './Reviews';
import Services from './Services';
import Sliders from './Sliders';
import Sudules from './Sudules';
import Tainers from './Tainers';
import Tricks from './Tricks';
import Waiting from './Waiting';

const Home = () => {
  return (
    <>
      <Banner />
      <About/>
      <Services/>
      <Tainers/>
      <Reviews/>
      <Waiting/>
      <Sudules/>
      <Tricks/>
      <Quesions/>
      <Sliders/>
    </>
  );
};

export default Home;