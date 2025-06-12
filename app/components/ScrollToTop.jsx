// components/ScrollToTop.jsx
"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 ${
        showButton ? "opacity-100" : "opacity-0 disable"
      } right-5 z-50 p-3 rounded-full cursor-pointer bg-orange-400 hover:bg-orange-500 text-white shadow-lg transition-all duration-300`}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
