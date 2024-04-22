import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Main App
import { App } from "./App.jsx";

// Styles
import "./index.css";

// Theme
import { theme } from "@theme/theme";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
