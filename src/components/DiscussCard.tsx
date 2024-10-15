import React from "react";
const bgImage = `/bgImage.gif`;
import { MdArrowOutward } from "react-icons/md";

const DiscussCard: React.FC = () => {
  return (
    <div
      className="flex lg:flex-row flex-col justify-center lg:justify-between items-center rounded-2xl bg-black lg:max-w-5xl max-w-fit  mx-auto   px-12 py-12 my-10"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center  lg:space-y-4 space-y-2">
        <p className="lg:text-5xl text-2xl font-semibold text-white">Let's Discuss</p>
        <p className="text-gray-400 font-normal lg:text-xl text-base">
          We'd love to hear from you!
        </p>
      </div>
      <div className="flex items-center lg:mt-0 mt-3">
        <button
          className="flex items-center gap-1 text-lg font-normal text-white lg:px-6 px-3 lg:py-3 py-1 rounded-full"
          aria-label="Get In Touch"
          style={{ background: `linear-gradient(83.46deg,#7f47bf,#d690f2)` }}
        >
          Get In Touch <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default DiscussCard;
