import gql from "graphql-tag";

const userTypeDefs = gql`
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

export default userTypeDefs;
