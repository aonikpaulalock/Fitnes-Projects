import React from 'react';
import "../../Styles/TainerInformation/BlogsTainerInformation.css"
const BlogsTainerInformation = ({ detailsBlogs }) => {
  console.log(detailsBlogs);
  const { tainer } = detailsBlogs;
  return (
    <div>
      <div className="Blogs-Tainer-Information">
      </div>
      <div className="Blogs-Information">
        <div className="tainer-information">
          <img src={tainer?.tainerImg} alt="" />
          <h3>{tainer?.tainerName}</h3>
          <h6>{tainer?.Expert}</h6>
        </div>
      </div>
    </div>
  );
};

export default BlogsTainerInformation;