"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import Image from "next/image";

const GLASS_BG =
  "bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 shadow-lg rounded-3xl opacity-90 transition-all duration-300";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Show footer if scrolled to bottom (with 10px tolerance)
      setShowFooter(scrollY + windowHeight >= docHeight - 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`w-full flex justify-center items-end fixed left-0 bottom-0 transition-opacity duration-500 ${showFooter ? 'opacity-100 z-50 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
      <div
        className={`max-w-7xl w-[99vw] mx-auto mb-8 px-4 sm:px-8 py-6 flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center gap-6 text-xs sm:text-sm font-medium ${GLASS_BG}`}
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
      >
        {/* Unified content row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-4 md:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mt-1">
            <Image
              src={isDarkMode ? "/logo1.png" : "/logo2.png"}
              alt="Logo"
              width={60}
              height={34}
              className="w-[48px] sm:w-[60px] md:w-[70px] lg:w-[80px]"
              priority
            />
          </div>
          {/* About text */}
          <div className="flex flex-col justify-center text-left md:ml-4 items-center md:items-start">
            <span className={`font-bold text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>Ali Asif</span>
            <span className={`block mt-1 text-xs sm:text-sm md:text-base ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>Student | Developer | Designer | Notion Enthusiast</span>
          </div>
          {/* Socials */}
          <div className="flex flex-row items-center justify-center gap-3 md:gap-4 md:ml-8 mt-4 md:mt-0">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ali-asif-khatri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-sm bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 rounded-full relative overflow-hidden opacity-90"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-70 w-5 h-5 sm:w-6 sm:h-6">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
            </svg>
            </a>
            {/* Github */}
            <a
              href="https://github.com/aliasifkhatry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-sm bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 rounded-full relative overflow-hidden opacity-90"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-70 w-5 h-5 sm:w-6 sm:h-6">
                <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ali.asiiff/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-sm bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 rounded-full relative overflow-hidden opacity-90"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-70 w-5 h-5 sm:w-6 sm:h-6">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.637.334-3.608 1.308-.974.974-1.25 2.332-1.308 3.608-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.634 1.308 3.608.974.974 2.332 1.25 3.608 1.308 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.634-.334 3.608-1.308.974-.974 1.25-2.332 1.308-3.608.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.634-1.308-3.608-.974-.974-2.332-1.25-3.608-1.308-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Centered Gmail link and copyright */}
        <div className="w-full flex flex-col items-center border-t border-neutral-400/30 pt-8 mt-8">
          <a
            href="mailto:ali.asifkhatry@gmail.com"
            className={`font-semibold text-base sm:text-lg md:text-md underline underline-offset-4 transition-colors duration-200 mb-2 ${isDarkMode ? 'text-white hover:text-blue-300' : 'text-black hover:text-blue-700'}`}
          >
            ali.asifkhatry@gmail.com
          </a>
          <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Ali Asif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
