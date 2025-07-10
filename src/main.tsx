import React, { Profiler } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import LogRocket from "logrocket";
import { RouterProvider } from 'react-router-dom';
import store from "./redux-app/store.ts";
// import "./index.css";
import router from "./router/index.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

const onRender = (id, phrase, actual, base, startTime, commitTime) => {
  console.log(id, phrase, actual, base, startTime, commitTime);
}

root.render(
  <React.StrictMode>
    <Profiler id="app" onRender={onRender}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Profiler>
  </React.StrictMode>
);

store.subscribe(() => {
  console.log(store.getState(), 'subscribe');
});

// LogRocket.init("zbivqm/king");
