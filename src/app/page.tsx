"use client";

import React from "react";

interface AboutProps {
  firstRowHeight?: number;
  secondRowHeight?: number;
  thirdRowHeight?: number;
}

const About: React.FC<AboutProps> = ({ 
  firstRowHeight = 200, 
  secondRowHeight = 420,
  thirdRowHeight = 140
}) => {
  const firstRowSections = [
    {
      title: "",
      description: "",
      image: "/me_bw.png" // Replace with your actual image path
    },
    {
      title: "Ali Asif",
      description: "Student | Developer | Designer | Notion Enthusiast", 
    },
    {
      title: "",
      description: "",
    }
  ];

  const secondRowRightSections = [
    {
      title: "Top Right",
      description: "First right section",
    },
    {
      title: "Bottom Right",
      description: "Second right section",
    }
  ];

  const thirdRowSections = [
    {},
    {},
    {},
    {},
    {}
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start pt-8 bg-transparent p-4 space-y-4 mt-20 overflow-hidden">
      {/* First Row */}
      <div 
        className="flex space-x-4 w-full" 
        style={{ height: `${firstRowHeight}px` }}
      >
        {firstRowSections.map((section, index) => (
          <div
            key={index}
            className={`
              ${index === 0 ? 'w-1/6 relative' : index === 1 ? 'w-1/2' : 'w-1/3'}
              flex
              flex-col
              items-center
              justify-center
              p-4
              rounded-xl
              shadow-2xl
              h-full
              backdrop-blur-2xl
              bg-white/10
              border
              border-white/20
              overflow-hidden
            `}
          >
            {/* First section with image */}
            {index === 0 && section.image && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full flex items-end justify-center">
                <img 
                  src={section.image} 
                  alt="Profile" 
                  className="max-w-full max-h-full object-contain object-bottom" 
                  style={{ 
                    transform: 'translateY(20%)', // Slightly overflow from the bottom
                    maxHeight: '110%', // Allow slight overflow
                    width: 'auto' 
                  }}
                />
              </div>
            )}
            
            {/* Subtle background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
            
            {section.title && <h2 className="text-7xl font-bold mb-2 relative z-10 text-white text-left pr-96">{section.title}</h2>}
            {section.description && <p className="text-left relative z-10 text-white/80 pr-64">{section.description}</p>}
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div 
        className="flex space-x-4 w-full" 
        style={{ height: `${secondRowHeight}px` }}
      >
        <div
          className="w-1/6 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">Square Box</h2>
          <p className="text-center relative z-10 text-white/80">First section - Square shaped</p>
        </div>

        <div
          className="w-1/2 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">Wide Rectangle</h2>
          <p className="text-center relative z-10 text-white/80">Center section - Wide rectangle</p>
        </div>

        <div
          className="w-1/3 flex flex-col space-y-4 h-full"
        >
          {secondRowRightSections.map((section, index) => (
            <div
              key={index}
              className={`
                w-full
                flex
                flex-col
                items-center
                justify-center
                p-4
                rounded-xl
                shadow-2xl
                ${index === 0 ? 'h-1/2' : 'h-1/2'}
                backdrop-blur-2xl
                bg-white/10
                border
                border-white/20
                relative
                overflow-hidden
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
              {section.title && <h2 className="text-xl font-bold mb-2 relative z-10 text-white">{section.title}</h2>}
              {section.description && <p className="text-center relative z-10 text-white/80">{section.description}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Third Row */}
      <div 
        className="flex space-x-4 w-full" 
        style={{ height: `${thirdRowHeight}px` }}
      >
        {thirdRowSections.map((section, index) => (
          <div
            key={index}
            className={`
              w-1/5
              flex
              flex-col
              items-center
              justify-center
              p-4
              rounded-xl
              shadow-2xl
              h-full
              backdrop-blur-2xl
              bg-white/10
              border
              border-white/20
              relative
              overflow-hidden
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;