"use client";


import { BlogPost } from "../lib/BlogData";
import Image from "next/image";
import { useTheme } from "../ThemeContext";
import React, { useEffect, useState } from "react";


interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { isDarkMode } = useTheme();
  const GLASS_BG =
    "bg-white/70 hover:bg-white/80 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-800 dark:text-neutral-300 backdrop-blur-[2px] border border-neutral-400/30 shadow-lg rounded-3xl opacity-90 transition-all duration-300";

  const [meta, setMeta] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeta() {
      try {
        // Use a public Open Graph API proxy (e.g. microlink.io)
        const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(blog.mediumUrl)}`);
        const data = await res.json();
        setMeta({
          title: data.data.title,
          description: data.data.description,
          image: data.data.image?.url || data.data.logo?.url || "",
        });
      } catch (e) {
        setMeta(null);
      } finally {
        setLoading(false);
      }
    }
    fetchMeta();
  }, [blog.mediumUrl]);

  return (
    <a
      href={blog.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      <div className={
        `${GLASS_BG} relative h-full overflow-hidden flex flex-col cursor-pointer`
      }>
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true"></div>

        {meta?.image && (
          <div className="relative aspect-video w-full flex-shrink-0">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
            />
          </div>
        )}

        <div className="relative z-[2] flex flex-col flex-grow p-4 sm:p-5">
          <div className="flex-grow">
            <h3
              className={`text-lg font-bold mb-1.5 line-clamp-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              {loading ? "Loading..." : meta?.title || "Untitled"}
            </h3>
            <p
              className={`text-sm line-clamp-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {loading ? "Fetching description..." : meta?.description || ""}
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-opacity-20 flex justify-end">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 ${isDarkMode ? "text-yellow-300 hover:text-yellow-200" : "text-gray-500 hover:text-gray-800"}`}
            >
              Read on Medium →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}