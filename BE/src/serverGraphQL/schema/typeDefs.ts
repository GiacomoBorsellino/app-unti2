import gql from "graphql-tag";

const typeDefs = gql`
  type Document {
    id: ID!
    name: String
    description: String
    pathImg: String
    pathFile: String
    categories: [Categories!]!
  }

  type Categories {
    id: ID!
    description: String
    documents: [Document!]!
  }

  type User {
    id: ID!
    name: String!
    email: String
  }

  type Query {
    getDocuments: [Document!]!
    getUsers: [User!]!
  }

  type Mutation {
    _empty: String
  }
`;

export { typeDefs };
