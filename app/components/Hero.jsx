"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const imageSlideFunc = (idx) => {
    setCurrent(idx);
  };

  const images = [
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
    "/images/slider1.png",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="w-full h-full flex-shrink-0 justify-center items-center  flex flex-col py-10  md:justify-center overflow-hidden *:transition-all *:duration-300 "
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex justify-center items-center"
          >
            <img
              src={src}
              alt={`Slide ${idx}`}
              className="w-[80%] h-[95%] object-cover shadow-lg rounded-xl hover:scale-[102%] transition-all duration-300"
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex gap-3 justify-center w-full mt-5">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => imageSlideFunc(idx)}
            className={`w-2 h-2 md:h-3 md:w-3  cursor-pointer rounded-full transition-all duration-500 ${
              current === idx
                ? "bg-orange-400 scale-130"
                : "bg-gray-400 scale-100"
            }`}
          ></div>
        ))}
      </div>
      <div className="flex items-center w-full justify-center">
        <Link
          href="/contact"
          className="bg-orange-400 hover:bg-orange-500 rounded-full px-3 py-1  md:px-5 md:py-2 text-white transition-all duration-300 cursor-pointer mt-5  md:mt-10"
        >
          Get Free Consultation
        </Link>
      </div>
    </motion.div>
  );
};

export default Hero;
