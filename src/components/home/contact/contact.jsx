"use client";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "700ms" }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Animated heading */}
        <motion.div
          variants={itemVariants}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-tight">
            Contact Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Got a project idea or just want to say hello? Fill out the form below or reach out via email!
          </p>
        </motion.div>

        {/* Form container with glassmorphism */}
        <motion.form
          variants={itemVariants}
          className="space-y-4 sm:space-y-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl shadow-orange-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500"
        >
          <div className="space-y-4 sm:space-y-5">
            {/* Name Input */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 sm:p-4 rounded-xl border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base group-hover:border-orange-500/30"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 sm:p-4 rounded-xl border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base group-hover:border-orange-500/30"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 sm:p-4 rounded-xl border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none group-hover:border-orange-500/30"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button with hover effects */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(251, 146, 60, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            {/* Shimmer effect on button */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            />
          </motion.button>
        </motion.form>

        {/* Contact info cards */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-all duration-300">
                <FaEnvelope className="text-orange-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Email</p>
                <a
                  href="mailto:ks0903525@gmail.com"
                  className="text-orange-400 hover:text-orange-300 text-xs sm:text-sm font-medium transition-colors duration-300 break-all"
                >
                  ks0903525@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-all duration-300">
                <FaPhoneAlt className="text-orange-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Phone</p>
                <a
                  href="tel:8828057917"
                  className="text-orange-400 hover:text-orange-300 text-xs sm:text-sm font-medium transition-colors duration-300"
                >
                  +91 8828057917
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group sm:col-span-3 md:col-span-1"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-all duration-300">
                <FaMapMarkerAlt className="text-orange-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Location</p>
                <p className="text-orange-400 text-xs sm:text-sm font-medium">
                  Mumbai, India
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Remove tap highlight */}
      <style jsx global>{`
        * {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-touch-callout: none;
        }
        
        input:focus, textarea:focus, button:focus {
          outline: none !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
