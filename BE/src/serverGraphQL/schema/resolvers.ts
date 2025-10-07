// Import Resolvers
import { documentResolvers } from "./modules/documents/documentResolvers";
import { usersResolvers } from "./modules/users/userResolvers";

const resolvers = {
  Query: {
    ...documentResolvers.queryDocuments,
    ...usersResolvers.queryUsers,
  },
  Mutation: {
    ...documentResolvers.mutationDocuments,
    ...usersResolvers.mutationUsers,
  },
};

export { resolvers };
