"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const OurWorkItems = [
    "School ERP",
    "Mobile App",
    "Website development",
    "Smart Technology",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full p-8 md:px-20 md:py-10 bg-blue-200"
    >
      <motion.div
        variants={fadeInUp}
        whileInView="show"
        viewport={{ once: true }}
        className="w-full h-[120px] overflow-hidden flex items-center justify-center"
      >
        <div className="w-[100%] sm:w-[90%] md:w-[80%] h-full  overflow-hidden flex items-center relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-25 md:w-30 z-10 bg-gradient-to-r from-blue-200 to-transparent pointer-events-none"></div>

          {/* Right fade */}
          <motion.div
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="absolute right-0 top-0 bottom-0 w-25 md:w-30 z-10 bg-gradient-to-l from-blue-200 to-transparent pointer-events-none"
          ></motion.div>
          <div className="animate-infinite-scroll flex items-center">
            <ul className="flex gap-8 h-full">
              {OurWorkItems.concat(OurWorkItems).map((item, i) => (
                <li
                  key={`${item}-${i}`}
                  className="text-sm md:text-xl bg-slate-800 text-white px-3 md:px-5 py-2 md:py-3 rounded-2xl flex-shrink-0"
                >
                  <span>#</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <motion.div variants={fadeInUp} className="w-full md:w-1/2">
          <motion.img
            src="/images/about(home).png"
            alt="About Illustration"
            className="w-full h-auto"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full md:w-1/2"
        >
          <div className="text-xl md:text-3xl w-fit mb-3 flex flex-col items-center gap-1 text-black font-semibold ">
            <h1>About Us</h1>
            <p className="w-15 h-[4px] bg-orange-400"></p>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4  bg-slate-800 text-white p-3 md:p-4 rounded-xl">
            eTab ERP Software
          </h2>
          <p className="text-gray-600 text-md md:text-lg mb-4 md:mb-6 leading-relaxed">
            Started with a goal to incorporate technological advancements in
            day-to-day functioning of Education sector, it has been observed
            that education is one area where automation is the need. So, to
            bring innovative transformation in the education sector, we have
            come up with school management software,{" "}
            <span className="font-semibold">eTab Educational</span>, in this ERP
            Software both academic as well as non-academic tasks are completed
            with full accuracy and in stipulated time frame.
          </p>
          <Link
            href="/About"
            className="bg-orange-400 hover:bg-orange-500 w-fit md:py-3 md:px-8 cursor-pointer text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:gap-5 transition-all duration-300"
          >
            Know More
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
