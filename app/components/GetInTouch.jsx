"use client";

import React from "react";
import { FaClock, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const GetInTouch = () => {
  const contactData = [
    {
      icon: <FaClock className="text-white text-2xl" />,
      title: "Remote Support:",
      details: [
        "24x7 Hours",
        "Experience uninterrupted assistance with our 24x7 support system",
      ],
    },
    {
      icon: <FaPhoneAlt className="text-white text-2xl" />,
      title: "Phone:",
      details: ["+91 9454895240", "+91 8130224328"],
    },
    {
      icon: <FaEnvelope className="text-white text-2xl" />,
      title: "Email:",
      details: ["info@digivity.in", "etaberp.in@gmail.com"],
    },
    {
      icon: <FaGlobe className="text-white text-2xl" />,
      title: "Location:",
      details: [
        "Plot No. 2, APJ Abdul Kalam Rd,",
        "Knowledge Park III, Greater Noida,",
        "Uttar Pradesh 20130",
      ],
    },
  ];

  // One clean animation for the whole section
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="py-20 px-6 md:px-20 text-slate-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block">
        Get in Touch
        <div className="h-1 w-20 bg-yellow-400 mt-2 mx-auto rounded-full" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactData.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-800 hover:-translate-y-1 p-6 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-orange-500 space-y-4"
          >
            <div className="bg-orange-500 w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-200">
              {item.title}
            </h3>
            <div className="text-sm space-y-1 text-gray-200">
              {item.details.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default GetInTouch;
