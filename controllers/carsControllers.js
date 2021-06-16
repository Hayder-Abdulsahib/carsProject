let cars = require("../data"); // FAKE DATABASE

const slugify = require("slugify");
exports.carsCreate = (req, res) => {
  const id = cars[cars.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newCar = { id: id, slug: slug, ...req.body };
  cars.push(newCar);
  res.status(201).json(newCar);
};

exports.carsDetail = (req, res) => {
  const foundCar = cars.find((car) => car.id === +req.params.carsId);
  if (foundCar) {
    console.log(foundCar);
    res.json(foundCar);
  } else {
    res.status(404).json({ message: "Page Not " });
  }
};

exports.carsList = (req, res) => res.json(cars);

exports.carsDelete = (req, res) => {
  const { carsId } = req.params;
  const foundCar = cars.find((car) => car.id === +carsId);

  if (foundCar) {
    cars = cars.filter((car) => car !== foundCar);
    res.status(204).end(); //--> status: does not end the response thats why we need end()
  } else {
    res.status(404).json({ message: "Car not found" }); // --> json: ends the response
  }
};
