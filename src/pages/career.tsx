import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiscussCard from "@/components/DiscussCard";
import CareersRequired from "@/components/CareersRequired";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Career: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const careersRequired = [
    {
      heading: "Graphic Designer",
      description:
        "We're looking for a talented and passionate Graphic Designer...",
      points: [
        "Design eye-catching social media posts...",
        "Create engaging video content...",
        "Collaborate with the marketing team...",
        "Stay updated on design trends...",
        "Maintain consistent brand identity...",
      ],
    },
    {
      heading: "Frontend Developer",
      description: "We are looking for an experienced Frontend Developer...",
      points: [
        "Develop mobile applications using Flutter...",
        "Ensure high performance of applications...",
        "Stay updated with latest Flutter technologies...",
        "Participate in code reviews...",
        "Act as a primary point of contact for clients...",
      ],
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="lg:max-w-6xl md:max-w-3xl max-w-xl lg:mx-auto mx-2 mb-12 text-left">
        <h2 className="text-[#06040d] lg:text-2xl text-lg font-semibold my-5">
          We are always hiring!
        </h2>
        <p className="text-[#505052] font-normal text-base mb-5">
          Apply for a wide range of positions we have to offer.
        </p>
      </div>

      <div className="flex justify-between items-center lg:max-w-4xl md:max-w-2xl max-w-sm lg:mx-auto mx-4 mb-4">
        <h6 className="text-[#06040d] text-base md:text-lg lg:text-2xl font-semibold">
          Development
        </h6>
        <button onClick={toggleContent} aria-label="Toggle content visibility">
          {isOpen ? <MdKeyboardArrowUp className="lg:w-8 w-5 lg:h-8 h-5" /> : <MdKeyboardArrowDown  className="lg:w-8 w-5 lg:h-8 h-5" />}
        </button>
      </div>

      {isOpen === false && (
        <hr className="text-gray-700 lg:max-w-4xl md:max-w-2xl max-w-xs  mx-auto my-4" />
      )}

      {careersRequired.map((career, index) => (
        <CareersRequired
          key={index}
          heading={career.heading}
          description={career.description}
          points={career.points}
          isOpen={isOpen}
        />
      ))}
       <img src="/cardscroll/career.svg" className="object-contain my-5" alt="career" /> 
      <DiscussCard buttonText2="careers@rootit.in" />

      <Footer />
    </div>
  );
};

export default Career;
