"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      imgSrc: "/images/Web development.png",
    },
    {
      title: "Mobile Application Development",
      imgSrc: "/images/Mobile Application Development.png",
    },
    {
      title: "IT Consulting",
      imgSrc: "/images/It consulting.png",
    },
    {
      title: "E-Commerce Solutions",
      imgSrc: "/images/E commerce solution.png",
    },
    {
      title: "Offshore Development Services",
      imgSrc: "/images/Offshore development service.png",
    },
    {
      title: "Digital Marketing Solutions",
      imgSrc: "/images/Digital Marketing Solution.png",
    },
    // New Service: Artificial Intelligence
    {
      title: "Artificial Intelligence",
      imgSrc: "/images/Web development.png",
    },
    // New Service: Analytics
    {
      title: "Analytics",
      imgSrc: "/images/Digital Marketing Solution.png",
    },
  ];

  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger animation for each child (service card)
      },
    },
  };

  // Animation variants for each service card
  const itemVariants = {
    hidden: { opacity: 0, y: -50 }, // Start 50px above and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for bounce effect
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Animation variants for the section title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for the Read More button
  const buttonVariants = {
    rest: {
      scale: 1,
      backgroundColor: "#3F72AF",
      color: "#FFFFFF",
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#FFFFFF",
      color: "#3F72AF",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="w-full h-auto bg-[#DBE2EF] py-10">
      {/* Title */}
      <motion.div
        className="w-full h-auto px-5 md:px-24 flex items-center justify-center mb-10"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h1 className="font-sans text-[6vw] md:text-[2.5vw] font-bold text-center">
          Our Services
        </h1>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="w-full h-auto px-5 md:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16" // Increased gap from gap-8 to gap-10
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          
          <motion.div
            key={index}
            className="bg-white rounded-md overflow-hidden shadow-md flex flex-col justify-between h-full" // Added h-full to make all cards same height
            variants={itemVariants}
            whileHover="hover" // Apply hover animation
          >
            {/* Service Image */}
            <motion.div
              className="w-full h-[180px] sm:h-[220px] md:h-[250px] overflow-hidden" // Increased image height for longer cards
              variants={{
                hover: {
                  scale: 1.05,
                  transition: { duration: 0.3 },
                },
              }}
            >
              <motion.img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Service Title and Read More Button */}
            <div className="w-full h-auto p-5 flex flex-col justify-between gap-4"> {/* Increased padding for better spacing */}
              <h4 className="text-center text-[3.5vw] sm:text-[1.8vw] md:text-[1vw] font-semibold mt-2">
                {service.title.includes("E-Commerce") ? (
                  <span>
                    E-Commerce
                    <br />
                    Solutions
                  </span>
                ) : service.title.includes("Digital") ? (
                  <span>
                    Digital Marketing
                    <br />
                    Solutions
                  </span>
                ) : service.title.includes("Artificial Intelligence") ? (
                  <span>
                    Artificial
                    <br />
                    Intelligence
                  </span>
                ) : service.title.includes("Offshore") ? (
                  <span>
                    Offshore
                    <br />
                    Development
                    <br />
                    Services
                  </span>
                ) : (
                  service.title
                )}
              </h4>

              {/* Read More Button */}
              <motion.div
                className="flex justify-end"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonVariants}
              >
                <motion.button
                  aria-label={`Read more about ${service.title}`}
                  className="px-2 py-0.5 bg-[#3F72AF] text-white rounded-full text-[2.5vw] sm:text-[1vw] md:text-[0.6vw] font-semibold cursor-pointer border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#3F72AF] focus:ring-offset-2"
                  variants={buttonVariants}
                >
                  Read More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
