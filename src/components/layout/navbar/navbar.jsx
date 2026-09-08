"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Track scroll position for enhanced glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to highlight active nav item
  useEffect(() => {
    const sections = ["about", "skills", "experience", "projects", "contact"];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
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
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800 shadow-sm"
            : "bg-[#09090b]/60 backdrop-blur-sm border-b border-zinc-800/60"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          {/* Minimalist Logo */}
          <a
            href="#about"
            className="group outline-none select-none flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden border border-zinc-800 flex items-center justify-center bg-zinc-900 group-hover:border-zinc-600 transition-colors shadow-sm">
              <img
                src="/logo.png"
                alt="KS"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              Khalid Shaikh
            </span>
          </a>

          {/* Desktop Navigation & Get in Touch Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 outline-none select-none ${
                      isActive
                        ? "text-white bg-zinc-800/80"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[150] text-zinc-400 hover:text-white p-2 rounded-md hover:bg-zinc-900 transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-transform duration-200 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-transform duration-200 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[120] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-[260px] sm:w-[300px] bg-[#09090b] border-l border-zinc-800 z-[140] md:hidden flex flex-col justify-between p-6 pt-16"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-900 transition-colors"
                aria-label="Close Menu"
              >
                <svg
                  className="w-5 h-5"
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
              </button>

              {/* Mobile Drawer Brand */}
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-zinc-800/80">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-800 flex items-center justify-center bg-zinc-900 shadow-sm">
                  <img
                    src="/logo.png"
                    alt="KS"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white tracking-tight">
                    Khalid Shaikh
                  </span>
                  <span className="block text-[11px] text-zinc-500">
                    Software Engineer
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "text-white bg-zinc-800"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors block mt-2"
                >
                  Get in Touch
                </a>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-6 border-t border-zinc-800/80">
                <p className="text-zinc-500 text-xs mb-3">Connect</p>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/K-HALID007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-900 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/918828057917"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-900 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khalid-shaikh-7392b4320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-900 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
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
