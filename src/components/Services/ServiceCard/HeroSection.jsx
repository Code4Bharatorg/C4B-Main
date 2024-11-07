"use client";
import React from "react";
import Image from "next/image"; // Using Next.js Image component for optimization
import { motion } from "framer-motion"; // Importing Framer Motion for animations

// Animation variants for text and image
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const ServiceHeroSection = () => {
  return (
    <section className="herosection w-full h-[calc(80vh-10vh)] flex items-center justify-center relative">
      <motion.div
        className="w-[90%] h-[80%] bg-[#106EB5] rounded-3xl flex overflow-hidden text-white flex-col md:flex-row"
        initial="hidden"
        whileInView="visible" // Trigger the animation when this section is in view
        viewport={{ once: false, amount: 0.3 }} // Re-trigger the animation every time it enters the viewport
      >
        {/* Left Section */}
        <motion.div
          className="left w-full md:w-[70%] h-[50%] md:h-full px-5 md:px-10 flex flex-col items-center justify-center gap-5"
          variants={textVariants}
        >
          <div className="w-full">
            <motion.h1
              className="text-[7vw] md:text-[3.5vw] font-bold font-sans leading-tight md:leading-none text-center md:text-left"
              variants={textVariants}
            >
              Our Services <br className="hidden md:block" /> Empowering Businesses <br className="hidden md:block" /> through Innovation
            </motion.h1>
          </div>
          <div className="w-full hidden md:block">
            <motion.p
              className="text-[.9vw] font-medium"
              variants={textVariants}
            >
              At Code4Bharat, we specialize in delivering innovative IT solutions. <br />
              From tailored software development to web design, <br />
              we help businesses succeed in the digital world.
            </motion.p>
          </div>
          <motion.div
            className="w-full text-center md:text-left"
            variants={textVariants}
          >
            <button className="px-6 py-3 text-[4vw] md:text-[1vw] font-medium bg-white text-black rounded-md">
              Learn More About Our Services
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="right w-full md:w-[40%] h-[50%] md:h-full flex items-center justify-center"
          variants={imageVariants}
        >
          <Image
            src="/images/services2.jfif"
            alt="Services Banner"
            width={400}
            height={400}
            className="w-[60%] h-[60%] md:w-[80%] md:h-[80%] object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceHeroSection;
