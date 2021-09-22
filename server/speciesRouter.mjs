import express from "express";

import * as db from "./db.mjs";

const speciesRouter = express.Router();

speciesRouter.get("/", async (request, response) => {
  const species = await db.listSpecies();
  response.json(species);
});

speciesRouter.use(express.json());
speciesRouter.post("/", async (request, response) => {
  console.log(request.body);
  const specie = await db.addSpecies(request.body.name);
  response.status(201).json(specie);
});

export default speciesRouter;
