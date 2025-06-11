"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Navigation = () => {
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

  const pathname = usePathname();
  const cleanPath = pathname.replace(/^\/+/, "");
  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="flex items-center mt-2"
    >
      <Link
        href={"/"}
        className="text-xl hover:text-orange-400 transition-all duration-300"
      >
        Home
      </Link>
      <p className="text-orange-400 flex items-center">
        <IoIosArrowForward color="#fb8a06" size={32} />
      </p>
      <p className="capitalize text-xl">{cleanPath}</p>
    </motion.h2>
  );
};

export default Navigation;
