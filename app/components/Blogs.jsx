"use client";

import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogs = [
    {
      tag: "Team",
      heading: "Our Team",
      description:
        "Our team comprises highly skilled professionals dedicated to providing top-notch services. With experts in web development, digital marketing, and graphic design, we deliver high-quality solutions tailored to your business needs.",
      image: "/images/blogs/team_blog.png",
    },
    {
      tag: "ERP",
      heading: "Top 10 ERP Solutions",
      description:
        "Explore our top 10 ERP software solutions designed to streamline business operations and boost efficiency. Tailored for businesses of all sizes, our ERP systems are user-friendly and customized to meet your specific requirements.",
      image: "/images/blogs/topErp_blog.png",
    },
    {
      tag: "E-Learning",
      heading: "Top 10 E-Learning Platforms",
      description:
        "Discover our top 10 e-learning platforms to enhance student learning. Offering courses in business, technology, and health, our platforms are user-friendly and accessible anytime, anywhere.",
      image: "/images/blogs/e-learning_blog.gif",
    },
    {
      tag: "Marketing",
      heading: "Network Marketing Software",
      description:
        "Our network marketing software helps businesses grow their networks and increase sales. Designed for companies of all sizes, our solutions are easy to use and customized to meet your marketing goals.",
      image: "/images/blogs/network_blog.png",
    },
  ];

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
    <div className="w-full p-8 md:px-20 md:py-10 ">
      <div className="w-full mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Explore Our Insights
        </motion.h2>
        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={idx}
              className="relative bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:scale-[102%] transition-all duration-300 overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.heading}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                {/* Tag */}
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.tag}
                </span>

                {/* Heading */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {blog.heading}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-md line-clamp-full">
                  {blog.description}
                </p>

                {/* Button */}
                <button className="mt-2 cursor-pointer flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                  Know More
                  <IoIosArrowForward />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
