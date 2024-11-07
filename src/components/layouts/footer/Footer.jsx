"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className="w-full h-auto pt-5 bg-[#f9f9f9]"
      style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }} // Added shadow above footer
    >
      {/* Main Content Section */}
      <div className="w-full h-auto flex flex-wrap justify-between px-5 md:px-24 py-10">
        {/* Logo Section */}
        <div className="w-full md:w-[30%] lg:w-[25%] h-auto flex flex-col items-start mb-8 md:mb-0">
          <div className="w-[60%] md:w-[15vw] h-auto mb-5">
            <img
              src="/images/logo.png"
              alt="Code4Bharat"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-[4vw] md:text-[1vw] font-medium">
            Code4Bharat is at the forefront of providing world-class <br /> IT
            solutions, helping businesses globally leverage technology <br />
            for growth and success.
          </p>
        </div>

        {/* Featured Links Section */}
        <div className="w-full md:w-[20%] lg:w-[15%] h-auto flex flex-col items-start mb-8 md:mb-0">
          <h1 className="text-[5vw] md:text-[1vw] font-bold">Featured Links</h1>
          <div className="mt-2 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutus" },
              { name: "Our Services", path: "/services" },
              { name: "Our Clients", path: "/clients" },
              { name: "Our Approach", path: "/approach" },
            ].map((link, index) => (
              <Link key={index} href={link.path}>
                <motion.h5
                  className="text-[4vw] md:text-[1vw] hover:text-[#1976D2] cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.h5>
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <div className="w-full md:w-[20%] lg:w-[15%] h-auto flex flex-col items-start mb-8 md:mb-0">
          <h1 className="text-[5vw] md:text-[1vw] font-bold">Legal</h1>
          <div className="mt-2 space-y-2">
            {[
              { name: "Terms & Conditions", path: "/termsandcondition" },
              { name: "Contact", path: "/contactus" },
            ].map((item, index) => (
              <Link key={index} href={item.path}>
                <motion.h5
                  className="text-[4vw] md:text-[1vw] hover:text-[#1976D2] cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.h5>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-[30%] lg:w-[25%] h-auto flex flex-col items-start">
          <h1 className="text-[5vw] md:text-[1vw] font-bold">Contact Us</h1>
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-[4vw] md:text-[1vw]">
              <span className="font-medium mr-2">Call:</span>
              <a
                href="tel:+919594402916"
                className="text-blue-600 hover:underline"
              >
                +91 959 440 2916
              </a>
            </div>
            <div className="flex items-center text-[4vw] md:text-[1vw]">
              <span className="font-medium mr-2">Email:</span>
              <a
                href="mailto:code4bharat@gmail.com"
                className="text-blue-600 hover:underline"
              >
                code4bharat@gmail.com
              </a>
            </div>
            <a
              href="https://maps.app.goo.gl/DzBt4BdL9BH4MRga9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[4vw] md:text-[1vw] hover:text-[#1976D2] cursor-pointer transition-colors duration-300"
            >
              <span className="font-medium">Office:</span> Off BKC, Mumbai,
              India 400070.
            </a>
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
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaFacebookF className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
          <Link href="https://www.instagram.com/code4bharat_/">
            <motion.div
              className="w-10 h-10 bg-[#E1306C] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaInstagram className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
          <Link href="https://x.com/Code4Bharat">
            <motion.div
              className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CiTwitter className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
          <Link href="http://linkedin.com/company/code4bharat">
            <motion.div
              className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaLinkedinIn className="text-[4vw] md:text-[1vw] text-white" />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* WhatsApp Icon - Fixed */}
      <a
        href="https://wa.me/919594402916?text=Hello%20Code4Bharat,%20I%20need%20your%20help"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
      >
        <FaWhatsapp className="text-white text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]" />
      </a>
    </div>
  );
};
export default Footer;
