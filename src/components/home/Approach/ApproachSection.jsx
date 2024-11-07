"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const steps = [
  {
    id: 1,
    title: "Understanding Your Needs",
    description:
      "At Code4Bharat, we begin every project with a consultation to align our solutions with your business objectives and technology needs.",
  },
  {
    id: 2,
    title: "Customized Development",
    description:
      "Our client-centered development process is flexible, allowing us to customize our approach for projects ranging from simple websites to complex enterprise applications.",
  },
  {
    id: 3,
    title: "Agile Methodology",
    description:
      "We employ an agile development methodology to stay adaptable to changes in project scope, enabling incremental progress and allowing for your feedback throughout the process.",
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "We provide ongoing post-launch support, maintenance, and continuous improvement to keep your web platforms and IT infrastructure up-to-date and efficient as your business evolves.",
  },
];

const ApproachSection = () => {
  return (
    <section className="w-full h-auto mt-10 flex flex-col lg:flex-row bg-gradient-to-r from-[#122932] to-[#1F3A61] text-white">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-[60%] h-auto lg:h-full px-5 md:px-24 py-10"
        initial={{ opacity: 0, x: -100 }} // Initial hidden state
        whileInView={{ opacity: 1, x: 0 }} // Animate into view
        viewport={{ once: false, amount: 0.2 }} // Animate every time 20% of the section is in view
        transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
      >
        {/* Heading Section */}
        <motion.div
          className="w-full h-auto flex flex-col"
          initial={{ opacity: 0, y: -50 }} // Slide in from top
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <span className="text-[6vw] md:text-[1.5vw] font-semibold text-[#A4D7E3]">
            How it Works?
          </span>
          <h1 className="text-[8vw] md:text-[2.5vw] w-full font-sans font-bold leading-tight md:leading-none">
            Our Process <br /> Workflow
          </h1>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          className="w-full h-auto mt-8 space-y-8"
          initial={{ opacity: 0, y: 50 }} // Start from below
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 }} // Add a delay between steps
        >
          {steps.slice(0, 3).map((step) => (
            <motion.div
              key={step.id}
              className="w-full flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0, x: -100 }} // Slide in from left
              whileInView={{ opacity: 1, x: 0 }} // Animate when in view
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-[20%] md:w-[15%] flex items-center justify-center mb-5 md:mb-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-[#A4D7E3]">
                  <h1 className="text-[4vw] md:text-[1.5vw] font-sans font-extrabold">
                    {step.id < 10 ? `0${step.id}` : step.id}
                  </h1>
                </div>
              </div>
              <div className="w-full md:w-[75%] flex flex-col justify-center text-center md:text-left">
                <span className="text-[4vw] md:text-[1.2vw] font-semibold text-[#A4D7E3]">
                  {step.title}
                </span>
                <h4 className="text-[3.5vw] md:text-[1vw]">{step.description}</h4>
              </div>
            </motion.div>
          ))}

          {/* Image for mobile devices between 3rd and 4th point */}
          <motion.div
            className="block md:hidden w-full h-[40vh] mt-5"
            initial={{ opacity: 0, scale: 0.8 }} // Start small
            whileInView={{ opacity: 1, scale: 1 }} // Grow into view
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src="/images/approach.png"
              alt="Approach"
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Final Step */}
        <motion.div
          className="w-full h-auto mt-8 space-y-8"
          initial={{ opacity: 0, y: 50 }} // Start from below
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
        >
          {steps.slice(3, 4).map((step) => (
            <motion.div
              key={step.id}
              className="w-full flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0, x: -100 }} // Slide in from left
              whileInView={{ opacity: 1, x: 0 }} // Animate when in view
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-[20%] md:w-[15%] flex items-center justify-center mb-5 md:mb-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-[#A4D7E3]">
                  <h1 className="text-[4vw] md:text-[1.5vw] font-sans font-extrabold">
                    {step.id < 10 ? `0${step.id}` : step.id}
                  </h1>
                </div>
              </div>
              <div className="w-full md:w-[75%] flex flex-col justify-center text-center md:text-left">
                <span className="text-[4vw] md:text-[1.2vw] font-semibold text-[#A4D7E3]">
                  {step.title}
                </span>
                <h4 className="text-[3.5vw] md:text-[1vw]">{step.description}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image for desktop (shown only on larger screens) */}
      <motion.div
        className="hidden md:block w-full lg:w-[40%] h-auto lg:h-full"
        initial={{ opacity: 0, scale: 0.8 }} // Start small
        whileInView={{ opacity: 1, scale: 1 }} // Grow into view
        viewport={{ once: false, amount: 0.2 }} // Animate every time in view
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      >
        <div className="w-full h-[50vh] lg:h-1/2">
          <Image
            src="/images/approach.png"
            alt="Approach"
            width={800}
            height={400}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ApproachSection;
  