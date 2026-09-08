"use client";
import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const education = [
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Guru Nanak High School, Vikhroli",
    duration: "2019 - 2020",
    description:
      "Laid a strong academic foundation with a focus on science and mathematics. Built interest in technology and logical thinking.",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Chandrabhan Sharma College, Powai",
    duration: "2021 - 2022",
    description:
      "Specialized in science with IT as a major subject. Developed strong fundamentals in computer science and problem-solving.",
  },
  {
    degree: "BSc IT (Bachelor of Science in Information Technology)",
    institution: "Mumbai University",
    duration: "2022 - 2025",
    description:
      "Focused on full-stack development, software engineering, database systems, and networking. Built academic projects using the MERN stack and gained exposure to DevOps tools and cloud deployment.",
  },
];

const Education = () => {
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "education-cursor";
    cursor.innerText = "Education";
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
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const section = document.getElementById("education-section");

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

    // Check if mouse is inside section on load
    const rect = section?.getBoundingClientRect();
    if (rect) {
      const onMouseMove = (e) => {
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          handleEnter();
        } else {
          handleLeave();
        }
      };

      window.addEventListener("mousemove", onMouseMove, { once: true });
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
      id="education-section"
      className="relative min-h-screen bg-[#030712] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Academic Background
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Education &amp; Qualifications
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <FadeInSlideUp key={index} delay={index * 150}>
              <div className="relative flex flex-col lg:flex-row bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 group">
                <div className="flex-shrink-0 lg:mr-6 text-indigo-400 text-3xl sm:text-4xl mb-4 lg:mb-0 text-center lg:text-left group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1.5 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-400/90 font-medium mb-3">
                    {edu.institution} • {edu.duration}
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </FadeInSlideUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Helper component to fade & slide up when visible
const FadeInSlideUp = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
      }}
    >
      {children}
    </div>
  );
};

export default Education;
