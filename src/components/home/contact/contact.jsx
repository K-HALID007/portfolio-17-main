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
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 bg-[#030712] pt-24 sm:pt-28 lg:pt-32 pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "700ms" }}></div>
      </div>

      <div className="w-full flex-1 flex items-center justify-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl w-full text-center relative z-10 py-6"
        >
          {/* Animated heading */}
          <motion.div
            variants={itemVariants}
            className="mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight tracking-tight">
              Contact Me
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Got a project idea or just want to say hello? Fill out the form below or reach out directly!
            </p>
          </motion.div>

          {/* Form container with glassmorphism */}
          <motion.form
            variants={itemVariants}
            className="space-y-4 sm:space-y-6 bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-500"
          >
            <div className="space-y-4 sm:space-y-5">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3.5 sm:p-4 rounded-xl border border-white/[0.08] bg-slate-950/60 backdrop-blur-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base group-hover:border-white/20"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3.5 sm:p-4 rounded-xl border border-white/[0.08] bg-slate-950/60 backdrop-blur-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base group-hover:border-white/20"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3.5 sm:p-4 rounded-xl border border-white/[0.08] bg-slate-950/60 backdrop-blur-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none group-hover:border-white/20"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button with hover effects */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold rounded-xl text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 relative overflow-hidden group"
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
              className="bg-slate-900/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full group-hover:bg-indigo-500/20 transition-all duration-300">
                  <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm mb-1">Email</p>
                  <a
                    href="mailto:ks0903525@gmail.com"
                    className="text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm font-medium transition-colors duration-300 break-all"
                  >
                    ks0903525@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full group-hover:bg-indigo-500/20 transition-all duration-300">
                  <FaPhoneAlt className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm mb-1">Phone</p>
                  <a
                    href="tel:8828057917"
                    className="text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm font-medium transition-colors duration-300"
                  >
                    +91 8828057917
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group sm:col-span-3 md:col-span-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full group-hover:bg-indigo-500/20 transition-all duration-300">
                  <FaMapMarkerAlt className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm mb-1">Location</p>
                  <p className="text-cyan-300 text-xs sm:text-sm font-medium">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Docked Footer / Copyright Bar */}
      <motion.footer
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 w-full max-w-4xl pt-8 pb-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 mt-12"
      >
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-white font-medium">Khalid Shaikh</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">All rights reserved.</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>Full Stack Developer & DevOps</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 inline-block animate-pulse"></span>
          <span>Mumbai, India</span>
        </div>
      </motion.footer>

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
