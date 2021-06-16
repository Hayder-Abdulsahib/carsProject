const express = require("express");

const carsRoutes = require("./routes/cars"); // Routes

const app = express(); // Create App instance

app.use(express.json()); // gives you acces to the req.body as JSON

app.use("/cars", carsRoutes); // Routes

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`The application runs on localhost:${PORT}`)
);
