import { db } from "../../../../../config/dbConfig";
import * as jwt from "jsonwebtoken";
import { secret } from "../../../../../config/jwt.conf";

const query = {
  async getDocuments(parent, args, context, info) {
    // console.log("================= IN getDocuments", parent.input);
    let data = await db.main.document.findMany().then((data) => {
      console.log("================= IN getDocuments", data);

      return data;
    });
    return data;
  },
};

const mutation = {
  async mutationDocument(parent, args, context, info) {
    // console.log("================= IN test_mutation_main: ", parent);
    return "test_mutation_main";
  },
};

const documentResolvers = {
  query: query,
  mutation: mutation,
};

export { documentResolvers };
