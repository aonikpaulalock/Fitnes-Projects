// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "../../Styles/Sliders.css"
// const Sliders = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     speed: 5000,
//     focusOnSelect: true,
//     slickNext: true,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="container-fluid">
//       <h2 className="slider-heading">Follow me on Instagram</h2>
//       <Slider {...settings} className="container-fluid">
//         <div className="image-gap">
//           <img src="https://i.ibb.co/vQngBL0/slider-1.png" alt="" />
//         </div>
//         <div className="image-gap">
//           <img src="https://i.ibb.co/BnxhmpJ/slider-2.png" alt="" />
//         </div>
//         <div className="image-gap col-lg-4">
//           <img src="https://i.ibb.co/MVsw4kn/slider-3.png" alt="" />
//         </div>
//         <div className="image-gap col-lg-4">
//           <img src="https://i.ibb.co/wYQQScL/slider-4.png" alt="" />
//         </div>
//         <div className="image-gap col-lg-4">
//           <img src="https://i.ibb.co/BnxhmpJ/slider-2.png" alt="" />
//         </div>
//         <div className="image-gap col-lg-4">
//           <img src="https://i.ibb.co/wYQQScL/slider-4.png" alt="" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Sliders;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../Styles/Sliders.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Sliders = () => {
  return (
    <>
      <div className="Slider-container">
        <h1 className="slider-heading">Follow me on Instagram</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            loop: true,
            allowClick: true,
          
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/vQngBL0/slider-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/BnxhmpJ/slider-2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MVsw4kn/slider-3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/BnxhmpJ/slider-2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/wYQQScL/slider-4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/vQngBL0/slider-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MVsw4kn/slider-4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/vQngBL0/slider-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MVsw4kn/slider-4.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;