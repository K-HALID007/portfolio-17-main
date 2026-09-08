"use client";
import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "about-me-cursor";
    cursor.innerText = "About Me";
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

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.15;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate cursor smoothly following the mouse
    const animate = () => {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      cursor.style.display = "block";
      window.addEventListener("mousemove", moveCursor);
      animate();
    };

    const handleLeave = () => {
      cursor.style.display = "none";
      window.removeEventListener("mousemove", moveCursor);
    };

    const section = sectionRef.current;
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
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col-reverse xl:flex-row items-center max-w-7xl w-full gap-10 sm:gap-14 lg:gap-16">
        {/* Left side: Text content */}
        <div className="text-center xl:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-5">
            Full-Stack Developer &amp; DevOps
          </div>

          <h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 animate-fadeIn leading-tight tracking-tight"
            style={{
              animationDuration: "1.2s",
              animationTimingFunction: "ease-out",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
              Khalid
            </span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed px-2 sm:px-0">
            <Typewriter
              words={[
                `I’m Khalid Shaikh, a passionate and results-driven MERN Stack Developer and DevOps Engineer. I specialize in building scalable web applications, cloud-native deployments, and responsive user interfaces with clean, maintainable code. My experience includes projects like dynamic e-commerce platforms, full-stack apps, and system integrations.

I love learning new tools, contributing to open-source projects, and mentoring fellow developers. I’m currently working with Next.js, React, and Tailwind CSS to create modern and performant web experiences.`,
              ]}
              typeSpeed={30}
              deleteSpeed={0}
              delaySpeed={1000}
              cursor
            />
          </div>
        </div>

        {/* Right side: Profile Image */}
        <div className="flex justify-center xl:justify-end flex-1 mt-6 xl:mt-0">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-purple-500/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <img
              src="/k.png"
              alt="Khalid"
              className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-indigo-500/40 shadow-2xl ring-4 ring-cyan-500/20 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Fade-in animation style */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
