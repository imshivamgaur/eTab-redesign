"use client";

import React from "react";

const Card = ({ testimonial }) => {
  return (
    <div className="relative bg-[#fff9f1] w-fit min-h-[350px] shadow-md hover:-translate-y-2 hover:shadow-lg hover:border-orange-500 transition-all duration-300 rounded-3xl p-6 pt-16  border-t-4 border-orange-400 cursor-grab">
      {/* Logo Image */}
      <div className="absolute -top-10 left-1/4 transform -translate-x-1/2">
        <img
          src={testimonial.path}
          alt="School Logo"
          className="w-20 h-20 rounded-full shadow-lg border-4 border-white bg-slate-800"
        />
      </div>

      <div className="text-right text-blue-600 font-semibold mb-2">
        {testimonial.designation}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {testimonial.org}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {testimonial.feedback}
      </p>
    </div>
  );
};

export default Card;
