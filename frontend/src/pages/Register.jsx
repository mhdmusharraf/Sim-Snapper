import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCapture } from "../../CaptureContext/CaptureContext";

const Register = () => {
  const navigate = useNavigate();
  const { capturedImage } = useCapture();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    navigate("/confirm");
  };

  const openCamera = () => {
    navigate("/capture");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background: "#caf0f6",
      }}
    >
      {/* Form Section */}
      <main className="flex-1 w-full p-4 mt-6">
        <motion.form
          onSubmit={handleRegister}
          className="max-w-md mx-auto bg-[#475492] text-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-center text-3xl font-bold mb-6"
            style={{ color: "#caf0f6" }}
          >
            SIM Card Registration
          </h1>

          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-bold mb-1"
              style={{ color: "#caf0f6" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              placeholder="Enter your name"
              required
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* Date of Birth Field */}
          <div className="mb-4">
            <label
              htmlFor="dob"
              className="block text-sm font-bold mb-1"
              style={{ color: "#caf0f6" }}
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              required
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* Passport Number Field */}
          <div className="mb-4">
            <label
              htmlFor="passport"
              className="block text-sm font-bold mb-1"
              style={{ color: "#caf0f6" }}
            >
              Passport Number
            </label>
            <input
              type="text"
              id="passport"
              name="passport"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              placeholder="Enter your passport number"
              required
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* Captured Image and Open Camera Button */}
          <div className="mb-6 flex flex-col items-center sm:flex-row sm:justify-between">
            {capturedImage ? (
              <div className="mb-4 sm:mb-0 sm:mr-6 flex justify-center">
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="w-40 h-40 object-cover border border-gray-400 rounded-md shadow-md"
                />
              </div>
            ) : (
              <p className="text-sm text-gray-600 sm:mr-6">
                No image captured. Please use the camera to capture an image.
              </p>
            )}
            <button
              type="button"
              onClick={openCamera}
              className="px-6 py-2 bg-[#03045e] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Open Camera
            </button>
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#03045e] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Register
            </button>
          </div>
        </motion.form>
      </main>
    </div>
  );
};

export default Register;
