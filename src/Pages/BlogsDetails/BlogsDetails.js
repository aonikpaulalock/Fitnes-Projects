import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogsDetailsBanner from './BlogsDetailsBanner';
import BlogsDetailsText from './BlogsDetailsText';
import BlogsTainerDetails from './BlogsTainerDetails';
import Tricks from '../Home/Tricks';
import Sliders from '../Home/Sliders';
const BlogsDetails = () => {
  const { id } = useParams()
  const [detailsBlogs, setDetailsBlogs] = useState({})
  const url = `https://fitness-server-tau.vercel.app/blogs/${id}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDetailsBlogs(data)
      })
  }, [url])
  return (
    <>
      <BlogsDetailsBanner detailsBlogs={detailsBlogs}/>
      <BlogsDetailsText detailsBlogs={detailsBlogs} />
      <BlogsTainerDetails detailsBlogs={detailsBlogs} />
      <Tricks/>
      <Sliders/>
    </>
  );
};

export default BlogsDetails;