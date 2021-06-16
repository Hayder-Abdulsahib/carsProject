const carsControllers = require("../controllers/carsControllers");
const express = require("express");

// Mini Express App
const router = express.Router();

router.get("/", carsControllers.carsList);

router.get("/:carsId", carsControllers.carsDetail);

router.post("/", carsControllers.carsCreate);

router.delete("/:carsId", carsControllers.carsDelete);

module.exports = router;
