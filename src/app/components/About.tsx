import React from "react";

interface AboutProps {
  firstRowHeight?: number;
  secondRowHeight?: number;
  thirdRowHeight?: number;
}

const About: React.FC<AboutProps> = ({
  firstRowHeight = 200,
  secondRowHeight = 420,
  thirdRowHeight = 140,
}) => {
  const firstRowSections = [
    { title: "Ali Asif", description: "" },
    { title: "", description: "Student | Developer | Designer | Notion Enthusiast" },
    {
      title: "data",
      description: "more data",
    },
    { title: "", description: "" },
  ];

  const secondRowLeftTopSections = [
    {title: "Top Left 1", description: "First half of top left"},
    {title: "Top Left 2", description: "Second half of top left"},
  ];

  const secondRowLeftBottomSections = [
    { title: "Bottom Left", description: "Bottom section" },
  ];

  const secondRowRightSections = [
    { title: "Top Right", description: "First right section" },
    { title: "Bottom Right", description: "Second right section" },
  ];

  const thirdRowSections = [
    { title: "Left Quarter 1", description: "First section" },
    { title: "Center Left", description: "First center section" },
    { title: "Center Middle", description: "Second center section" },
    { title: "Center Right", description: "Third center section" },
    { title: "Right Quarter", description: "Last section" },
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start pt-8 bg-transparent p-4 space-y-4 mt-20 overflow-hidden">
      {/* First Row */}
      <div
        className="flex space-x-4 w-full"
        style={{ height: `${firstRowHeight}px` }}
      >
        {/* Left Section */}
        <div className="w-1/4 h-full flex flex-col space-y-4">
          {firstRowSections.slice(0, 2).map((section, index) => (
            <div
              key={index}
              className="flex-grow flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
              {section.title && (
                <h2 className="text-7xl font-bold mb-2 relative z-10 text-white text-left">
                  {section.title}
                </h2>
              )}
              {section.description && (
                <p className="text-left relative z-10 text-white/80">
                  {section.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Center Section */}
        <div className="w-1/2 h-full">
          <div className="flex-grow flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
            {firstRowSections[2].title && (
              <h2 className="text-xl font-bold mb-2 relative z-10 text-white text-left">
                {firstRowSections[2].title}
              </h2>
            )}
            {firstRowSections[2].description && (
              <p className="text-left relative z-10 text-white/80">
                {firstRowSections[2].description}
              </p>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/4 h-full">
          <div className="flex-grow flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
            {firstRowSections[3].title && (
              <h2 className="text-xl font-bold mb-2 relative z-10 text-white text-left">
                {firstRowSections[3].title}
              </h2>
            )}
            {firstRowSections[3].description && (
              <p className="text-left relative z-10 text-white/80">
                {firstRowSections[3].description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div
        className="flex space-x-4 w-full"
        style={{ height: `${secondRowHeight}px` }}
      >
        <div className="w-1/4 flex flex-col space-y-4 h-full">
          <div className="flex space-x-4 h-1/2">
            {secondRowLeftTopSections.map((section, index) => (
              <div
                key={index}
                className={`flex-grow flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
                {section.title && (
                  <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
                    {section.title}
                  </h2>
                )}
                {section.description && (
                  <p className="text-center relative z-10 text-white/80">
                    {section.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="h-1/2">
            {secondRowLeftBottomSections.map((section, index) => (
              <div
                key={index}
                className={`flex-grow flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
                {section.title && (
                  <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
                    {section.title}
                  </h2>
                )}
                {section.description && (
                  <p className="text-center relative z-10 text-white/80">
                    {section.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
            Wide Rectangle
          </h2>
          <p className="text-center relative z-10 text-white/80">
            Center section - Wide rectangle
          </p>
        </div>

        <div className="w-1/4 flex flex-col space-y-4 h-full">
          {secondRowRightSections.map((section, index) => (
            <div
              key={index}
              className={`flex-grow flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-1/2 backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
              {section.title && (
                <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
                  {section.title}
                </h2>
              )}
              {section.description && (
                <p className="text-center relative z-10 text-white/80">
                  {section.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Third Row */}
      <div
        className="flex space-x-4 w-full"
        style={{ height: `${thirdRowHeight}px` }}
      >
        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
            {thirdRowSections[0].title}
          </h2>
          <p className="text-center relative z-10 text-white/80">
            {thirdRowSections[0].description}
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
            {thirdRowSections[1].title}
          </h2>
          <p className="text-center relative z-10 text-white/80">
            {thirdRowSections[1].description}
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
            {thirdRowSections[2].title}
          </h2>
          <p className="text-center relative z-10 text-white/80">
            {thirdRowSections[2].description}
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
            {thirdRowSections[3].title}
          </h2>
          <p className="text-center relative z-10 text-white/80">
            {thirdRowSections[3].description}
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl h-full backdrop-blur-2xl bg-white/10 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
            {thirdRowSections[4].title}
          </h2>
          <p className="text-center relative z-10 text-white/80">
            {thirdRowSections[4].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
