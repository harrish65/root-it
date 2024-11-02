import React, { useState } from "react";
import Modal from "react-modal";

// React Modal styling
Modal.setAppElement("#root");

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  currentSalary: string;
  workExperience: string;
  resume: File | null;
}

const CareerForm: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    currentSalary: "",
    workExperience: "",
    resume: null,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle resume upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Submit form logic here
    setModalIsOpen(false); // Close modal on submit
  };

  return (
    <div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Form
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
        <h2 className="text-lg font-semibold mb-5 text-center">
          Submit Your Information
        </h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />

          {/* Current Salary */}
          <input
            type="number"
            name="currentSalary"
            placeholder="Current Salary"
            value={formData.currentSalary}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />

          {/* Work Experience */}
          <input
            type="text"
            name="workExperience"
            placeholder="Work Experience (in years)"
            value={formData.workExperience}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />

          {/* Upload Resume */}
          <label className="flex items-center justify-between bg-gray-100 py-2 px-4 border border-gray-300 rounded cursor-pointer">
            <span>Upload Resume</span>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Submit Button */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CareerForm;
