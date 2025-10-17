"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const merge_1 = require("@graphql-tools/merge");
// Import typeDefs
const documentTypeDefs_1 = __importDefault(require("../modules/document/typeDefs/documentTypeDefs"));
const userTypeDefs_1 = __importDefault(require("../modules/user/typeDefs/userTypeDefs"));
// Merge typeDefs
const typeDefs = (0, merge_1.mergeTypeDefs)([documentTypeDefs_1.default, userTypeDefs_1.default]);
exports.typeDefs = typeDefs;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map