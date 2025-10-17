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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentResolvers = void 0;
const dbConfig_1 = require("../../../../../config/dbConfig");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const query = {
    getDocuments(parent, args, context, info) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("================= IN getDocuments", parent.input);
            try {
                let docs = yield dbConfig_1.db.main.document
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
                let pathUpload = "uploads/images";
                return docs.map((file) => {
                    const thumbnailPath = path_1.default.join(pathUpload, file.pathImg.substring(7)); // rivedi path su db e sistem
                    const buffer = fs_1.default.readFileSync(thumbnailPath);
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
            }
            catch (error) {
                console.log("error ", error);
            }
        });
    },
    downloadDocument(parent, args, context, info) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("================= IN downloadDocument", args.input);
            const id = args.input;
            let pathUpload = "uploads/doc";
            try {
                let file = yield dbConfig_1.db.main.document
                    .findUnique({
                    where: {
                        id: id,
                    },
                })
                    .then((file) => {
                    return file;
                });
                console.log(file.pathFile.substring(5));
                const filePath = path_1.default.join(pathUpload, file.pathFile.substring(5)); // rivedi path su db e sistem
                const buffer = fs_1.default.readFileSync(filePath);
                const base64 = buffer.toString("base64");
                const ext = path_1.default.extname(file.pathFile); // ".pdf"
                const format = ext.replace(".", ""); // "pdf"s
                return { format: format, size: 0, data: base64 };
            }
            catch (error) {
                console.log("error ", error);
            }
        });
    },
};
const mutation = {
    mutationDocument(parent, args, context, info) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("================= IN test_mutation_main: ", parent);
            return "test_mutation_main";
        });
    },
};
const documentResolvers = {
    query: query,
    mutation: mutation,
};
exports.documentResolvers = documentResolvers;
//# sourceMappingURL=documentResolvers.js.map