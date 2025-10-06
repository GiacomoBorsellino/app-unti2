import gql from "graphql-tag";

const mainTypeDefs = gql`
  # Model Test Main
  type test_main {
    id: ID
  }

  type Query {
    """
    test queries main
    """
    queryMain: String
  }

  type Mutation {
    """
    test mutations main
    """
    mutationMain(input: String): String
  }
`;

export default mainTypeDefs;
