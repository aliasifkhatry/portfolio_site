"use client";

import { notFound } from "next/navigation";
import blogPosts from "../../lib/BlogData";
import Link from "next/link";
import Header from "../../components/Header";
import BackgroundImages from "../../components/BackgroundImages";
import { useTheme } from "../../ThemeContext";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { isDarkMode } = useTheme();
  const blog = blogPosts.find((post) => post.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className={`relative ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>
      <BackgroundImages />
      <Header />
      
      <div className="relative z-10 max-w-3xl mx-auto p-6 md:p-10 mt-11">
        <Link
          href="/blog"
          className={`inline-flex items-center gap-2 hover:text-white transition-colors mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          ← Back to Blogs
        </Link>

        <h1 className={`text-4xl font-bold mt-2 mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {blog.title}
        </h1>
        <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {blog.date}
        </p>

        <div className={`prose prose-lg max-w-none ${
          isDarkMode 
            ? 'prose-invert prose-headings:text-white prose-p:text-gray-300' 
            : 'prose-headings:text-black prose-p:text-gray-800'
        }`}>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{blog.description}</p>
          {blog.content && (
            <div className={`mt-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
          )}
        </div>

        <div className="mt-10">
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
              <span className="relative z-10">Back to All Blogs</span>
            </Link>
          </div>
      </div>
      {/* Add 20 <br /> elements for spacing */}
      {Array.from({ length: 20 }).map((_, i) => <br key={i} />)}
      <Footer />
    </div>
  );
}