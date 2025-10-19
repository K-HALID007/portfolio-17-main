"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 88 },
  { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-300" />,
    level: 82,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 85 },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-400" />,
    level: 80,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-700" />,
    level: 78,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    level: 92,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 87 },
  { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 75 },
  { name: "AWS", icon: <FaAws className="text-orange-400" />, level: 70 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
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

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useEffect(() => {
    if (hoveredSkill) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredSkill]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "700ms" }}
        ></div>
      </div>

      {/* Tooltip with glassmorphism */}
      {hoveredSkill && (
        <motion.div
          className="fixed z-50 px-4 py-2 bg-gray-800/90 backdrop-blur-md text-sm font-bold text-white rounded-2xl shadow-2xl pointer-events-none select-none border border-orange-500/30"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-150%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          {hoveredSkill}
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl w-full text-center relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500/30 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-orange-500/50 p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill("")}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-600/10 transition-all duration-500 rounded-2xl"></div>

              {/* Icon with rotation animation */}
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl mb-3 relative z-10"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-center relative z-10 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {skill.name}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden relative z-10">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                />
              </div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: ["100%", "-100%"],
                  transition: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                  },
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Optional CTA or Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Continuously learning and expanding my tech stack
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
