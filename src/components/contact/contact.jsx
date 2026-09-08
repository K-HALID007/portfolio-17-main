"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      try {
        const payload = new FormData();
        payload.append("access_key", accessKey);
        payload.append("name", formData.name);
        payload.append("email", formData.email);
        payload.append("message", formData.message);
        payload.append("subject", `Portfolio Message from ${formData.name}`);
        payload.append("from_name", `${formData.name} via Portfolio`);
        payload.append("replyto", formData.email);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: payload,
        });

        const result = await res.json();
        if (result.success) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 6000);
          return;
        } else {
          console.warn("Web3Forms response:", result);
        }
      } catch (err) {
        console.error("Web3Forms submission error:", err);
      }
    }

    // Direct mailto fallback (100% free, zero backend, works instantly anywhere)
    const mailtoUrl = `mailto:ks0903525@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || "Visitor"}`
    )}&body=${encodeURIComponent(
      `Hi Khalid,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleWhatsAppSend = () => {
    const text = formData.message
      ? `Hi Khalid, I am ${formData.name || "reaching out from your portfolio"}. ${formData.message}`
      : `Hi Khalid, I saw your portfolio and would like to connect!`;
    window.open(`https://wa.me/918828057917?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#09090b] text-white flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Main Content Area */}
      <div className="w-full flex-1 flex items-center justify-center my-auto max-w-6xl">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 py-8">
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-4">
                Contact
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                Let&apos;s Connect
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Have a project in mind, an opportunity, or a question? Feel free to reach out directly or send a message.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <a
                href="mailto:ks0903525@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="p-2.5 bg-zinc-800 rounded-lg text-zinc-300 group-hover:text-white transition-colors">
                  <FaEnvelope className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 uppercase tracking-wide font-medium">
                    Email
                  </p>
                  <p className="text-sm sm:text-base font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                    ks0903525@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918828057917"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="p-2.5 bg-zinc-800 rounded-lg text-zinc-300 group-hover:text-white transition-colors">
                  <FaPhoneAlt className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 uppercase tracking-wide font-medium">
                    Phone
                  </p>
                  <p className="text-sm sm:text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                    +91 8828057917
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="p-2.5 bg-zinc-800 rounded-lg text-zinc-300">
                  <FaMapMarkerAlt className="text-base" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide font-medium">
                    Location
                  </p>
                  <p className="text-sm sm:text-base font-medium text-zinc-200">
                    Vikhroli, Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs text-zinc-500 uppercase tracking-wide font-medium mb-3">
                Social Profiles
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="https://github.com/K-HALID007"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khalid-shaikh-7392b4320"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://wa.me/918828057917"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/khalid.devops"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Contact Form */}
          <div className="w-full lg:w-6/12">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  Send a Message
                </h3>
                <span className="text-[11px] text-zinc-500 font-mono">
                  Direct Inbox Delivery
                </span>
              </div>

              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Hello Khalid, I came across your portfolio and would like to connect regarding..."
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors text-sm resize-none"
                  required
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 px-6 py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-center"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  title="Chat directly on WhatsApp"
                >
                  <FaWhatsapp className="text-base text-emerald-500" />
                  <span>WhatsApp</span>
                </button>
              </div>

              {status === "success" && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2 animate-fadeIn">
                  <span>✓</span>
                  <span>Message sent successfully! I will get back to you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center gap-2 animate-fadeIn">
                  <span>!</span>
                  <span>Failed to send. Opening your default mail client...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Sober Minimalist Docked Footer */}
      <footer className="w-full max-w-6xl pt-8 pb-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 mt-12">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-zinc-300 font-medium">Khalid Shaikh</span>
          <span className="text-zinc-600">•</span>
          <span>All rights reserved.</span>
        </div>
        <div className="flex items-center gap-3">
          <span>
            Software Engineer @{" "}
            <a
              href="https://mcsmax.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
            >
              MCS MAX
            </a>
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-600 inline-block" />
          <span>Mumbai, India</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
