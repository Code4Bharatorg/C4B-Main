"use client";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion

const values = [
  {
    id: 1,
    title: "Software Solutions",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    imageSrc: "/images/layers.png",
    details: (
      <>
        <p>
          <strong>Code4Bharat</strong> specializes in providing IT solutions, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Web Development</li>
          <li>Mobile Application Development</li>
          <li>Custom Software Solutions</li>
          <li>E-commerce Development</li>
          <li>API Integration</li>
          <li>UI/UX Design</li>
        </ul>
        <p className="mt-4">
          Clients who engage Code4Bharat for these services will enter into a separate Service Agreement that details the specific terms of the project, including deliverables, timelines, payments, and warranties.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    imageSrc: "/images/domain (1).png",
    details: (
      <>
        <p>
          At <strong>Code4Bharat</strong>, we deliver exceptional web development services tailored to meet the specific needs of businesses. From creating responsive, user-friendly websites to developing sophisticated web applications, we cover it all. Our expertise includes:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Custom Website Development</strong></li>
          <li><strong>E-commerce Platforms</strong></li>
          <li><strong>Content Management Systems (CMS)</strong></li>
          <li><strong>Web Applications</strong></li>
        </ul>
        <p className="mt-4">
          We ensure that every website we develop is fully optimized for performance, SEO, and user experience, making sure your online presence stands out.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Digital Transformation",
    description:
      "We leverage cutting-edge technologies to transform your business processes, enhance customer experiences, and drive innovation.",
    imageSrc: "/images/connection.png",
    details: (
      <>
        <p>
          <strong>Digital Transformation</strong> at Code4Bharat involves leveraging cutting-edge technologies to transform your business processes, enhance customer experiences, and drive innovation. Our services include:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cloud Computing Solutions</li>
          <li>Data Analytics and Business Intelligence</li>
          <li>Automation and AI Integration</li>
          <li>Digital Strategy Consulting</li>
        </ul>
        <p className="mt-4">
          By partnering with us, businesses can seamlessly transition into the digital age, ensuring efficiency, scalability, and a competitive edge in their respective industries.
        </p>
      </>
    ),
  },
];

// Animation variants for text and cards
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

// ValueCard component with flip functionality
const ValueCard = ({ value }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-[90%] md:w-[25%] h-[400px] md:h-[400px] bg-white rounded-2xl p-5 flex items-center justify-center shadow-lg cursor-pointer mt-8"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }} // Slight hover effect on card
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }} // Add perspective for 3D effect
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
          className="absolute w-full h-full flex flex-col items-center justify-between bg-white rounded-2xl gap-8 p-5"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="w-full h-[30%] flex items-center justify-center">
            <div className="w-20 h-20">
              <img
                src={value.imageSrc}
                alt={value.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[50%] flex items-center justify-center flex-col text-center gap-2 md:gap-5 px-2">
            <span className="text-lg md:text-xl font-bold font-sans">
              {value.title}
            </span>
            <p className="text-sm md:text-md font-medium">
              {value.description}
            </p>
          </div>
          <div className="w-full h-[20%] flex items-center justify-center mt-2 md:mt-5">
            <motion.span
              className="flex items-center gap-2 text-sm md:text-md font-semibold text-blue-600"
              whileHover={{ x: 5 }} // Move text slightly on hover
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card flip
                setIsFlipped(true);
              }}
            >
              Read More <FaArrowRight />
            </motion.span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-between bg-[#f8f9fa] rounded-2xl p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-auto flex items-center justify-center">
            <div className="w-20 h-20">
              <img
                src={value.imageSrc}
                alt={`${value.title} Back`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[60%] overflow-y-auto px-2">
            <div className="text-sm md:text-xs space-y-2">
              {value.details}
            </div>
          </div>
          <div className="w-full h-[20%] flex items-center justify-center mt-2 md:mt-5">
            <motion.span
              className="flex items-center gap-2 text-sm md:text-xs font-semibold text-blue-600"
              whileHover={{ x: -5 }} // Move text slightly on hover
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card flip
                setIsFlipped(false);
              }}
            >
              <FaArrowLeft /> Back
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ValuesSection = () => {
  return (
    <section className="w-full h-auto md:h-[100%] bg-[#DBE2EF] p-5 md:p-10 bg-cover bg-center">
      {/* Header Section */}
      <motion.div
        className="w-full h-auto md:h-[20%] flex items-center justify-center flex-col gap-5 mb-5 md:mb-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation on entering the section
        viewport={{ once: false, amount: 0.3 }} // Controls the re-trigger and when it starts
      >
        <motion.div
          className="w-[35%] md:w-[15%] h-auto md:h-[25%] rounded-full flex items-center justify-center bg-[#112D4E]"
          variants={textVariants} // Apply animation to the text header
        >
          <h1 className="font-semibold text-xl md:text-lg text-white">
            Our Values
          </h1>
        </motion.div>
        <motion.h1
          className="text-2xl md:text-4xl font-sans font-bold leading-tight text-center"
          variants={textVariants} // Apply animation to the main heading
        >
          Discover the <br />
          Values of Code4Bharat
        </motion.h1>
      </motion.div>

      {/* Values Cards with animation */}
      <motion.div
        className="w-full h-auto md:h-[80%] flex flex-wrap justify-center gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {values.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </motion.div>
    </section>
  );
};

export default ValuesSection;
