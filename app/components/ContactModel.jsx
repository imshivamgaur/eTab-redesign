"use client";

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    schoolName: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          schoolName: "",
          service: "",
        });
        toast.success("Form sended successfully 🚀");
        setTimeout(() => {
          onClose(); // Close the modal after success
        }, 1500);
      } else {
        toast.error(data.message || "Failed to send email");
      }
    } catch (error) {
      toast.error("An error occured. Please try agin");
    } finally {
      setIsSubmitting(false);
    }
  };

  // if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 h-screen z-50 flex items-start md:items-center pt-10 md:pt-0 justify-center bg-black/60 backdrop-blur-[5px] transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg shadow-xl max-w-[700px] w-full mx-4 px-8 pb-8 pt-4 relative transform transition-all duration-800 ${
          isOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-10 opacity-0"
        }`}
      >
        {/* heading */}
        <div className="flex justify-between items-center border-b-1 border-gray-500 pb-2 text-gray-700 hover:text-gray-900 transition-colors duration-200">
          <div className="h-10  ">
            <img
              src="/images/eTab.png"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <div>
            <button onClick={onClose} className=" cursor-pointer ">
              <ImCross
                size={20}
                className="transition-transform duration-500 hover:rotate-[180deg]"
              />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="mt-2 grid grid-cols-1  md:grid-cols-2">
          <div>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 p-1 px-2 border w-full border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 p-1 px-2 border w-full border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter you Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-1 px-2 border w-full border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                />
              </div>

              {/* School Name */}
              <div>
                <label
                  htmlFor="schoolName"
                  className="block text-sm font-medium text-gray-700"
                >
                  School Name
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  placeholder="Enter you school name"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  className="mt-1 p-1 px-2 border w-full border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="mt-1 p-1 px-2 border w-full border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 transition-colors duration-300"
                >
                  <option value="" disabled>
                    --select--
                  </option>
                  <option value="web school ERP">Web School ERP</option>
                  <option value="digital marketing">Digital Marketing</option>
                  <option value="website development">
                    Website Development
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-orange-400 flex items-center justify-center gap-2 hover:gap-3 transition-all duration-500 font-semibold cursor-pointer text-white px-4 py-3 rounded-md hover:bg-orange-500  mt-4"
              >
                {isSubmitting ? "Sending" : "Get Demo "} <FaArrowRight />
              </button>
            </form>
          </div>

          <div className="flex items-start justify-start md:justify-center p-2 md:p-10 pointer-events-none">
            <div className="flex flex-col gap-0">
              <p className=" text-md md:text-lg">Having Trouble?</p>
              <h2 className="text-xl md:text-2xl font-semibold md:font-bold">
                Quick Contact
              </h2>
              <img
                src="/images/Ashish-Singh.png"
                alt="Ashish Singh"
                className=" w-[100px]  md:w-full  object-cover p-2 border-3 border-slate-800  rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
