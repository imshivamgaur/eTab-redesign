"use client";

import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

const PrivacyPolicyPage = () => {
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
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 pt-18">
        {/* Header Section */}
        <div className="w-full p-8 md:px-20 md:py-20 bg-gradient-to-br from-blue-200 to-transparent ">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl font-bold"
          >
            Privacy Policy
          </motion.h1>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="w-full p-8 md:px-20 md:py-20">
          {/* Introduction */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              At <strong className="text-blue-600">eTab ERP Solutions</strong>,
              we are committed to protecting your privacy. This Privacy Policy
              describes how we collect, use, and safeguard your information when
              you visit our website or use our services.
            </p>
          </motion.section>

          {/* Section: Information We Collect */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-3 text-gray-800 border-l-4 border-orange-400 pl-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              We may collect personal information that you voluntarily provide
              to us when you fill out forms, contact us, or use our services.
              This includes your name, email address, phone number, and any
              other details you provide.
            </p>
          </motion.section>

          {/* Section: How We Use Your Information */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-3 text-gray-800 border-l-4 border-orange-400 pl-4">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-700 text-sm sm:text-lg leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-lg leading-relaxed">
              <li>Provide and maintain our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve our website and offerings</li>
              <li>Send administrative information</li>
            </ul>
          </motion.section>

          {/* Section: Sharing of Information */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-3 text-gray-800 border-l-4 border-orange-400 pl-4">
              Sharing of Information
            </h2>
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              We do not sell or rent your personal data. We may share
              information with trusted service providers who assist us in
              operating our website and providing services, under
              confidentiality agreements.
            </p>
          </motion.section>

          {/* Section: Data Security */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-3 text-gray-800 border-l-4 border-orange-400 pl-4">
              Data Security
            </h2>
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              We take appropriate measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.section>

          {/* Section: Changes to This Policy */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-3 text-gray-800 border-l-4 border-orange-400 pl-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. We encourage
              you to review this page periodically for any changes.
            </p>
          </motion.section>

          {/* Section: Contact Us */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-3 text-gray-800 border-l-4 border-orange-400 pl-4">
              Contact Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:digivity.in@gmail.com"
                className="text-blue-600 underline hover:text-orange-400 transition-colors duration-200"
                aria-label="Email us at digivity.in@gmail.com"
              >
                digivity.in@gmail.com
              </a>
              .
            </p>
          </motion.section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
