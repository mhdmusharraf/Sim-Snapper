import React from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import Capture from "./components/Capture";
import Header from "./components/Header";
import Process from "./components/Process";

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#caf0f6" }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirmation />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="/process" element={<Process />} />
      </Routes>
    </div>
  );
};

export default App;
