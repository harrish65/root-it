import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface NavbarProps {
  setPath: (path: string) => void;
}

const companyPages = [
  { page: "Home", pageHref: "/" },
  { page: "About", pageHref: "/about" },
  { page: "Services", pageHref: "/services" },
  { page: "Career", pageHref: "/career" },
  { page: "Work", pageHref: "/work" },
];

const Navbar: React.FC<NavbarProps> = ({ setPath }) => {
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
    setPath(path);
  }, [setPath]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      phone: "",
      email: "",
    };
    let isValid = true;

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required.";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      // Here you could add code to send form data to an API
      
      // Reset the form data
      setFormData({
        fullName: "",
        phone: "",
        email: "",
      });
      closeModal(); // Close the modal after submission
    }
  };

  return (
    <div className="flex justify-between items-center bg-inherit px-5 py-3">
      <div>
        <Link href="/">
          <img src="/CompanyLogo.svg" alt="Large screen image" className="hidden lg:block w-full" />
        </Link>
        <Link href="/">
          <img src="/CompanyLogoSmall.svg" alt="Small screen image" className="block lg:hidden md:block w-full" />
        </Link>
      </div>

      <div className="hidden lg:border lg:border-[#bababb] lg:bg-opacity-10 lg:px-6 lg:py-3 lg:shadow-lg lg:flex lg:rounded-full">
        {companyPages.map((page, index) => (
          <Link
            key={index}
            href={page.pageHref}
            className={`text-md bg-transparent px-4 ${page.pageHref === currentPath ? "text-[#7f47bf]" : "text-gray-200"}`}
          >
            {page.page}
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={openModal} // Open modal on click
          className="flex items-center gap-1 text-sm md:text-base lg:text-lg font-normal text-white px-4 py-2 md:px-5 md:py-3 rounded-full"
          aria-label="Get In Touch"
          style={{ background: `linear-gradient(83.46deg,#7f47bf,#d690f2)` }}
        >
          Get In Touch <MdArrowOutward />
        </button>

        <img
          src="/menuIcon.svg"
          className="lg:hidden block w-fit"
          onClick={toggleMobileMenu}
          alt="Menu Icon"
        />
      </div>

      {/* Fullscreen mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#9e82bd] bg-opacity-100 flex flex-col justify-center items-center text-[#512286] z-50">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-12 text-2xl px-2 py-1 border border-[DAD1F4] rounded-full"
            aria-label="Close Menu"
          >
            ✕
          </button>
          <Link href="/" className="absolute top-4 left-12 text-lg">
            <img src="/testimonials/smallLogoBlack.svg" alt="Logo" />
          </Link>
          {companyPages.map((pages, index) => (
            <Link
              key={index}
              href={pages.pageHref}
              className={`text-lg font-semibold py-1 ${pages.pageHref === currentPath ? "text-[#7f47bf]" : "text-[#3a1465]"}`}
              onClick={toggleMobileMenu}
            >
              {pages.page}
            </Link>
          ))}
        </div>
      )}

      {/* Modal for the contact form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl px-12 py-8  w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl"
              aria-label="Close Modal"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">
              You bring an idea, we make it happen!
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Name"
                  className={`border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  value={formData.phone}
                  onChange={handleInputChange}
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
  );
};

export default Navbar;
