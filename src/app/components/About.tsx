"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import Image from "next/image";
import Link from "next/link";

const GLASS_BG =
  "bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 shadow-lg rounded-3xl opacity-90 transition-all duration-300";

const About = () => {
  const { isDarkMode } = useTheme();

  // Left block: full image
  const leftBlock = {
    image: "/me_bw.png",
    alt: "Ali Asif",
  };

  // Right block: about text
  const aboutText = `I'm Ali Asif, a passionate student, developer, designer, and Notion enthusiast. I love building beautiful, functional web experiences and exploring new technologies. My journey is driven by curiosity and a desire to create things that make life easier and more enjoyable. Welcome to my portfolio!`;

  // Animation hooks for scroll-in effect
  function useInViewAnimation(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const node = ref.current;
      if (!node) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }, [threshold]);
    return [ref, inView];
  }

  const [leftRef, leftInView] = useInViewAnimation();
  const [rightRef, rightInView] = useInViewAnimation();

  return (
    <div className="flex items-center justify-center w-screen min-h-[100vh] px-4 sm:px-6 py-4 bg-transparent">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto">
        {/* Left Block (full image, 40%) */}
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`md:w-[35%] w-full min-h-[300px] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[480px] flex items-center justify-center p-0 ${GLASS_BG} transition-all duration-700 ease-out transform ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} mx-2 xs:mx-4 sm:mx-6`}
        >
          <Image
            src={leftBlock.image}
            alt={leftBlock.alt}
            fill
            className="object-cover w-full h-full rounded-2xl"
            style={{ minHeight: 'inherit' }}
            priority
          />
        </div>
        {/* Right Block (about text, 60%) */}
        <div
          ref={rightRef as React.RefObject<HTMLDivElement>}
          className={`md:w-[65%] w-full min-h-[300px] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[480px] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ${GLASS_BG} transition-all duration-700 ease-out transform ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} mx-2 xs:mx-4 sm:mx-6`}
        >
          <div className="relative z-10 w-full text-center md:text-left">
            <h2
              className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              About Me
            </h2>
            <p
              className={`text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed ${
                isDarkMode ? "text-white/70" : "text-black"
              }`}
            >
              {aboutText}
            </p>
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
        </div>
      </div>
    </div>
  );
};

export default About;