"use client";

import { FaBuilding, FaGlobe, FaTasks, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const StatsSection = () => {
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
      className="w-full bg-slate-800 text-white py-6 px-4 sm:px-6 lg:px-8 mb-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Stat 1: Schools & Colleges */}
        <div className="flex items-center gap-3">
          <FaBuilding className="text-4xl sm:text-5xl" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">
              6,000+
            </span>
            <span className="text-sm sm:text-base md:text-lg">
              Schools & Colleges
            </span>
          </div>
        </div>

        {/* Stat 2: Clients */}
        <div className="flex items-center gap-3">
          <FaGlobe className="text-4xl sm:text-5xl" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">
              300+
            </span>
            <span className="text-sm sm:text-base md:text-lg">Clients</span>
          </div>
        </div>

        {/* Stat 3: Projects */}
        <div className="flex items-center gap-3">
          <FaTasks className="text-4xl sm:text-5xl" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">
              300+
            </span>
            <span className="text-sm sm:text-base md:text-lg">Projects</span>
          </div>
        </div>

        {/* Join Now Button */}
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm sm:text-base md:text-lg font-medium hover:bg-gray-200 transition-colors duration-300">
          Join Now
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default StatsSection;
