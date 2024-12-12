"use client";

import React from "react";

const About: React.FC = () => {
  const aboutSections = [
    {
      title: "Ali Asif",
      description: "Student | Developer | Designer | Notion Enthusiast",
      bgColor: "bg-gray-300",
      textColor: "text-black",
      size: "col-span-4 row-span-1"
    },
    {
      title: "From",
      description: "Karachi, Pakistan",
      bgColor: "bg-green-600",
      textColor: "text-white",
      size: "col-span-1 row-span-1"
    },
    ...Array(10).fill({
      title: "",
      description: "",
      bgColor: "bg-gray-200",
      textColor: "",
      size: "col-span-1 row-span-1"
    })
  ];

  return (
    <div className="w-screen h-screen grid grid-cols-4 grid-rows-3 gap-4 p-4 bg-black">
      {aboutSections.map((section, index) => (
        <div
          key={index}
          className={` 
            ${section.size} 
            ${section.bgColor} 
            ${section.textColor}
            flex 
            items-center 
            justify-center 
            p-4 
            rounded-xl 
            shadow-lg
          `}
        >
          {section.title && <h2 className="text-xl font-bold mb-2">{section.title}</h2>}
          {section.description && <p className="text-center">{section.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default About;
