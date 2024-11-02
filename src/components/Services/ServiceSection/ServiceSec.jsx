"use client";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

// Services Data Array with Dummy Data
const services = [
  {
    id: 1,
    title: "Web Development",
    imgSrc: "/images/Web development.png", // Replace with your image paths
    date: "Launched: January 2023",
    description:
      "We create responsive and dynamic websites tailored to your business needs.",
    details: (
      <>
        <p>
          <strong>Web Development:</strong> At Code4Bharat, we deliver exceptional web development services tailored to meet the specific needs of businesses. From creating responsive, user-friendly websites to developing sophisticated web applications, we cover it all. Our expertise includes:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Custom Website Development</li>
          <li>E-commerce Platforms</li>
          <li>Content Management Systems (CMS)</li>
          <li>Web Applications</li>
        </ul>
        <p className="mt-4">
          We ensure that every website we develop is fully optimized for
          performance, SEO, and user experience, making sure your online
          presence stands out.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Mobile Application Development",
    imgSrc: "/images/Mobile Application Development.png",
    date: "Launched: March 2023",
    description:
      "Building intuitive and robust mobile applications for Android and iOS.",
    details: (
      <>
        <p>
          <strong>Mobile Application Development:</strong> at Code4Bharat focuses
          on creating intuitive and robust mobile applications for both Android
          and iOS platforms.
        </p>
        <p className="mt-4">
        In the mobile-first world, we help businesses build high-performing mobile apps that engage users and provide seamless experiences across platforms. Our team specializes in both *iOS* and *Android* development, ensuring robust and feature-rich mobile applications that enhance user engagement and meet your business goals.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "IT Consulting",
    imgSrc: "/images/It consulting.png",
    date: "Launched: May 2023",
    description:
      "Expert IT consulting to optimize your technology strategies and infrastructure.",
    details: (
      <>
        <p>
          <strong>IT Consulting:</strong> Our IT consulting services guide businesses through their digital transformation journey. Whether you need advice on infrastructure, cloud solutions, or integrating new technologies, our experts provide strategic insights and solutions tailored to your organization’s goals. We offer:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Technology Strategy Consulting</li>
          <li>Cloud Migration Solutions</li>
          <li>System Integration and Automation</li>
          
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    imgSrc: "/images/E commerce solution.png",
    date: "Launched: July 2023",
    description:
      "Comprehensive e-commerce solutions to build and grow your online store.",
    details: (
      <>
        <p>
          <strong>E-Commerce Solutions:</strong>Code4Bharat empowers businesses with end-to-end e-commerce solutions, providing everything from storefront setup to payment gateway integration. Our expertise in building secure, scalable e-commerce platforms ensures that your business is always ready to grow and meet customer demands efficiently.

        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Offshore Development Services",
    imgSrc: "/images/Offshore development service.png",
    date: "Launched: September 2023",
    description:
      "Scalable offshore development services with skilled professionals.",
    details: (
      <>
        <p>
          <strong>Offshore Development Services:</strong> We provide top-quality offshore development services, working closely with international clients to deliver high-quality software solutions. Our highly skilled team takes on complex development projects, offering cost-effective solutions without compromising on quality. We specialize in:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Dedicated Offshore Development Teams</li>
          <li>Project-Based Development</li>
          <li>Ongoing Support and Maintenance</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Digital Marketing Solutions",
    imgSrc: "/images/Digital Marketing Solution.png",
    date: "Launched: November 2023",
    description:
      "Strategic digital marketing solutions to enhance your online presence.",
    details: (
      <>
        <p>
          <strong>Digital Marketing Solutions:</strong> Beyond development, Code4Bharat helps businesses reach their target audiences through comprehensive *digital marketing services, including **SEO, **social media management, and **content marketing*. We ensure that your digital footprint is optimized for visibility and growth in an increasingly competitive market.

        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Artificial Intelligence",
    imgSrc: "/images/connection.png",
    date: "Launched: January 2024",
    description:
      "Leveraging AI technologies to create intelligent solutions for your business.",
    details: (
      <>
        <p>
          <strong>Artificial Intelligence:</strong> at Code4Bharat involves
          integrating AI technologies to enhance business operations and drive
          innovation.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Machine Learning Models</li>
          <li>Natural Language Processing</li>
          <li>AI-Powered Automation</li>
          <li>Data Analysis and Prediction</li>
        </ul>
        <p className="mt-4">
          Our AI solutions are tailored to meet your specific business needs,
          ensuring efficiency and competitive advantage.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Analytics",
    imgSrc: "/images/It consulting.png",
    date: "Launched: March 2024",
    description:
      "Data analytics services to help you make informed business decisions.",
    details: (
      <>
        <p>
          <strong>Analytics:</strong> at Code4Bharat provides comprehensive data
          analytics services to help you derive actionable insights from your
          data.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Data Warehousing</li>
          <li>Business Intelligence</li>
          <li>Predictive Analytics</li>
          <li>Data Visualization</li>
        </ul>
        <p className="mt-4">
          Our analytics solutions empower you to make data-driven decisions,
          enhancing your business strategies and performance.
        </p>
      </>
    ),
  },
];

// Animation Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the appearance of each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ServiceCard Component with Flip Functionality
const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full sm:w-80 h-96 bg-white rounded-2xl p-5 flex items-center justify-center shadow-lg cursor-pointer perspective"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }} // Slight hover effect on card
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-between bg-white rounded-2xl p-5 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* Service Image */}
          <div className="w-full h-1/3 flex items-center justify-center">
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-20 h-20 object-cover"
              loading="lazy" // Optimize image loading
            />
          </div>

          {/* Service Title and Description */}
          <div className="w-full h-1/2 flex flex-col items-center justify-center text-center gap-2 px-2">
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-sm font-medium text-gray-600">
              {service.description}
            </p>
          </div>

          {/* Read More Button */}
          <div className="w-full h-1/6 flex items-center justify-center">
            <motion.button
              aria-label={`Read more about ${service.title}`}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 focus:outline-none"
              whileHover={{ x: 5 }} // Move text slightly on hover
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card flip
                setIsFlipped(true);
              }}
            >
              Read More <FaArrowRight />
            </motion.button>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-between bg-[#f8f9fa] rounded-2xl p-5 backface-hidden rotateY-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Service Image */}
          <div className="w-full h-1/3 flex items-center justify-center">
            <img
              src={service.imgSrc}
              alt={`${service.title} Back`}
              className="w-20 h-20 object-cover"
              loading="lazy"
            />
          </div>

          {/* Detailed Information */}
          <div className="w-full h-2/3 overflow-y-auto px-2">
            <div className="text-sm space-y-2">
              {service.details}
              <p className="text-gray-700 mt-2">
                <strong>Date:</strong> {service.date}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="w-full h-1/6 flex items-center justify-center">
            <motion.button
              aria-label={`Close details about ${service.title}`}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 focus:outline-none"
              whileHover={{ x: -5 }} // Move text slightly on hover
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card flip
                setIsFlipped(false);
              }}
            >
              <FaArrowLeft /> Back
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ServicesSection Component
const ServicesSection = () => {
  return (
    <section className="w-full h-auto bg-[#DBE2EF] py-10">
      {/* Title */}
      <motion.div
        className="w-full h-auto px-5 md:px-24 flex items-center justify-center mb-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-center">
          Our Services
        </h1>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="w-full h-auto px-5 md:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
