import express from "express";
import mime from "mime-types"; //Lookup the content-type associated with a file.
//

import speciesRouter from "./speciesRouter.mjs";

const app = express();

app.use("/api/species", speciesRouter);
//A health check for the API that won't return any account-specific information.
//won't start until it pings this end point successfully.
app.get("/api/ping", (request, response) => {
  response.json({ response: "pong" });
});

if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
