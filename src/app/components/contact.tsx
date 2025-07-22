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
      
    </div>
  );
};
