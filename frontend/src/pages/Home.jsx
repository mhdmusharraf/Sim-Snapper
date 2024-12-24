import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { TbSignal4G } from "react-icons/tb";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handlePackageSelection = (pkg) => {
    toast.success(`${pkg.name} package added to your SIM for ${pkg.validity}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      navigate("/register");
    }, 3000);
  };

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center relative">
      <ToastContainer />
      <div className="flex-1 w-full p-6 rounded-lg mt-10" style={{ backgroundColor: "#475492", maxWidth: "900px", minHeight: "400px" }}>
        <h1 className="text-center text-2xl font-bold mb-6" style={{ color: "#caf0f6" }}>Choose Your Package</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="relative p-4 rounded-lg shadow-md cursor-pointer"
              style={{ backgroundColor: "#03045e", color: "#caf0f6", maxWidth: "250px" }}
              onClick={() => handlePackageSelection(pkg)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "#262d79", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="absolute top-5 right-2 flex flex-col items-center space-y-1">
                <FaMoon className="text-cyan-500" title="Anytime Data" size={18} />
                <TbSignal4G className="text-green-500" title="4G" size={18} />
              </div>
              <h2 className="text-xl font-bold">{pkg.name}</h2>
              <p className="text-lg font-medium">{pkg.price}</p>
              <p className="text-sm" style={{ color: "#caf0f6" }}>{pkg.validity}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:absolute md:bottom-20 md:right-20">
          <button
            onClick={() => handleRedirect("/process")}
            className="w-20 h-20 flex items-center justify-center text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
            style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
          >
            Go To Process
          </button>
        </div>

        <div className="mt-6 md:absolute md:bottom-6 md:right-6">
          <button
            onClick={() => handleRedirect("/register")}
            className="flex items-center justify-center px-6 py-2 text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
            style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
          >
            Continue Without Packages
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;