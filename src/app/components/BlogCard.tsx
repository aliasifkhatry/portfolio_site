"use client";

import { BlogPost } from "../lib/BlogData";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../ThemeContext";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { isDarkMode } = useTheme();
  const GLASS_BG =
    "bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 shadow-lg rounded-3xl opacity-90 transition-all duration-300";

  return (
    <Link href={`/blog/${blog.slug}`} className="block h-full group focus:outline-none focus:ring-2 focus:ring-yellow-400">
      <div className={
        `${GLASS_BG} relative h-full overflow-hidden flex flex-col cursor-pointer`}
      >
        {/* Glass overlay (ensure pointer-events-none) */}
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true"></div>
        
        {blog.coverImage && (
          <div className="relative aspect-video w-full flex-shrink-0">
            <Image 
              src={blog.coverImage} 
              alt={blog.title} 
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
            />
          </div>
        )}
        
        <div className="relative z-[2] flex flex-col flex-grow p-4 sm:p-5">
          <div className="flex-grow">
            <h3 className={`
              text-lg font-bold mb-1.5 line-clamp-2
              ${isDarkMode ? 'text-white' : 'text-gray-900'}
            `}>
              {blog.title}
            </h3>
            
            <p className={`
              text-xs mb-2
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
            `}>
              {blog.date}
            </p>
            
            <p className={`
              text-sm line-clamp-3
              ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            `}>
              {blog.description}
            </p>
          </div>
          
          <div className="mt-3 pt-3 border-t border-opacity-20 flex justify-end">
            <span className={`
              text-xs font-medium px-3 py-1 rounded-full
              transition-colors duration-200
              ${isDarkMode 
                ? 'text-yellow-300 hover:text-yellow-200' 
                : 'text-gray-500 hover:text-gray-800'}
            `}>
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}