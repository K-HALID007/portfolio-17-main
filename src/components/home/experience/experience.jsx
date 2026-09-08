"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMobileAlt,
  FaServer,
  FaCheckCircle,
  FaGooglePlay,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiKotlin, SiDotnet, SiSqlite, SiPostman } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-28 bg-[#09090b] text-white"
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
            Career &amp; Engineering Scope
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            Production engineering at MCS MAX — delivering offline mobile applications, scalable .NET backends, and enterprise database architectures.
          </p>
        </div>

        {/* Master Experience Bento Card */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl sm:rounded-3xl bg-zinc-900/40 border border-zinc-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Top Company Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
            <div className="flex items-start sm:items-center gap-4">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-800/90 border border-zinc-700/70 flex items-center justify-center text-zinc-200 shrink-0 shadow-inner"
              >
                <FaBriefcase className="w-6 h-6" />
              </motion.div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Software Engineer
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Present • Full-time
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium mt-1">
                  <motion.a
                    href="https://mcsmax.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="text-white font-semibold hover:underline inline-flex items-center gap-1.5 transition-colors group/company"
                  >
                    <span>MCS MAX</span>
                    <FaExternalLinkAlt className="w-2.5 h-2.5 text-zinc-500 group-hover/company:text-white transition-colors" />
                  </motion.a>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 font-normal">Mumbai, India</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto">
              <span className="text-xs font-mono font-semibold px-3.5 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                2025 – Present
              </span>
            </div>
          </div>

          {/* Impact Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-8">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Published App</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">SiteCaptain</div>
              <div className="text-[11px] text-emerald-400 font-medium mt-0.5">● Live on Google Play</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">In Development</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">OperOn Mobile</div>
              <div className="text-[11px] text-cyan-400 font-medium mt-0.5">● React Native Core</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Backend &amp; APIs</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">.NET Core &amp; EF</div>
              <div className="text-[11px] text-zinc-400 font-medium mt-0.5">Multi-Tenant Arch</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Quality &amp; Testing</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">OperOn Web</div>
              <div className="text-[11px] text-zinc-400 font-medium mt-0.5">CRUD &amp; API Validation</div>
            </motion.div>
          </div>

          {/* 3 Interactive Sub-Bento Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2">
            {/* Block 1: Mobile Architecture */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
                    <FaMobileAlt className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 font-medium">
                    Mobile
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Mobile Engineering
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Engineered and published <strong className="text-zinc-200 font-medium">SiteCaptain</strong> on Google Play, using native Kotlin, Jetpack Compose, SQLite, and Room DB for offline-first EPC site management. Currently building <strong className="text-zinc-200 font-medium">OperOn Mobile</strong> with React Native.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["Kotlin", "Jetpack Compose", "React Native", "SQLite", "Room DB"].map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.mcsmax.sitecaptain&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold transition-colors"
              >
                <FaGooglePlay className="w-3.5 h-3.5" />
                <span>View SiteCaptain on Google Play</span>
              </motion.a>
            </motion.div>

            {/* Block 2: .NET Backend & Multi-Tenancy */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
                    <FaServer className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 font-medium">
                    Backend
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  .NET Core &amp; Multi-Tenant APIs
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Built robust, high-performance application backend APIs on <strong className="text-zinc-200 font-medium">.NET Core</strong> with <strong className="text-zinc-200 font-medium">Entity Framework Core</strong>, designing and maintaining isolated <strong className="text-zinc-200 font-medium">multi-tenant database</strong> systems with high data integrity.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {[".NET Core", "Entity Framework", "C#", "Multi-Tenant", "SQL Server"].map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                <span>Architecture</span>
                <span className="font-semibold text-zinc-200">Multi-Tenant Isolation</span>
              </div>
            </motion.div>

            {/* Block 3: QA & Testing (OperOn Web) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
                    <FaCheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 font-medium">
                    Testing
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  OperOn Web API Testing
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Conducted comprehensive API testing and verification for <strong className="text-zinc-200 font-medium">OperOn Web</strong>, validating end-to-end CRUD operations, database schema migrations, and request workflows to guarantee enterprise reliability.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["API Testing", "CRUD Validation", "Postman Envs", "Database Tests", "OperOn Web"].map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                <span>Verification Scope</span>
                <span className="font-semibold text-zinc-200">Full CRUD &amp; Endpoints</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
