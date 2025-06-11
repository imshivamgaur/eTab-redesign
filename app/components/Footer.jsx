"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaGraduationCap,
  FaPhone,
  FaHeadphones,
  FaQuestionCircle,
  FaCommentDots,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
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
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-gradient-to-b from-white to-gray-50 border-t text-gray-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Address */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <img src="/images/eTab.png" className="h-16" alt="" />
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Plot No. 2, APJ Abdul Kalam Rd,
            <br />
            Knowledge Park III, Greater Noida,
            <br />
            Uttar Pradesh 201306
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-100 pb-3 mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 group">
              <FaHome className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <FaInfoCircle className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <FaGraduationCap className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <FaPhone className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-100 pb-3 mb-6">
            Useful Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 group">
              <FaHeadphones className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                Help Desk
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <FaQuestionCircle className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <FaCommentDots className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                Send Feedback
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <FaShieldAlt className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-100 pb-3 mb-6">
            Visit Us
          </h4>
          <div className="relative group">
            <iframe
              title="eTab Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7010.01989617597!2d77.49703597334402!3d28.47422146284183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea41dc0e4a81%3A0x6b15c96cc45d0b7e!2sDIGI%20SHIKSHA%20-%20School%20College%20ERP%20Software!5e0!3m2!1sen!2sin!4v1717943072993!5m2!1sen!2sin"
              width="100%"
              height="220"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-gray-200 shadow-md group-hover:shadow-xl group-hover:shadow-blue-100/50 transition-shadow duration-300"
            ></iframe>
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-300/30 transition-all duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 py-5 text-center text-sm text-gray-600 border-t border-gray-200">
        <p className="font-medium">
          © 2025 Digivity Technology Private Limited
        </p>
        <p className="text-xs mt-2">
          <a
            href="#"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-300"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-300"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
