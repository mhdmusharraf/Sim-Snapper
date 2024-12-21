import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    navigate("/confirm");
  };

  const openCamera = () => {
    alert("Camera functionality is not implemented yet.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[rgb(63,176,97)] via-[rgb(29,181,176)] via-[rgb(22,153,174)] to-[rgb(0,184,255)] text-white">
      {/* Header */}
      <header className="w-full p-4 flex justify-center bg-white">
        <img
          src="/SLT_Mobitel.jpg"
          alt="SLTMobitel Logo"
          className="h-16 object-contain"
        />
      </header>

      {/* Form Section */}
      <main className="flex-1 w-full p-4">
        <h1 className="text-center text-2xl font-bold mb-6">SIM Card Registration</h1>
        <form
          onSubmit={handleRegister}
          className="max-w-md mx-auto bg-white text-blue-900 p-6 rounded-lg shadow-md"
        >
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Passport Number */}
          <div className="mb-4">
            <label
              htmlFor="passport"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Passport Number
            </label>
            <input
              type="text"
              id="passport"
              name="passport"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your passport number"
              required
            />
          </div>

          {/* Open Camera Button */}
          <div className="mb-6 flex justify-center">
            <button
              type="button"
              onClick={openCamera}
              className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800"
            >
              Open Camera
            </button>
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800"
            >
              Register
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Register;
