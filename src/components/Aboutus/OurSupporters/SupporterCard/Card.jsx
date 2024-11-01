"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SupporterCard = ({ imageSrc, altText, link }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center transition-transform duration-300 cursor-pointer focus:outline-none rounded-full bg-transparent"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      tabIndex={0}
      role="button"
      aria-label={`View details about ${altText}`}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter" && link) {
          window.open(link, "_blank");
        }
      }}
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={256}
        height={256}
        className="object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/default.png";
        }}
      />
    </motion.div>
  );
};

export default SupporterCard;
