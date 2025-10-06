// Import Resolvers
import { mainResolvers } from "../modules/main/resolvers/mainResolvers";
const resolvers = {
  Query: {
    ...mainResolvers.query,
  },
  Mutation: {
    ...mainResolvers.mutation,
  },
};

export { resolvers };
