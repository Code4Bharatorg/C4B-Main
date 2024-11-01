"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ApproachSection = () => {
  const [flippedIndices, setFlippedIndices] = useState({});

  const approachSteps = [
    {
      id: 1,
      title: "Understand Your Needs",
      imgSrc: "/images/Web development.png",
      description:
        "We begin by thoroughly understanding your business requirements and goals.",
      details:
        "Our team conducts in-depth consultations to grasp your vision and the specific challenges you face. This ensures that the solutions we provide are tailored to your unique needs.",
    },
    {
      id: 2,
      title: "Customized Development",
      imgSrc: "/images/Mobile Application Development.png",
      description: "We develop solutions customized to your specifications.",
      details:
        "Leveraging the latest technologies, we build scalable and efficient solutions that align with your objectives.",
    },
    {
      id: 3,
      title: "Continuous Improvement",
      imgSrc: "/images/It consulting.png",
      description: "We believe in ongoing enhancement of your solutions.",
      details:
        "Post-deployment, we provide support and implement improvements based on user feedback and changing market trends.",
    },
    {
      id: 4,
      title: "Agile Methodology",
      imgSrc: "/images/Offshore development service.png",
      description: "Our agile approach ensures flexibility and rapid delivery.",
      details:
        "Using agile practices, we adapt to changes quickly and deliver incremental value throughout the project lifecycle.",
    },
  ];

  const handleFlipClick = (index) => {
    setFlippedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="w-full bg-[#DBE2EF] py-10">
      {/* Section Header */}
      <motion.div
        className="w-full px-5 md:px-24 flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-center">
          Our Approach
        </h1>
      </motion.div>

      {/* Approach Grid */}
      <motion.div
        className="w-full px-5 md:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {approachSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="relative w-full h-80 bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            style={{ perspective: "1000px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => handleFlipClick(index)}
          >
            <motion.div
              className="w-full h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{ rotateY: flippedIndices[index] ? 180 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-between bg-white rounded-2xl p-5"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Image */}
                <div className="w-full h-1/3 flex items-center justify-center">
                  <img
                    src={step.imgSrc}
                    alt={step.title}
                    className="w-20 h-20 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Title and Description */}
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mt-2">
                    {step.description}
                  </p>
                </div>

                {/* Read More Button */}
                <div className="flex justify-center mt-4">
                  <motion.button
                    aria-label={`Read more about ${step.title}`}
                    className="px-4 py-2 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white rounded-full text-sm font-semibold shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3F72AF]"
                    whileHover={{ scale: 1.05 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full flex items-center justify-center bg-[#f8f9fa] rounded-2xl p-5"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-sm text-gray-700">{step.details}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ApproachSection;
