const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const books = require("./books");

const app = express(); //створюємо вебсервер

/* const corsMidleware = cors();
app.use(corsMidleware); */
app.use(cors());

/* app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
  next();
}); */

/* app.use((req, res, next) => {
  console.log("First middle ware");
  next();
}); */

app.get("/products", async (req, res) => {
  res.json([]);
});

app.get("/books", async (req, res) => {
  res.json(books);
});

/* app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
}); */

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

