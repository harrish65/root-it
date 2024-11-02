import React, { useState } from "react";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";

interface CareersRequiredProps {
  heading: string;
  description: string;
  points: string[];
  isOpen: boolean;
}

const CareersRequired: React.FC<CareersRequiredProps> = ({
  heading,
  description,
  points,
  isOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    salary: "",
    experience: "",
    resume: null as File | null,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    salary: "",
    experience: "",
    resume: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Safely access the first file
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: "" })); // Clear error on file selection
    }
  };
  

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      phone: "",
      email: "",
      salary: "",
      experience: "",
      resume: "",
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
    if (!formData.salary) {
      newErrors.salary = "Current Salary is required.";
      isValid = false;
    }
    if (!formData.experience) {
      newErrors.experience = "Work Experience is required.";
      isValid = false;
    }
    if (!formData.resume) {
      newErrors.resume = "Resume is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        salary: "",
        experience: "",
        resume: null,
      });
      // Proceed with form submission logic (e.g., API call)
      closeModal(); // Close the modal after submission
    }
  };

  return (
    <div className="mt-5 lg:max-w-4xl md:max-w-2xl max-w-sm mx-5 lg:mx-auto px-4">
      {isOpen && (
        <div className="text-[#505052]">
          <p className="flex flex-wrap justify-start items-start gap-3 text-base lg:text-xl font-medium text-black mb-5">
            {heading}
            <span className="bg-[#e9e9ee] text-xs lg:text-sm font-normal text-[#505052] px-2 py-1 rounded-full">+01</span>
            <span className="bg-[#d2e7d2] text-xs lg:text-sm font-normal text-[#505052] px-2 py-1 rounded-full">intern</span>
            <span className="bg-[#cecbf7] text-xs lg:text-sm font-normal text-[#505052] px-2 py-1 rounded-full">
              {heading === "Graphic Designer" ? "Part Time/Full Time" : "Full Time"}
            </span>
            <span className="bg-[#b3ccff] text-xs lg:text-sm font-normal text-[#505052] px-2 py-1 rounded-full">
              {heading === "Graphic Designer" ? "Hybrid" : "Remote"}
            </span>
          </p>
          <p className="text-sm lg:text-base font-normal mb-5">{description}</p>
          <p className="text-sm lg:text-base font-normal mb-5">Work-Time: 9 A.M. - 5 P.M. (Hybrid)</p>
          <p className="text-sm lg:text-base font-normal mb-5">Location: Bengaluru</p>
          <h6 className="text-sm lg:text-base font-medium mb-2">Responsibilities:</h6>
          <ul className="list-disc pl-5 text-sm lg:text-base font-normal mb-4 space-y-1">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 font-semibold mt-1 text-sm lg:text-base" onClick={openModal}>
            Apply now <MdArrowForward />
          </button>
          <hr className="border-gray-300 my-4" />
          
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
                <button onClick={closeModal} className="absolute top-2 right-2 text-2xl" aria-label="Close Modal">✕</button>
                <h3 className="text-xl font-semibold mb-4">Fill out the information below</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 w-full">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className={`border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
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
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="salary"
                      placeholder="Current Salary"
                      className={`border ${errors.salary ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                      value={formData.salary}
                      onChange={handleInputChange}
                    />
                    {errors.salary && <p className="text-red-500 text-sm">{errors.salary}</p>}
                    <input
                      type="text"
                      name="experience"
                      placeholder="Work experience"
                      className={`border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                    {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      id="file-upload"
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor="file-upload"
                      className={`flex justify-center items-center gap-2 border-[2px] text-black py-2 rounded-full bg-slate-50 cursor-pointer ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <AiOutlineUpload />
                      {formData.resume ? formData.resume.name : "Upload Resume"}
                    </label>
                    {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 text-white py-2 rounded-full"
                    style={{
                      background: `linear-gradient(83.46deg,#7f47bf,#d690f2)`,
                    }}
                  >
                    Submit <MdArrowOutward />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareersRequired;
