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
      bgColor: "bg-blue-200",
      textColor: "text-black"
    },
    {
      title: "Wide Rectangle",
      description: "Center section - Wide rectangle", 
      bgColor: "bg-green-200",
      textColor: "text-black"
    },
    {
      title: "Narrow Rectangle",
      description: "Last section - Narrow rectangle",
      bgColor: "bg-red-200",
      textColor: "text-black"
    }
  ];

  const secondRowRightSections = [
    {
      title: "Top Right",
      description: "First right section",
      bgColor: "bg-purple-200",
      textColor: "text-black"
    },
    {
      title: "Bottom Right",
      description: "Second right section",
      bgColor: "bg-orange-200",
      textColor: "text-black"
    }
  ];

  const thirdRowSections = [
    {
      bgColor: "bg-yellow-200",
    },
    {
      bgColor: "bg-blue-300",
    },
    {
      bgColor: "bg-green-300",
    },
    {
      bgColor: "bg-red-300",
    },
    {
      bgColor: "bg-purple-300",
    }
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start pt-8 bg-black p-4 space-y-4 mt-20">
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
              ${section.bgColor}
              ${section.textColor}
              flex
              flex-col
              items-center
              justify-center
              p-4
              rounded-xl
              shadow-lg
              h-full
            `}
          >
            {section.title && <h2 className="text-xl font-bold mb-2">{section.title}</h2>}
            {section.description && <p className="text-center">{section.description}</p>}
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div 
        className="flex space-x-4 w-full" 
        style={{ height: `${secondRowHeight}px` }}
      >
        <div
          className="w-1/6 bg-blue-200 flex flex-col items-center justify-center p-4 rounded-xl shadow-lg h-full"
        >
          <h2 className="text-xl font-bold mb-2">Square Box</h2>
          <p className="text-center">First section - Square shaped</p>
        </div>

        <div
          className="w-1/2 bg-green-200 flex flex-col items-center justify-center p-4 rounded-xl shadow-lg h-full"
        >
          <h2 className="text-xl font-bold mb-2">Wide Rectangle</h2>
          <p className="text-center">Center section - Wide rectangle</p>
        </div>

        <div
          className="w-1/3 flex flex-col space-y-4 h-full"
        >
          {secondRowRightSections.map((section, index) => (
            <div
              key={index}
              className={`
                w-full
                ${section.bgColor}
                ${section.textColor}
                flex
                flex-col
                items-center
                justify-center
                p-4
                rounded-xl
                shadow-lg
                ${index === 0 ? 'h-1/2' : 'h-1/2'}
              `}
            >
              {section.title && <h2 className="text-xl font-bold mb-2">{section.title}</h2>}
              {section.description && <p className="text-center">{section.description}</p>}
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
              ${section.bgColor}
              flex
              flex-col
              items-center
              justify-center
              p-4
              rounded-xl
              shadow-lg
              h-full
            `}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;