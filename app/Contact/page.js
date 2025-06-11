"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Navigation from "../components/Navigation";
import { useModal } from "../context/ModelContext";
import ContactModal from "../components/ContactModel";
import { toast } from "react-toastify";
import GetInTouch from "../components/GetInTouch";
import { motion } from "framer-motion";

const Contact = () => {
  const { openModal, closeModal, isModalOpen, setIsModalOpen } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response: ", response);

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Mail sended successfully");
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h1 className="text-5xl font-bold">Our Services</h1>
        <Navigation />
      </div>
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative w-full"
          >
            Send Us a Message
            <div className="h-1 w-20 bg-orange-400 mt-2 mx-auto rounded-full" />
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Form on the Left */}
            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-101 transition-transform duration-300"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                    rows="3"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 hover:gap-3   bg-gradient-to-r  from-orange-500 to-orange-600 text-white p-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-500 font-semibold disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <FaArrowRight />
                </button>
              </div>
            </motion.form>

            {/* SVG Image on the Right */}
            <motion.div variants={fadeInUp} className="flex justify-center ">
              <motion.img
                src="images/aboutPage.png"
                alt=""
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full object-contain"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <GetInTouch />

      <GetStarted />
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => (false)}
      />
    </div>
  );
};

export default Contact;
