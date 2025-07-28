import React from "react";
import { createRoot } from "react-dom/client";
import App from "./views/VTable";

import "./style.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
     <App></App>
  </React.StrictMode>
);

