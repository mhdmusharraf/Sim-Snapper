import React from "react";
import { motion } from "framer-motion";


const Confirmation = () => {
  const handleConfirmation = (e) => {
    e.preventDefault();
    alert("Your mobile connection activation request has been submitted!");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: "#caf0f6" }}
    >
      {/* Form Section */}
      <main className="flex-1 w-full p-4 mt-6">
        <motion.form
          onSubmit={handleConfirmation}
          className="max-w-md mx-auto bg-[#475492] text-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
        >
          <h1
            className="text-center text-2xl font-bold mb-6"
            style={{ color: "#caf0f6" }}
          >
            Activate Your SLT - Mobitel Mobile New Connection
          </h1>
          {/* Mobile Number */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-bold mb-1"
              style={{ color: "#caf0f6" }}
            >
              SLT - Mobitel Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              placeholder="Enter your mobile number"
              required
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* NIC Number */}
          <div className="mb-4">
            <label
              htmlFor="nic"
              className="block text-sm font-bold mb-1"
              style={{ color: "#caf0f6" }}
            >
              NIC Number
            </label>
            <input
              type="text"
              id="nic"
              name="nic"
              className="w-full p-2 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6] transition-all duration-200"
              placeholder="Enter your NIC number"
              required
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#03045e] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </main>
    </div>
  );
};

export default Confirmation;
