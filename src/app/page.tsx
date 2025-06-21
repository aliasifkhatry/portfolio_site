"use client";

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
      <div
        className={`cursor-circle ${isHovering ? "cursor-hover" : ""} ${
          isCursorHidden ? "hidden" : ""
        }`}
        style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
      ></div>
      <BackgroundImages />
      <Header showBlogLink={true}/>
      
      {/* Hero Section */}
      <div
        id="home"
        className="relative z-10 flex flex-col items-center min-h-screen text-center pt-20"
      >
        <h1 className="text-5xl font-bold">Hi, Im Ali Asif</h1>
        <p className="mt-4 text-lg">
          Student | Developer | Designer | Notion Enthusiast
        </p>
      </div>
      
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
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}>
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
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center z-10"
      >
        <Projects />
      </section>
      
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center z-10"
      >
        <Contact />
      </section>
    </main>
  );
}