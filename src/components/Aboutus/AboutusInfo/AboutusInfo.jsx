"use client";
import React, { useState } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutusInfo = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Animation variants for text and button
  const minimalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="aboutus w-full h-auto md:h-[75%] flex flex-col md:flex-row">
      {/* Left Section: About Code4Bharat */}
      <motion.div
        className="w-full md:w-[60%] h-auto md:h-full flex flex-col items-start justify-center p-5 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={minimalVariants}
      >
        <div className="w-full h-auto flex items-center mb-5">
          <motion.p
            className="w-auto md:w-[30%] h-[50%] flex items-center justify-center rounded-full bg-[#DBE2EF] text-[4vw] md:text-[1vw] font-semibold px-4 py-4 md:py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={minimalVariants}
          >
            About Code 4 Bharat
          </motion.p>
        </div>

        <motion.div
          className="w-full h-auto md:h-[90%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-[8vw] md:text-[3.5vw] font-bold font-sans leading-tight md:leading-none"
            variants={minimalVariants}
          >
            Your Guide <br />
            to Code4Bharat
          </motion.h1>

          <div className="w-full h-auto mt-5">
            <motion.span
              className="text-[4vw] md:text-[1vw] font-semibold block mb-5"
              variants={minimalVariants}
            >
              Code4Bharat is a leading IT solutions provider, specializing in: Cutting-edge web
              development
            </motion.span>

            <motion.div className="w-full h-auto" variants={staggerContainer}>
              <div className="flex flex-col gap-4">
                {[
                  "Comprehensive IT services for clients worldwide",
                  "Committed to delivering innovative and reliable solutions",
                  "Trusted partner for businesses to enhance their digital presence",
                  "Empower companies through the latest technology",
                  "Talented team dedicated to meeting clients' unique needs",
                  "Customized solutions focused on growth and efficiency",
                  "Expertise in Web development, Software, and Digital transformation",
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    className="flex items-center gap-2 text-[4vw] md:text-[1vw]"
                    variants={minimalVariants}
                  >
                    <FaArrowRight />
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section: Video Play Button */}
      <motion.div
        className="w-full md:w-[40%] h-auto md:h-full flex items-center justify-center mt-8 mb-8 md:mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={buttonVariants}
      >
        {!showVideo ? (
          <motion.div
            className="w-[70%] md:w-[50%] h-[25vh] md:h-[30vh] bg-yellow-100 relative flex items-center justify-center rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setShowVideo(true)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#122932] text-white flex items-center justify-center">
                <FaPlay className="text-[8vw] md:text-[2vw]" />
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="w-[80%] ml-8 md:w-[100%] h-[25vh] md:h-[50vh] flex items-center justify-center mr-8">
            <video
              src="/images/video.mp4" // Ensure the path is correct, e.g., /video.mp4
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default AboutusInfo;
