"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaLinux,
  FaServer,
  FaKey,
  FaMobileAlt,
  FaLayerGroup,
  FaCode,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiDotnet,
  SiPostgresql,
  SiPrisma,
  SiNginx,
  SiSocketdotio,
  SiKotlin,
  SiAndroid,
  SiVercel,
  SiPostman,
  SiSqlite,
  SiRedux,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Development",
    subtitle: "Modern, responsive UIs with performant component architectures.",
    icon: (
      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Scalable microservices, RESTful APIs, and enterprise systems.",
    icon: (
      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "C# / .NET Core", icon: <TbBrandCSharp /> },
      { name: "Entity Framework", icon: <SiDotnet /> },
      { name: "RESTful APIs", icon: <FaServer /> },
      { name: "Multi-Tenant Arch", icon: <FaCogs /> },
    ],
  },
  {
    title: "Mobile Development",
    subtitle: "Native Android and cross-platform apps with offline-first design.",
    icon: (
      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "Android (Kotlin)", icon: <SiKotlin /> },
      { name: "Jetpack Compose", icon: <SiAndroid /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "SQLite & Room DB", icon: <SiSqlite /> },
      { name: "Clean Architecture", icon: <FaCode /> },
      { name: "Mobile UI/UX", icon: <FaMobileAlt /> },
    ],
  },
  {
    title: "Databases & Storage",
    subtitle: "Relational & document data models, query optimization, and ORMs.",
    icon: (
      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL Server (SSMS)", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      { name: "Mongoose ODM", icon: <SiMongodb /> },
      { name: "Data Modeling", icon: <FaLayerGroup /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Containerization, automated deployments, and cloud infrastructure.",
    icon: (
      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "AWS Cloud", icon: <FaAws /> },
      { name: "Linux CLI", icon: <FaLinux /> },
      { name: "Nginx Server", icon: <SiNginx /> },
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "Vercel / Cloud", icon: <SiVercel /> },
    ],
  },
  {
    title: "Testing & Architecture",
    subtitle: "API testing workflows, system design patterns, and reliability.",
    icon: (
      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    skills: [
      { name: "Postman Envs", icon: <SiPostman /> },
      { name: "System Design", icon: <FaNetworkWired /> },
      { name: "JWT Security", icon: <FaKey /> },
      { name: "WebSockets", icon: <SiSocketdotio /> },
      { name: "API Integration", icon: <FaServer /> },
      { name: "Code Optimization", icon: <FaCode /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-24 sm:py-28 bg-[#09090b] text-white"
      style={{ scrollMarginTop: "80px" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-3">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Skills &amp; Architecture
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            A comprehensive overview across modern frontend frameworks, backend systems, mobile development, databases, and DevOps infrastructure.
          </p>
        </div>

        {/* 6 Balanced Equal Cards Grid */}
        <div className="grid gap-6 sm:gap-6 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700/80 hover:bg-zinc-900/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight truncate">
                      {category.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800/70 border border-zinc-700/60 text-zinc-400 font-medium whitespace-nowrap">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed mb-5 min-h-[36px]">
                  {category.subtitle}
                </p>

                {/* Skills Badges Grid (2 columns, 3 rows = 6 skills) */}
                <div className="grid grid-cols-2 gap-2 min-w-0">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center gap-2 px-2.5 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200 cursor-default min-w-0"
                    >
                      <span className="text-base shrink-0 text-zinc-400 group-hover:text-white transition-all duration-200 group-hover:scale-110">
                        {skill.icon}
                      </span>
                      <span className="text-xs text-zinc-300 group-hover:text-white font-medium truncate min-w-0 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
