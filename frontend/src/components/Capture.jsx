import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useCapture } from "../../CaptureContext/CaptureContext";

const Capture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { saveImage } = useCapture();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing the camera: ", error);
      alert(
        "Unable to access the camera. Please check your device permissions."
      );
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      // Set canvas dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the flipped image
      const ctx = canvas.getContext("2d");
      ctx.translate(canvas.width, 0); // Flip horizontally
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/png");
      setImage(imageData);
    }
    stopCamera();
  };

  const handleTakeAgain = () => {
    setImage(null);
    startCamera();
  };

  const handleSave = () => {
    if (image) {
      saveImage(image); // Save the image in the context
      alert("Image saved successfully!");
      navigate("/register");
    }
  };

  const handleBack = () => {
    stopCamera();
    navigate("/register");
  };

  React.useEffect(() => {
    startCamera();
    return () => {
      stopCamera(); // Ensure camera stops when component unmounts
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[rgb(63,176,97)] via-[rgb(29,181,176)] via-[rgb(22,153,174)] to-[rgb(0,184,255)] text-white">
      {/* Back Arrow Button */}
      <button
        onClick={handleBack}
        className="self-start m-4 p-2 text-lg  rounded-full bg-[#03045e] text-white hover:bg-opacity-90 flex items-center"
        // className="p-2 rounded-full bg-[#03045e] text-white hover:bg-opacity-90"
      >
        <FiArrowLeft className="text-white" />
      </button>

      <main className="flex-1 w-full p-4">
        <h1 className="text-center text-2xl font-bold mb-6">Capture Your Image</h1>
        <div className="flex flex-col items-center">
          <div className="relative bg-black rounded-lg shadow-md overflow-hidden">
            <video
              ref={videoRef}
              className="w-full max-w-lg rounded-lg"
              autoPlay
              muted
              style={{ transform: "scaleX(-1)" }} // Flip the live video feed
            ></video>
            {image && (
              <img
                src={image}
                alt="Captured"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            )}
          </div>

          {/* Buttons */}
          {!image ? (
            <button
              onClick={captureImage}
              className="mt-6 px-6 py-2 bg-[#03045e] hover:bg-opacity-90 text-white font-semibold rounded-lg shadow-md "
            >
              Capture
            </button>
          ) : (
            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleTakeAgain}
                className="px-6 py-2 bg-[#03045e]  hover:bg-opacity-90 text-white font-semibold rounded-lg shadow-md "
              >
                Take Again
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-[#03045e]  hover:bg-opacity-90 text-white font-semibold rounded-lg shadow-md "
              >
                Save
              </button>
            </div>
          )}
        </div>
      </main>

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
};

export default Capture;
