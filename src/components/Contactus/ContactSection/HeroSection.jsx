"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import Image from "next/image"; // Using Next.js Image component for optimization

const ContactUsHeroSection = () => {
  // Animation variants for the text and image
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

  return (
    <section className="herosection w-full h-[calc(80vh-10vh)] flex items-center justify-center relative">
      <motion.div
        className="w-[90%] h-[80%] bg-[#106EB5] rounded-3xl flex overflow-hidden text-white flex-col md:flex-row"
        initial="hidden"
        whileInView="visible" // Trigger the animation when this section is in view
        viewport={{ once: false, amount: 0.3 }} // Re-trigger the animation every time it enters the viewport
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Stagger the appearance of child elements
            },
          },
        }}
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
              Contact Us <br className="hidden md:block" /> We're Here to Help <br className="hidden md:block" /> Reach Out Anytime
            </motion.h1>
          </div>
          <motion.div
            className="w-full hidden md:block"
            variants={textVariants}
          >
            <p className="text-[.9vw] font-medium">
              At Code4Bharat, we are dedicated to providing you with the best support. <br />
              Whether you have questions or need assistance, <br />
              we are just a message away.
            </p>
          </motion.div>
          <motion.div
            className="w-full text-center md:text-left"
            variants={textVariants}
          >
            <button className="px-6 py-3 text-[4vw] md:text-[1vw] font-medium bg-white text-black rounded-md">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="right w-full md:w-[40%] h-[50%] md:h-full flex items-center justify-center"
          variants={imageVariants}
        >
          <Image
            src="/images/services3.jfif"
            alt="Contact Us Banner"
            width={400}
            height={400}
            className="w-[60%] h-[60%] md:w-[80%] md:h-[80%] object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUsHeroSection;
