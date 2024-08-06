import React from "react";
import App from "./components/App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </BrowserRouter>
);
