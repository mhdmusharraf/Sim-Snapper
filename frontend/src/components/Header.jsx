import React from "react";

const Header = () => {
  return (
    <header className="bg-[#262d79] p-3 flex items-center w-full">
      <div className="flex-shrink-0">
        <img
          src="/logo_slt.jpeg"
          alt="SLT Mobitel Logo"
          className="h-20 w-auto object-contain rounded-full"
        />
      </div>
      {/* bg-gradient-to-br from-[rgb(63,176,97)] via-[rgb(29,181,176)] via-[rgb(22,153,174)] to-[rgb(0,184,255)] */}
      <div className="flex-grow flex justify-center">
        <h1 className="text-[#caf0f6] text-3xl font-bold">
          Self SIM Activation
        </h1>
      </div>
    </header>
  );
};

export default Header;
