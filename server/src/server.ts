import express from "express";
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello world from backend!");
});

app.listen(port, () => {
  console.log(`Express server listening to port ${port}`);
});
