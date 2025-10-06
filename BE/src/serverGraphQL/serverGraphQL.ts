import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";
import { middleware } from "./middleware/middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";
import { logger } from "../../utils/winston";

const log = logger.child({ label: "serverGrahpQL" });

const schema = makeExecutableSchema({ typeDefs, resolvers });

const schemaWithMiddleware = applyMiddleware(
  schema,
  middleware.checkPermission
);

const server = new ApolloServer({ schema: schemaWithMiddleware });

export const startGraphQLServer = async () => {
  await startStandaloneServer(server, {
    context: async ({ req }) => ({ headers: req.headers }),
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
