import React from 'react';
import Sliders from '../Home/Sliders';
import Tricks from '../Home/Tricks';
import BlogsBanner from './BlogsBanner';

const Blogs = () => {
  return (
    <div>
      <BlogsBanner />
      <Tricks/>
      <Sliders/>
    </div>
  );
};

export default Blogs;