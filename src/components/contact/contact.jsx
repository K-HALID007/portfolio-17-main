"use client";
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    const cursor = document.createElement("div");
    cursor.id = "reach-out-cursor";
    cursor.innerText = "Reach Out";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      zIndex: "9999",
      pointerEvents: "none",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "600",
      fontFamily: "sans-serif",
      padding: "4px 10px",
      borderRadius: "12px",
      whiteSpace: "nowrap",
      textShadow: `
        0 0 6px rgba(251, 146, 60, 0.6),
        0 0 12px rgba(251, 146, 60, 0.5),
        0 0 18px rgba(251, 146, 60, 0.4)
      `,
      transition: "transform 0.1s ease",
      transform: "translate(30px, -50%)",
      display: "none",
      background: "transparent",
      willChange: "transform",
    });

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const section = document.getElementById("contact");

    const handleEnter = () => {
      cursor.style.display = "block";
      window.addEventListener("mousemove", moveCursor);
    };

    const handleLeave = () => {
      cursor.style.display = "none";
      window.removeEventListener("mousemove", moveCursor);
    };

    section?.addEventListener("mouseenter", handleEnter);
    section?.addEventListener("mouseleave", handleLeave);

    return () => {
      section?.removeEventListener("mouseenter", handleEnter);
      section?.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
      cursor.remove();
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.4 },
    },
  };

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "700ms" }}
        ></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16 relative z-10"
      >
        {/* Left Side: Text Content */}
        <motion.div
          variants={itemVariants}
          className="w-full xl:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 text-center xl:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text border-b-2 sm:border-b-4 border-orange-500 inline-block">
              Touch
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto xl:mx-0 leading-relaxed">
            Have questions, opportunities, or feedback? I'd love to hear from
            you and discuss how we can collaborate.
          </p>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="space-y-3 sm:space-y-4 lg:space-y-5 pt-2 sm:pt-4 max-w-lg mx-auto xl:mx-0"
          >
            {/* Email */}
            <motion.a
              href="mailto:ks0903525@gmail.com"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group w-full shadow-lg hover:shadow-orange-500/20"
            >
              <div className="p-2 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-all duration-300">
                <FaEnvelope className="text-orange-500 text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                  Email
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-orange-400 truncate">
                  ks0903525@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+918828057917"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group w-full shadow-lg hover:shadow-orange-500/20"
            >
              <div className="p-2 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-all duration-300">
                <FaPhoneAlt className="text-orange-500 text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                  Phone
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-orange-400">
                  +91 8828057917
                </p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group w-full shadow-lg hover:shadow-orange-500/20"
            >
              <div className="p-2 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-all duration-300">
                <FaMapMarkerAlt className="text-orange-500 text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                  Address
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-orange-400">
                  Vikhroli, Mumbai, India
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
            <h3 className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-semibold">
              Connect with me
            </h3>
            <div className="flex justify-center xl:justify-start gap-3 sm:gap-4 lg:gap-5 flex-wrap">
              <motion.a
                href="https://wa.me/918828057917"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 bg-gray-800/50 hover:bg-green-400/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-green-400/30 shadow-lg"
              >
                <FaWhatsapp className="text-green-400 text-xl sm:text-2xl lg:text-3xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/khalid-shaikh-7392b4320"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 bg-gray-800/50 hover:bg-blue-500/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-blue-500/30 shadow-lg"
              >
                <FaLinkedin className="text-blue-500 text-xl sm:text-2xl lg:text-3xl" />
              </motion.a>

              <motion.a
                href="https://github.com/K-HALID007"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 bg-gray-800/50 hover:bg-gray-300/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-300/30 shadow-lg"
              >
                <FaGithub className="text-gray-300 text-xl sm:text-2xl lg:text-3xl" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/khalid.devops"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 bg-gray-800/50 hover:bg-pink-500/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-pink-500/30 shadow-lg"
              >
                <FaInstagram className="text-pink-500 text-xl sm:text-2xl lg:text-3xl" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated SVG Illustration */}
        <motion.div
          variants={svgVariants}
          className="w-full xl:w-1/2 flex justify-center items-center mt-6 sm:mt-8 xl:mt-0"
        >
          <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-md">
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 400 400"
              className="drop-shadow-2xl w-full h-auto"
            >
              <defs>
                <linearGradient
                  id="bgGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="phoneGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient
                  id="messageGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>

              <circle
                cx="200"
                cy="200"
                r="180"
                fill="url(#bgGradient)"
                className="animate-pulse-slow"
              />

              <g className="animate-float">
                <rect
                  x="140"
                  y="120"
                  width="120"
                  height="200"
                  rx="20"
                  fill="url(#phoneGradient)"
                  className="drop-shadow-lg"
                />
                <rect
                  x="150"
                  y="140"
                  width="100"
                  height="160"
                  rx="8"
                  fill="#1f2937"
                />

                <circle cx="200" cy="135" r="3" fill="#6b7280" />
                <rect
                  x="170"
                  y="150"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#f97316"
                />
                <rect
                  x="160"
                  y="160"
                  width="80"
                  height="3"
                  rx="1.5"
                  fill="#6b7280"
                />
                <rect
                  x="160"
                  y="170"
                  width="70"
                  height="3"
                  rx="1.5"
                  fill="#6b7280"
                />
                <rect
                  x="160"
                  y="180"
                  width="75"
                  height="3"
                  rx="1.5"
                  fill="#6b7280"
                />

                <rect
                  x="160"
                  y="200"
                  width="50"
                  height="20"
                  rx="10"
                  fill="#f97316"
                  className="animate-pulse"
                />
                <rect
                  x="190"
                  y="230"
                  width="45"
                  height="20"
                  rx="10"
                  fill="#374151"
                />
                <rect
                  x="160"
                  y="260"
                  width="55"
                  height="20"
                  rx="10"
                  fill="#f97316"
                  className="animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </g>

              <g className="animate-float" style={{ animationDelay: "1s" }}>
                <circle
                  cx="100"
                  cy="150"
                  r="25"
                  fill="url(#messageGradient)"
                  opacity="0.8"
                />
                <path
                  d="M85 140 L115 140 L115 155 L105 155 L100 165 L95 155 L85 155 Z"
                  fill="white"
                />
                <rect x="90" y="145" width="20" height="2" fill="#1f2937" />
                <rect x="90" y="150" width="15" height="2" fill="#1f2937" />
              </g>

              <g className="animate-float" style={{ animationDelay: "2s" }}>
                <circle cx="320" cy="180" r="20" fill="#f97316" opacity="0.8" />
                <path
                  d="M310 175 L330 175 L330 185 L325 185 L320 190 L315 185 L310 185 Z"
                  fill="white"
                />
                <rect x="313" y="178" width="14" height="1.5" fill="#1f2937" />
                <rect x="313" y="181" width="10" height="1.5" fill="#1f2937" />
              </g>

              <g className="animate-float" style={{ animationDelay: "1.5s" }}>
                <circle cx="300" cy="280" r="22" fill="#fb923c" opacity="0.8" />
                <rect
                  x="285"
                  y="270"
                  width="30"
                  height="20"
                  rx="3"
                  fill="white"
                />
                <path
                  d="M285 270 L300 280 L315 270"
                  stroke="#1f2937"
                  strokeWidth="2"
                  fill="none"
                />
              </g>

              <circle
                cx="80"
                cy="250"
                r="4"
                fill="#f97316"
                className="animate-ping"
              />
              <circle
                cx="320"
                cy="120"
                r="3"
                fill="#fb923c"
                className="animate-ping"
                style={{ animationDelay: "1s" }}
              />
              <circle
                cx="350"
                cy="220"
                r="2"
                fill="#f97316"
                className="animate-ping"
                style={{ animationDelay: "2s" }}
              />

              <g
                stroke="#f97316"
                strokeWidth="2"
                opacity="0.3"
                className="animate-pulse"
              >
                <line x1="125" y1="150" x2="140" y2="160" />
                <line x1="260" y1="180" x2="300" y2="180" />
                <line x1="260" y1="250" x2="285" y2="270" />
              </g>

              <circle
                cx="60"
                cy="100"
                r="2"
                fill="#f97316"
                opacity="0.6"
                className="animate-bounce"
              />
              <circle
                cx="340"
                cy="320"
                r="1.5"
                fill="#fb923c"
                opacity="0.6"
                className="animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <circle
                cx="380"
                cy="80"
                r="1"
                fill="#f97316"
                opacity="0.6"
                className="animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center text-xs sm:text-sm text-gray-400 mt-12 sm:mt-16 lg:mt-20 xl:mt-24"
      >
        © 2025 | Khalid Shaikh
      </motion.div>

      {/* Remove tap highlight */}
      <style jsx global>{`
        * {
          -webkit-tap-highlight-color: transparent !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
