"use client";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#09090b] px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24"
      style={{ scrollMarginTop: "80px" }}
    >
      <div
        className={`max-w-6xl mx-auto w-full flex flex-col-reverse xl:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Column: Intro, Typewriter, Metrics, CTAs */}
        <div className="w-full xl:w-7/12 text-center xl:text-left">
          {/* Status Badge */}
          <a
            href="https://mcsmax.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs font-medium mb-6 transition-colors group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>Software Engineer @ MCS MAX</span>
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
          </a>

          {/* Headline with Dynamic Rotating Specialties from Full Resume */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Hi, I&apos;m Khalid Shaikh <br className="hidden sm:inline" />
            <span className="text-zinc-400 font-medium text-2xl sm:text-3xl md:text-4xl block mt-2">
              I engineer{" "}
              <span className="text-white font-semibold">
                <Typewriter
                  words={[
                    "offline-first mobile apps.",
                    "enterprise .NET Core APIs.",
                    "native Android & Kotlin apps.",
                    "React Native mobile solutions.",
                    "multi-tenant database systems.",
                    "scalable MERN & Next.js platforms.",
                    "reliable SQLite & Room DB caching.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  cursorColor="#ffffff"
                  typeSpeed={65}
                  deleteSpeed={35}
                  delaySpeed={1700}
                />
              </span>
            </span>
          </h1>

          {/* Instant Comprehensive Bio */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-xl mx-auto xl:mx-0 font-normal">
            Software Engineer at <a href="https://mcsmax.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-200 font-medium hover:underline">MCS MAX</a> based in Mumbai. Specialized in engineering enterprise mobile applications with Kotlin &amp; React Native, high-performance .NET Core backend APIs, multi-tenant databases, and scalable full-stack web platforms with the MERN stack.
          </p>

          {/* Proof / Metric Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-lg mx-auto xl:mx-0">
            <a
              href="https://mcsmax.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-left transition-colors block group"
            >
              <div className="text-sm sm:text-base font-bold text-white group-hover:text-zinc-200 truncate flex items-center justify-between">
                <span>MCS MAX</span>
                <span className="text-xs text-zinc-500 group-hover:text-white">↗</span>
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Software Engineer</div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mcsmax.sitecaptain&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-left transition-colors block group"
            >
              <div className="text-sm sm:text-base font-bold text-white group-hover:text-zinc-200 truncate flex items-center justify-between">
                <span>SiteCaptain</span>
                <span className="text-xs text-zinc-500 group-hover:text-white">↗</span>
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Google Play App</div>
            </a>
            <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-left">
              <div className="text-sm sm:text-base font-bold text-white truncate">Full-Stack &amp; Mobile</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Kotlin • .NET • MERN</div>
            </div>
          </div>

          {/* Sober Minimalist CTAs */}
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors shadow-sm"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Social & Connect Links */}
          <div className="flex items-center justify-center xl:justify-start gap-3 mt-6 pt-6 border-t border-zinc-800/80">
            <span className="text-xs text-zinc-500 font-medium">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/K-HALID007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/khalid-shaikh-7392b4320"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/918828057917"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:ks0903525@gmail.com"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Circle Portrait */}
        <div className="flex justify-center xl:justify-end flex-1 mt-6 xl:mt-0">
          <div className="relative">
            <img
              src="/k.png"
              alt="Khalid Shaikh"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-zinc-700/80 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
