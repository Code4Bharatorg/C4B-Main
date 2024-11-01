import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";
import HeroSection from "../Approach/ApprochCard/HeroSection";
import ApproachSec from "../Approach/ApproachSec/ApproachSec";

const Approach = () => {
  return (
    <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E] ">
      <Navbar />
      <HeroSection />
      <ApproachSec/>
      <Footer/>
    </div>
  );
};

export default Approach;
