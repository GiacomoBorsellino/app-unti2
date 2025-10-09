import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

// // Create our Apollo Client instance
// const client = new ApolloClient({
//   link: new HttpLink({ uri: "http://localhost:4000/" }),
//   cache: new InMemoryCache(),
// });

import { client } from "./apolloCLient.ts";

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

// client
//   .query({
//     query: gql`
//       query ExampleQuery {
//         getDocuments {
//           pathImg
//           pathFile
//           name
//           id
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
