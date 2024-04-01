import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Removed strict mode due to
// duplicate API calls
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
