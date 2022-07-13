import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogsDetailsBanner from './BlogsDetailsBanner';
import BlogsDetailsText from './BlogsDetailsText';

const BlogsDetails = () => {
  const { id } = useParams()
  const [detailsBlogs, setDetailsBlogs] = useState({})
  const url = `http://localhost:5000/blogs/${id}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDetailsBlogs(data)
        console.log(data)
      })
  }, [url])
  return (
    <>
      <BlogsDetailsBanner detailsBlogs={detailsBlogs}/>
      <BlogsDetailsText detailsBlogs={detailsBlogs} />
    </>
  );
};

export default BlogsDetails;