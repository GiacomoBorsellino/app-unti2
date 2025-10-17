"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// Import Resolvers
const documentResolvers_1 = require("../modules/document/resolvers/documentResolvers");
const userResolvers_1 = require("../modules/user/resolvers/userResolvers");
const resolvers = {
    Query: Object.assign(Object.assign({}, documentResolvers_1.documentResolvers.query), userResolvers_1.userResolvers.query),
    Mutation: Object.assign(Object.assign({}, documentResolvers_1.documentResolvers.mutation), userResolvers_1.userResolvers.mutation),
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map