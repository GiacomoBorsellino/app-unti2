import { Request, Response } from "express";
import { db } from "../../../../config/dbConfig";

export const apiTestDb1_main = async (req: Request, res: Response) => {
  console.log("Sono nel Controller apiTest apiTestDb1_main");
  await db.secondary.test_table_secondary.findFirst().then((data) => {
    res.json(data);
  });
};

export const apiTestDb1_pregresso = async (req: Request, res: Response) => {
  console.log(
    "Sono nel Controller apiTest apiTestDb2_pregresso ma da altro db"
  );
  await db.main.document.findFirst().then((data) => {
    res.json(data);
  });
};

export const apiTestDb2_secondary = async (req: Request, res: Response) => {
  console.log("Sono nel Controller apiTest apiTestDb2_");
  await db.main.document
    .findFirst()
    .then((data) => {
      res.json(data);
    })
    .then((data) => {
      res.json(data);
    });
};

export const apiTestDb2_monitoraggio = async (req: Request, res: Response) => {
  console.log(
    "Sono nel Controller apiTest apiTestDb2_monitoraggio ma da altro db"
  );
  await db.main.document.findFirst().then((data) => {
    res.json(data);
  });
};
