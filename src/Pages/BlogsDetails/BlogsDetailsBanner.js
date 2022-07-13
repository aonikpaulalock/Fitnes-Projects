import React from 'react';
import shape from "../../Asset/Banner/Shape.png";
import "../../Styles/BlogsDetails/BlogsDetailsBanner.css"
const BlogsDetailsBanner = ({ detailsBlogs }) => {
  const { name, mainheading, tainer } = detailsBlogs;
  return (
    <div className="Blogs-Details-Banner">
      <div className="container">
        <div className="blogs-content">
          <p className="blogs-traning">{name}</p>
          <div className="blogs-position-content">
            <h1 className="blogs-main-heading">{mainheading}</h1>
            <img src={shape} alt="" className="blogs-position-image" />
          </div>
          <div className="tainer-description">
            <img src={tainer?.tainerImg} alt="" />
            <h6>{tainer?.tainerName}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetailsBanner;