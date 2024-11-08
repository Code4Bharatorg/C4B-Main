"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard/Card";
import { motion } from "framer-motion"; // Import Framer Motion

const TestimonialsSection = () => {
  return (
    <section className="w-full h-full relative py-10">
      {/* Header Section */}
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-24 py-10">
        {/* Animate the Testimonials title */}
        <motion.div
          className="w-full md:w-[50%] text-center md:text-left mb-5 md:mb-0"
          initial={{ opacity: 0, x: -100 }} // Initial state (offscreen)
          whileInView={{ opacity: 1, x: 0 }} // Animate into view
          viewport={{ amount: 0.2 }} // Trigger animation every time 20% of the section is visible
          transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
        >
          <motion.span
            className="text-[4vw] md:text-[1.2vw] font-semibold text-[#576066]"
            initial={{ opacity: 0, x: -50 }} // Start hidden and slightly off to the left
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            viewport={{ amount: 0.2 }} // Trigger animation every time it enters view
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }} // Delayed effect
          >
            Testimonials
          </motion.span>
          <motion.h1
            className="text-[6vw] md:text-[2.5vw] font-sans font-bold leading-tight md:leading-none"
            initial={{ opacity: 0, x: -100 }} // Hidden and off-screen to the left
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            viewport={{ amount: 0.2 }} // Trigger animation every time it comes into view
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }} // Cascading effect
          >
            What Our Clients <br /> Say
          </motion.h1>
        </motion.div>

        {/* Animate the description */}
        <motion.div
          className="w-full md:w-[48%] text-center md:text-left"
          initial={{ opacity: 0, x: 100 }} // Hidden and off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate into view
          viewport={{ amount: 0.2 }} // Trigger animation every time it enters view
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }} // Delayed cascading effect
        >
          <p className="text-[4vw] md:text-[1vw] font-medium text-black">
            At Code4Bharat, we’re proud to partner with clients across
            e-commerce, healthcare, education, and finance. Our commitment to
            understanding their unique needs has fostered long-term relationships.
          </p>
        </motion.div>
      </div>

      {/* Testimonial Cards Section */}
      <div className="w-full px-5 md:px-24 flex flex-wrap justify-center gap-5 md:gap-10">
        {/* Testimonial Cards */}
        <TestimonialCard
          image="/images/faces/sanadnaqvi.jpeg"
          description="Code4Bharat transformed our online store! They understood our needs perfectly and delivered a scalable platform."
          name="Sanad Naqvi"
          username="sanadnaqvi"
          stars={5}
        />
        <TestimonialCard
          image="/images/faces/junedkhan.jpg"
          description="Fantastic support and seamless delivery! Code4Bharat’s team was attentive to our needs and continues to help us."
          name="Juned Khan"
          username="junedkhan"
          stars={4}
        />
        <TestimonialCard
          image="/images/faces/shamsshaikh.jpg"
          description="Great results and amazing ongoing support! Code4Bharat’s team has been fantastic every step of the way."
          name="Shams Shaikh"
          username="shamsshaikh"
          stars={5}
        />
        <TestimonialCard
          image="/images/faces/ayaanraje.png"
          description="The project exceeded our expectations. Code4Bharat delivered a top-notch product and continues to provide stellar support."
          name="Ayaan Raje"
          username="ayaanraje"
          stars={5}
        />
        <TestimonialCard
          image="/images/faces/muskanshaikh.jpg"
          description="Their support after the project has been exceptional, always there to help with any issues."
          name="Muskan Shaikh"
          username="muskanshaikh"
          stars={5}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
