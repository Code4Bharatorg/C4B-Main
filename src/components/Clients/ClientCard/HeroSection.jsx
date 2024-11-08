"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import Image from "next/image"; // Using Next.js Image component for optimization
import Link from "next/link";
const ClientsHeroSection = () => {
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
              Our Clients <br className="hidden md:block" /> Building Success{" "}
              <br className="hidden md:block" /> Together
            </motion.h1>
          </div>

          <div className="w-full hidden md:block">
            <motion.p
              className="text-[.9vw] font-medium"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              At Code4Bharat, we value our clients and strive to provide
              exceptional IT solutions. <br />
              Our commitment is to empower businesses and foster growth in the
              digital landscape.
            </motion.p>
          </div>

          <motion.div
            className="w-full text-center md:text-left"
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            {/* <Link href="/aboutus">
              <motion.button
                whileHover={{ scale: 1.03 }} // Slight hover effect
                className="px-6 py-3 text-[4vw] md:text-[1vw] font-medium bg-white text-black rounded-md"
              >
                Learn More About Our Clients
              </motion.button>
            </Link> */}
          </motion.div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="right w-full md:w-[40%] h-[50%] md:h-full flex items-center justify-center"
          variants={imageVariants}
        >
          <Image
            src="/images/services3.jpg"
            alt="Clients Banner"
            width={400}
            height={400}
            className="w-[60%] h-[60%] md:w-[80%] md:h-[80%] object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientsHeroSection;
