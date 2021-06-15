const express = require("express");
const data = require("./data");

const app = express();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/cars", (req, res) => {
  console.log(data);
  res.json(data);
});
