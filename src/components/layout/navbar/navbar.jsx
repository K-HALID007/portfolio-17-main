"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for enhanced glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutme" },
    { name: "Contact", href: "/contactme" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-orange-500/10 border-b border-orange-500/20"
            : "bg-gray-900/60 backdrop-blur-md border-b border-gray-700/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo with gradient and glow effect */}
          <Link
            href="/"
            className="group relative outline-none focus:outline-none select-none"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative outline-none"
            >
              <span className="hidden sm:inline text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent transition-all duration-300">
                Khalid Shaikh
              </span>
              <span className="sm:hidden text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                KS
              </span>
              {/* Glow effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
            </motion.div>
          </Link>

          {/* Desktop Navigation with hover effects */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="outline-none focus:outline-none select-none"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative px-4 lg:px-5 py-2 rounded-lg group cursor-pointer outline-none"
                >
                  <span className="relative z-10 text-white group-hover:text-orange-400 transition-colors duration-300 text-sm lg:text-base font-medium">
                    {item.name}
                  </span>

                  {/* Animated underline */}
                  <span className="absolute bottom-1 left-4 lg:left-5 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-[calc(100%-2rem)] lg:group-hover:w-[calc(100%-2.5rem)] rounded-full"></span>

                  {/* Background glow on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 rounded-lg transition-all duration-300"></span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Menu with animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[150] text-white focus:outline-none outline-none p-2 rounded-lg hover:bg-orange-500/10 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                style={{ transformOrigin: "center" }}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white rounded-full transition-all duration-300"
              />
              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                className="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                style={{ transformOrigin: "center" }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu with Framer Motion animations - MOVED OUTSIDE nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[120] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Navigation Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-black border-l border-orange-500/20 shadow-2xl shadow-orange-500/20 z-[140] md:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 bg-orange-500/10 hover:bg-orange-500/20 rounded-lg transition-all duration-300 group border border-orange-500/30 hover:border-orange-500/50"
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <div className="flex flex-col p-6 pt-16 space-y-6">
                {/* Mobile Navigation Links */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="group block relative outline-none focus:outline-none select-none"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="relative px-4 py-3 rounded-xl overflow-hidden outline-none">
                        <span className="relative z-10 text-white group-hover:text-orange-400 transition-colors duration-300 text-lg font-semibold">
                          {item.name}
                        </span>

                        {/* Background on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300 rounded-xl"></span>

                        {/* Border glow */}
                        <span className="absolute inset-0 border border-transparent group-hover:border-orange-500/30 rounded-xl transition-all duration-300"></span>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Social Links */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-6 border-t border-gray-700/50"
                >
                  <p className="text-gray-400 text-sm mb-4 select-none">
                    Connect with me
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/K-HALID007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-orange-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-orange-500/30 outline-none focus:outline-none"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-orange-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-orange-500/30 outline-none focus:outline-none"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-orange-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-orange-500/30 outline-none focus:outline-none"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global styles to remove tap highlights */}
      <style jsx global>{`
        * {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-touch-callout: none;
        }

        a,
        button {
          -webkit-tap-highlight-color: transparent !important;
          outline: none !important;
        }

        a:focus,
        button:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        /* Allow text selection for text content only */
        p,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
      `}</style>
    </>
  );
};

export default Header;
