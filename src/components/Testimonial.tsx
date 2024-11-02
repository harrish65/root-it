import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const testimonialData = [
    {
      client: "Aradhana",
      clientName: "Mr. Balamurugan",
      clientImg: "testimonials/testimonial1.png",
      clientReviews:
        "Working with RootIT was a pleasure. Their team is friendly, knowledgeable, and made the digitalization process smooth and efficient.",
    },
    {
      client: "Dharnidara Spinning Mills",
      clientName: "Mr. Mukundan",
      clientImg: "testimonials/testimonial2.png",
      clientReviews:
        "I highly recommend RootIT to any business looking to enter the digital age. Their solutions are cutting-edge and their support is outstanding.",
    },
    {
      client: "Sundari Vintage",
      clientName: "Mr. Shashwat",
      clientImg: "testimonials/testimonial3.png",
      clientReviews:
        "RootIT transformed my outdated website into a beautiful, user-friendly site that perfectly captures my brand. Now, I receive constant compliments and inquiries!",
    },
    {
      client: "Delhi",
      clientName: "College Administrator",
      clientImg: "testimonials/testimonial4.png",
      clientReviews:
        "CampusStay from RootIT has streamlined our hostel operations, handling everything electronically from fee management to complaint resolution, freeing staff to enhance student living experiences.",
    },
    {
      client: "Tech Startup, Bengaluru",
      clientName: "Entrepreneur",
      clientImg: "testimonials/testimonial5.png",
      clientReviews:
        "Before RootIT, my business was a mess with endless tasks and delays. Now, everything is organized, automated, and stress-free with their software.",
    },
    {
      client: "Chandigarh",
      clientName: "Restaurant Owner",
      clientImg: "testimonials/testimonial6.png",
      clientReviews:
        "Canteen Management software has been a game-changer for our cafeteria. We've reduced food waste significantly with better inventory management.",
    },
    {
      client: "Kanpur",
      clientName: "Factory Incharge",
      clientImg: "testimonials/testimonial7.png",
      clientReviews:
        "Look, I'm not the most tech-savvy person, but the team took the time to explain everything in a way I could understand. Now, running my online store is a breeze! Sales have picked up too, thanks to you!",
    },
    {
      client: "Bengaluru",
      clientName: "Entrepreneur",
      clientImg: "testimonials/testimonial8.png",
      clientReviews:
        "We were hesitant to switch systems, but RootIT made the transition smooth. Their user-friendly software was easy for our team to learn, making inventory management a breeze and reducing shipping errors.",
    },
    {
      client: "Bhubaneswar",
      clientName: "Operations Executive",
      clientImg: "testimonials/testimonial9.png",
      clientReviews:
        "RootIT has been a lifesaver! We were about to lose business because our website was outdated. They gave us a modern, user-friendly refresh that improved customer experience and boosted conversions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const safeGet = (index) => {
    const length = testimonialData.length;
    return testimonialData[(index + length) % length];
  };

  return (
    <div className="lg:max-w-6xl mx-auto">
      <h6 className="text-black font-semibold lg:text-4xl md:text-3xl text-2xl mb-4 text-center">
        Our Clients Speak
      </h6>
      <p className="text-[#505052] lg:text-lg text-base mb-10 text-center">
        Discover how we've exceeded expectations.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:mx-2 mx-8 mb-5">
        <div className="hidden md:flex md:flex-row flex-col justify-center items-center bg-gray-100 px-6 py-8 rounded-lg max-w-md mx-auto gap-3 transition-all duration-500">
          <img
            src="/purpleQuotes.testimonials.svg"
            alt="purpleQuotes"
            className="w-1/4 mb-4"
          />
          <p className="text-gray-900 lg:text-base text-sm text-justify">
            {safeGet(currentIndex - 1)?.clientReviews}
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center bg-[#7f47bf] px-6 py-8 rounded-lg max-w-md mx-auto gap-3 transition-all duration-500">
          <img
            src="/purpleQuotes.testimonials.svg"
            alt="purpleQuotes"
            className="w-1/4 mb-4"
          />
          <p className="text-white lg:text-base text-sm text-justify">
            {safeGet(currentIndex)?.clientReviews}
          </p>
        </div>
        <div className="hidden md:flex md:flex-row  flex-col justify-center items-center bg-gray-100 px-6 py-8 rounded-lg max-w-md mx-auto gap-3 transition-all duration-500">
          <img
            src="/purpleQuotes.testimonials.svg"
            alt="purpleQuotes"
            className="w-1/4 mb-4"
          />
          <p className="text-gray-900 lg:text-base text-sm text-justify">
            {safeGet(currentIndex + 1)?.clientReviews}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <img src="/testimonials/testimonialDots.svg" alt="testimonialDots" />
      </div>
      {/* Client Image */}
      <div className="grid lg:grid-cols-7 grid-cols-5 justify-center items-center gap-x-4 gap-y-6">
        {/* Left Navigation Button */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-full">
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="flex justify-center items-center bg-transparent hover:bg-gray-400 rounded-full px-4 py-2 border-[3px] border-[#800080] w-fit"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
        </div>

        {/* Image 1 */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={safeGet(currentIndex - 2)?.clientImg}
            alt="clientImg"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4"
          />
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={safeGet(currentIndex - 1)?.clientImg}
            alt="clientImg"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4"
          />
        </div>

        {/* Center Image (Main Image) */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={safeGet(currentIndex)?.clientImg}
            alt="clientImg"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 border-[3px] border-[#7f47bf] rounded-full mb-4"
          />
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={safeGet(currentIndex + 1)?.clientImg}
            alt="clientImg"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4"
          />
        </div>

        {/* Image 5 */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={safeGet(currentIndex + 2)?.clientImg}
            alt="clientImg"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4"
          />
        </div>

        {/* Right Navigation Button */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-full">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="flex justify-center items-center bg-transparent hover:bg-gray-400 rounded-full px-4 py-2 border-[3px] border-[#800080] w-fit"
          >
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Client Name and Info */}

      <div className="flex justify-center items-center mt-4 space-x-5">
        <button
          onClick={nextSlide}
          aria-label="Next"
          className="lg:hidden flex justify-center items-center bg-transparent hover:bg-gray-400 rounded-full  px-4 py-2  border-[3px] border-[#800080] w-fit"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold lg:text-lg text-base">
            {safeGet(currentIndex)?.clientName}
          </p>
          <p className="text-[#505052] lg:text-base text-sm">
            {safeGet(currentIndex)?.client}
          </p>
        </div>
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className="lg:hidden flex justify-center items-center bg-transparent hover:bg-gray-400 rounded-full  px-4 py-2  border-[3px] border-[#800080] w-fit"
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
