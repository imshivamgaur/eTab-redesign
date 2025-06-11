"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Card from "./Card";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      path: "/images/Clients/StJoseph.jpeg",
      designation: "PRINCIPAL",
      org: "St. Joseph's School",
      feedback:
        "I am delighted to share our positive experience with the eTab ERP software, which has greatly streamlined our school's administrative and academic processes. The user-friendly interface and comprehensive features have made managing day-to-day operations far more efficient.",
    },
    {
      path: "/images/Clients/SpingDale.png",
      designation: "CHAIRMAN",
      org: "S.D.P. School ",
      feedback:
        "ETab ERP has significantly improved our school's administrative efficiency and communication. The user-friendly interface and comprehensive features have made managing day-to-day operations much easier. The support team is always responsive and helpful. Highly recommended!",
    },
    {
      path: "/images/Clients/anps.png",
      designation: "CHAIRMAN",
      org: "A.N.P School ",
      feedback:
        "ETab ERP Software has been a game-changer for our school. The comprehensive features and user-friendly interface have made managing administrative tasks much easier. The support team is always responsive and helpful. Highly recommended!",
    },
    {
      path: "/images/Clients/kc.jpeg",
      designation: "CHAIRMAN",
      org: "KC Global  School",
      feedback:
        "On behalf of KC Global School, I would like to express my sincere gratitude and appreciation for the exceptional capabilities and functionality of the eTab ERP software. Implementing this system has been a transformative step in streamlining our administrative processes, enhancing productivity, and ensuring smooth operations .",
    },
    {
      path: "/images/Clients/GDgoneka.png",
      designation: "PRINCIPAL",
      org: "G.D.G.I School",
      feedback:
        "ETab ERP has significantly improved our school's administrative efficiency and communication. The user-friendly interface and comprehensive features have made managing day-to-day operations much easier. The support team is always responsive and helpful. Highly recommended!s",
    },
    {
      path: "/images/Clients/grenField.png",
      designation: "PRINCIPAL",
      org: "Green Field School ",
      feedback:
        "ETab ERP has significantly improved our school's administrative efficiency and communication. The user-friendly interface and comprehensive features have made managing day-to-day operations much easier. The support team is always responsive and helpful. Highly recommended!",
    },
    {
      path: "/images/Clients/HillwodsAc.webp",
      designation: "PRINCIPAL",
      org: "HILLWOODS ACADEMY",
      feedback:
        "ETab ERP has significantly improved our school's administrative efficiency and communication. The user-friendly interface and comprehensive features have made managing day-to-day operations much easier. The support team is always responsive and helpful. Highly recommended!",
    },
    {
      path: "/images/Clients/BoshiTaru.png",
      designation: "PRINCIPAL",
      org: "B.I. School",
      feedback:
        "We have been using eTab ERP for over a year now, and it has significantly improved our school's administrative efficiency. The user-friendly interface and comprehensive features make managing day-to-day operations much easier. The support team is always responsive and helpful. Highly recommended!",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96], // smooth custom easing
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="w-full p-8 md:px-20 md:py-10 bg-zinc-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Text Block */}
        <div className="lg:col-span-1 flex flex-col gap-2 pt-12">
          <h2 className="text-md md:text-xl bg-slate-800 w-fit font-bold text-white px-3 md:px-5 py-2 md:py-3 rounded-2xl flex-shrink-0">
            TESTIMONIALS
          </h2>
          <h1 className="text-4xl font-semibold">We Go Extra Miles Together</h1>
          <p className="text-md">
            We've got decades-long relationships with customers, See what a
            Customer says.
          </p>
        </div>

        {/* Right Cards Block */}
        <div className="lg:col-span-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide className="py-12" key={idx}>
                <Card testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
