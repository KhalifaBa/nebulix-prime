import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Erreur from "./Erreur";
import { Details } from "./Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erreur />,
  },
  {
    path: "/detail/:id",
    element: <Details />,
    errorElement: <Erreur />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
