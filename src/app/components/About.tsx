"use client";

import React from "react";

interface AboutProps {
  firstRowHeight?: number;
  secondRowHeight?: number;
  thirdRowHeight?: number;
}

const About: React.FC<AboutProps> = ({ 
  firstRowHeight = 200, 
  secondRowHeight = 400,
  thirdRowHeight = 125
}) => {
  const firstRowSections = [
    {
      title: "Square Box",
      description: "First section - Square shaped",
    },
    {
      title: "Wide Rectangle",
      description: "Center section - Wide rectangle", 
    },
    {
      title: "Narrow Rectangle",
      description: "Last section - Narrow rectangle",
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
              ${index === 0 ? 'w-1/6' : index === 1 ? 'w-1/2' : 'w-1/3'}
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
            {/* Subtle background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
            
            {section.title && <h2 className="text-xl font-bold mb-2 relative z-10 text-white">{section.title}</h2>}
            {section.description && <p className="text-center relative z-10 text-white/80">{section.description}</p>}
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