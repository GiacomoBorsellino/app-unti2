import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";

import About from "./pages/about/About.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";
import List from "./pages/list/List.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout con il menu
    children: [
      { index: true, element: <Homepage /> }, // Homepage di default
      { path: "list", element: <List /> },
      { path: "about-me", element: <About /> },
      { path: "*", element: <Homepage /> },
    ],
  },
]);
