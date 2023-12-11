import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import LogRocket from "logrocket";
// import App from "./App.tsx";
import App from "./ReduxApp.tsx";
import store from "./store.ts";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

LogRocket.init("zbivqm/king");
