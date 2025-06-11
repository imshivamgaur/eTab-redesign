"use client";

import React from "react";
import Navigation from "../components/Navigation";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import Testimonials from "../components/Testinomials";
import { FaBuilding, FaGlobe, FaTasks, FaArrowRight } from "react-icons/fa";
import StatsSection from "../components/StatsSection";
import ContactModal from "../components/ContactModel";
import { useModal } from "../context/ModelContext";
import { motion } from "framer-motion";

const clientele = () => {
  const { openModal, closeModal, isModalOpen, setIsModalOpen } = useModal();

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
    <div className="min-h-screen flex flex-col">
      <div className="w-full p-8 md:px-20 md:py-20 bg-gradient-to-br from-blue-200 to-transparent ">
        <motion.h1
          className="text-5xl font-bold"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Clients
        </motion.h1>
        <Navigation />
      </div>

      <Testimonials />

      <StatsSection />

      <GetStarted />
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default clientele;
