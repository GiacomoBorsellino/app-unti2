import { startGraphQLServer } from "./serverGraphQL/serverGraphQL";
// import { startRestServer } from "./serverRest/serverRest";

const startBE = () => {
  startGraphQLServer();
  // startRestServer();
};

startBE();
