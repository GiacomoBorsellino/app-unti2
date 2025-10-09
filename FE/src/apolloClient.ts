import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// Create our Apollo Client instance
export const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/" }),
  cache: new InMemoryCache(),
});
