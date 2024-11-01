"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";
import { motion } from "framer-motion"; // Importing Framer Motion for subtle animations

const Footer = () => {
  return (
    <div className="w-full h-auto pt-5 bg-[#f9f9f9]">
      <div className="w-full h-auto border-t-2 border-[#112D4E] flex flex-wrap justify-between px-5 md:px-24 py-10">
        {/* Logo Section */}
        <div className="w-full md:w-[40%] h-auto flex flex-col items-start md:items-start mb-8 md:mb-0">
          <div className="w-[60%] md:w-[17vw] h-auto mb-5 md:mb-8">
            <img
              src="/images/logo.png"
              alt="Code4Bharat"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-[4vw] md:text-[1vw] font-medium text-left mb-2 ml-12 md:text-left">
            Code4Bharat is at the forefront of providing world-class <br />  IT
            solutions, helping businesses globally leverage technology <br />for
            growth and success.
          </p>
        </div>

        {/* Featured Links */}
        <div className="w-full md:w-[20%] h-auto mb-8 md:mb-0 flex flex-col items-start">
          <h1 className="text-[5vw] md:text-[1vw] font-bold">Featured Links</h1>
          <div className="mt-2 space-y-2">
            {["Home", "About Us", "Our Services", "Our Clients", "Our Approach"].map(
              (link, index) => (
                <motion.h5
                  key={index}
                  className="text-[4vw] md:text-[1vw] hover:text-[#1976D2] cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }} // Slightly scale up on hover
                >
                  {link}
                </motion.h5>
              )
            )}
          </div>
        </div>

        {/* Legal */}
        <div className="w-full md:w-[20%] h-auto mb-8 md:mb-0 flex flex-col items-start">
          <h1 className="text-[5vw] md:text-[1vw] font-bold">Legal</h1>
          <div className="mt-2 space-y-2">
            {["Terms & Conditions", "Privacy & Security", "Contact"].map(
              (link, index) => (
                <motion.h5
                  key={index}
                  className="text-[4vw] md:text-[1vw] hover:text-[#1976D2] cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }} // Slightly scale up on hover
                >
                  {link}
                </motion.h5>
              )
            )}
          </div>
        </div>

        {/* Resources */}
        <div className="w-full md:w-[20%] h-auto flex flex-col items-start">
          <h1 className="text-[5vw] md:text-[1vw] font-bold">Resources</h1>
          <div className="mt-2 space-y-2">
            {["Blog", "Help Center"].map((link, index) => (
              <motion.h5
                key={index}
                className="text-[4vw] md:text-[1vw] hover:text-[#1976D2] cursor-pointer transition-colors duration-300"
                whileHover={{ scale: 1.05 }} // Slightly scale up on hover
              >
                {link}
              </motion.h5>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full h-auto border-t-2 border-[#112D4E] flex flex-col md:flex-row justify-between items-center px-5 md:px-24 py-5">
        <h1 className="text-[4vw] md:text-[1vw] font-bold text-left md:text-center">
          © 2011-2024 Code for Bharat. All Rights Reserved.
        </h1>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-5 md:mt-0">
          <Link href="https://www.facebook.com/profile.php?id=61552341000278">
            <motion.div
              className="w-10 h-10 bg-[#3b5998] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }} // Scale up the icon on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaFacebookF className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
          <Link href="https://www.instagram.com/code4bharat_/">
            <motion.div
              className="w-10 h-10 bg-[#E1306C] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }} // Scale up the icon on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaInstagram className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
          <Link href="https://x.com/Code4Bharat">
            <motion.div
              className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }} // Scale up the icon on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CiTwitter className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
          <Link href="http://linkedin.com/company/code4bharat">
            <motion.div
              className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }} // Scale up the icon on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaLinkedinIn className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
