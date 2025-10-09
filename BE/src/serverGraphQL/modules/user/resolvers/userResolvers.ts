import { db } from "../../../../../config/dbConfig";
import * as jwt from "jsonwebtoken";
import { secret } from "../../../../../config/jwt.conf";

const query = {
  async getUsers(args: any, parent: any, context: any, info: any) {
    console.log("================= IN test_query_pregresso", parent.input);
    let data = await db.main.user.findFirst().then((data) => {
      return data?.name;
    });
    return data;
  },
};

const mutation = {
  async mutationUser(args: any, parent: any, context: any, info: any) {
    console.log("================= IN test_mutation_pregresso: ", parent);
    return "test_mutation_pregresso";
  },
};

const userResolvers = {
  query: query,
  mutation: mutation,
};

export { userResolvers };
