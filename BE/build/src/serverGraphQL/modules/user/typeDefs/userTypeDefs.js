"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const userTypeDefs = (0, graphql_tag_1.default) `
  # Model User
  type User {
    id: ID!
    name: String
    email: String
  }

  type Query {
    getUsers: String
  }

  type Mutation {
    mutationUser: String
  }
`;
exports.default = userTypeDefs;
//# sourceMappingURL=userTypeDefs.js.map