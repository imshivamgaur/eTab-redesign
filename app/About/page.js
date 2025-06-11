"use client";

import React from "react";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Navigation from "../components/Navigation.jsx";
import { useModal } from "../context/ModelContext";
import ContactModal from "../components/ContactModel";
import { motion } from "framer-motion";

const About = () => {
  const { openModal, isModalOpen, setIsModalOpen } = useModal();

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

  const stats = [
    {
      path: "",
      title: "6+ Year",
      subtitle: "Legacy",
    },
    {
      path: "",
      title: "300+",
      subtitle: "Clients",
    },
    {
      path: "",
      title: "300+",
      subtitle: "ERP Projects",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full p-8 md:px-20 md:py-20 bg-gradient-to-br from-blue-200 to-transparent ">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl font-bold"
        >
          About Us
        </motion.h1>
        <Navigation />
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 md:px-20 md:py-10"
        style={{
          backgroundImage: "url('/images/aboutBg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left side */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-2"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Building Smarter Schools with Advanced ERP Technology
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            &quot;Build smarter schools with our advanced ERP technology,
            designed to streamline administration, enhance communication, and
            improve student management. Our solution integrates key
            functionalities, ensuring seamless operations, data security, and
            efficient decision-making for better educational outcomes and
            smoother school operations."&quot;
          </p>

          {/* stats */}

          <div className="flex flex-col sm:flex-row gap-4 lg:pt-8 justify-between">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-800 text-white px-10 w-full md:[200px] lg:w-[250px] py-8 grid grid-cols-2 lg:flex rounded-xl"
              >
                {/* <img src={} alt="" /> */}
                <div className="flex flex-col w-full">
                  <h2 className="text-md md:text-2xl text-center">
                    {stat.title}
                  </h2>
                  <p className="text-md md:text-lg text-center">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Right side */}
        <motion.div variants={fadeInUp} className="flex justify-center ">
          <motion.img
            src="/images/aboutPage.png"
            alt="About"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      </motion.div>
      <GetStarted openModal={openModal} />
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default About;
