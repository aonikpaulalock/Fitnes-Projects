import React from 'react';
import "../../Styles/BlogsDetails/BlogsDetailsText.css"
import shape from "../../Asset/Blogs/shape.png"
const BlogsDetailsText = ({detailsBlogs}) => {
  const {dynamicDetais} = detailsBlogs ;
  return (
    <div className="container">
      <div className="image-container">
        <img src={dynamicDetais?.mainDetailsImg} alt="" />
        <img src={shape} alt="" className="inside-image-position" />
      </div>
      <div className="blogs-text-container">
        
      </div>
    </div>
  );
};

export default BlogsDetailsText;