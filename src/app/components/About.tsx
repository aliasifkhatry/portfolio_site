"use client";

import React from 'react';

const About: React.FC = () => {
  const aboutSections = [
    {
      title: "Developer",
      description: "Passionate about creating intuitive and innovative digital experiences. Proficient in modern web technologies and always eager to learn.",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      size: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Design Philosophy",
      description: "Believing in minimalist design that combines functionality with aesthetic elegance. Every pixel and interaction matters.",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      size: "md:col-span-1"
    },
    {
      title: "Technologies",
      description: "Expertise in React, Next.js, TypeScript, Tailwind CSS, and modern frontend development tools.",
      bgColor: "bg-green-600",
      textColor: "text-white",
      size: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Learning Journey",
      description: "Continuously expanding my skills, exploring new technologies, and solving complex problems through innovative coding solutions.",
      bgColor: "bg-purple-600",
      textColor: "text-white",
      size: "md:col-span-2"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutSections.map((section, index) => (
          <div 
            key={index} 
            className={`
              ${section.size} 
              ${section.bgColor} 
              ${section.textColor}
              p-6 
              rounded-2xl 
              shadow-lg 
              transform 
              transition 
              duration-300 
              hover:scale-105 
              hover:shadow-2xl
            `}
          >
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg">{section.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition">
          <a href="#contact" className="text-lg">
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;