import React from "react";
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