import React from "react";
import { createRoot } from "react-dom/client";
import LogRocket from "logrocket";
// import App from "./App.tsx";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

LogRocket.init("zbivqm/king");
