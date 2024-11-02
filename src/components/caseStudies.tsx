import React from "react";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const caseStudy = [
  {
    heading: "Gate Security Control",
    content:
      "Step into a new era of security with Root it advanced gate security control project. Our team has developed a state-of-the-art solution to enhance access control, ensuring the safety and security of your premises. This project combines cutting-edge technology with design to create a robust gate security system.",
    button1: "License Plate Recognition",
    button2: "Fully customization feature",
    imageA: `/gateSoftware1.svg`,
    imageRight: "true",
  },
  {
    heading: "Canteen management",
    content:
      "It's our innovative canteen project! Our team embarked on a mission to revolutionize the dining experience, creating a dynamic and vibrant space for our clients and their employees / students. The primary goal of this project is to enhance the overall dining experience through thoughtful design, efficient operations, and a commitment to quality.",
    button1: "User friendly UI",
    button2: "Sustainability Initiatives",
    button3: "User freedom",
    imageA: `/canteenSoftware2.svg`,
    imageRight: "false",
  },
  {
    heading: "Hostel management",
    content:
      "Discover the next level of hostel management with Root it's innovative solution. Our hostel management project aims to streamline and enhance the entire hostel experience, providing administrators, residents, and staff with powerful tools for efficient operations and improved living conditions.",
    button1: "Fully responsive",
    button2: "Role based control",
    imageA: `/hostelSoftware3.svg`,
    imageRight: "true",
  },
  {
    heading: "Quality control",
    content:
      "Embark on a journey of efficiency and sustainability with RootIt Cotton Mill Management project. Our innovative solution is designed to revolutionize the cotton manufacturing process, with a primary focus on minimizing wastage, optimizing machine performance, and promoting sustainable practices.",
    button1: "Wastage Monitoring System",
    button2: "Role based control",
    imageA: `/qualitySoftware4.svg`,
    imageRight: "false",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "#DAD1F4" }}
      className="lg:mx-5 mx-2 lg:my-10 my-5 rounded-lg lg:px-5 px-3 lg:py-5 py-3"
    >
      {caseStudy.map((study, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center justify-between rounded-lg lg:gap-6 gap-3 p-6 mb-6 transition-all duration-1000 ${
            study.imageRight === "true" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content Section with Animation */}
          <div
            className={`w-full lg:w-1/2 flex flex-col justify-start lg:items-start lg:gap-y-10 gap-2 `}
          >
            <h2 className="lg:text-3xl text-xl font-bold mb-4">{study.heading}</h2>
            <p className="text-gray-700 text-justify lg:text-base md:text-sm text-xs lg:mb-4 mb-3">{study.content}</p>
            <div className="flex flex-wrap gap-4">
              <span
                className="text-white lg:text-base md:text-sm text-xs  px-4 py-2 rounded"
                style={{ backgroundColor: "#a58ee6" }}
              >
                {study.button1}
              </span>
              <span
                className="text-white lg:text-base md:text-sm text-xs  px-4 py-2 rounded"
                style={{ backgroundColor: "#a58ee6" }}
              >
                {study.button2}
              </span>
              {study.button3 && (
                <span
                  className="text-white lg:text-base md:text-sm text-xs  px-4 py-2 rounded"
                  style={{ backgroundColor: "#a58ee6" }}
                >
                  {study.button3}
                </span>
              )}
            </div>
          </div>
          {/* Image Section with Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full flex justify-center relative group transition-transform duration-1000 animate-slideLeft">
              <Image
                src={study.imageA}
                alt={study.heading}
                width={350}
                height={257}
                className="rounded-lg w-full"
              />
              <button className="absolute inset-0  flex items-center justify-center  lg:text-base md:text-sm text-xs  text-white font-semibold px-4 py-2 gap-1 rounded bg-opacity-60   opacity-0 transition-opacity duration-300  bg-black  group-hover:opacity-100">
                View case study <MdArrowForward />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CaseStudies;
