const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  const databaseResponse = null;
  // res.json(databaseResponse);
  // res.send(databaseResponse);
  res.json(books);
  // res.send(books);
});

aapp.listen(3000, () =>
  console.log("Server running. Use our API on port: 3000")
);

