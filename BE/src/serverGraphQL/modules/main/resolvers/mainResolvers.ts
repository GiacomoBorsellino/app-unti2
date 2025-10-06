import { db } from "../../../../../config/dbConfig";

const query = {
  async queryMain(args: any, parent: any, context: any, info: any) {
    console.log("================= IN test_query_main", parent.input);
    let data = await db.main.document.findFirst().then((data) => {
      return data?.name;
    });
    return data;
  },
};

const mutation = {
  async mutationMain(args: any, parent: any, context: any, info: any) {
    console.log("================= IN mutation_main: ", parent);
    return "mutation_main";
  },
};

const mainResolvers = {
  query: query,
  mutation: mutation,
};

export { mainResolvers };
