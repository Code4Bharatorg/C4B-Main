import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./ServiceCard/HeroSection";
import ServicesSection from "./ServiceSection/ServiceSec";
import Footer from "../layouts/footer/Footer";

const Service = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <HeroSection />
      <ServicesSection/>
      <Footer/>
    </div>
  );
};

export default Service;
