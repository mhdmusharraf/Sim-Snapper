import React from "react";

const Confirmation = () => {
  const handleConfirmation = (e) => {
    e.preventDefault();
    alert("Your mobile connection activation request has been submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[rgb(63,176,97)] via-[rgb(29,181,176)] via-[rgb(22,153,174)] to-[rgb(0,184,255)] text-white">
      {/* Header
      <header className="w-full p-4 flex justify-center bg-white">
        <img
          src="/SLT_Mobitel.jpg"
          alt="SLTMobitel Logo"
          className="h-16 object-contain"
        />
      </header> */}

      {/* Form Section */}
      <main className="flex-1 w-full p-4">
        <h1 className="text-center text-2xl font-bold mb-6">
          Activate Your SLT - Mobitel Mobile New Connection
        </h1>
        <form
          onSubmit={handleConfirmation}
          className="max-w-md mx-auto bg-white text-blue-900 p-6 rounded-lg shadow-md"
        >
          {/* Mobile Number */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              SLT - Mobitel Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* NIC Number */}
          <div className="mb-4">
            <label
              htmlFor="nic"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              NIC Number
            </label>
            <input
              type="text"
              id="nic"
              name="nic"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your NIC number"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Confirmation;
