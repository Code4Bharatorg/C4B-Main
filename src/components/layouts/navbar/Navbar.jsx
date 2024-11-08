"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; // Importing framer-motion

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path
  const [isMobile, setIsMobile] = useState(false); // State to check if the screen is mobile

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if mobile view
    };
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  // Function to convert menu name to URL-friendly format
  const convertToPath = (name) => {
    return `/${name.toLowerCase().replace(/\s+/g, "")}`;
  };

  // Animation variants for the navbar items
  const navVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly lower
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Smooth transition
        ease: "easeInOut",
      },
    },
  };

  // Menu items including "Home" and "Verify Certificate"
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: convertToPath("About Us") },
    { name: "Services", path: convertToPath("Services") },
    { name: "Clients", path: convertToPath("Clients") },
    { name: "Approach", path: convertToPath("Approach") },
    { name: "Verify Certificate", path: "/verify" }, // New "Verify Certificate" link
    { name: "Contact Us", path: convertToPath("Contact Us") },
  ];

  return (
    <nav className="w-full h-[10%] flex justify-between items-center px-5 md:px-[6em] shadow-md relative">
      {/* LOGO Section */}
      <motion.div
        className="w-full md:w-[15vw] h-[10vw] flex justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/images/logo_trans.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-[100%] h-[55%] md:w-[100%] md:h-[100%] object-contain"
          />
        </Link>
      </motion.div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <BiMenuAltRight className="w-8 h-8 text-[#112D4E]" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.button
            className="absolute top-5 right-5"
            onClick={() => setIsMenuOpen(false)}
            variants={navVariants}
          >
            <MdClose className="w-8 h-8 text-[#112D4E]" />
          </motion.button>
          {menuItems.map(({ name, path }) => (
            <motion.div key={path} variants={navVariants} className="w-full">
              <Link href={path} onClick={handleLinkClick}>
                <div
                  className={`text-lg my-4 py-4 px-6 w-full border-b-2 border-gray-300 flex justify-between items-center ${
                    pathname === path ? "text-[#3b84d6] font-bold" : "text-black"
                  }`}
                >
                  <h3 className="font-medium capitalize">{name}</h3>
                  <LuArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Desktop Links Section */}
      <motion.div
        className="hidden md:flex gap-[4em] mr-[10em]"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        {menuItems.slice(0, -1).map(({ name, path }) => (
          <motion.div key={path} variants={navVariants}>
            <Link href={path} onClick={handleLinkClick}>
              <h3
                className={`text-[1vw] font-medium capitalize ${
                  pathname === path
                    ? "text-[#3b84d6] font-bold border-b-2 border-[#3b84d6]"
                    : ""
                }`}
              >
                {name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop "Get In Touch" Button */}
      <motion.div
        className="hidden md:block"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <Link href={menuItems[6].path} onClick={handleLinkClick}>
          <motion.button
            className="btn text-[1vw] font-medium border-[2.5px] border-[#112D4E] px-10 py-2 rounded-md transition-all duration-300 ease-in-out"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#112D4E", // Change background color on hover
              color: "#ffffff", // Change text color to white
              borderColor: "#ffffff", // Change border color
            }}
            variants={navVariants}
          >
            Get In Touch
          </motion.button>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
