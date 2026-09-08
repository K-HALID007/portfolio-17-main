"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaCogs, FaCloud } from "react-icons/fa";

const experiences = [
  
  {
    title: "MERN Stack Developer",
    description:
      "Built and deployed dynamic web apps using MongoDB, Express, React, and Node.js. Focused on creating clean UIs, RESTful APIs, and scalable backends.",
    icon: <FaCode className="text-blue-600 text-3xl" />,
  },
  {
    title: "DevOps Engineer",
    description:
      "Automated deployments, CI/CD pipelines, and cloud infrastructure using Docker, GitHub Actions, and AWS. Monitored apps with Prometheus and Grafana.",
    icon: <FaCogs className="text-green-600 text-3xl" />,
  },
  {
    title: "Cloud Deployment",
    description:
      "Deployed full-stack applications to AWS EC2, S3, and Vercel. Implemented domain routing, SSL, and CDN for better performance and security.",
    icon: <FaCloud className="text-purple-600 text-3xl" />,
  },
  {
    title: "Backend & API Development",
    description:
      "Designed secure REST APIs, handled user authentication, and integrated third-party services. Used Postman and Swagger for testing/documentation.",
    icon: <FaServer className="text-orange-600 text-3xl" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  }),
};

const Experience = () => {
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || "ontouchstart" in window;

    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "experience-cursor";
    cursor.innerText = "Experience";
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

    const section = document.getElementById("experience-section");

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
      id="experience-section"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#030712] py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4">
          Practical Knowledge
        </div>

        <motion.h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-10 sm:mb-12 lg:mb-14 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hands-on Experience
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/40 rounded-2xl shadow-xl transition-all duration-300 text-left hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl sm:text-4xl text-indigo-400 group-hover:scale-110 transition-transform duration-300">{exp.icon}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
