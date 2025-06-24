"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo - Smaller on mobile */}
        <div className={`logo ${bounceAnimation}`}>
          <Link href="/">
            <img
              src={isDarkMode ? "/logo1.png" : "/logo2.png"}
              alt="Logo"
              width={60} // Default size
              height={34}
              className="w-[60px] sm:w-[70px] md:w-[80px]"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Blog Button with Liquid Glass Effect - Scaled for mobile */}
          {showBlogLink && (
            <Link
              href="/blog"
              className={`
                ${bounceAnimation}
                inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full
                text-xs sm:text-sm font-medium
                transition-all duration-300
                before:content-[''] before:absolute before:inset-0 
                before:backdrop-blur-lg
                before:border before:rounded-full before:shadow-lg
                relative overflow-hidden
                ${
                  isDarkMode
                    ? "text-gray-300 before:bg-white/5 before:border-white/30 hover:before:bg-white/10 hover:before:border-white/40"
                    : "text-gray-800 before:bg-black/5 before:border-black/30 hover:before:bg-black/10 hover:before:border-black/40"
                }
              `}
            >
              <span className="relative z-10">Blog</span>
            </Link>
          )}

          {/* Theme Toggle Button with Liquid Glass Effect - Scaled for mobile */}
          <button
            onClick={toggleTheme}
            className={`
              ${bounceAnimation}
              w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              transition-all duration-300
              before:content-[''] before:absolute before:inset-0 
              before:backdrop-blur-lg
              before:border before:rounded-full
              relative overflow-hidden
              ${
                isDarkMode
                  ? "before:bg-white/5 before:border-white/30 hover:before:bg-white/10 hover:before:border-white/40"
                  : "before:bg-black/5 before:border-black/30 hover:before:bg-black/10 hover:before:border-black/40"
              }
            `}
            aria-label="Toggle Dark Mode"
          >
            <FontAwesomeIcon
              icon={isDarkMode ? faSun : faMoon}
              className={`relative z-10 text-md sm:text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}