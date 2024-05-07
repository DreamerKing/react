import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import LogRocket from "logrocket";
import { RouterProvider } from 'react-router-dom';
import store from "./redux-app/store.ts";
// import "./index.css";
import router from "./router/index.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);


store.subscribe(() => {
  console.log(store.getState(), 'subscribe');
});

// LogRocket.init("zbivqm/king");
