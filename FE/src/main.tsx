import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";

import About from "./pages/about/About.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";
import List from "./pages/list/List.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout con il menu
    children: [
      { index: true, element: <Homepage /> }, // Homepage di default
      { path: "list", element: <List /> },
      { path: "about-me", element: <About /> },
      { path: "*", element: <Homepage /> }, // 👈 catch-all
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
