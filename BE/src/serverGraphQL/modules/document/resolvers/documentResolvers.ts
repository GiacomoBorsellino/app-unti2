import { log } from "console";
import { db } from "../../../../../config/dbConfig";
import fs from "fs";
import path from "path";

const query = {
  async getDocuments(parent, args, context, info) {
    // console.log("================= IN getDocuments", parent.input);
    try {
      let docs = await db.main.document
        .findMany({
          include: {
            categories: {
              include: {
                category: true, // include la tabella Categories
              },
            },
          },
        })
        .then((data) => {
          return data;
        });

      console.log("================= IN getDocuments", docs);
      let pathUpload: string = "uploads/images";
      return docs.map((file) => {
        const thumbnailPath = path.join(pathUpload, file.pathImg.substring(7)); // rivedi path su db e sistem
        const buffer = fs.readFileSync(thumbnailPath);

        console.log({
          id: file.id,
          name: file.name,
          description: file.description,
          pathFile: file.pathFile,
          pathImg: `data:image/jpeg;base64,${buffer.toString("base64")}`,
          categories: file.categories
            .map((data) => {
              return data.category;
            })
            .map((data) => {
              return data.description;
            }),
        });

        return {
          id: file.id,
          name: file.name,
          description: file.description,
          pathFile: file.pathFile,
          pathImg: `data:image/jpeg;base64,${buffer.toString("base64")}`,
          categories: file.categories
            .map((data) => {
              return data.category;
            })
            .map((data) => {
              return data.description;
            }),
        };
      });
    } catch (error) {
      console.log("error ", error);
    }
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
