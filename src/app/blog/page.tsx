"use client";

import blogPosts from "../lib/BlogData";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import BackgroundImages from "../components/BackgroundImages";
import { useTheme } from "../ThemeContext";
import Footer from "../components/Footer";

export default function BlogIndex() {
  const { isDarkMode } = useTheme();

  return (
    <main className={`relative min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-100'} custom-cursor`}>
      <BackgroundImages />
      <Header />
      
      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-bold mb-10 text-center ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog) => (
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