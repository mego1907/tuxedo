"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Navigation } from "swiper/modules";
// Terms and conditions
const Slider = () => {
  const swiperRef = useRef<any>();

  return (
    <div>
      <div className="container mx-auto">
        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <img src="/assets/images/B78A2880.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/B78A2880.png" alt="" />
            </SwiperSlide>
          </Swiper>

          <div>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="md:w-16 md:h-16 w-10 h-10 bg-white text-black flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-0 z-10"
            >
              <FaChevronLeft fontSize={25} />
            </button>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="md:w-16 md:h-16 w-10 h-10 bg-white text-black flex justify-center items-center absolute -translate-y-1/2 top-1/2 right-0 z-10"
            >
              <FaChevronRight fontSize={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
