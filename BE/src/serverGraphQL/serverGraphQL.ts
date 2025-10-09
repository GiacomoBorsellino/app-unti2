import { logger } from "../../utils/winston";
const log = logger.child({ label: "serverGraphQL" });

// Import apollo server
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Import dei typeDefs e dei resolvers
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

// Import Middleware
import { middleware } from "./middleware/middleware";

// Import GraphQL-Middleware
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";

// Schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Schema + Middleware
const schemaWithMiddleware = applyMiddleware(
  schema
  // middleware.checkToken
  // middleware.checkPermission
);

const server: any = new ApolloServer<any>({ schema: schemaWithMiddleware });
export const startGraphQLServer = async () => {
  const url = startStandaloneServer(server, {
    context: async ({ req }) => ({
      headers: req["headers"],
      body: req["body"],
    }),
    listen: { port: 4000 },
  });

  log.info(`
  ______________
  |[]            |
  |  __________  |
  |  | Server |  |
  |  | Graph  |  |
  |  |_4000___|  |
  |   ________   |
  |   [ [ ]  ]   |
  \\___[_[_]__]___|
    `);
};
