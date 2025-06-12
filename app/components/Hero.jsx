"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaRocket } from "react-icons/fa";
import { useModal } from "../context/ModelContext";

const Hero = () => {
  const images = [
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
  ];

  const [current, setCurrent] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const { openModal } = useModal();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="w-full h-full flex-shrink-0 flex flex-col justify-center items-center pt-5 pb-10 overflow-hidden"
    >
      {/* Swiper Slides */}
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        modules={[Autoplay]}
        className="w-full flex justify-center items-center"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <div className="w-full pb-5 flex justify-center items-center ">
              <img
                src={src}
                alt={`Slide ${idx}`}
                className=" w-[95%] h-[100%] md:w-[90%] md:h-[100%] object-cover shadow-lg rounded-xl hover:scale-[102%] transition-all duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Dots */}
      <div className="flex gap-3 justify-center w-full ">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 md:h-3 md:w-3 cursor-pointer rounded-full transition-all duration-500 ${
              current === idx
                ? "bg-orange-400 scale-130"
                : "bg-gray-400 scale-100"
            }`}
          ></div>
        ))}
      </div>

      {/* CTA Button */}
      <div
        onClick={() => openModal()}
        className="flex items-center w-full justify-center"
      >
        <div className="bg-orange-400 flex items-center gap-2 hover:bg-orange-500 hover:scale-105 md:py-3 md:px-8 rounded-full px-3 py-2 font-semibold text-md md:text-lg  text-white transition-all duration-500 cursor-pointer mt-5 md:mt-8">
          <FaRocket size={20} />
          Try Demo
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
