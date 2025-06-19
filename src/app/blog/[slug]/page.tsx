"use client";

import { notFound } from "next/navigation";
import blogPosts from "../../lib/BlogData";
import Link from "next/link";
import Header from "../../components/Header";
import BackgroundImages from "../../components/BackgroundImages";
import { useTheme } from "../../ThemeContext";

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
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
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
          <p>{blog.description}</p>
          <p className="mt-4">
            This is where the full article would go. You can integrate Markdown rendering here.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Back to All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}