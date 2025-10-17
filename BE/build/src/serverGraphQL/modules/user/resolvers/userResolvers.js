"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
const dbConfig_1 = require("../../../../../config/dbConfig");
const query = {
    getUsers(args, parent, context, info) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("================= IN test_query_pregresso", parent.input);
            let data = yield dbConfig_1.db.main.user.findFirst().then((data) => {
                return data === null || data === void 0 ? void 0 : data.name;
            });
            return data;
        });
    },
};
const mutation = {
    mutationUser(args, parent, context, info) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("================= IN test_mutation_pregresso: ", parent);
            return "test_mutation_pregresso";
        });
    },
};
const userResolvers = {
    query: query,
    mutation: mutation,
};
exports.userResolvers = userResolvers;
//# sourceMappingURL=userResolvers.js.map