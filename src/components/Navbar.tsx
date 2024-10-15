import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface NavbarProps {
  setPath: (path: string) => void;
}

const companyPages = [
  { page: "Home", pageHref: "/home" },
  { page: "About", pageHref: "/about" },
  { page: "Services", pageHref: "/services" },
  { page: "Career", pageHref: "/career" },
  { page: "Work", pageHref: "/work" },
];

const Navbar: React.FC<NavbarProps> = ({ setPath }) => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
    setPath(path); // Pass the path up to the parent component
  }, [setPath]);

  return (
    <div className="flex justify-between items-center bg-inherit px-5 py-3">
      <div>
        <a href="/home">
          <img
            src="/CompanyLogo.svg"
            alt="Large screen image"
            className="hidden lg:block w-full"
          />
        </a>
        <a href="/home">
          <img
            src="/CompanyLogoSmall.svg"
            alt="Small screen image"
            className="block lg:hidden w-full"
          />
        </a>
      </div>
      <div className="lg:block hidden">
        {companyPages.map((page, index) => (
          <a
            key={index}
            href={page.pageHref}
            className={`text-base px-3 ${
              page.pageHref === currentPath ? "text-[#7f47bf]" : "text-gray-200"
            }`}
          >
            {page.page}
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        <button
          className="flex items-center gap-1 text-lg font-normal text-white lg:px-5 px-3 lg:py-3 py-1 rounded-full"
          aria-label="Get In Touch"
          style={{ background: `linear-gradient(83.46deg,#7f47bf,#d690f2)` }}
        >
          Get In Touch <MdArrowOutward />
        </button>
        <img
          src="/menuIcon.svg"
          className="lg:hidden block bg-transparent w-fit"
        />
      </div>
    </div>
  );
};

export default Navbar;
