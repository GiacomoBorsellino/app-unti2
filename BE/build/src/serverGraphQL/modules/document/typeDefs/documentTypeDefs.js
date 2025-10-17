"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const documentTypeDefs = (0, graphql_tag_1.default) `
  type Document {
    id: ID!
    name: String
    description: String
    pathImg: String
    pathFile: String
    categories: [String]
  }

  type Categories {
    id: ID!
    description: String
    documents: [Document]
  }

  type File {
    format: String
    size: Int
    data: String
  }

  type Query {
    """
    test queries main
    """
    getDocuments: [Document]
    downloadDocument(input: Int): File
  }

  type Mutation {
    """
    test mutations main
    """
    mutationDocument(input: String): String
  }
`;
exports.default = documentTypeDefs;
//# sourceMappingURL=documentTypeDefs.js.map