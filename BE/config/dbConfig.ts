// Import per chiamata diretta NodeJs
const { Pool } = require("pg");

// Import Dotenv
import * as dotenv from "dotenv";
dotenv.config();

import { PrismaClient as PrismaClientMain } from "../prisma/schema_main/generated/client_main";
const client_main = new PrismaClientMain();

import { PrismaClient as PrismaClientSecondary } from "../prisma/schema_secondary/generated/client_secondary";
const client_secondary = new PrismaClientSecondary();

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

const db_catasto_pool = new Pool({
  user: process.env.DATABASE_USERNAME_2,
  host: process.env.DATABASE_HOST_2,
  database: process.env.DATABASE_NAME_2,
  password: process.env.DATABASE_PASSWORD_2,
  port: process.env.DATABASE_PORT_2,
});

const db = {
  main_config: db_data,
  secondary_config: db_catasto_pool,
  main: client_main,
  secondary: client_secondary,
};

export { db };
