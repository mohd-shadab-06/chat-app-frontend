import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "sonner";
import { SocketProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <SocketProvider>
    <App />
    <Toaster closeButton />
  </SocketProvider>

  // </React.StrictMode>,
);
