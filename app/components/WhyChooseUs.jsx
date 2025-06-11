"use client";

import React, { act, useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const items = [
    {
      path: "/images/pngs/interface.png",
      text: "Interface",
      heading: "User-Friendly Interface",
      desc: "Our School ERP is designed with simplicity and user convenience at its core. Whether you're a teacher, administrator, or parent, anyone with basic computer and email knowledge can begin using the application within minutes of their first login. The intuitive User Interface is not only easy to navigate but also highly interactive, making it effortless for users to familiarize themselves with the system. This user-friendly design empowers different stakeholders in the school to manage their respective operations seamlessly. From attendance tracking and exam management to communication and fee collection, every task can be handled efficiently without requiring any technical assistance from IT professionals",
      image: "/images/pngs/interface-image.png",
    },
    {
      path: "/images/pngs/security.png",
      text: "Security",
      heading: "Data Security and Backup",
      desc: "A cloud-based service stores data on the cloud rather than relying on decentralized databases, providing numerous advantages in terms of accessibility and efficiency. With cloud storage, data can be retrieved quickly and seamlessly from anywhere, eliminating the need for complex setups or local storage dependencies. Schools benefit from automatic data backups, ensuring that their information is always secure and up-to-date without manual intervention. This also removes the need for investing in costly hardware for data storage, reducing both upfront costs and ongoing maintenance expenses. Our ERP solution goes beyond just data storage by incorporating advanced security measures to safeguard sensitive information. Features like IP Restriction ensure that only authorized devices can access the system, adding an extra layer of protection.",
      image: "/images/pngs/security-image.png",
    },
    {
      path: "/images/pngs/support.png",
      text: "Support",
      heading: "Excellent Client Support",
      desc: "We are committed to delivering superior assistance and effective resolutions for all software-related issues. Our dedicated technical support team is always available to address concerns, ensuring a seamless experience for users. Whether it’s resolving login issues, handling fee-related queries, or addressing other portal concerns, we strive to provide prompt and satisfactory solutions. Our support for parents is especially tailored to ease their concerns. From guiding them through technical challenges to clarifying fee-related doubts, we ensure their needs are met efficiently and with utmost care. Resolving issues quickly and ensuring high satisfaction levels is our top priority.",
      image: "/images/pngs/support-image.png",
    },
    {
      path: "/images/pngs/accessibility.png",
      text: "Accessiblity",
      heading: "Anytime and Anywhere Accessibility",
      desc: "The cloud-based technology of Edunext ERP enables users to access the platform anytime, anywhere, ensuring seamless connectivity and convenience. With just an internet connection, users can manage various school operations effortlessly, whether they are at home, in the office, or on the go. This flexibility makes Edunext ERP an ideal solution for administrators, teachers, and parents, empowering them to stay connected to the school ecosystem without being tied to a specific location. Edunext ERP's cloud-based framework ensures data security and reliability, allowing users to focus on their tasks without worrying about data loss or system downtime. Updates and backups are managed automatically, ensuring that the platform always operates at peak performance. Moreover, the system's accessibility promotes collaboration among all stakeholders, fostering a more organized and efficient school management process. ",
      image: "/images/pngs/accessibility-image.png",
    },
    {
      path: "/images/pngs/migrations.png",
      text: "Migrations",
      heading: "Easy Data Migration",
      desc: "The implementation of Edunext ERP is designed to be seamless and efficient, ensuring minimal disruption to school operations. The setup process is well-planned and executed promptly, allowing institutions to start using the platform without unnecessary delays. This thoughtful approach ensures that schools can quickly transition to a more streamlined and effective management system. One of the standout features of Edunext ERP is its data porting capability, which allows the transfer of previous years' records into the system. This eliminates the hassle of starting from scratch and ensures continuity in managing student, staff, and administrative data. The ability to import historical data helps institutions maintain a comprehensive record, facilitating better decision-making and easy reference.",
      image: "/images/pngs/migrations-image.png",
    },
    {
      path: "/images/pngs/communication.png",
      text: "Communication",
      heading: "Easy and Faster Communication",
      desc: "With Edunext ERP, parents no longer need to visit the school frequently to discuss their child’s progress with class or subject teachers. The platform offers a seamless communication channel that keeps parents informed and involved in their ward’s academic journey. Teachers can effortlessly share daily remarks, updates, and feedback about students through the system, providing parents with real-time insights into their child’s performance. This advanced ERP eliminates communication gaps by establishing a faster and more efficient mode of interaction between schools and parents. It reduces the dependency on in-person meetings and traditional methods, ensuring that parents stay updated without compromising their schedules. Whether it’s academic progress, attendance, or behavioral observations, all critical information is accessible at the parents' fingertips. By fostering transparency and timely communication, Edunext ERP strengthens the collaboration between parents and teachers, ultimately benefiting the students.",
      image: "/images/pngs/communication-image.png",
    },
    {
      path: "/images/pngs/paperless.png",
      text: "Paperless",
      heading: "Paperless Work & Better Reporting",
      desc: "School-related work often involves extensive paperwork, which can be time-consuming and prone to issues such as data loss or damage. These limitations can make managing school operations challenging without reliable software. However, Edunext ERP addresses these challenges, offering a robust solution to streamline processes and eliminate the need for excessive paperwork. Edunext ERP provides a wide range of reports essential for school management, including fee reports, admission reports, and many others. These reports are easily accessible, enabling school administrators to make informed decisions efficiently. The system's advanced reporting capabilities ensure accuracy and reliability, making it a valuable tool for tracking and managing critical data.",
      image: "/images/pngs/paperless-image.png",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

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
      <div>
        <div className="text-xl w-full md:text-3xl text-center flex flex-col items-center gap-1 mb-10 text-black font-semibold ">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Chooose Us
          </motion.h1>
          <p className="w-15 h-[4px] bg-orange-400"></p>
        </div>

        <div className="w-full flex items-center justify-center">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex  flex-wrap gap-5 lg:gap-15 xl:gap-15 transition-all duration-300 px-5 md:px-10 py-5 h-full bg-white-200 shadow-md hover:shadow-lg border border-transparent hover:border hover:border-gray-200 rounded-xl items-center justify-center "
          >
            {items.map((item, idx) => (
              <li
                onClick={() => setActiveTab(idx)}
                key={idx}
                className={`flex ${
                  activeTab === idx ? "bg-orange-400 text-white " : ""
                } p-2 rounded-xl items-center flex-col cursor-pointer transition-all duration-300 hover:bg-orange-300`}
              >
                <img
                  src={item.path}
                  className=" w-8 h-8 md:w-10 md:h-10"
                  alt={item.path}
                />
                <p className="text-md md:text-xl font-semibold">{item.text}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* dynamic description and image */}
        <div>
          <div className="flex flex-col lg:flex-row justify-center gap-10 p-5 md:px-10 md:py-20">
            {/* left: Text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full lg:w-1/2 flex flex-col gap-3"
            >
              <div className="text-xl w-fit md:text-2xl font-bold flex flex-col gap-1">
                <h2>{items[activeTab].heading}</h2>
                <p className="w-full h-[4px] bg-red-400"></p>
              </div>

              <p className="text-sm md:text-[18px] text-gray-600 leading-relaxed">
                {items[activeTab].desc}
              </p>
            </motion.div>
            {/* right Image */}
            <motion.div className="w-full lg:w-1/2">
              <motion.img
                src={items[activeTab].image}
                alt="About Illustration"
                className="w-full h-auto md:h-[450px]"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
