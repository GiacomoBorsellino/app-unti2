"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// Import per chiamata diretta NodeJs
const { Pool } = require("pg");
// Import Dotenv
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const client_1 = require("../prisma/generated/client");
const client_main = new client_1.PrismaClient();
// import { PrismaClient as PrismaClientSecondary } from "../prisma/schema_secondary/generated/client_secondary";
// const client_secondary = new PrismaClientSecondary();
const db_data = {
    databases: [
        {
            database: process.env.DATABASE_NAME_1,
            username: process.env.DATABASE_USERNAME_1,
            password: process.env.DATABASE_PASSWORD_1,
            params: {
                pool: {
                    max: 5,
                    min: 0,
                    idle: 10000,
                },
                host: process.env.DATABASE_HOST_1,
                port: process.env.DATABASE_PORT_1,
                dialect: process.env.DATABASE_DIALECT_1,
                operatorsAliases: false,
                schema: process.env.DATABASE_SCHEMA_1,
            },
        },
    ],
};
const db_secondary_pool = new Pool({
    user: process.env.DATABASE_USERNAME_2,
    host: process.env.DATABASE_HOST_2,
    database: process.env.DATABASE_NAME_2,
    password: process.env.DATABASE_PASSWORD_2,
    port: process.env.DATABASE_PORT_2,
});
const db = {
    main_config: db_data,
    // secondary_config: db_secondary_pool,
    main: client_main,
    // secondary: client_secondary,
};
exports.db = db;
//# sourceMappingURL=dbConfig.js.map