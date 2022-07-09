import React from 'react';
import "../../Styles/Reviews.css"
import Review from './Review';
import image1 from "../../Asset/Reviews/reviews1.png"
import image2 from "../../Asset/Reviews/reviews2.png"
import image3 from "../../Asset/Reviews/reviews3.png"
import shape from "../../Asset/Service/Shape.png"
const reviews = [
  { id: 1, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: image1 },
  { id: 2, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: image2 },
  { id: 3, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: image3 }
]
const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-content d-flex justify-content-center align-items-between mt-5">
          <div className='col-lg-5'>
            <h1 className="reviews-heding service-heading">What my clients say about me?
            <img src={shape} alt="" className='shape-satting' />
            </h1>
          </div>
          <div className='col-lg-4 offset-lg-3 d-flex justify-content-center align-items-center'>
            <button className="reviews-button">Book A Class</button>
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