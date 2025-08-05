
"use client";

import { useState } from "react";
import blogPosts from "../lib/BlogData";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import BackgroundImages from "../components/BackgroundImages";
import { useTheme } from "../ThemeContext";
import Footer from "../components/Footer";

export default function BlogIndex() {
  const { isDarkMode } = useTheme();
  const [sortLatestFirst, setSortLatestFirst] = useState(true);

  const GLASS_BTN =
    "bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 shadow-lg rounded-full opacity-90 transition-all duration-300 px-5 py-2 font-semibold";

  const sortedBlogs = sortLatestFirst
    ? [...blogPosts].reverse()
    : [...blogPosts];

  return (
    <main className={`relative min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-100'} custom-cursor`}>
      <BackgroundImages />
      <Header />
      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className={`text-4xl md:text-5xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Blog</h1>
          <button
            className={GLASS_BTN }
            onClick={() => setSortLatestFirst((prev) => !prev)}
            aria-label="Toggle sort order"
          >
            {sortLatestFirst ? "Latest → Oldest" : "Oldest → Latest"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBlogs.map((blog) => (
            <BlogCard key={blog.mediumUrl} blog={blog} />
          ))}
        </div>
      </div>
      {/* Add 20 <br /> elements for spacing */}
      {Array.from({ length: 20 }).map((_, i) => <br key={i} />)}
      <Footer />
    </main>
  );
}