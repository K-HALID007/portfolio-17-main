"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NotePad Web Application",
    description:
      "A fully responsive Notepad Web Application with complete CRUD functionality, user authentication, and real-time MongoDB integration for seamless note management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Daisy UI"],
    image: "notepad.png",
    link: "https://note-pad-qsph.onrender.com",
    github: "https://github.com/K-HALID007/Note-Pad",
  },
  {
    title: "Imagify – AI Image Generator",
    description:
      "An AI-powered Text-to-Image SaaS platform with credit-based system, payment integration, and real-time image generation using advanced AI APIs.",
    tech: ["React.js", "Node.js", "MongoDB", "ClipDrop API", "Razorpay"],
    image: "imagify.png",
    link: "https://image7.vercel.app/",
    github: "https://github.com/K-HALID007/image-generator",
  },
  {
    title: "Weather App",
    description:
      "A real-time Weather Application fetching live data using OpenWeather API. Displays temperature, humidity, and weather conditions with a clean, responsive UI.",
    tech: ["React.js", "OpenWeather API", "Axios", "Tailwind CSS"],
    image: "weather.png",
    link: "https://khalid7.vercel.app",
    github: "https://github.com/K-HALID007/weather-app",
  },
];

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768 || "ontouchstart" in window;

    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "custom-cursor-label";
    cursor.textContent = "My Projects";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0",
      left: "0",
      padding: "6px 12px",
      color: "#fff",
      fontWeight: "700",
      fontSize: "18px",
      fontFamily: "Segoe UI",
      borderRadius: "9999px",
      pointerEvents: "none",
      userSelect: "none",
      transform: "translate(30px, -50%)",
      transition: "opacity 0.3s ease, transform 0.15s ease",
      opacity: "0",
      zIndex: "9999",
      whiteSpace: "nowrap",
      textShadow: "0 0 6px rgba(0,0,0,0.7)",
      backgroundColor: "transparent",
    });

    let mouseX = -9999;
    let mouseY = -9999;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.15;

    const animate = () => {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const showCursor = () => {
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    const section = sectionRef.current;

    animate();

    window.addEventListener("mousemove", moveCursor);

    if (section) {
      section.addEventListener("mouseenter", showCursor);
      section.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      cursor.remove();
      window.removeEventListener("mousemove", moveCursor);
      if (section) {
        section.removeEventListener("mouseenter", showCursor);
        section.removeEventListener("mouseleave", hideCursor);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative"
      style={{ scrollMarginTop: "80px" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Showcasing my journey in full-stack development with real-world
            applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500/30 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-orange-500/50"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-52 lg:h-56 bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-orange-500/20 text-orange-300 text-xs sm:text-sm px-3 py-1 rounded-full border border-orange-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-700/50">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 font-semibold text-sm flex items-center gap-1 transition-colors duration-200"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white font-semibold text-sm flex items-center gap-1 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/K-HALID007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:scale-105"
          >
            <span>View All Projects on GitHub</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
