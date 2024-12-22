import React, { createContext, useState, useContext } from "react";

// Create the context
const CaptureContext = createContext();

// Create the provider component
export const CaptureProvider = ({ children }) => {
  const [capturedImage, setCapturedImage] = useState(null);

  const saveImage = (image) => {
    setCapturedImage(image); // Save the image in context
  };

  return (
    <CaptureContext.Provider value={{ capturedImage, saveImage }}>
      {children}
    </CaptureContext.Provider>
  );
};

// Custom hook to use the CaptureContext
export const useCapture = () => {
  return useContext(CaptureContext);
};
