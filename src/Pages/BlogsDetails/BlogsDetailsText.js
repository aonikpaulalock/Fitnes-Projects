import React from 'react';
import "../../Styles/BlogsDetails/BlogsDetailsText.css"
import shape from "../../Asset/Blogs/shape.png"
const BlogsDetailsText = ({ detailsBlogs }) => {
  const { dynamicDetais, mainheading } = detailsBlogs;
  return (
    <div className="container">
      <div className="image-container">
        <img src={dynamicDetais?.mainDetailsImg} alt=""  className="img-fluid" />
        <img src={shape} alt="" className="inside-img-position" />
      </div>
      <div className="blogs-text-container">
        <div className="blogs-content-container">
          <div className="col-lg-7 mx-auto">
            <h1 className="blogs-details-heading">{mainheading}</h1>
          </div>
          <div className="text-content col-lg-7 mx-auto">
            <p>{dynamicDetais?.detailsText1}</p>
            <p>{dynamicDetais?.detailsText2}</p>
            <p>{dynamicDetais?.detailsText3}</p>
            <p>{dynamicDetais?.detailsText4}</p>
          </div>
        <img src={dynamicDetais?.subDetailsImg} alt="" className="image-margin img-fluid" />
        <div className="text-content col-lg-7 mx-auto">
            <p>{dynamicDetais?.detailsText5}</p>
            <p>{dynamicDetais?.detailsText6}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetailsText;