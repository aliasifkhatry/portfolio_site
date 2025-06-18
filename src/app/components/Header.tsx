"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({
  showBlogLink = true,
}: {
  showBlogLink?: boolean;
}) {
  const [bounceTrigger, setBounceTrigger] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = (event: any) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  const bounceAnimation = bounceTrigger ? "animate-bounce" : "";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <div className={`logo ${bounceAnimation}`}>
          <Link href="/">
            <img
              src={isDarkMode ? "/logo1.png" : "/logo2.png"}
              alt="Logo"
              width={80}
              height={45}
            />
          </Link>
        </div>

        {/* Blog Button with Bounce */}
        {showBlogLink && (
          <Link
            href="/blog"
            className={`${bounceAnimation} hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium border border-white/30 hover:border-white/50 transition-colors duration-300`}
          >
            Blog
          </Link>
        )}
      </div>
    </header>
  );
}
