import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CaptureProvider } from "../CaptureContext/CaptureContext.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CaptureProvider>
      <App />
    </CaptureProvider>
  </BrowserRouter>
);
