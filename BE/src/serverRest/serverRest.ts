import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { logger } from "../../utils/winston";

// Routes Modules
import { router as apiTest } from "./modules/apiTest/apiTest.routes";

const log = logger.child({ label: "serverRest" });

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "API-BE Attivo" });
});

app.use("/", apiTest);

export const startRestServer = async () => {
  app.listen(3001, () => {
    log.info(`
 ______________
|[]            |
|  __________  |
|  | Server |  |
|  | Rest   |  |
|  |_3001___|  |
|   ________   |
|   [ [ ]  ]   |
\\___[_[_]__]___|
    `);
  });
};
