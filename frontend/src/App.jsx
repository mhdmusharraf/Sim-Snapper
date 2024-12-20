import React from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import Capture from "./components/Capture";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirmation />} />
        <Route path="/capture" element={<Capture />} />
      </Routes>
    </div>
  );
};

export default App;
