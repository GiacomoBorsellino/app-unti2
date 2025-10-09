// Import Resolvers
import { documentResolvers } from "../modules/document/resolvers/documentResolvers";
import { userResolvers } from "../modules/user/resolvers/userResolvers";

const resolvers = {
  Query: {
    ...documentResolvers.query,
    ...userResolvers.query,
  },
  Mutation: {
    ...documentResolvers.mutation,
    ...userResolvers.mutation,
  },
};

export { resolvers };
