"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const ContactForm = () => {
  // State management for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    referral: "",
    projectDetails: "",
    fileUpload: null, // Note: Files cannot be sent via WhatsApp URL
  });

  // Animation variants for the form elements
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "1234567890"; // Replace with your WhatsApp number in international format
    const message = `
      *New Contact Form Submission*
      *First Name:* ${formData.firstName}
      *Last Name:* ${formData.lastName}
      *Email:* ${formData.email}
      *Phone Number:* ${formData.phone}
      *Service Interested:* ${formData.service}
      *Referred By:* ${formData.referral}
      *Project Details:* ${formData.projectDetails}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${7385841171}?text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");

    // Clear the form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      referral: "",
      projectDetails: "",
      fileUpload: null,
    });
  };

  return (
    <section className="contactsection w-full bg-gradient-to-r from-[#DBE2EF] to-[#A3BFFA] p-5 md:px-16 lg:px-24 py-12">
      <motion.form
        className="bg-white p-8 md:p-12 rounded-3xl shadow-lg max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Stagger animation of the form fields
            },
          },
        }}
        onSubmit={handleSubmit}
      >
        {/* First Name and Last Name */}
        <motion.div className="mb-6 flex flex-col md:flex-row" variants={inputVariants}>
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 focus:border-blue-500 rounded-lg p-3 shadow-sm focus:outline-none transition"
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 focus:border-blue-500 rounded-lg p-3 shadow-sm focus:outline-none transition"
              placeholder="Enter your last name"
            />
          </div>
        </motion.div>

        {/* Email and Phone Number */}
        <motion.div className="mb-6 flex flex-col md:flex-row" variants={inputVariants}>
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 focus:border-blue-500 rounded-lg p-3 shadow-sm focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 focus:border-blue-500 rounded-lg p-3 shadow-sm focus:outline-none transition"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </motion.div>

        {/* Service and Referral */}
        <motion.div className="mb-6 flex flex-col md:flex-row" variants={inputVariants}>
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
              What service are you looking for? <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 focus:border-blue-500 rounded-lg p-3 shadow-sm focus:outline-none transition bg-white"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="consulting">Consulting</option>
              <option value="design">Design</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <label htmlFor="referral" className="block text-sm font-semibold text-gray-700 mb-1">
              Where did you hear about us? <span className="text-red-500">*</span>
            </label>
            <select
              id="referral"
              value={formData.referral}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 focus:border-blue-500 rounded-lg p-3 shadow-sm focus:outline-none transition bg-white"
            >
              <option value="">Select an option</option>
              <option value="friend">Friend</option>
              <option value="social-media">Social Media</option>
              <option value="search-engine">Search Engine</option>
              <option value="advertisement">Advertisement</option>
            </select>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div className="mb-6" variants={inputVariants}>
          <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-1">
            Tell us more about your project
          </label>
          <textarea
            id="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 focus:border-blue-500 rounded-lg p-3 shadow-sm focus:outline-none transition"
            rows="5"
            placeholder="Provide detailed information about your project..."
          ></textarea>
        </motion.div>

        {/* File Upload */}
        <motion.div className="mb-6" variants={inputVariants}>
          <label htmlFor="fileUpload" className="block text-sm font-semibold text-gray-700 mb-1">
            Upload a file
          </label>
          <input
            type="file"
            id="fileUpload"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-600 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
          />
          <p className="text-xs text-gray-500 mt-1">Note: File uploads are not sent via WhatsApp.</p>
        </motion.div>

        {/* Submit Button */}
        <motion.div className="flex justify-center" variants={inputVariants}>
          <motion.button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition text-lg"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }} // Button hover effect
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
