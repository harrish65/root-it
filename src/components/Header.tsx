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
      path: "/",
    },
    {
      heading1: "Our",
      heading2: "Services",
      content: "Explore How Our Services Can Elevate Your Journey!",
      path: "/services",
    },
    {
      heading2: "About",
      heading3: "Us",
      content: "Our story, our culture, your future",
      path: "/about",
    },
    {
      heading2: "Career",
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

  const handlePathChange = (path: string) => {
    setCurrentPath(path);
  };

  const currentContent = headerContent.find(
    (content) => content.path === currentPath
  );

  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Navbar setPath={handlePathChange} />
      <hr className="w-full border-t border-gray-900 mb-4 lg:hidden" />

      <div className="flex flex-col items-center justify-center lg:mt-8 mt-6 px-4 text-center">
        {currentContent && (
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-5 max-w-lg lg:max-w-xl">
              {currentContent.heading1}{" "}
              <span className="text-[#7f3bcc]">{currentContent.heading2}</span>{" "}
              {currentContent.heading3 && (
                <span>{currentContent.heading3}</span>
              )}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mx-auto max-w-sm lg:max-w-lg">
              {currentContent.content}
            </p>
            <img
              src={
                currentPath === "/services" || currentPath === "/work"
                  ? "/scrollGifSmall.gif"
                  : "/scrollGif.gif"
              }
              alt="scrollGif"
              className={`${
                currentPath === "/services" || currentPath === "/work"
                  ? "w-8 sm:w-10 lg:w-12 mx-auto mt-2 mb-10"
                  : "w-1/4 mx-auto mt-2 mb-10"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
