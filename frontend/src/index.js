import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutCOntextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkoutCOntextProvider>
      <App />
    </WorkoutCOntextProvider>
  </React.StrictMode>
);
