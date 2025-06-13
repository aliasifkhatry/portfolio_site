import React from "react";

interface SectionData {
  title: string;
  description: string;
  image?: string;
}

interface AboutProps {
  firstRowHeight?: number;
  secondRowHeight?: number;
  thirdRowHeight?: number;
  isDarkMode?: boolean; // Theme prop
}

const About: React.FC<AboutProps> = ({ isDarkMode = true }) => {
  // Conditional styling helpers
  const getBoxClasses = (baseClasses: string = "") => {
    return `${baseClasses} ${
      isDarkMode 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-black/30 border-black/20 text-white'
    }`;
  };

  const getGradientClasses = () => {
    return isDarkMode 
      ? 'bg-gradient-to-br from-white/10 to-transparent opacity-20' 
      : 'bg-gradient-to-br from-black/10 to-transparent opacity-30';
  };

  // Section Data Arrays (✅ Now included)
  const firstRowSections = [
    { title: "Ali Asif", description: "" },
    { title: "", description: "Student | Developer | Designer | Notion Enthusiast" },
    { title: "data", description: "more data" },
    { title: "", description: "" },
  ];

  const secondRowLeftTopSections = [
    { title: "Top Left 1", description: "First half of top left" },
    { title: "Top Left 2", description: "Second half of top left" },
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

  // Mobile Layout Component
  const MobileLayout = () => (
    <div className="sm:hidden w-full p-4 space-y-4">
      <div className="flex flex-col space-y-4">
        {/* First Row Sections */}
        {firstRowSections.map((section, index) => (
          <div 
            key={index} 
            className={getBoxClasses("w-full p-4 rounded-2xl min-h-[100px]")}
          >
            {section.title && <h2 className="text-white text-xl mb-2">{section.title}</h2>}
            {section.description && <p className="text-white/80">{section.description}</p>}
          </div>
        ))}
        
        {/* Second Row Sections */}
        {[
          ...secondRowLeftTopSections,
          ...secondRowLeftBottomSections,
          ...secondRowRightSections
        ].map((section, index) => (
          <div 
            key={index} 
            className={getBoxClasses("w-full p-4 rounded-2xl min-h-[100px]")}
          >
            {section.title && <h2 className="text-white text-xl mb-2">{section.title}</h2>}
            {section.description && <p className="text-white/80">{section.description}</p>}
          </div>
        ))}
        
        {/* Third Row Sections */}
        {thirdRowSections.map((section, index) => (
          <div 
            key={index} 
            className={getBoxClasses("w-full p-4 rounded-2xl min-h-[100px]")}
          >
            {section.title && <h2 className="text-white text-xl mb-2">{section.title}</h2>}
            {section.description && <p className="text-white/80">{section.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  // Desktop Layout Component
  const DesktopLayout = () => (
    <div className="hidden sm:block w-screen min-h-screen flex flex-col items-center justify-start p-4 space-y-4 mt-20 overflow-y-auto overflow-x-hidden">
      <div className="w-screen max-w-full flex flex-col space-y-4">
        {/* First Row */}
        <div className="flex space-x-4 w-full h-[25vh] min-h-[180px]">
          {/* Left Section */}
          <div className="w-1/4 h-full flex flex-col space-y-4">
            {firstRowSections.slice(0, 2).map((section, index) => (
              <div
                key={index}
                className={getBoxClasses("flex-grow flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden min-h-[80px]")}
              >
                <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
                {section.title && (
                  <h2 className="text-4xl lg:text-7xl font-bold mb-2 relative z-10 text-white text-left">
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
            <div className={getBoxClasses("h-full flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden")}>
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
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
            <div className={getBoxClasses("h-full flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden")}>
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
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
        <div className="flex space-x-4 w-full h-[45vh] min-h-[300px]">
          {/* Left Column */}
          <div className="w-1/4 flex flex-col space-y-4 h-full">
            <div className="flex space-x-4 h-1/2 min-h-[140px]">
              {secondRowLeftTopSections.map((section, index) => (
                <div
                  key={index}
                  className={getBoxClasses("flex-grow flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden")}
                >
                  <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
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
            <div className="h-1/2 min-h-[140px]">
              {secondRowLeftBottomSections.map((section, index) => (
                <div
                  key={index}
                  className={getBoxClasses("h-full flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden")}
                >
                  <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
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
          
          {/* Center Section */}
          <div className={getBoxClasses("w-1/2 flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden")}>
            <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
            <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
              Wide Rectangle
            </h2>
            <p className="text-center relative z-10 text-white/80">
              Center section - Wide rectangle
            </p>
          </div>
          
          {/* Right Column */}
          <div className="w-1/4 flex flex-col space-y-4 h-full">
            {secondRowRightSections.map((section, index) => (
              <div
                key={index}
                className={getBoxClasses("flex-grow flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden min-h-[140px]")}
              >
                <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
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
        <div className="flex space-x-4 w-full h-[15vh] min-h-[120px]">
          {thirdRowSections.map((section, index) => (
            <div 
              key={index} 
              className={getBoxClasses("w-1/4 flex flex-col items-center justify-center p-4 rounded-2xl   backdrop-blur-2xl relative overflow-hidden")}
            >
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
              <h2 className="text-xl font-bold mb-2 relative z-10 text-white">
                {section.title}
              </h2>
              <p className="text-center relative z-10 text-white/80">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <DesktopLayout />
      <MobileLayout />
    </>
  );
};

export default About;