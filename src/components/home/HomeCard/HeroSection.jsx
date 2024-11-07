"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import Image from "next/image"; // Using Next.js Image component for optimization
import Link from "next/link";

const HeroSection = () => {
  // Minimal animation variants
  const minimalVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below with low opacity
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="herosection w-full h-[calc(80vh-10vh)] flex items-center justify-center relative">
      <div className="w-[90%] h-[80%] bg-[#106EB5] rounded-3xl flex overflow-hidden text-white flex-col md:flex-row">
        {/* Left Section */}
        <div className="left w-full md:w-[70%] h-[50%] md:h-full px-5 md:px-10 flex flex-col items-center justify-center gap-5">
          {/* Minimalistic H1 animation */}
          <motion.div
            className="w-full"
            initial="hidden"
            animate="visible"
            variants={minimalVariants}
          >
            <h1 className="text-[7vw] md:text-[3.5vw] font-bold font-sans leading-tight md:leading-none text-center md:text-left">
              Boost Your <br className="hidden md:block" /> Business with{" "}
              <br className="hidden md:block" /> Cutting-Edge IT Solutions
            </h1>
          </motion.div>

          {/* Minimalistic Paragraph animation */}
          <motion.div
            className="w-full hidden md:block"
            initial="hidden"
            animate="visible"
            variants={minimalVariants}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[.9vw] font-medium">
              Unlock your full potential with our tailored <br /> technology
              services. From innovative software <br /> development to robust
              cybersecurity, we empower your business to thrive in the digital
              age.
            </p>
          </motion.div>

          {/* Button with subtle hover effect */}
          <motion.div
            className="w-full text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={minimalVariants}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contactus">
              <motion.button
                whileHover={{ scale: 1.03 }} // Slight hover effect
                className="px-6 py-3 text-[4vw] md:text-[1vw] font-medium bg-white text-black rounded-md"
              >
                Get Started Today!
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          className="right w-full md:w-[40%] h-[50%] md:h-full flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/images/herosection.png"
            alt="Banner"
            width={400}
            height={400}
            className="w-[60%] h-[60%] md:w-[80%] md:h-[80%] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
