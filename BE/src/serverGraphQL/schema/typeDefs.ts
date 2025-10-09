import { mergeTypeDefs } from "@graphql-tools/merge";

// Import typeDefs
import documentTypeDefs from "../modules/document/typeDefs/documentTypeDefs";
import userTypeDefs from "../modules/user/typeDefs/userTypeDefs";

// Merge typeDefs
const typeDefs = mergeTypeDefs([documentTypeDefs, userTypeDefs]);

export default typeDefs;

export { typeDefs };
