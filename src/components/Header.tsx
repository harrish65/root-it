import React, { useState } from "react";
import Navbar from "./Navbar";

const bgImage = `/bgImage.gif`;

const Header: React.FC = () => {
  const headerContent = [
    {
      heading1: "Bridging Gaps",
      heading2: "Automating",
      heading3: "Process",
      content:
        "Unleash the Power of Possibilities by Building Tomorrow's Solutions, Today. Explore the Future with RootIT.",
      path: "/home",
    },
    {
      heading1: "Our",
      heading2: "Services",
      content: "Explore How Our Services Can Elevate Your Journey!",
      path: "/services",
    },
    {
      heading1: "About",
      heading2: "Us",
      content: "Our story, our culture, your future",
      path: "/about",
    },
    {
      heading1: "Career",
      content: "At Root IT, it's not about us, it's about what happens next.",
      path: "/career",
    },
    {
      heading1: "Our",
      heading2: "Work",
      content:
        "See how we help our clients become the future best versions of themselves each and every day.",
      path: "/work",
    },
  ];

  const [currentPath, setCurrentPath] = useState<string>("");

  // This function will be passed to Navbar as a prop
  const handlePathChange = (path: string) => {
    setCurrentPath(path);
  };

  const currentContent = headerContent.find(
    (content) => content.path === currentPath
  );

  return (
    <div
      className="max-w-full"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar setPath={handlePathChange} />
      <hr className="w-full border-t border-gray-900 mb-4 lg:hidden" />

      <div className="flex flex-col items-center justify-center h-full lg:mt-8 mt-6">
        {currentContent && (
          <div className="text-center">
            <h1 className="lg:text-6xl text-4xl font-extrabold text-white mb-5 lg:max-w-xl max-w-sm mx-auto">
              {currentContent.heading1}{" "}
              <span className=" mb-5 text-[#7f3bcc]">
                {currentContent.heading2}
              </span>{" "}
              {currentContent.heading3 && (
                <span className=" mb-4">{currentContent.heading3}</span>
              )}
            </h1>
            <p className="lg:text-lg text-base text-gray-300  lg:max-w-lg max-w-sm mx-auto">
              {currentContent.content}
            </p>
            <img
              src={
                currentPath === "/services" || currentPath === "/work"
                  ? "/scrollGifSmall.gif"
                  : "/scrollGif.gif" // replace with the source for other paths
              }
              alt="scrollGif"
              className={`
                ${currentPath === "/services" || currentPath === "/work" 
                  ? "w-10 mx-auto my-5" 
                  : "w-1/4 mx-auto my-5"}`} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;


