"use client"
import HeroSection from "@/components/Aboutus/AboutCard/HeroSection";
import Navbar from "@/components/layouts/navbar/Navbar";
import React from "react";
import AboutusInfo from "./AboutusInfo/AboutusInfo";
import SupportersSection from "./OurSupporters/SupporterSection";

import ValuesSection from "./Values/ValuesSection";
import Footer from "../layouts/footer/Footer";

const Aboutus = () => {
  return (
    <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
      <Navbar />
      <HeroSection />
      <AboutusInfo />
      <SupportersSection />
      <ValuesSection />
      <Footer />
    </div>
  );
};

export default Aboutus;
