"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Banner = () => {
  const swiperRef = useRef<any>();

  const logos = [
    {
      id: 0,
      image: "/assets/images/banner/6.png",
    },
    {
      id: 1,
      image: "/assets/images/banner/1.png",
    },
    {
      id: 2,
      image: "/assets/images/banner/2.png",
    },
    {
      id: 3,
      image: "/assets/images/banner/3.png",
    },
    {
      id: 4,
      image: "/assets/images/banner/4.png",
    },
    {
      id: 5,
      image: "/assets/images/banner/5.png",
    },
    {
      id: 6,
      image: "/assets/images/banner/6.png",
    },
    {
      id: 7,
      image: "/assets/images/banner/7.png",
    },
  ];

  return (
    <div className="bg-banner-image bg-cover bg-center md:h-[22.4rem] h-[12rem]">
      <div className="flex items-center justify-center gap-28 h-full overflow-hidden">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          slidesPerView={6}
          loop={true}
        >
          {logos.map((logo) => (
            // <div key={logo.id}>
            <SwiperSlide>
              <div className="flex items-center justify-center h-60">
                <Image
                  src={logo.image}
                  alt="banner"
                  width={148}
                  height={149}
                  // layout="fill"
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
            // </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
