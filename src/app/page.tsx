"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BackgroundImages from "./components/BackgroundImages";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./globals.css";
import HelloAnimation from "./components/HelloAnimation";
import BlogCard from "./components/BlogCard";
import blogPosts from "./lib/BlogData";
import Link from "next/link";
import Header from "./components/Header";
import { useTheme } from "./ThemeContext";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bounceTrigger, setBounceTrigger] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const { isDarkMode } = useTheme();
  const recentBlogs = blogPosts.slice(0, 3);

  // Animation variants for hero section reveal
  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.8 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY === 0) {
        setBounceTrigger(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setBounceTrigger(false), 1000);
    return () => clearTimeout(timer);
  }, [bounceTrigger]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const { innerWidth, innerHeight } = window;
      const edgeThreshold = 10;
      if (
        e.clientX < edgeThreshold ||
        e.clientX > innerWidth - edgeThreshold ||
        e.clientY < edgeThreshold ||
        e.clientY > innerHeight - edgeThreshold
      ) {
        setIsCursorHidden(true);
      } else {
        setIsCursorHidden(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      setIsCursorHidden(true);
    };

    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const bounceAnimation = bounceTrigger ? "animate-bounce" : "";

  if (isLoading) {
    return (
      <div className="h-full min-h-screen flex items-center justify-center">
        <div className="h-full w-full min-h-[500px] flex justify-center items-center">
          <HelloAnimation />
        </div>
      </div>
    );
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-[15%] md:px-24 pt-24 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      } custom-cursor`}
      onMouseEnter={() => setIsHovering(false)}
    >
      <BackgroundImages />
      <Header showBlogLink={true} />

      {/* Hero Section */}
      <motion.div
        id="home"
        className="relative z-10 flex flex-col items-center min-h-screen text-center pt-20 sm:pt-28 px-4"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="mt-2 sm:mt-3 md:mt-4 text-3xl sm:text-base md:text-5xl filter grayscale"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          👨‍🎓 👨‍💻 🖌️ 🎧 💻 📸 📚
        </motion.h2>
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ali-asif-khatri/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 sm:p-3 shadow-lg transition-colors flex items-center justify-center bg-neutral-300/20 hover:bg-neutral-300/30 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 group"
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
            className="rounded-full p-2 sm:p-3 shadow-lg transition-colors flex items-center justify-center bg-neutral-300/20 hover:bg-neutral-300/30 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 group"
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
            className="rounded-full p-2 sm:p-3 shadow-lg transition-colors flex items-center justify-center bg-neutral-300/20 hover:bg-neutral-300/30 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 group"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-70 w-5 h-5 sm:w-6 sm:h-6">
              <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.637.334-3.608 1.308-.974.974-1.25 2.332-1.308 3.608-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.634 1.308 3.608.974.974 2.332 1.25 3.608 1.308 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.634-.334 3.608-1.308.974-.974 1.25-2.332 1.308-3.608.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.634-1.308-3.608-.974-.974-2.332-1.25-3.608-1.308-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center z-10"
      >
        <About />
      </section>

      {/* Recent Blogs Section */}
      <section
        id="blogs"
        className="min-h-screen flex items-center justify-center z-10 w-full px-4"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className={`
      inline-block px-6 py-3 rounded-full
      text-sm sm:text-base font-medium
      transition-all duration-300
      before:content-[''] before:absolute before:inset-0 
      before:backdrop-blur-lg
      before:border before:rounded-full before:shadow-lg
      relative overflow-hidden
      transform hover:-translate-y-0.5
      ${
        isDarkMode
          ? "text-yellow-400 before:bg-gradient-to-r before:from-yellow-700/20 before:to-amber-800/20 before:border-yellow-500/30 hover:before:border-yellow-400/40"
          : "text-gray-800 before:bg-black/5 before:border-black/30 hover:before:bg-black/10 hover:before:border-black/40"
      }
    `}
            >
              <span className="relative z-10">View All Blogs</span>
            </Link>
          </div>
        </div>
      </section>
{/* Add 20 <br /> elements for spacing */}
      {Array.from({ length: 20 }).map((_, i) => <br key={i} />)}
      <Footer />
    </main>
  );
}
