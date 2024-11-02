import React, { useEffect, useState } from "react";
import { MdArrowForward, MdArrowOutward } from "react-icons/md"; //
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { p } from "framer-motion/client";

const companyPages = [
  { page: "About Us", pageHref: "/about" },
  { page: "Our Services", pageHref: "/services" },
  { page: "Career", pageHref: "/career" },
  { page: "Get In Touch",action: "openModal"},
  { page: "Our Work", pageHref: "/work" },
];


const Footer = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const EmailInput = () => {
   
  
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [submitted, setSubmitted] = useState(false); // State to track submission

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailValue = e.target.value;
      setEmail(emailValue);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailRegex.test(emailValue));
      setSubmitted(false); // Reset submission status on change
    };

    const handleSubmit = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        setIsValid(true);
        setSubmitted(true);
      } else {
        setIsValid(false);
        setSubmitted(true);
      }
    };

    return (
      <div className="relative w-full flex flex-col items-center gap-2">
        {!isValid && <div className="relative w-full flex items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
            className="lg:text-lg text-sm bg-transparent text-gray-500 lg:px-12 px-8 lg:py-5 py-3 rounded border border-gray-300 outline-none w-full"
          />
          <button
            className="absolute right-2 bg-blue-500 text-white text-xl lg:px-6 px-3 lg:py-3 py-2 rounded"
            aria-label="Submit Email"
            onClick={handleSubmit}
          >
            <MdArrowForward />
          </button>
        </div>}
        {isValid && <p className="text-white font-semibold text-2xl text-left">Thank you!</p> }
        {/* Conditionally render the thank you or error message */}
        {submitted && (
          <p className={isValid ? "text-green-500" : "text-red-500"}>
            {isValid ? "Thank you!" : "Please enter a valid email."}
          </p>
        )}
      </div>
    );
  };

  const contact = [
    {
      question: "Email - ",
      answer: "support@rootit.in",
      answer2: "H-20, Green Park Avenue,",
    },
    { question: "Call - ", answer: "8610440573", answer2: "Omalur Main Road," },
    {
      question: "Mon - ",
      answer: "Fri, 9am to 6pm",
      answer2: "Salem, Tamil Nadu IN.",
    },
  ];
  

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="bg-black max-w-full px-4 py-8 lg:py-12">
      <div className="lg:max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-row justify-between lg:items-center items-start mb-10 px-2">
          <div className="flex flex-col">
            <a href="/">
              <img
                src="/CompanyLogo.svg"
                alt="Large screen image"
                className="w-fit my-5 lg:mr-8"
              />
            </a>
            <div className="flex justify-center items-center gap-x-4 my-0 lg:hidden">
              <a
                href="https://www.instagram.com/rootit.solutions/?igsh=emhkNzN5d2J6Y3lr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/rootitsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
          </div>
          <div className="my-5 lg:w-1/2 text-center lg:text-left">
            <h6 className="lg:text-xl text-base font-medium text-gray-100 mb-2">
              COMPANY
            </h6>
            <div className="flex lg:flex-row flex-col lg:space-x-5 space-y-2 lg:space-y-0">
              {companyPages.map((page, index) => (
                <a
                  key={index}
                  href={page.pageHref}
                  className="hover:text-[#7f47bf] text-gray-200 lg:text-base text-xs text-left"
                  onClick={page.action === "openModal" ? openModal : undefined} // Open modal if action is set
                >
                  {page.page}
                </a>
              ))}
            </div>
          </div>
        </div>       

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row lg:justify-between bg-[#1c1c1c] rounded-md p-6 lg:px-12 lg:py-8 items-center mb-10 lg:gap-3 gap-2">
          <div className="flex flex-col gap-2 lg:max-w-lg md:max-w-md max-w-sm  text-center md:text-left mb-6 lg:pt-10 pt-8 lg:pb-5 px-4 lg:mb-0">
            <h6 className="lg:text-4xl text-2xl text-gray-100">
              Get Smart,{" "}
              <span className="lg:text-xl text-lg text-gray-100">
                Not Spam!
              </span>
            </h6>
            <p className="lg:text-base text-sm text-gray-100 text-justify">
              Our goal is to translate the positive effect of revolutionizing
              how companies engage with their clients and their team.
            </p>
          </div>
          <div className="flex justify-center items-center w-full lg:max-w-2xl md:max-w-xl lg:pt-10 pt-8 pb-5">
          <div className="relative w-full flex items-center gap-2">
             <EmailInput />
    </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 items-start lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-0 mb-10">
          {/* Contact Information */}
          <div className="col-span-1 md:col-span-1 order-1 md:order-1 lg:order-none  mx-auto">
            <h6 className="lg:text-lg text-base text-white font-medium pb-2 lg:pl-7 lg:text-left text-justify">
              REACH US AT
            </h6>
            {contact.map((contacts, index) => (
              <p
                className="lg:text-base text-xs text-gray-600 lg:pb-3 lg:pl-7 pb-1 lg:text-left text-justify"
                key={index}
              >
                {contacts.question}
                <span className="lg:text-base text-xs text-white">
                  {contacts.answer}
                </span>
              </p>
            ))}
          </div>

          {/* Location - Should span 3 columns on tablet and be centered */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 order-3 lg:order-none w-full mx-auto lg:mx-0 flex justify-center lg:justify-start">
            <a href="https://www.google.com/maps/place/Green+Park+Avenue,+Kondapur+Main+Road,+Gautami+Enclave,+Kondapur,+Telangana+500084/@11.668361,78.143092,15z/data=!4m6!3m5!1s0x3bcb93b261814a57:0x347a510fb013e7f8!8m2!3d17.4636311!4d78.3511989!16s%2Fg%2F1hhkr7xln?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
              <img
                src="/map.svg"
                alt="company location"
                className="w-fit bg-transparent"
              />
            </a>
          </div>

          {/* Headquarters Information */}
          <div className="col-span-1 order-2 md:order-2 lg:order-none">
            <h6 className="lg:text-lg text-base text-white font-medium pb-2 lg:pl-7 text-center lg:text-left">
              HEADQUARTERS
            </h6>
            {contact.map((contacts, index) => (
              <p
                className="text-white pb-1 lg:pb-2 lg:pl-7 text-xs lg:text-base text-center lg:text-left"
                key={index}
              >
                {contacts.answer2}
              </p>
            ))}
            <a
              href="https://www.google.com/maps/place/Green+Park+Avenue,+Kondapur+Main+Road,+Gautami+Enclave,+Kondapur,+Telangana+500084/@11.668361,78.143092,15z/data=!4m6!3m5!1s0x3bcb93b261814a57:0x347a510fb013e7f8!8m2!3d17.4636311!4d78.3511989!16s%2Fg%2F1hhkr7xln?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              className="flex justify-center lg:justify-start items-center gap-1 lg:pl-7 text-blue-600 text-xs lg:text-base pt-3"
              target="_blank"
            >
              Get Direction
              <MdArrowForward />
            </a>
          </div>
        </div>

        <hr className="w-full border-t border-gray-400 my-4" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:px-5">
          <p className="text-white lg:text-sm text-xs">
            ©rootit solutions. 2024. All Rights Reserved.
          </p>
          <div className="lg:flex justify-center items-center lg:gap-x-4 hidden">
            <a
              href="https://www.instagram.com/rootit.solutions/?igsh=emhkNzN5d2J6Y3lr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/rootitsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
          <div className="lg:flex-row space-y-2 lg:space-x-4 lg:space-y-0">
            <a
              href="#"
              className="text-white lg:text-sm text-xs lg:px-0 px-3"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white  lg:text-sm text-xs lg:px-0 px-3"
              target="_blank"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-white  lg:text-sm text-xs lg:px-0 px-3"
              target="_blank"
            >
              Cookies
            </a>
          </div>
        </div>
          {/* Modal */}
          {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-xl relative">
              {/* Close button */}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
