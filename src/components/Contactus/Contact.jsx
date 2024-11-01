import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";
import HeroSection from "./ContactSection/HeroSection";
import ContactForm from "./ContactCard/ContactForm";

const Contact = () => {
  return (
    <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
      <Navbar />
      <HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
