"use client";
import React from "react";
import { motion } from "framer-motion";

const siteCaptainProject = {
  title: "SiteCaptain – EPC Mobile App",
  badge: "Enterprise Mobile App • MCS MAX",
  description:
    "A production enterprise mobile application built for MCS MAX, specialized for EPC (Engineering, Procurement, Construction) site management. Engineered with an offline-first architecture powered by SQLite and Room Database, enabling reliable local data storage and seamless operation without network dependency on remote construction sites.",
  tech: ["Kotlin", "Jetpack Compose", "SQLite", "Room DB", "Clean Architecture", "Offline Storage"],
  image: "/Sitecaptain.webp",
  link: "https://play.google.com/store/apps/details?id=com.mcsmax.sitecaptain&hl=en_IN",
};

const webProjects = [
  {
    title: "Imagify – AI Image Generator",
    urlLabel: "image7.vercel.app",
    description:
      "A text-to-image SaaS app where users create images from prompts and manage generation credits with integrated payments.",
    goal:
      "Make AI image creation easy to access through a simple prompt flow, credit-based usage, and Razorpay checkout.",
    tech: ["React.js", "Node.js", "MongoDB", "ClipDrop API", "Razorpay"],
    image: "/imagify.png",
    link: "https://image7.vercel.app/",
  },
  {
    title: "Prime Dispatcher",
    urlLabel: "primedispatcher.vercel.app",
    description:
      "A courier and logistics website bringing shipment booking, tracking, rate lookup, service information, and partner onboarding into one responsive experience.",
    goal:
      "Make it straightforward for customers to explore shipping options, book a courier, and check a shipment’s progress.",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Lucide React", "Vercel"],
    image: "/prime-dispatcher-preview.png",
    link: "https://primedispatcher.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
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
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            A selection of production mobile applications and full-stack web platforms I&apos;ve built.
          </p>
        </div>

        {/* 1. Featured Flagship Project: SiteCaptain (Enterprise Mobile Mockup) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 transition-colors duration-200 group"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 w-full text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                <span>{siteCaptainProject.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                {siteCaptainProject.title}
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {siteCaptainProject.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {siteCaptainProject.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="bg-zinc-800/60 text-zinc-300 text-xs px-3 py-1 rounded-md border border-zinc-700/50 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800/80">
                <motion.a
                  href={siteCaptainProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-semibold transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4 text-zinc-950" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.22-.988V2.802a2.41 2.41 0 0 1 .22-.988zm11.235 11.238l2.583-2.583-11.956-6.83 9.373 9.413zm0 .896l-9.373 9.413 11.956-6.83-2.583-2.583zm1.266-.628l3.14-1.794a1.865 1.865 0 0 0 0-3.052l-3.14-1.794-2.127 2.127 2.127 2.127z"/>
                  </svg>
                  <span>Get on Google Play</span>
                </motion.a>

                <motion.a
                  href="https://mcsmax.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs font-medium transition-colors"
                >
                  <span>MCS MAX Production</span>
                  <span className="text-zinc-600 hover:text-zinc-400">↗</span>
                </motion.a>
              </div>
            </div>

            {/* Right: Phone Device Mockup with Full Visibility */}
            <div className="shrink-0 flex items-center justify-center w-full lg:w-auto">
              <div className="relative p-2 flex items-center justify-center">
                {/* Subtle studio rim reflection */}
                <div className="absolute inset-0 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

                {/* Smartphone Device Frame */}
                <div className="relative w-52 sm:w-60 h-[360px] sm:h-[420px] rounded-[34px] border-[5px] border-zinc-800 bg-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden ring-1 ring-white/10 flex flex-col transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="h-5 bg-zinc-950 w-full flex items-center justify-center shrink-0 z-10 border-b border-zinc-900">
                    <div className="w-14 h-2.5 rounded-full bg-zinc-800 flex items-center justify-end px-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 inline-block" />
                    </div>
                  </div>

                  {/* App Screen Display */}
                  <div className="flex-1 w-full overflow-hidden bg-black relative">
                    <img
                      src={siteCaptainProject.image}
                      alt={siteCaptainProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="h-3 bg-zinc-950 w-full flex items-center justify-center shrink-0">
                    <div className="w-20 h-1 rounded-full bg-zinc-700/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Web Projects Grid (Browser Window Frames) */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {webProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200 group"
            >
              <div>
                {/* Browser Window Frame Header */}
                <div className="bg-zinc-950 border-b border-zinc-800">
                  {/* Chrome bar */}
                  <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
                    </div>
                    <div className="px-3 py-0.5 rounded bg-zinc-950 border border-zinc-800/80 text-[11px] text-zinc-400 font-mono truncate max-w-[200px]">
                      {project.urlLabel}
                    </div>
                    <div className="w-8" />
                  </div>

                  {/* Web Screenshot Viewport */}
                  <div className="h-48 sm:h-52 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={`${project.title} live website preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {project.goal && (
                    <p className="text-zinc-300 mb-4 text-sm leading-relaxed">
                      <span className="text-white font-semibold">Goal: </span>
                      {project.goal}
                    </p>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-zinc-800/60 text-zinc-300 text-xs px-2.5 py-0.5 rounded border border-zinc-700/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-6 pt-0">
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold transition-colors"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-3.5 h-3.5"
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
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
