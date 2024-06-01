// Import the React library
import React from "react";

// Import the ReactDOM library for rendering React components
import ReactDOM from "react-dom/client";

// Import the App component from the App.jsx file
import App from "./App.jsx";

// Import the CSS file for styling
import "./index.css";

// Get the root element from the HTML document
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
// The <React.StrictMode> component is a tool for identifying potential issues in an application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
