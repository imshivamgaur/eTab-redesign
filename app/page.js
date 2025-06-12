"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testinomials from "./components/Testinomials";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModel";
import { useModal } from "./context/ModelContext";

const Home = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const { openModal, closeModal, isModalOpen, setIsModalOpen } = useModal();
  console.log("data: ", openModal);

  // Option 1: Open modal automatically on page load
  useEffect(() => {
    const hasModalOpened = sessionStorage.getItem("modalShown");

    if (!hasModalOpened) {
      setIsModalOpen(true); // open modal
      sessionStorage.setItem("modalShown", "true"); // set flag
    }
  }, []);

  return (
    <div className="w-full min-h-screen pt-18">
      <Hero />
      {/*1st section */}
      <About />
      {/* 2nd section */}
      <WhyChooseUs />
      {/* 3rd section */}
      <Services />
      {/* 4th section */}
      <Testinomials />
      {/* 5th section */}
      <GetStarted />
      {/* Footer */}
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
