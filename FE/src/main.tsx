import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";

import { client } from "./apolloClient.ts";
import { routes } from "./routes.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={routes} />
    </ApolloProvider>
  </React.StrictMode>
);
