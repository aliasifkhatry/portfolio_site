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

  const getImageStyle = () =>
    "absolute inset-0 object-cover w-full h-full";

  // Sample data with optional image URLs
  const firstRowSections: SectionData[] = [
    { title: "Ali Asif", description: "", image: "" },
    { title: "", description: "Student | Developer | Designer | Notion Enthusiast", image: "" },
    { title: "data", description: "more data", image: "" },
    { title: "", description: "", image: "" },
  ];

  const secondRowLeftTopSections: SectionData[] = [
    { title: "Top Left 1", description: "First half of top left", image: "/me_bw.png" },
    { title: "Top Left 2", description: "Second half of top left", image: "" },
  ];

  const secondRowLeftBottomSections: SectionData[] = [
    { title: "Bottom Left", description: "Bottom section", image: "" },
  ];

  const secondRowRightSections: SectionData[] = [
    { title: "Top Right", description: "First right section", image: "" },
    { title: "Bottom Right", description: "Second right section", image: "" },
  ];

  const thirdRowSections: SectionData[] = [
    { title: "Left Quarter 1", description: "First section", image: "" },
    { title: "Center Left", description: "First center section", image: "" },
    { title: "Center Middle", description: "Second center section", image: "" },
    { title: "Center Right", description: "Third center section", image: "" },
    { title: "Right Quarter", description: "Last section", image: "" },
  ];

  // Mobile Layout Component
  const MobileLayout = () => (
    <div className="sm:hidden w-full p-4 space-y-4">
      {/* First Row - Full Width Boxes */}
      {firstRowSections.map((section, index) => (
        <div
          key={`first-${index}`}
          className={getBoxClasses("w-full p-4 rounded-2xl min-h-[100px] relative overflow-hidden")}
        >
          <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
          {section.image && (
            <img
              key={section.image}
              src={section.image}
              alt={section.title || "Section"}
              className={getImageStyle()}
              style={{ zIndex: 0 }}
            />
          )}
          <div className="relative z-10 text-center">
            {section.title && <h2 className="text-white text-xl mb-2">{section.title}</h2>}
            {section.description && <p className="text-white/80">{section.description}</p>}
          </div>
        </div>
      ))}

      {/* Second Row - Split into Top and Bottom */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-transparent pointer-events-none">
          {secondRowLeftTopSections.map((section, index) => (
            <div
              key={`top-left-${index}`}
              className={getBoxClasses("p-3 rounded-xl min-h-[100px] relative overflow-hidden")}
            >
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
              {section.image && (
                <img
                  key={section.image}
                  src={section.image}
                  alt={section.title || "Section"}
                  className={getImageStyle()}
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="invisible-text">
                {section.title && <h3 className="invisible-text">{section.title}</h3>}
                {section.description && <p className="invisible-text">{section.description}</p>}
              </div>
            </div>
          ))}
        </div>

        {secondRowLeftBottomSections.map((section, index) => (
          <div
            key={`bottom-left-${index}`}
            className={getBoxClasses("w-full p-4 rounded-xl min-h-[100px] relative overflow-hidden")}
          >
            <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
            {section.image && (
              <img
                key={section.image}
                src={section.image}
                alt={section.title || "Section"}
                className={getImageStyle()}
                style={{ zIndex: 0 }}
              />
            )}
            <div className="relative z-10 text-center">
              {section.title && <h3 className="text-sm font-bold text-white">{section.title}</h3>}
              {section.description && <p className="text-xs text-white/70">{section.description}</p>}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4">
          {secondRowRightSections.map((section, index) => (
            <div
              key={`right-${index}`}
              className={getBoxClasses("p-3 rounded-xl min-h-[100px] relative overflow-hidden")}
            >
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
              {section.image && (
                <img
                  key={section.image}
                  src={section.image}
                  alt={section.title || "Section"}
                  className={getImageStyle()}
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="relative z-10 text-center">
                {section.title && <h3 className="text-sm font-bold text-white truncate">{section.title}</h3>}
                {section.description && <p className="text-xs text-white/70 line-clamp-2">{section.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Row - 5 Small Boxes in 2 Columns */}
      <div className="grid grid-cols-2 gap-4">
        {thirdRowSections.map((section, index) => (
          <div
            key={`third-${index}`}
            className={getBoxClasses("p-3 rounded-xl min-h-[100px] relative overflow-hidden")}
          >
            <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
            {section.image && (
              <img
                key={section.image}
                src={section.image}
                alt={section.title || "Section"}
                className={getImageStyle()}
                style={{ zIndex: 0 }}
              />
            )}
            <div className="relative z-10 text-center">
              {section.title && <h3 className="text-sm font-bold text-white truncate">{section.title}</h3>}
              {section.description && <p className="text-xs text-white/70 line-clamp-2">{section.description}</p>}
            </div>
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
                className={getBoxClasses("flex-grow flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden min-h-[80px]")}
              >
                <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
                {section.image && (
                  <img
                    key={section.image}
                    src={section.image}
                    alt={section.title || "Section"}
                    className={getImageStyle()}
                    style={{ zIndex: 0 }}
                  />
                )}
                <div className="relative z-10 text-center">
                  {section.title && (
                    <h2 className="text-4xl lg:text-7xl font-bold mb-2 text-white text-left">
                      {section.title}
                    </h2>
                  )}
                  {section.description && (
                    <p className="text-white/80 text-left">
                      {section.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Center Section */}
          <div className="w-1/2 h-full">
            <div className={getBoxClasses("h-full flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden")}>
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
              {firstRowSections[2].image && (
                <img
                  key={firstRowSections[2].image}
                  src={firstRowSections[2].image}
                  alt={firstRowSections[2].title || "Section"}
                  className={getImageStyle()}
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="relative z-10 text-center">
                {firstRowSections[2].title && (
                  <h2 className="text-xl font-bold mb-2 text-white text-left">
                    {firstRowSections[2].title}
                  </h2>
                )}
                {firstRowSections[2].description && (
                  <p className="text-white/80 text-left">
                    {firstRowSections[2].description}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-1/4 h-full">
            <div className={getBoxClasses("h-full flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden")}>
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
              {firstRowSections[3].image && (
                <img
                  key={firstRowSections[3].image}
                  src={firstRowSections[3].image}
                  alt={firstRowSections[3].title || "Section"}
                  className={getImageStyle()}
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="relative z-10 text-center">
                {firstRowSections[3].title && (
                  <h2 className="text-xl font-bold mb-2 text-white text-left">
                    {firstRowSections[3].title}
                  </h2>
                )}
                {firstRowSections[3].description && (
                  <p className="text-white/80 text-left">
                    {firstRowSections[3].description}
                  </p>
                )}
              </div>
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
                  className={getBoxClasses("flex-grow flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden")}
                >
                  <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
                  {section.image && (
                    <img
                      key={section.image}
                      src={section.image}
                      alt={section.title || "Section"}
                      className={getImageStyle()}
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <div className="relative z-10 text-center">
                    {section.title && (
                      <h2 className="invisible-text">
                        {section.title}
                      </h2>
                    )}
                    {section.description && (
                      <p className="invisible-text">
                        {section.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-1/2 min-h-[140px]">
              {secondRowLeftBottomSections.map((section, index) => (
                <div
                  key={index}
                  className={getBoxClasses("h-full flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden")}
                >
                  <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
                  {section.image && (
                    <img
                      key={section.image}
                      src={section.image}
                      alt={section.title || "Section"}
                      className={getImageStyle()}
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <div className="relative z-10 text-center">
                    {section.title && (
                      <h2 className="text-xl font-bold mb-2 text-white">
                        {section.title}
                      </h2>
                    )}
                    {section.description && (
                      <p className="text-white/80">
                        {section.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Section */}
          <div className={getBoxClasses("w-1/2 flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden")}>
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
                className={getBoxClasses("flex-grow flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden min-h-[140px]")}
              >
                <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
                {section.image && (
                  <img
                    key={section.image}
                    src={section.image}
                    alt={section.title || "Section"}
                    className={getImageStyle()}
                    style={{ zIndex: 0 }}
                  />
                )}
                <div className="relative z-10 text-center">
                  {section.title && (
                    <h2 className="text-xl font-bold mb-2 text-white">
                      {section.title}
                    </h2>
                  )}
                  {section.description && (
                    <p className="text-white/80">
                      {section.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Row */}
        <div className="flex space-x-4 w-full h-[15vh] min-h-[120px]">
          {thirdRowSections.map((section, index) => (
            <div
              key={index}
              className={getBoxClasses("w-1/4 flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-2xl relative overflow-hidden")}
            >
              <div className={`absolute inset-0 ${getGradientClasses()} pointer-events-none`}></div>
              {section.image && (
                <img
                  key={section.image}
                  src={section.image}
                  alt={section.title || "Section"}
                  className={getImageStyle()}
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="relative z-10 text-center">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {section.title}
                </h2>
                <p className="text-white/80">
                  {section.description}
                </p>
              </div>
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