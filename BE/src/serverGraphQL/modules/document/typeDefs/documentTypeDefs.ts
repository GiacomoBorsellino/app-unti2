import gql from "graphql-tag";

const documentTypeDefs = gql`
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

  type Query {
    """
    test queries main
    """
    getDocuments: [Document]
    downloadDocument(input: Int): [Document]
  }

  type Mutation {
    """
    test mutations main
    """
    mutationDocument(input: String): String
  }
`;

export default documentTypeDefs;
