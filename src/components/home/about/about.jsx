"use client";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "about-cursor";
    cursor.innerText = "Khalid Shaikh";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      zIndex: "9999",
      pointerEvents: "none",
      color: "#f8fafc",
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "var(--font-geist-sans), sans-serif",
      padding: "6px 14px",
      borderRadius: "9999px",
      whiteSpace: "nowrap",
      transform: "translate(24px, -50%)",
      transition: "opacity 0.25s ease, transform 0.15s ease",
      display: "none",
      backgroundColor: "rgba(3, 7, 18, 0.75)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)",
      userSelect: "none",
    });

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX + 30}px`; // 30px right of pointer
      cursor.style.top = `${e.clientY}px`;
    };

    const section = document.getElementById("about-section");

    const handleEnter = () => {
      cursor.style.display = "block";
      window.addEventListener("mousemove", moveCursor);
    };

    const handleLeave = () => {
      cursor.style.display = "none";
      window.removeEventListener("mousemove", moveCursor);
    };

    if (section) {
      section.addEventListener("mouseenter", handleEnter);
      section.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mouseenter", handleEnter);
        section.removeEventListener("mouseleave", handleLeave);
      }
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <section
      id="about-section"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-[#030712] py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Soft ambient backlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
        {/* Text Content */}
        <div className="w-full xl:w-1/2 text-center xl:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-5">
            About Me
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-[1.15] tracking-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
              reliable software
            </span>
            {", from mobile apps to full-stack platforms."}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            I&apos;m <span className="text-white font-semibold">Khalid Shaikh</span>, a Software Engineer at MCS MAX. I build offline-first Android apps with Kotlin and Room, cross-platform mobile apps with React Native, and enterprise APIs with .NET Core.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            I&apos;ve also built full-stack web platforms and cloud projects. I care about clean architecture, dependable software, and thoughtful user experiences.
          </p>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/[0.08]">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                10+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Projects Built
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                MERN
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Full Stack Core
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Cloud
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Docker &amp; DevOps
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image with Glowing Glass Frame */}
        <div className="w-full xl:w-1/2 flex justify-center mt-6 xl:mt-0">
          <div className="relative group">
            {/* Ambient backlight */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-xl shadow-2xl">
              <img
                src="/k.png"
                alt="Khalid profile"
                className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-auto lg:max-w-md object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
