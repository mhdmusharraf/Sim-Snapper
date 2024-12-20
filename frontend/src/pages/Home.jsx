import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const packages = [
  { id: 1, name: "512MB", price: "Rs. 58", validity: "7 Days" },
  { id: 2, name: "1GB", price: "Rs. 109", validity: "10 Days" },
  { id: 3, name: "1.1GB", price: "Rs. 118", validity: "21 Days" },
  { id: 4, name: "1.5GB", price: "Rs. 159", validity: "14 Days" },
  { id: 5, name: "2GB", price: "Rs. 199", validity: "21 Days" },
  { id: 6, name: "3.5GB", price: "Rs. 299", validity: "30 Days" },
  { id: 7, name: "5GB", price: "Rs. 399", validity: "30 Days" },
  { id: 8, name: "7GB", price: "Rs. 499", validity: "30 Days" },
  { id: 9, name: "10GB", price: "Rs. 697", validity: "30 Days" },
  { id: 10, name: "15GB", price: "Rs. 999", validity: "30 Days" },
  { id: 11, name: "18.5GB", price: "Rs. 1,199", validity: "30 Days" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/register");
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[rgb(63,176,97)] via-[rgb(29,181,176)] via-[rgb(22,153,174)] to-[rgb(0,184,255)] text-white"
    >
      {/* Header */}
      <header className="w-full p-4 flex justify-center bg-white">
        <img
          src="/SLT_Mobitel.jpg"
          alt="SLTMobitel Logo"
          className="h-24 object-contain"
        />
      </header>

      {/* Package Cards */}
      <main className="flex-1 w-full p-4">
        <h1 className="text-center text-2xl font-bold mb-6">
          Choose Your Package
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="p-4 bg-white text-blue-900 rounded-lg shadow-md hover:shadow-lg cursor-pointer w-64"
              onClick={handleRedirect}
            >
              <h2 className="text-xl font-bold">{pkg.name}</h2>
              <p className="text-lg font-medium">{pkg.price}</p>
              <p className="text-sm text-gray-500">{pkg.validity}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}

      <button
        onClick={handleRedirect}
        className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800"
      >
        Continue Without Packages
      </button>
    </motion.div>
  );
};

export default Home;
