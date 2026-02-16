import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import LoadingPage from "./pages/LoadingPage";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/theme.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<LoadingPage />} />
  // </React.StrictMode>
);