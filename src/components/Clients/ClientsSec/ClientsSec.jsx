"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const ServicesSection = () => {
  const services = [
    {
      title: "E-commerce",
      imgSrc: "/images/e commerce.png",
    },
    {
      title: "Healthcare",
      imgSrc: "/images/9.png",
    },
    {
      title: "Education",
      imgSrc: "/images/10.png",
    },
    {
      title: "Finance",
      imgSrc: "/images/11.png",
    },
  ];

  // Animation variants for the container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full h-auto bg-[#DBE2EF] py-10">
      {/* Section Header */}
      <motion.div
        className="w-full h-auto px-5 md:px-24 flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-sans text-[6vw] md:text-[2.5vw] font-bold text-center">
          Our Clients
        </h1>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="w-full h-auto px-5 md:px-24 flex flex-wrap justify-center md:justify-between gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[45%] md:w-[22%] bg-white rounded-md mb-6 overflow-hidden shadow-md flex flex-col justify-between"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Slight hover effect on the card
          >
            {/* Service Image */}
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px]">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Service Title and Read More Button */}
            <div className="w-full h-auto p-5 flex flex-col justify-between gap-3">
              <h4 className="text-center text-[5vw] sm:text-[3vw] md:text-[1.2vw] font-semibold mt-3">
                {service.title}
              </h4>
              <div className="flex justify-end">
                <motion.div
                  className="w-auto px-4 py-1 bg-[#3F72AF] text-white rounded-2xl text-[4vw] sm:text-[2.5vw] md:text-[.8vw] font-semibold"
                  whileHover={{ scale: 1.1 }} // Hover effect on the button
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Read More
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
