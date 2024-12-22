import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Process = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Select SIM Package",
      description:
        "Choose a suitable SIM package from the available options or proceed without selecting one.",
    },
    {
      title: "Register Your Details",
      description:
        "Fill in your personal details, such as your name, date of birth, and passport number. Capture your image using the live camera feature.",
    },
    {
      title: "Confirm Activation",
      description:
        "Enter your SLT Mobitel mobile number and NIC number to confirm the activation process.",
    },
    {
      title: "Start Using Your SIM",
      description:
        "Once your details are verified and the activation is complete, you can start using your SLT Mobitel SIM.",
    },
  ];

  return (
    <div
      className="min-h-screen p-6"
      style={{
        background: "#caf0f6",
      }}
    >
      <div className="absolute top-25 left-6">
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-full bg-[#03045e] text-white hover:bg-opacity-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <h2
        className="text-center text-3xl font-bold mb-8"
        style={{ color: "#475492" }}
      >
        Steps to Activate Your SIM
      </h2>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.6, delay: index * 0.3 }} // Delay each step's appearance for a smoother effect
            className="p-6 rounded-lg shadow-md hover:shadow-lg"
            style={{
              backgroundColor: "#03045e",
              color: "#caf0f6",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl"
                style={{ backgroundColor: "#475492", color: "#caf0f6" }}
              >
                {index + 1}
              </div>
              <h3 className="text-3xl font-bold">{step.title}</h3>
            </div>

            <p className="mt-4 text-2xl" style={{ color: "#a9c9dd" }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
