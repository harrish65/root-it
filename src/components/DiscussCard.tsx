import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Modal from "react-modal";

// Define the interface for DiscussCardProps to include title, subtitle, and buttonText
interface DiscussCardProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonText2?: string;
}

const bgImage = `/bgImage.gif`;



const DiscussCard: React.FC<DiscussCardProps> = ({
  title,
  subtitle,
  buttonText,
  buttonText2,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="flex lg:flex-row md:flex-row flex-col justify-center lg:justify-between md:justify-between items-center rounded-2xl bg-black lg:max-w-4xl md:max-w-2xl max-w-xs mx-auto px-12 py-12 my-10"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {buttonText && (
        <div className="flex flex-col items-center lg:space-y-4 md:space-y-3 space-y-2">
          <p className="lg:text-5xl text-2xl font-semibold text-white">
            {title}
          </p>
          <p className="text-gray-400 font-normal lg:text-xl text-base">
            {subtitle}
          </p>
        </div>
      )}
      {buttonText2 && (
        <div className="mb-2">
          <p className="text-[#fdfdfe] md:text-xl text-lg font-semibold max-w-sm space-x-1 text-center md:text-left">
            We&apos;re here to listen and eager to collaborate with you.
          </p>
        </div>
      )}
      {buttonText && (
        <div className="flex items-center lg:mt-0 mt-3">
          <button
            className="flex items-center gap-1 md:text-lg text-base font-normal text-white md:px-6 px-4 md:py-3 py-2 md:w-fit w-full rounded-full"
            aria-label="Get In Touch"
            style={{
              background: `linear-gradient(83.46deg, #7f47bf, #d690f2)`,
            }}
            onClick={openModal}
          >
            {buttonText} <MdArrowOutward />
          </button>
        </div>
      )}
      {buttonText2 && (
        <div className="flex flex-col justify-center gap-1 items-center text-white w-full">
          <p className="text-sm text-justify text-gray-500 mr-1 mb-2">
            Rush your portfolio to:
          </p>
          <button className="text-base text-center bg-inherit border border-[#fdfdfe] bg-opacity-10 hover:bg-white hover:text-gray-600 font-normal lg:px-6 px-3 lg:py-3 py-1 rounded-full w-full md:w-fit">
            {buttonText2}
          </button>
        </div>
      )}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "500px",
              padding: "20px",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
          }}
        >
          {/* Close button at the top */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-2xl"
            aria-label="Close Modal"
          >
            ✕
          </button>

          {/* Modal Content */}
          <h3 className="text-xl font-semibold mb-4">
            You bring an idea, we make it happen!
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter Name"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
              <input
                type="email"
                placeholder="Business Email"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
              <select className="border border-gray-300 rounded-lg p-2">
                <option>Service</option>
                <option>Service 1</option>
                <option>Service 2</option>
              </select>
            </div>
            <textarea
              placeholder="How can we help?"
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 text-white py-2 rounded-full"
              style={{ background: `linear-gradient(83.46deg,#7f47bf,#d690f2)` }}
            >
              Submit <MdArrowOutward />
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default DiscussCard;
