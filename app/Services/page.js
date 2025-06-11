"use client";

import React, { useState } from "react";
import GetStarted from "../components/GetStarted";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModel";
import { useModal } from "../context/ModelContext";
import { motion } from "framer-motion";
import Services from "../components/Services";

const Service = () => {
  const { openModal, closeModal, isModalOpen, setIsModalOpen } = useModal();

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

  const stats = [
    {
      path: "",
      title: "6+ Year",
      subtitle: "Legacy",
    },
    {
      path: "",
      title: "300+",
      subtitle: "Clients",
    },
    {
      path: "",
      title: "300+",
      subtitle: "ERP Projects",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full p-8 md:px-20 md:py-20 bg-gradient-to-br from-blue-200 to-transparent ">
        <motion.h1
          className="text-5xl font-bold"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Services
        </motion.h1>
        <Navigation />
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 md:px-20 md:py-10"
        style={{
          backgroundImage: "url('/images/aboutBg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left side */}
        <motion.div className="flex justify-center ">
          <motion.img
            src="/images/aboutPage.png"
            alt="About"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Right side */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-2"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Building Smarter Schools with Advanced ERP Technology
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            &quot;Build smarter schools with our advanced ERP technology, designed to
            streamline administration, enhance communication, and improve
            student management. Our solution integrates key functionalities,
            ensuring seamless operations, data security, and efficient
            decision-making for better educational outcomes and smoother school
            operations.&quot;
          </p>

          {/* stats */}

          <div className="flex flex-col sm:flex-row gap-4 lg:pt-8 justify-between">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-800 text-white px-10 w-full md:[200px] lg:w-[250px] py-8 grid grid-cols-2 lg:flex rounded-xl"
              >
                {/* <img src={} alt="" /> */}
                <div className="flex flex-col w-full">
                  <h2 className="text-md md:text-2xl text-center">
                    {stat.title}
                  </h2>
                  <p className="text-md md:text-lg text-center">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tabs Section */}

      <Services />

      <GetStarted />
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Service;
