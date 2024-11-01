import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Image from "next/image"; // Importing Next.js Image component

const ServiceCard = ({
  image,
  imageHover,
  title,
  description,
  noLineHeight,
}) => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleHoverStart = () => {
    setIsHovered(true); // Set hover to true on hover start
  };

  const handleHoverEnd = () => {
    setIsHovered(false); // Set hover to false on hover end
  };

  return (
    <motion.div
      className={`w-[80vw] md:w-[30vw] lg:w-[22vw] h-[40vh] cursor-pointer rounded-2xl flex-shrink-0 shadow-lg p-4 transition-all duration-300
        ${isHovered ? "bg-[#112D4E]" : "bg-white"}`} // Faster background change
      initial={{ rotateY: 0, rotateX: 0 }} // Initial no rotation
      whileHover={{ rotateY: -20, rotateX: 5 }} // Tilt on hover
      transition={{ duration: 0.2, ease: "easeInOut" }} // Faster tilt effect
      onMouseEnter={handleHoverStart} // Track hover start
      onMouseLeave={handleHoverEnd} // Track hover end
    >
      <div className="w-full h-[25%] flex items-center justify-between px-5 md:px-10">
        <div className="w-[20%] md:w-[15%] h-[50%] md:h-[70%]">
          {/* Change image source based on hover */}
          <Image
            src={isHovered ? imageHover : image} // Swap image on hover
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[70%]">
          <h3
            className={`text-[4vw] md:text-[1.2vw] font-sans font-bold transition-colors duration-200 ${
              isHovered ? "text-white" : "text-black" // Faster text color change
            } ${noLineHeight ? "leading-none" : ""}`}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="w-full h-[55%] flex items-center">
        <p
          className={`ml-[1.5em] md:ml-[3em] text-[3.5vw] md:text-[1vw] transition-colors duration-200 ${
            isHovered ? "text-white" : "text-black" // Faster text color change
          }`}
        >
          {description}
        </p>
      </div>
      <div className="w-full h-[20%] flex items-center">
       
      </div>
    </motion.div>
  );
};

export default ServiceCard;
