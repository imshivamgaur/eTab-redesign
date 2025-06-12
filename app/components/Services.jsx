"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const items = [
    {
      path: "/images/pngs/schoolERP.png",
      text: "School ERP",
      provides: [
        {
          path: "/images/schoolErp_pngs/erp-1.png",
          heading: "Admission Manager",
          desc: "Admission Manager simplifies student enrollment by automating application processing and managing data efficiently. It ensures a seamless admission experience for both students and administrators, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all admission-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-2.png",
          heading: "Fee Manager",
          desc: "Fee Manager simplifies the fee collection process by automating fee generation, tracking payments, and generating reports. It ensures that schools can manage fee-related tasks efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all fee-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-3.png",
          heading: "Marks Manager",
          desc: "Marks Manager simplifies the process of managing student grades and exam results by automating grade entry, generating reports, and tracking student performance. It ensures that schools can manage academic data efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all academic-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-4.png",
          heading: "Payroll Manager",
          desc: "Payroll Manager simplifies the process of managing employee salaries and benefits by automating payroll processing, generating payslips, and tracking deductions. It ensures that schools can manage payroll tasks efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all payroll-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-5.png",
          heading: "Accounts Manager",
          desc: "Accounts Manager simplifies the process of managing school finances by automating accounting tasks, tracking expenses, and generating financial reports. It ensures that schools can manage financial data efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all accounting-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-6.png",
          heading: "Book Manager",
          desc: "Book Manager simplifies the process of managing library resources by automating book cataloging, tracking loans, and generating reports. It ensures that schools can manage library tasks efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all library-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-7.png",
          heading: "Timetable Manager",
          desc: "Timetable Manager simplifies the process of creating and managing school schedules by automating timetable generation, tracking class assignments, and managing teacher availability. It ensures that schools can manage scheduling tasks efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all timetable-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-8.png",
          heading: "Attendance Manager",
          desc: "Attendance Manager simplifies the process of tracking student attendance by automating attendance recording, generating reports, and managing leave requests. It ensures that schools can manage attendance tasks efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all attendance-related tasks.",
        },
        {
          path: "/images/schoolErp_pngs/erp-9.png",
          heading: "Expense Manager",
          desc: "Expense Manager helps schools track and manage their expenditures by automating expense entry, categorizing costs, and generating detailed financial reports. It reduces the chances of overspending, ensures transparency in financial activities, and offers a user-friendly interface to monitor and control expenses effectively.",
        },
      ],
    },
    {
      path: "/images/pngs/mobileApp.png",
      text: "Mobile App",
      provides: [
        {
          path: "/images/mobileApp_pngs/app-1.svg",
          heading: "Student App",
          desc: "The Student App is designed to provide students with a user-friendly interface for accessing academic information, communicating with teachers, and managing their schedules. It allows students to view their grades, attendance records, and exam schedules, as well as receive notifications about upcoming events and assignments. The app also enables students to submit assignments, participate in online discussions, and access study materials from anywhere, at any time.",
        },
        {
          path: "/images/mobileApp_pngs/app-2.svg",
          heading: "Teacher App",
          desc: "The Teacher App is designed to help teachers manage their classes, communicate with students and parents, and access academic resources. It allows teachers to take attendance, enter grades, and create lesson plans, as well as send messages and notifications to students and parents. The app also provides teachers with access to student profiles, academic records, and performance reports, enabling them to track student progress and provide personalized support.",
        },
        {
          path: "/images/mobileApp_pngs/app-3.svg",
          heading: "Management App",
          desc: "The Management App is designed to help school administrators oversee operations, manage resources, and make informed decisions. It allows administrators to view real-time data on student enrollment, fee collection, and academic performance, as well as generate reports and analytics. The app also enables administrators to communicate with staff, parents, and students, track school finances, and monitor compliance with regulations.",
        },
        {
          path: "/images/mobileApp_pngs/app-4.svg",
          heading: "Visitor App",
          desc: "The Visitor App is designed to streamline the visitor management process, enhance security, and improve the overall visitor experience. It allows schools to register visitors, issue visitor passes, and track visitor activity in real-time. The app also enables schools to send notifications to hosts when visitors arrive, capture visitor photos and signatures, and generate visitor reports for security and compliance purposes.",
        },
        {
          path: "/images/mobileApp_pngs/app-5.svg",
          heading: "Transport App",
          desc: "Accounts Manager simplifies the process of managing school finances by automating accounting tasks, tracking expenses, and generating financial reports. It ensures that schools can manage financial data efficiently, reducing manual work and errors, and providing a streamlined, user-friendly interface for handling all accounting-related tasks.",
        },
      ],
    },
    {
      path: "/images/pngs/website.png",
      text: "Website",
      provides: [
        {
          path: "/images/webApp_pngs/web-1.png",
          heading: "Responsive Website",
          desc: "A responsive website is designed to adapt to different screen sizes and devices, ensuring a seamless user experience across desktops, laptops, tablets, and smartphones. It allows schools to reach a wider audience, engage with visitors effectively, and provide a consistent browsing experience on all devices. A responsive website also improves search engine rankings, increases website traffic, and enhances user engagement and conversion rates.",
        },
        {
          path: "/images/webApp_pngs/web-2.png",
          heading: "Dynamic Backend Panel",
          desc: "A dynamic backend panel allows schools to manage website content, update information, and customize features without any technical expertise. It provides an intuitive interface for administrators to add, edit, or delete pages, posts, images, and other elements on the website. A dynamic backend panel also enables schools to monitor website performance, track user activity, and analyze data to improve the overall user experience.",
        },
        {
          path: "/images/webApp_pngs/web-3.png",
          heading: "360 Virtual Tour",
          desc: "A 360 virtual tour allows schools to showcase their campus, facilities, and amenities in an immersive and interactive way. It provides prospective students and parents with a virtual walkthrough of the school, enabling them to explore classrooms, labs, libraries, sports facilities, and other areas from the comfort of their homes. A 360 virtual tour enhances the school's online presence, attracts more visitors, and increases engagement and enrollment rates.",
        },
        {
          path: "/images/webApp_pngs/web-4.png",
          heading: "Dynamic Gallery",
          desc: "A dynamic gallery allows schools to showcase photos, videos, and other multimedia content on their website. It provides an engaging visual experience for visitors, enabling them to view events, activities, and achievements in a visually appealing format. A dynamic gallery also allows schools to organize and categorize media content, create slideshows, and share updates with the school community.",
        },
        {
          path: "/images/webApp_pngs/web-5.png",
          heading: "Dynamic News & Notice",
          desc: "Dynamic News & Notice allows schools to publish updates, announcements, and notifications on their website in real-time. It provides a platform for schools to share news, events, and important information with students, parents, and staff. Dynamic News & Notice also enables schools to categorize and archive posts, schedule publication dates, and engage with the school community effectively.",
        },
        {
          path: "/images/webApp_pngs/web-6.png",
          heading: "Admission Enquiry",
          desc: "Admission Enquiry allows prospective students and parents to inquire about admission procedures, eligibility criteria, and course details online. It provides a convenient way for visitors to submit queries, request information, and express interest in enrolling at the school. Admission Enquiry also enables schools to capture leads, track inquiries, and follow up with applicants to streamline the admission process.",
        },
        {
          path: "/images/webApp_pngs/web-7.png",
          heading: "Power SEO",
          desc: "Power SEO helps schools improve their search engine rankings, increase website traffic, and attract more visitors. It optimizes website content, meta tags, images, and URLs to make them more search engine-friendly. Power SEO also enhances website performance, user experience, and online visibility, enabling schools to reach a wider audience and achieve higher conversion rates.",
        },
        {
          path: "/images/webApp_pngs/web-8.png",
          heading: "Social Media Management",
          desc: "Social Media Management helps schools create, publish, and share content on social media platforms to engage with their audience and build brand awareness. It enables schools to schedule posts, monitor engagement, and analyze performance to optimize their social media strategy. Social Media Management also allows schools to track mentions, respond to comments, and interact with followers to enhance their online presence.",
        },
      ],
    },
    {
      path: "/images/pngs/accessibility.png",
      text: "Smart Technology",

      provides: [
        {
          path: "/images/smartTech_pngs/t1.png",
          heading: "Payment Gateway",
          desc: "A payment gateway is a secure online platform that enables schools to collect fees, donations, and other payments from students, parents, and staff. It provides a convenient and reliable way for users to make payments using credit cards, debit cards, net banking, and other payment methods. A payment gateway also ensures that transactions are processed securely, quickly, and efficiently, reducing the risk of fraud and errors.",
        },
        {
          path: "/images/smartTech_pngs/t2.png",
          heading: "Business Whatsapp",
          desc: "Business Whatsapp is a powerful communication tool that enables schools to connect with students, parents, and staff through instant messaging. It allows schools to send updates, notifications, and reminders, as well as answer queries, provide support, and engage with the school community. Business Whatsapp also enables schools to create groups, broadcast messages, and automate responses to streamline communication and enhance engagement.",
        },
        {
          path: "/images/smartTech_pngs/t3.png",
          heading: "Fingerprint Machine",
          desc: "A fingerprint machine is a biometric device that uses fingerprint recognition technology to verify the identity of students, parents, and staff. It provides a secure and efficient way to track attendance, manage access control, and enhance security in schools. A fingerprint machine also eliminates the need for manual attendance registers, reduces the risk of proxy attendance, and ensures accurate and reliable attendance tracking.",
        },
        {
          path: "/images/smartTech_pngs/t4.png",
          heading: "Face Recognition",
          desc: "Face recognition is a biometric technology that uses facial features to identify and verify individuals. It provides a secure and convenient way to track attendance, manage access control, and enhance security in schools. Face recognition also eliminates the need for manual attendance registers, reduces the risk of proxy attendance, and ensures accurate and reliable attendance tracking.",
        },
        {
          path: "/images/smartTech_pngs/t5.png",
          heading: "GPS in School Bus",
          desc: "GPS in School Bus is a tracking system that enables schools to monitor the location of school buses in real-time. It provides parents, students, and school administrators with accurate and up-to-date information on bus routes, arrival times, and delays. This system enhances student safety by ensuring that buses are on the correct routes and on schedule. Additionally, it improves bus fleet management by providing insights into bus usage and maintenance needs. GPS in School Bus also helps in optimizing routes, reducing fuel consumption, and ensuring efficient transportation services. Overall, it offers peace of mind to parents and enhances the operational efficiency of school transportation.",
        },
        {
          path: "/images/smartTech_pngs/t6.png",
          heading: "Facial Attendance",
          desc: "Facial attendance is a biometric technology that uses facial recognition to track student attendance. It provides a secure and efficient way to record attendance, manage access control, and enhance security in schools. Facial attendance eliminates the need for manual attendance registers, reduces the risk of proxy attendance, and ensures accurate and reliable attendance tracking. It also enhances the overall attendance management process by providing real-time data, automated reporting, and seamless integration with other school systems.",
        },
      ],
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
    <div className="w-full p-8 md:px-20 md:py-10">
      <div>
        <div className="text-xl w-full md:text-3xl text-center flex flex-col items-center gap-1 mb-10 text-black font-semibold ">
          <h1>Our Services</h1>
          <p className="h-1 w-16 bg-orange-400"></p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 md:lg-10 md:py-20">
          {items[activeTab].provides.map((item, idx) => (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={idx}
              className="relative rounded-2xl bg-orange-400  hover:shadow-md "
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Direct DOM manipulation (no React state)
                const content = card.querySelector(".card-content");
                content.style.transform = `
          perspective(1000px)
          rotateX(${(rect.height / 2 - y) / 10}deg)
          rotateY(${(x - rect.width / 2) / 20}deg)
        `;
              }}
              onMouseLeave={(e) => {
                const content = e.currentTarget.querySelector(".card-content");
                content.style.transform =
                  "perspective(1000px) rotateX(0) rotateY(0)";
              }}
            >
              <div
                className="card-content bg-white/95 border border-gray-200 shadow-lg rounded-xl p-6 h-full"
                style={{ transition: "transform .05s linear" }} // Ultra-fast transition
              >
                {item.path && (
                  <div className="w-18 h-18 mb-4 bg-orange-400/10 rounded-lg flex items-center justify-center">
                    <img
                      src={item.path}
                      alt={item.heading}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.heading || "Coming Soon"}
                </h2>
                <p className="text-gray-600 text-sm">
                  {item.desc || "Description will be updated shortly."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center w-full">
            Perfect School Management System to Meet Your Institution Needs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10 md:lg-10 md:py-10">
            <div className="flex flex-col items-center w-fit p-5">
              <img src="/images/ic1.png" className="h-32 w-32" alt="" />
              <h3 className="font-semibold text-xl md:text-2xl leading-tight text-center">
                Simple & Easy to use for Teachers
              </h3>
              <p className="text-sm md:text-md lg:text-[16px] text-center ">
                Designed to engage teachers and parents. No expertise is
                required to quickly accomplish a task.
              </p>
            </div>
            <div className="flex flex-col items-center w-fit p-5">
              <img src="/images/ic2.png" className="h-32 w-32" alt="" />
              <h3 className="font-semibold text-xl md:text-2xl leading-tight text-center">
                Powerful features for your Institution
              </h3>
              <p className="text-sm md:text-md lg:text-[16px] text-center ">
                We provide everything you will ever need to run an education
                institution. No customization required
              </p>
            </div>
            <div className="flex flex-col items-center w-fit p-5">
              <img src="/images/ic3.png" className="h-32 w-32" alt="" />
              <h3 className="font-semibold text-xl md:text-2xl leading-tight text-center">
                Online & On-site Customer Support
              </h3>
              <p className="text-sm md:text-md lg:text-[16px] text-center ">
                Along with online & on-site support, Etab also offers on-demand
                & webinar-based training to their customers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
