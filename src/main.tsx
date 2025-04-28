import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Needs to be disabled in order to make the Cal.com widget work
import { TempoDevtools } from "tempo-devtools";
if (import.meta.env.VITE_TEMPO === "true") {
  TempoDevtools.init();
}

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
