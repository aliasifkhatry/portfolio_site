"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({
  showBlogLink = true,
}: {
  showBlogLink?: boolean;
}) {
  const [bounceTrigger, setBounceTrigger] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();

  // Trigger bounce on scroll to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setBounceTrigger(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setBounceTrigger(false), 1000);
    return () => clearTimeout(timer);
  }, [bounceTrigger]);

  const bounceAnimation = bounceTrigger ? "animate-bounce" : "";

  // Animation states for the drop split
  const [split, setSplit] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setSplit(true), 400); // delay for effect
    return () => clearTimeout(timer);
  }, []);

  // Variants for the drop morphing
  const dropVariants = {
    initial: {
      borderRadius: "999px",
      width: 140,
      background: "rgba(255,255,255,0.40)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      x: 0,
      marginLeft: 0,
    },
    split: {
      borderRadius: "999px",
      width: 220,
      background: "none",
      x: 0,
      marginLeft: "auto",
      transition: { duration: 0.7, ease: [0.4, 0.8, 0.2, 1] as [number, number, number, number] },
    },
  };

  const buttonVariants = {
    initial: { width: 0, opacity: 0 },
    split: { width: 110, opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: [0.4, 0.8, 0.2, 1] as [number, number, number, number] } },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    split: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.4 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo - Smaller on mobile */}
        <div className={`logo ml-12 ${bounceAnimation}`}>
          <Link href="/">
            <img
              src={isDarkMode ? "/logo1.png" : "/logo2.png"}
              alt="Logo"
              width={60}
              height={34}
              className="w-[60px] sm:w-[70px] md:w-[80px]"
            />
          </Link>
        </div>

        {/* Animated Drop Buttons */}
        <motion.div
          className="flex items-center gap-2 sm:gap-4 relative"
          variants={dropVariants}
          initial="initial"
          animate={split ? "split" : "initial"}
          style={{
            background: split
              ? "none"
              : "rgba(255,255,255,0.40)",
            borderRadius: 999,
            padding: split ? 0 : 4,
            transition: "all 0.7s cubic-bezier(.4,.8,.2,1)",
          }}
        >
          {/* Blog Button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate={split ? "split" : "initial"}
            style={{ overflow: "hidden" }}
          >
            {showBlogLink && (
              <Link
                href="/blog"
                className={`
                  flex items-center justify-center w-full h-12 px-4 sm:px-6 md:px-8 rounded-full
                  text-xs sm:text-sm font-semibold
                  transition-all duration-300 shadow-sm
                  bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30
                  backdrop-blur-[2px] border border-neutral-400/30
                  relative overflow-hidden group opacity-90 text-neutral-800 dark:text-neutral-300
                `}
                style={{ minWidth: 90, minHeight: 44 }}
              >
                <motion.span
                  className="relative z-10 transition-colors duration-200"
                  style={{ color: isDarkMode ? "#d1d5db" : "#1a1a1a" }}
                  variants={contentVariants}
                  initial="initial"
                  animate={split ? "split" : "initial"}
                >
                  Blog
                </motion.span>
              </Link>
            )}
          </motion.div>

          {/* Theme Toggle Button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate={split ? "split" : "initial"}
            style={{ overflow: "hidden" }}
          >
            <button
              onClick={toggleTheme}
              className={`
                w-12 h-12 flex items-center justify-center
                transition-all duration-300 shadow-sm
                bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30
                text-neutral-800 dark:text-neutral-300
                backdrop-blur-[2px] border border-neutral-400/30
                rounded-full relative overflow-hidden opacity-90
              `}
              aria-label="Toggle Dark Mode"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <motion.span
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate={split ? "split" : "initial"}
              >
                <FontAwesomeIcon
                  icon={isDarkMode ? faSun : faMoon}
                  className={`text-md sm:text-lg ${isDarkMode ? "text-neutral-300" : "text-neutral-800"}`}
                />
              </motion.span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}