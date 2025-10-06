// Import Dotenv
import * as dotenv from "dotenv";
dotenv.config();

const secret = {
  secret: process.env.SECRET,
};

export { secret };
