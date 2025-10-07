// Import db
import { db } from "../../../../../config/dbConfig";
// Import Secret
import { secret } from "../../../../../config/jwt.conf";
// Import bcrypt
import bcrypt from "bcrypt";
// Salt
const saltRounds = 10;
// VVV Ricorda di importare così, sennò non funzionerà !
const jwt = require("jsonwebtoken");

const queryUsers = {
  async getUsers(args: any, parent: any, context: any, info: any) {},
};

const mutationUsers = {};

const usersResolvers = {
  queryUsers: queryUsers,
  mutationUsers: mutationUsers,
};

export { usersResolvers };
