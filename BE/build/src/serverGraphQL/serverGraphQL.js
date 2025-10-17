"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGraphQLServer = void 0;
const winston_1 = require("../../utils/winston");
const log = winston_1.logger.child({ label: "serverGraphQL" });
// Import apollo server
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
// Import dei typeDefs e dei resolvers
const typeDefs_1 = require("./schema/typeDefs");
const resolvers_1 = require("./schema/resolvers");
// Import GraphQL-Middleware
const schema_1 = require("@graphql-tools/schema");
const graphql_middleware_1 = require("graphql-middleware");
// Schema
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers });
// Schema + Middleware
const schemaWithMiddleware = (0, graphql_middleware_1.applyMiddleware)(schema
// middleware.checkToken
// middleware.checkPermission
);
const server = new server_1.ApolloServer({ schema: schemaWithMiddleware });
const startGraphQLServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = (0, standalone_1.startStandaloneServer)(server, {
        context: (_a) => __awaiter(void 0, [_a], void 0, function* ({ req }) {
            return ({
                headers: req["headers"],
                body: req["body"],
            });
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
});
exports.startGraphQLServer = startGraphQLServer;
//# sourceMappingURL=serverGraphQL.js.map