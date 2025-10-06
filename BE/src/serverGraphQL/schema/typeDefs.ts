import { mergeTypeDefs } from "@graphql-tools/merge";

// Import typeDefs
import mainTypeDefs from "../modules/main/typeDefs/mainTypeDefs";

// Merge typeDefs
const typeDefs = mergeTypeDefs([mainTypeDefs]);

export default typeDefs;

export { typeDefs };
