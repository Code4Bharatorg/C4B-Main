"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServicesCard/Card";

// Define Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },  // Initially, the text is hidden and slightly shifted downwards
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },  // Text fades in and moves up
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },  // Button starts off hidden and shifted downwards
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },  // Button fades in and moves up with a slight delay
  hover: { scale: 1.05 },  // Button scales up slightly on hover
};

const ServiceSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="servicesection w-full bg-[#DBE2EF] flex flex-col py-10 relative"
    >
      {/* Left heading and description */}
      <div className="leftheading w-full flex flex-col md:flex-row md:h-[50vh]">
        <div className="leftside w-full md:w-1/2 flex flex-col items-center justify-center gap-4 px-5 md:px-10">
          {/* Heading with fade-in animation */}
          <motion.div
            className="w-full md:w-[80%] text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}  // Apply textVariants here
          >
            <h1 className="font-sans text-[6vw] md:text-[2.5vw] font-bold">
              Amazing Services
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className="w-full md:w-[80%] text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}  // Apply textVariants to description too
            transition={{ delay: 0.1 }}  // slight delay for the description
          >
            <p className="text-[3.5vw] md:text-[.9vw] font-medium">
              At Code4Bharat, we drive your business forward with custom web and mobile app development,
              strategic IT consulting, and robust e-commerce solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Button with hover and animation */}
          <motion.div
            className="w-full md:w-[80%] text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={buttonVariants}  // Apply buttonVariants here
          >
            <motion.button
              whileHover="hover"
              className="px-8 py-3 text-[4vw] md:text-[1vw] font-medium bg-[#106EB5] text-white rounded-md"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="rightside w-full md:w-1/2 flex flex-wrap justify-center items-center gap-5 p-5 ">
          <ServiceCard
            image="/images/services img/webdev.png"
            imageHover="/images/services img/webwhite.png"
            title="Web Development"
            description="At Code4Bharat, we deliver tailored web development services, including custom websites, e-commerce platforms, and web applications."
          />
          <ServiceCard
            image="/images/services img/mobile.png"
            imageHover="/images/services img/mobilewhite.png"
            title="Mobile Development"
            description="We provide custom mobile app development services that bring your vision to life across iOS and Android platforms."
          />
        </div>
      </div>

      {/* Additional Cards */}
      <div className="w-full flex justify-center items-center p-5 md:p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-[#112D4E]">
          <ServiceCard
            image="/images/services img/it.png"
            imageHover="/images/services img/itwhite.png"
            title="IT Consulting"
            description="We help businesses navigate digital transformation with tailored solutions in technology strategy, cloud migration, and system integration."
          />
          <ServiceCard
            image="/images/services img/ecommerce.png"
            imageHover="/images/services img/ecommercewhite.png"
            title="E-Commerce Solutions"
            description="Code4Bharat provides complete e-commerce solutions, including storefront setup and payment integration, to create secure and scalable platforms that drive business growth."
          />
          <ServiceCard
            image="/images/services img/ofshore.png"
            imageHover="/images/services img/ofshorewhite.png"
            title="Offshore Development"
            description="We provide high-quality, cost-effective software solutions for international clients, including dedicated teams and ongoing support."
          />
          <ServiceCard
            image="/images/services img/ofshore.png"
            imageHover="/images/services img/ofshorewhite.png"
            title="Digital Marketing Solutions"
            description="Code4Bharat offers comprehensive digital marketing services such as SEO, social media management, and content marketing."
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
