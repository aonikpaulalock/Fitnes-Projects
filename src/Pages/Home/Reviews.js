import React from 'react';
import "../../Styles/Reviews.css"
import Review from './Review';
import image1 from "../../Asset/Reviews/reviews1.png"
import image2 from "../../Asset/Reviews/reviews2.png"
import image3 from "../../Asset/Reviews/reviews3.png"
import shape from "../../Asset/Service/Shape.png"
import { Navigate, useNavigate } from 'react-router-dom';
const reviews = [
  { id: 1, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: image1 },
  { id: 2, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: image2 },
  { id: 3, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: image3 }
]
const Reviews = () => {
  const navigate = useNavigate()
  return (
    <div className="reviews">
      <div className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="row container">
          <div className='col-lg-7 col-md-12'>
            <h1 className="reviews-heding">What my clients say about me?
              <img src={shape} alt="" className='shape-satting' />
            </h1>
          </div>
          <div className='col-lg-4 offset-lg-1 col-md-12 d-lg-flex justify-content-lg-center align-items-lg-center'>
            <button className="reviews-button" onClick={() => navigate("/contactPage")}>Book A Class</button>
          </div>
        </div>
        <div>
          <div className="row">
            {
              reviews.map(review => <Review
                key={review.id}
                review={review}
              ></Review>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;