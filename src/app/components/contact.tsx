"use client";

import { ChangeEvent } from "react";
import { useTheme } from "../ThemeContext";

export default function Contact() {
  const { isDarkMode } = useTheme();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-white hover:text-blue-500 transition"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};
