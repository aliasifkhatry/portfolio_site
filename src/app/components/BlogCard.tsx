"use client";

import { useTheme } from "../ThemeContext";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
}

export default function BlogCard({ blog }: { blog: BlogPost }) {
  const { isDarkMode } = useTheme();

  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
        isDarkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}>
        <div className="relative h-48 w-full">
          <Image 
            src={blog.coverImage} 
            alt={blog.title} 
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>{blog.title}</h3>
          <p className={`text-sm mb-4 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>{blog.date}</p>
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>{blog.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}