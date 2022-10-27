import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UIContextProvider from "./store/ui-context";
import "./index.css";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </React.StrictMode>
);
