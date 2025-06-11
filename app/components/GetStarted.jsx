"use client";

import React from "react";
import { FaRocket, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useModal } from "../context/ModelContext";

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

const GetStarted = () => {
  const { openModal } = useModal();

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full py-10 px-6 md:px-20 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] text-white shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      {/* Left Content */}
      <motion.div variants={fadeInUp} className="space-y-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold flex items-center gap-3">
            <FaRocket className="text-orange-400 text-3xl" />
            <span>Get Started for Free Today</span>
          </h2>
          <div className="h-1 w-20 bg-orange-400 mt-3 rounded-full" />
        </div>

        <p className="text-lg md:text-xl text-slate-200">
          Join millions of users who trust{" "}
          <strong className="text-white">eTab</strong> for a{" "}
          <span className="text-yellow-300 font-semibold">99%</span> Customer
          Support Satisfaction rate.
        </p>

        <ul className="space-y-3 text-base md:text-lg">
          {[
            "24/7 Customer Support",
            "Easy-to-use Interface",
            "Secure & Reliable",
            "100% Free Trial",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <FaCheck className="text-pink-400 text-lg" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => openModal()}
          className="bg-orange-500 hover:bg-orange-600 transition duration-300 cursor-pointer text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg inline-flex items-center gap-2"
        >
          <FaRocket />
          Try Demo
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div variants={fadeInUp} className="hidden lg:flex justify-center">
        <motion.img
          src="/images/getdemo.png"
          alt="Get Started Illustration"
          className="w-full h-auto object-contain drop-shadow-xl"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default GetStarted;
