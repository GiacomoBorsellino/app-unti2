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

      // console.log("================= IN getDocuments", docs);
      let pathUpload: string = "uploads/images";
      return docs.map((file) => {
        const thumbnailPath = path.join(pathUpload, file.pathImg.substring(7)); // rivedi path su db e sistem
        const buffer = fs.readFileSync(thumbnailPath);

        let categories = file.categories
          .map((data) => {
            return data.category;
          })
          .map((data) => {
            return data.description;
          });

        let documents = {
          id: file.id,
          name: file.name,
          description: file.description,
          pathFile: file.pathFile,
          pathImg: `data:image/jpeg;base64,${buffer.toString("base64")}`,
          categories: categories,
        };

        return documents;
      });
    } catch (error) {
      console.log("error ", error);
    }
  },
  async downloadDocument(parent, args, context, info) {
    console.log("================= IN downloadDocument", args.input);

    const id = args.input;
    let pathUpload: string = "uploads/doc";

    try {
      let file: any = await db.main.document
        .findUnique({
          where: {
            id: id,
          },
        })
        .then((file) => {
          return file;
        });
      console.log(file.pathFile.substring(5));

      const filePath = path.join(pathUpload, file.pathFile.substring(5)); // rivedi path su db e sistem
      const buffer = fs.readFileSync(filePath);
      const base64 = buffer.toString("base64");

      const ext = path.extname(file.pathFile); // ".pdf"
      const format = ext.replace(".", ""); // "pdf"s

      return { format: format, size: 0, data: base64 };
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
