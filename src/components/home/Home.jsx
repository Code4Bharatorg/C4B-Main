// components/home/Home.js
import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./HomeCard/HeroSection";
import ServiceSection from "../home/ServicesHome/ServiceSection";

import TestimonialsSection from "../home/Testimonial/TestimonialSection";
import Footer from "../layouts/footer/Footer";
import ApproachSection from "../home/Approach/ApproachSection";

const Home = () => {
  return (
    <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <div className="mb-[2em] md:mb-0">
        <TestimonialsSection />
      </div>
      <ApproachSection />
      <Footer />
    </div>
  );
};

export default Home;
