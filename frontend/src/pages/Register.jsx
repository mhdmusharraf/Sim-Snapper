import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCapture } from "../../CaptureContext/CaptureContext";

const Register = () => {
  const navigate = useNavigate();
  const { capturedImage } = useCapture();

  // State for form inputs
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [dob, setDob] = useState(localStorage.getItem("dob") || "");
  const [passportNumber, setPassportNumber] = useState(localStorage.getItem("passportNumber") || "");

  useEffect(() => {
    // Save data to localStorage whenever form values change
    localStorage.setItem("name", name);
    localStorage.setItem("dob", dob);
    localStorage.setItem("passportNumber", passportNumber);
  }, [name, dob, passportNumber]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const base64ToBlob = (base64) => {
      const byteString = atob(base64.split(',')[1]);
      const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
      const byteArray = new Uint8Array(byteString.length);

      for (let i = 0; i < byteString.length; i++) {
        byteArray[i] = byteString.charCodeAt(i);
      }

      return new Blob([byteArray], { type: mimeString });
    };

    const imageBlob = base64ToBlob(capturedImage);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('dob', dob);
    formData.append('passportNumber', passportNumber);
    formData.append('image', imageBlob, 'image.jpg');

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Store the user ID (from the response) in localStorage or state
      localStorage.setItem('userId', response.data.user._id);

      alert(response.data.message);
      navigate("/confirm");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  const openCamera = () => {
    navigate("/capture");
  };

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ background: "#caf0f6" }}>
      <div className="absolute top-28 left-6">
        <button onClick={() => navigate("/")} className="p-2 rounded-full bg-[#03045e] text-white hover:bg-opacity-90">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <main className="flex-1 w-full p-4 mt-6">
        <motion.form
          onSubmit={handleRegister}
          className="max-w-md mx-auto bg-[#475492] text-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-center text-3xl font-bold mb-6" style={{ color: "#caf0f6" }}>SIM Card Registration</h1>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-1" style={{ color: "#caf0f6" }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* Date of Birth Field */}
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-bold mb-1" style={{ color: "#caf0f6" }}>Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* Passport Number Field */}
          <div className="mb-4">
            <label htmlFor="passport" className="block text-sm font-bold mb-1" style={{ color: "#caf0f6" }}>Passport Number</label>
            <input
              type="text"
              id="passport"
              name="passport"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              placeholder="Enter your passport number"
              required
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* Captured Image and Open Camera Button */}
          <div className="mb-6 flex flex-col items-center sm:flex-row sm:justify-between">
            {capturedImage && (
              <div className="mb-4 sm:mb-0 sm:mr-6 flex justify-center">
                <img src={capturedImage} alt="Captured" className="w-40 h-40 object-cover border border-gray-400 rounded-md shadow-md" />
              </div>
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
