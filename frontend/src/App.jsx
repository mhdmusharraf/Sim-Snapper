import React from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </div>
  );
};

export default App;
